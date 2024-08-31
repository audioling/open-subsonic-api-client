import qs from 'qs';

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
