import type { AppRouteMutation, AppRouteQuery } from '@ts-rest/core';
import { initContract } from '@ts-rest/core';
import qs from 'qs';
import { z } from 'zod';
import type { OpenSubsonicApiVersions, SubsonicApiVersions } from '@/open-subsonic-types.js';
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

const c = initContract();

type ZodSchema = z.AnyZodObject | z.ZodString | z.ZodNumber | z.ZodBoolean;

export const createEndpoint = (
    properties: {
        path: string;
        request: {
            default: ZodSchema;
            os?: { [key in OpenSubsonicApiVersions]?: ZodSchema };
            ss?: { [key in SubsonicApiVersions]?: ZodSchema };
        };
        response: {
            default: ZodSchema | z.ZodAny;
            os?: { [key in OpenSubsonicApiVersions]?: ZodSchema };
            ss?: { [key in SubsonicApiVersions]?: ZodSchema };
        };
        summary?: string;
    },
    versions: {
        os: { [key in OpenSubsonicApiVersions]?: boolean };
        ss: { [key in SubsonicApiVersions]?: boolean };
    },
) => {
    const contractProperties = {
        path: properties.path,
        summary: properties.summary,
    };

    const contractSchema: {
        os: Record<string, { get: AppRouteQuery; post: AppRouteMutation }>;
        ss: Record<string, { get: AppRouteQuery }>;
    } = {
        os: {},
        ss: {},
    };

    for (const version of Object.keys(versions.ss)) {
        if (versions.ss[version] === false) {
            continue;
        }

        const selectedResponse = properties.request.ss?.[version] ?? properties.request.default;

        let response: ZodSchema;
        if (selectedResponse instanceof z.ZodObject) {
            response = baseResponseSchema.merge(selectedResponse);
        } else {
            response = selectedResponse;
        }

        contractSchema.ss[`v${version}`] = {
            get: c.query({
                method: 'GET',
                query: properties.request.ss?.[version] ?? properties.request.default,
                responses: {
                    200: response,
                },
                ...contractProperties,
            }),
        };
    }

    for (const version of Object.keys(versions.os)) {
        if (versions.os[version] === false) {
            continue;
        }

        const selectedResponse = properties.request.os?.[version] ?? properties.request.default;

        let response: ZodSchema;
        if (selectedResponse instanceof z.ZodObject) {
            response = baseResponseOpenSubsonicSchema.merge(selectedResponse);
        } else {
            response = selectedResponse;
        }

        contractSchema.os[`v${version}`] = {
            get: c.query({
                method: 'GET',
                query: properties.request.os?.[version] ?? properties.request.default,
                responses: {
                    200: response,
                },
                ...contractProperties,
            }),
            post: c.mutation({
                body: properties.request.os?.[version] ?? properties.request.default,
                contentType: 'application/x-www-form-urlencoded',
                method: 'POST',
                responses: {
                    200: response,
                },
                ...contractProperties,
            }),
        };
    }

    return contractSchema;
};
