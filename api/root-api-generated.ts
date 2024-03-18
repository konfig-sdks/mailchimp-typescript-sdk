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
import { RootListResources200Response } from '../models';
// @ts-ignore
import { RootListResourcesResponse } from '../models';
// @ts-ignore
import { RootListResourcesdefaultResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * RootApi - axios parameter creator
 * @export
 */
export const RootApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get links to all other resources available in the API.
         * @summary List api root resources
         * @param {Array<string>} [fields] A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         * @param {Array<string>} [excludeFields] A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listResources: async (fields?: Array<string>, excludeFields?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/`;
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
            if (fields) {
                localVarQueryParameter['fields'] = fields.join(COLLECTION_FORMATS.csv);
            }

            if (excludeFields) {
                localVarQueryParameter['exclude_fields'] = excludeFields.join(COLLECTION_FORMATS.csv);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/',
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
 * RootApi - functional programming interface
 * @export
 */
export const RootApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RootApiAxiosParamCreator(configuration)
    return {
        /**
         * Get links to all other resources available in the API.
         * @summary List api root resources
         * @param {RootApiListResourcesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listResources(requestParameters: RootApiListResourcesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RootListResourcesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listResources(requestParameters.fields, requestParameters.excludeFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RootApi - factory interface
 * @export
 */
export const RootApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RootApiFp(configuration)
    return {
        /**
         * Get links to all other resources available in the API.
         * @summary List api root resources
         * @param {RootApiListResourcesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listResources(requestParameters: RootApiListResourcesRequest, options?: AxiosRequestConfig): AxiosPromise<RootListResourcesResponse> {
            return localVarFp.listResources(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for listResources operation in RootApi.
 * @export
 * @interface RootApiListResourcesRequest
 */
export type RootApiListResourcesRequest = {
    
    /**
    * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
    * @type {Array<string>}
    * @memberof RootApiListResources
    */
    readonly fields?: Array<string>
    
    /**
    * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
    * @type {Array<string>}
    * @memberof RootApiListResources
    */
    readonly excludeFields?: Array<string>
    
}

/**
 * RootApiGenerated - object-oriented interface
 * @export
 * @class RootApiGenerated
 * @extends {BaseAPI}
 */
export class RootApiGenerated extends BaseAPI {
    /**
     * Get links to all other resources available in the API.
     * @summary List api root resources
     * @param {RootApiListResourcesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RootApiGenerated
     */
    public listResources(requestParameters: RootApiListResourcesRequest, options?: AxiosRequestConfig) {
        return RootApiFp(this.configuration).listResources(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}