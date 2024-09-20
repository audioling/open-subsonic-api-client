import type {
    AppRoute,
    ClientInferResponseBody as TsRestClientInferResponseBody,
    FetchOptions as TsRestFetchOptions,
    ServerInferRequest as TsRestServerInferRequest,
    ServerInferResponses as TsRestServerInferResponses,
} from '@ts-rest/core';
import { initClient } from '@ts-rest/core';
import type { CreateAxiosDefaults } from 'axios';
import axios from 'axios';
import qs from 'qs';
import { type z } from 'zod';
import { initOpenSubsonicContract } from '@/open-subsonic-contract.js';
import type { baseResponse } from '@/open-subsonic-types.js';
import { parsePath } from '@/utils.js';

interface OpenSubsonicAPIOptions {
    baseUrl: string;
    clientName: string;
    username: string;
}

interface OpenSubsonicAPIWithPasswordOptions extends OpenSubsonicAPIOptions {
    password: string;
}

interface OpenSubsonicAPIWithTokenOptions extends OpenSubsonicAPIOptions {
    salt: string;
    token: string;
}

type OpenSubsonicApiClientOptions =
    | OpenSubsonicAPIWithPasswordOptions
    | OpenSubsonicAPIWithTokenOptions;

export const openSubsonicApiContract = initOpenSubsonicContract();

export type ClientInferResponseBody<
    T extends AppRoute,
    K extends keyof T['responses'],
> = TsRestClientInferResponseBody<T, K>;

export type ServerInferRequest<T extends AppRoute> = TsRestServerInferRequest<T>;

export type ServerInferResponses<T extends AppRoute> = TsRestServerInferResponses<T>;

export const initOpenSubsonicApiClient = (
    clientOptions: OpenSubsonicApiClientOptions,
    axiosOptions?: Partial<CreateAxiosDefaults>,
) => {
    const axiosClient = axios.create(axiosOptions);

    axiosClient.defaults.paramsSerializer = (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' });
    };

    axiosClient.interceptors.response.use(
        (response) => {
            const data = response.data;

            if (data['subsonic-response'].status !== 'ok') {
                if (data['subsonic-response'].error.code !== 0) {
                    throw new Error(data['subsonic-response'].error.message);
                }
            }

            return response;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    const baseUrl = `${clientOptions.baseUrl}/rest`;
    const clientName = clientOptions.clientName;
    const username = clientOptions.username;
    let password: string | undefined;
    let salt: string | undefined;
    let token: string | undefined;

    if ('salt' in clientOptions && 'token' in clientOptions) {
        salt = clientOptions.salt;
        token = clientOptions.token;
    } else if ('password' in clientOptions) {
        password = clientOptions.password;
    }

    return initClient(openSubsonicApiContract, {
        api: async ({ path, method, headers, body, fetchOptions }) => {
            const { params, path: api } = parsePath(path);

            const authParams: Record<string, string> = {
                u: username,
            };

            if (token && salt) {
                authParams.s = salt;
                authParams.t = token;
            } else if (password) {
                authParams.p = password;
            }

            try {
                const result = await axiosClient.request<z.infer<typeof baseResponse>>({
                    data: body,
                    headers,
                    method: method,
                    params: {
                        c: clientName,
                        f: 'json',
                        v: '1.16.0',
                        ...params,
                        ...authParams,
                    },
                    signal: fetchOptions?.signal as AbortSignal | undefined,
                    url: `${baseUrl}/${api}`,
                });

                return {
                    body: result.data['subsonic-response'],
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    headers: new Headers((result.headers as any).toJSON()),
                    status: result.status,
                };
            } catch (e: unknown) {
                if (e) {
                    const error = e;
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const response = (error as any).message;

                    return {
                        body: response as string,
                        headers: new Headers(),
                        status: 500,
                    };
                }
                throw e;
            }
        },
        baseHeaders: {
            'Content-Type': 'application/json',
        },
        baseUrl: '',
    });
};

export type OpenSubsonicApiClient = ReturnType<typeof initOpenSubsonicApiClient>;

export type FetchOptions = TsRestFetchOptions;
