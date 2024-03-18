/* tslint:disable */
/* eslint-disable */
/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { PingHealthCheck200Response } from '../models';
// @ts-ignore
import { PingHealthCheckResponse } from '../models';
// @ts-ignore
import { PingHealthCheckdefaultResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * PingApi - axios parameter creator
 * @export
 */
export const PingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * A health check for the API that won\'t return any account-specific information.
         * @summary Ping
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        healthCheck: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/ping`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/ping',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PingApi - functional programming interface
 * @export
 */
export const PingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PingApiAxiosParamCreator(configuration)
    return {
        /**
         * A health check for the API that won\'t return any account-specific information.
         * @summary Ping
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async healthCheck(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PingHealthCheckResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.healthCheck(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PingApi - factory interface
 * @export
 */
export const PingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PingApiFp(configuration)
    return {
        /**
         * A health check for the API that won\'t return any account-specific information.
         * @summary Ping
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        healthCheck(options?: AxiosRequestConfig): AxiosPromise<PingHealthCheckResponse> {
            return localVarFp.healthCheck(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PingApiGenerated - object-oriented interface
 * @export
 * @class PingApiGenerated
 * @extends {BaseAPI}
 */
export class PingApiGenerated extends BaseAPI {
    /**
     * A health check for the API that won\'t return any account-specific information.
     * @summary Ping
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PingApiGenerated
     */
    public healthCheck(options?: AxiosRequestConfig) {
        return PingApiFp(this.configuration).healthCheck(options).then((request) => request(this.axios, this.basePath));
    }
}