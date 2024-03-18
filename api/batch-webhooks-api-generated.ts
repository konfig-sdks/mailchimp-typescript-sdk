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
import { BatchWebhooksAddWebhook200Response } from '../models';
// @ts-ignore
import { BatchWebhooksAddWebhookRequest } from '../models';
// @ts-ignore
import { BatchWebhooksAddWebhookResponse } from '../models';
// @ts-ignore
import { BatchWebhooksAddWebhookdefaultResponse } from '../models';
// @ts-ignore
import { BatchWebhooksGetInfo200Response } from '../models';
// @ts-ignore
import { BatchWebhooksGetInfoResponse } from '../models';
// @ts-ignore
import { BatchWebhooksGetInfodefaultResponse } from '../models';
// @ts-ignore
import { BatchWebhooksListWebhooks200Response } from '../models';
// @ts-ignore
import { BatchWebhooksListWebhooksResponse } from '../models';
// @ts-ignore
import { BatchWebhooksListWebhooksdefaultResponse } from '../models';
// @ts-ignore
import { BatchWebhooksRemoveWebhookResponse } from '../models';
// @ts-ignore
import { BatchWebhooksRemoveWebhookdefaultResponse } from '../models';
// @ts-ignore
import { BatchWebhooksUpdateWebhook200Response } from '../models';
// @ts-ignore
import { BatchWebhooksUpdateWebhookRequest } from '../models';
// @ts-ignore
import { BatchWebhooksUpdateWebhookResponse } from '../models';
// @ts-ignore
import { BatchWebhooksUpdateWebhookdefaultResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * BatchWebhooksApi - axios parameter creator
 * @export
 */
export const BatchWebhooksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Configure a webhook that will fire whenever any batch request completes processing.  You may only have a maximum of 20 batch webhooks.
         * @summary Add batch webhook
         * @param {BatchWebhooksAddWebhookRequest} batchWebhooksAddWebhookRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addWebhook: async (batchWebhooksAddWebhookRequest: BatchWebhooksAddWebhookRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'batchWebhooksAddWebhookRequest' is not null or undefined
            assertParamExists('addWebhook', 'batchWebhooksAddWebhookRequest', batchWebhooksAddWebhookRequest)
            const localVarPath = `/batch-webhooks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: batchWebhooksAddWebhookRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/batch-webhooks',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(batchWebhooksAddWebhookRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get information about a specific batch webhook.
         * @summary Get batch webhook info
         * @param {string} batchWebhookId The unique id for the batch webhook.
         * @param {Array<string>} [fields] A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         * @param {Array<string>} [excludeFields] A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInfo: async (batchWebhookId: string, fields?: Array<string>, excludeFields?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'batchWebhookId' is not null or undefined
            assertParamExists('getInfo', 'batchWebhookId', batchWebhookId)
            const localVarPath = `/batch-webhooks/{batch_webhook_id}`
                .replace(`{${"batch_webhook_id"}}`, encodeURIComponent(String(batchWebhookId !== undefined ? batchWebhookId : `-batch_webhook_id-`)));
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
                pathTemplate: '/batch-webhooks/{batch_webhook_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all webhooks that have been configured for batches.
         * @summary List batch webhooks
         * @param {Array<string>} [fields] A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         * @param {Array<string>} [excludeFields] A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         * @param {number} [count] The number of records to return. Default value is 10. Maximum value is 1000
         * @param {number} [offset] Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listWebhooks: async (fields?: Array<string>, excludeFields?: Array<string>, count?: number, offset?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/batch-webhooks`;
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

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/batch-webhooks',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Remove a batch webhook. Webhooks will no longer be sent to the given URL.
         * @summary Delete batch webhook
         * @param {string} batchWebhookId The unique id for the batch webhook.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeWebhook: async (batchWebhookId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'batchWebhookId' is not null or undefined
            assertParamExists('removeWebhook', 'batchWebhookId', batchWebhookId)
            const localVarPath = `/batch-webhooks/{batch_webhook_id}`
                .replace(`{${"batch_webhook_id"}}`, encodeURIComponent(String(batchWebhookId !== undefined ? batchWebhookId : `-batch_webhook_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
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
                pathTemplate: '/batch-webhooks/{batch_webhook_id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a webhook that will fire whenever any batch request completes processing.
         * @summary Update batch webhook
         * @param {string} batchWebhookId The unique id for the batch webhook.
         * @param {BatchWebhooksUpdateWebhookRequest} batchWebhooksUpdateWebhookRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWebhook: async (batchWebhookId: string, batchWebhooksUpdateWebhookRequest: BatchWebhooksUpdateWebhookRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'batchWebhookId' is not null or undefined
            assertParamExists('updateWebhook', 'batchWebhookId', batchWebhookId)
            // verify required parameter 'batchWebhooksUpdateWebhookRequest' is not null or undefined
            assertParamExists('updateWebhook', 'batchWebhooksUpdateWebhookRequest', batchWebhooksUpdateWebhookRequest)
            const localVarPath = `/batch-webhooks/{batch_webhook_id}`
                .replace(`{${"batch_webhook_id"}}`, encodeURIComponent(String(batchWebhookId !== undefined ? batchWebhookId : `-batch_webhook_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: batchWebhooksUpdateWebhookRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/batch-webhooks/{batch_webhook_id}',
                httpMethod: 'PATCH'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(batchWebhooksUpdateWebhookRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BatchWebhooksApi - functional programming interface
 * @export
 */
export const BatchWebhooksApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BatchWebhooksApiAxiosParamCreator(configuration)
    return {
        /**
         * Configure a webhook that will fire whenever any batch request completes processing.  You may only have a maximum of 20 batch webhooks.
         * @summary Add batch webhook
         * @param {BatchWebhooksApiAddWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addWebhook(requestParameters: BatchWebhooksApiAddWebhookRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BatchWebhooksAddWebhookResponse>> {
            const batchWebhooksAddWebhookRequest: BatchWebhooksAddWebhookRequest = {
                url: requestParameters.url,
                enabled: requestParameters.enabled
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.addWebhook(batchWebhooksAddWebhookRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get information about a specific batch webhook.
         * @summary Get batch webhook info
         * @param {BatchWebhooksApiGetInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInfo(requestParameters: BatchWebhooksApiGetInfoRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BatchWebhooksGetInfoResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInfo(requestParameters.batchWebhookId, requestParameters.fields, requestParameters.excludeFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all webhooks that have been configured for batches.
         * @summary List batch webhooks
         * @param {BatchWebhooksApiListWebhooksRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listWebhooks(requestParameters: BatchWebhooksApiListWebhooksRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BatchWebhooksListWebhooksResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listWebhooks(requestParameters.fields, requestParameters.excludeFields, requestParameters.count, requestParameters.offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Remove a batch webhook. Webhooks will no longer be sent to the given URL.
         * @summary Delete batch webhook
         * @param {BatchWebhooksApiRemoveWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeWebhook(requestParameters: BatchWebhooksApiRemoveWebhookRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeWebhook(requestParameters.batchWebhookId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a webhook that will fire whenever any batch request completes processing.
         * @summary Update batch webhook
         * @param {BatchWebhooksApiUpdateWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateWebhook(requestParameters: BatchWebhooksApiUpdateWebhookRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BatchWebhooksUpdateWebhookResponse>> {
            const batchWebhooksUpdateWebhookRequest: BatchWebhooksUpdateWebhookRequest = {
                url: requestParameters.url,
                enabled: requestParameters.enabled
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateWebhook(requestParameters.batchWebhookId, batchWebhooksUpdateWebhookRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BatchWebhooksApi - factory interface
 * @export
 */
export const BatchWebhooksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BatchWebhooksApiFp(configuration)
    return {
        /**
         * Configure a webhook that will fire whenever any batch request completes processing.  You may only have a maximum of 20 batch webhooks.
         * @summary Add batch webhook
         * @param {BatchWebhooksApiAddWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addWebhook(requestParameters: BatchWebhooksApiAddWebhookRequest, options?: AxiosRequestConfig): AxiosPromise<BatchWebhooksAddWebhookResponse> {
            return localVarFp.addWebhook(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get information about a specific batch webhook.
         * @summary Get batch webhook info
         * @param {BatchWebhooksApiGetInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInfo(requestParameters: BatchWebhooksApiGetInfoRequest, options?: AxiosRequestConfig): AxiosPromise<BatchWebhooksGetInfoResponse> {
            return localVarFp.getInfo(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all webhooks that have been configured for batches.
         * @summary List batch webhooks
         * @param {BatchWebhooksApiListWebhooksRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listWebhooks(requestParameters: BatchWebhooksApiListWebhooksRequest, options?: AxiosRequestConfig): AxiosPromise<BatchWebhooksListWebhooksResponse> {
            return localVarFp.listWebhooks(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Remove a batch webhook. Webhooks will no longer be sent to the given URL.
         * @summary Delete batch webhook
         * @param {BatchWebhooksApiRemoveWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeWebhook(requestParameters: BatchWebhooksApiRemoveWebhookRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.removeWebhook(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a webhook that will fire whenever any batch request completes processing.
         * @summary Update batch webhook
         * @param {BatchWebhooksApiUpdateWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWebhook(requestParameters: BatchWebhooksApiUpdateWebhookRequest, options?: AxiosRequestConfig): AxiosPromise<BatchWebhooksUpdateWebhookResponse> {
            return localVarFp.updateWebhook(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addWebhook operation in BatchWebhooksApi.
 * @export
 * @interface BatchWebhooksApiAddWebhookRequest
 */
export type BatchWebhooksApiAddWebhookRequest = {
    
} & BatchWebhooksAddWebhookRequest

/**
 * Request parameters for getInfo operation in BatchWebhooksApi.
 * @export
 * @interface BatchWebhooksApiGetInfoRequest
 */
export type BatchWebhooksApiGetInfoRequest = {
    
    /**
    * The unique id for the batch webhook.
    * @type {string}
    * @memberof BatchWebhooksApiGetInfo
    */
    readonly batchWebhookId: string
    
    /**
    * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
    * @type {Array<string>}
    * @memberof BatchWebhooksApiGetInfo
    */
    readonly fields?: Array<string>
    
    /**
    * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
    * @type {Array<string>}
    * @memberof BatchWebhooksApiGetInfo
    */
    readonly excludeFields?: Array<string>
    
}

/**
 * Request parameters for listWebhooks operation in BatchWebhooksApi.
 * @export
 * @interface BatchWebhooksApiListWebhooksRequest
 */
export type BatchWebhooksApiListWebhooksRequest = {
    
    /**
    * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
    * @type {Array<string>}
    * @memberof BatchWebhooksApiListWebhooks
    */
    readonly fields?: Array<string>
    
    /**
    * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
    * @type {Array<string>}
    * @memberof BatchWebhooksApiListWebhooks
    */
    readonly excludeFields?: Array<string>
    
    /**
    * The number of records to return. Default value is 10. Maximum value is 1000
    * @type {number}
    * @memberof BatchWebhooksApiListWebhooks
    */
    readonly count?: number
    
    /**
    * Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
    * @type {number}
    * @memberof BatchWebhooksApiListWebhooks
    */
    readonly offset?: number
    
}

/**
 * Request parameters for removeWebhook operation in BatchWebhooksApi.
 * @export
 * @interface BatchWebhooksApiRemoveWebhookRequest
 */
export type BatchWebhooksApiRemoveWebhookRequest = {
    
    /**
    * The unique id for the batch webhook.
    * @type {string}
    * @memberof BatchWebhooksApiRemoveWebhook
    */
    readonly batchWebhookId: string
    
}

/**
 * Request parameters for updateWebhook operation in BatchWebhooksApi.
 * @export
 * @interface BatchWebhooksApiUpdateWebhookRequest
 */
export type BatchWebhooksApiUpdateWebhookRequest = {
    
    /**
    * The unique id for the batch webhook.
    * @type {string}
    * @memberof BatchWebhooksApiUpdateWebhook
    */
    readonly batchWebhookId: string
    
} & BatchWebhooksUpdateWebhookRequest

/**
 * BatchWebhooksApiGenerated - object-oriented interface
 * @export
 * @class BatchWebhooksApiGenerated
 * @extends {BaseAPI}
 */
export class BatchWebhooksApiGenerated extends BaseAPI {
    /**
     * Configure a webhook that will fire whenever any batch request completes processing.  You may only have a maximum of 20 batch webhooks.
     * @summary Add batch webhook
     * @param {BatchWebhooksApiAddWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BatchWebhooksApiGenerated
     */
    public addWebhook(requestParameters: BatchWebhooksApiAddWebhookRequest, options?: AxiosRequestConfig) {
        return BatchWebhooksApiFp(this.configuration).addWebhook(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get information about a specific batch webhook.
     * @summary Get batch webhook info
     * @param {BatchWebhooksApiGetInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BatchWebhooksApiGenerated
     */
    public getInfo(requestParameters: BatchWebhooksApiGetInfoRequest, options?: AxiosRequestConfig) {
        return BatchWebhooksApiFp(this.configuration).getInfo(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all webhooks that have been configured for batches.
     * @summary List batch webhooks
     * @param {BatchWebhooksApiListWebhooksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BatchWebhooksApiGenerated
     */
    public listWebhooks(requestParameters: BatchWebhooksApiListWebhooksRequest, options?: AxiosRequestConfig) {
        return BatchWebhooksApiFp(this.configuration).listWebhooks(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Remove a batch webhook. Webhooks will no longer be sent to the given URL.
     * @summary Delete batch webhook
     * @param {BatchWebhooksApiRemoveWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BatchWebhooksApiGenerated
     */
    public removeWebhook(requestParameters: BatchWebhooksApiRemoveWebhookRequest, options?: AxiosRequestConfig) {
        return BatchWebhooksApiFp(this.configuration).removeWebhook(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a webhook that will fire whenever any batch request completes processing.
     * @summary Update batch webhook
     * @param {BatchWebhooksApiUpdateWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BatchWebhooksApiGenerated
     */
    public updateWebhook(requestParameters: BatchWebhooksApiUpdateWebhookRequest, options?: AxiosRequestConfig) {
        return BatchWebhooksApiFp(this.configuration).updateWebhook(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
