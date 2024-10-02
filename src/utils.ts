import { initContract } from '@ts-rest/core';
import qs from 'qs';
import type { ZodType } from 'zod';
import { type AnyZodObject } from 'zod';
import { OpenSubsonicApiVersions, SubsonicApiVersions } from '@/open-subsonic-types.js';
import {
    baseResponseOpenSubsonicSchema,
    baseResponseSchema,
} from '@/responses/subsonic-response.js';

export function parsePath(fullPath: string) {
    const [path, params] = fullPath.split('?');

    const parsedParams = qs.parse(params);

    const notNilParams: Record<string, string> = {};

    Object.keys(parsedParams)
        .filter((key) => parsedParams[key] !== 'undefined' && parsedParams[key] !== 'null')
        .forEach((key) => (notNilParams[key] = parsedParams[key] as string));

    return {
        params: notNilParams,
        path,
    };
}

export const endpointProperties = (args: { path: string; summary?: string }) => {
    return args;
};

type EndpointProperties<
    TRequestSchema extends AnyZodObject,
    TResponseSchema extends AnyZodObject,
> = {
    path: string;
    request: TRequestSchema;
    response: TResponseSchema;
    summary?: string;
};

const createSsEndpoint = <
    TRequestSchema extends AnyZodObject,
    TResponseSchema extends AnyZodObject,
>(
    version: keyof typeof SubsonicApiVersions,
    properties: EndpointProperties<TRequestSchema, TResponseSchema>,
) => {
    const c = initContract();

    return {
        ss: {
            [SubsonicApiVersions[version]]: {
                get: c.query({
                    method: 'GET',
                    query: properties.request,
                    responses: {
                        200: baseResponseSchema.merge(properties.response),
                    },
                    ...properties,
                }),
            },
        },
    };
};

const createSsEndpointExplicit = <
    TRequestSchema extends AnyZodObject,
    TResponseSchema extends ZodType<unknown>,
>(
    version: keyof typeof SubsonicApiVersions,
    properties: {
        path: string;
        request: TRequestSchema;
        response: TResponseSchema;
        summary?: string;
    },
) => {
    const c = initContract();

    return {
        ss: {
            [SubsonicApiVersions[version]]: {
                get: c.query({
                    method: 'GET',
                    query: properties.request,
                    responses: {
                        200: properties.response,
                    },
                    ...properties,
                }),
            },
        },
    };
};

const createOsEndpoint = <
    TRequestSchema extends AnyZodObject,
    TResponseSchema extends AnyZodObject,
>(
    version: keyof typeof OpenSubsonicApiVersions,
    properties: EndpointProperties<TRequestSchema, TResponseSchema>,
) => {
    const c = initContract();

    return {
        os: {
            [OpenSubsonicApiVersions[version]]: {
                get: c.query({
                    method: 'GET',
                    query: properties.request,
                    responses: {
                        200: baseResponseOpenSubsonicSchema.merge(properties.response),
                    },
                    ...properties,
                }),
                post: c.mutation({
                    body: properties.request,
                    contentType: 'application/x-www-form-urlencoded',
                    method: 'POST',
                    responses: {
                        200: baseResponseOpenSubsonicSchema.merge(properties.response),
                    },
                    ...properties,
                }),
            },
        },
    };
};

const createOsEndpointExplicit = <
    TRequestSchema extends AnyZodObject,
    TResponseSchema extends ZodType<unknown>,
>(
    version: keyof typeof OpenSubsonicApiVersions,
    properties: {
        path: string;
        request: TRequestSchema;
        response: TResponseSchema;
        summary?: string;
    },
) => {
    const c = initContract();

    return {
        os: {
            [OpenSubsonicApiVersions[version]]: {
                get: c.query({
                    method: 'GET',
                    query: properties.request,
                    responses: {
                        200: properties.response,
                    },
                    ...properties,
                }),
                post: c.mutation({
                    body: properties.request,
                    contentType: 'application/x-www-form-urlencoded',
                    method: 'POST',
                    responses: {
                        200: properties.response,
                    },
                    ...properties,
                }),
            },
        },
    };
};

export const createEndpoint = {
    os: createOsEndpoint,
    osExplicit: createOsEndpointExplicit,
    ss: createSsEndpoint,
    ssExplicit: createSsEndpointExplicit,
};
