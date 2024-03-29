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
import { FacebookAdsGetInfo200Response } from '../models';
// @ts-ignore
import { FacebookAdsGetInfoResponse } from '../models';
// @ts-ignore
import { FacebookAdsGetInfodefaultResponse } from '../models';
// @ts-ignore
import { FacebookAdsListAds200Response } from '../models';
// @ts-ignore
import { FacebookAdsListAdsResponse } from '../models';
// @ts-ignore
import { FacebookAdsListAdsdefaultResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * FacebookAdsApi - axios parameter creator
 * @export
 */
export const FacebookAdsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get details of a Facebook ad.
         * @summary Get facebook ad info
         * @param {string} outreachId The outreach id.
         * @param {Array<string>} [fields] A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         * @param {Array<string>} [excludeFields] A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInfo: async (outreachId: string, fields?: Array<string>, excludeFields?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'outreachId' is not null or undefined
            assertParamExists('getInfo', 'outreachId', outreachId)
            const localVarPath = `/facebook-ads/{outreach_id}`
                .replace(`{${"outreach_id"}}`, encodeURIComponent(String(outreachId !== undefined ? outreachId : `-outreach_id-`)));
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
                pathTemplate: '/facebook-ads/{outreach_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get list of Facebook ads.
         * @summary List facebook ads
         * @param {Array<string>} [fields] A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         * @param {Array<string>} [excludeFields] A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         * @param {number} [count] The number of records to return. Default value is 10. Maximum value is 1000
         * @param {number} [offset] Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
         * @param {'created_at' | 'updated_at' | 'end_time'} [sortField] Returns files sorted by the specified field.
         * @param {'ASC' | 'DESC'} [sortDir] Determines the order direction for sorted results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAds: async (fields?: Array<string>, excludeFields?: Array<string>, count?: number, offset?: number, sortField?: 'created_at' | 'updated_at' | 'end_time', sortDir?: 'ASC' | 'DESC', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/facebook-ads`;
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

            if (sortField !== undefined) {
                localVarQueryParameter['sort_field'] = sortField;
            }

            if (sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/facebook-ads',
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
 * FacebookAdsApi - functional programming interface
 * @export
 */
export const FacebookAdsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FacebookAdsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get details of a Facebook ad.
         * @summary Get facebook ad info
         * @param {FacebookAdsApiGetInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInfo(requestParameters: FacebookAdsApiGetInfoRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FacebookAdsGetInfoResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInfo(requestParameters.outreachId, requestParameters.fields, requestParameters.excludeFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get list of Facebook ads.
         * @summary List facebook ads
         * @param {FacebookAdsApiListAdsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAds(requestParameters: FacebookAdsApiListAdsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FacebookAdsListAdsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAds(requestParameters.fields, requestParameters.excludeFields, requestParameters.count, requestParameters.offset, requestParameters.sortField, requestParameters.sortDir, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FacebookAdsApi - factory interface
 * @export
 */
export const FacebookAdsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FacebookAdsApiFp(configuration)
    return {
        /**
         * Get details of a Facebook ad.
         * @summary Get facebook ad info
         * @param {FacebookAdsApiGetInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInfo(requestParameters: FacebookAdsApiGetInfoRequest, options?: AxiosRequestConfig): AxiosPromise<FacebookAdsGetInfoResponse> {
            return localVarFp.getInfo(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get list of Facebook ads.
         * @summary List facebook ads
         * @param {FacebookAdsApiListAdsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAds(requestParameters: FacebookAdsApiListAdsRequest, options?: AxiosRequestConfig): AxiosPromise<FacebookAdsListAdsResponse> {
            return localVarFp.listAds(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getInfo operation in FacebookAdsApi.
 * @export
 * @interface FacebookAdsApiGetInfoRequest
 */
export type FacebookAdsApiGetInfoRequest = {
    
    /**
    * The outreach id.
    * @type {string}
    * @memberof FacebookAdsApiGetInfo
    */
    readonly outreachId: string
    
    /**
    * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
    * @type {Array<string>}
    * @memberof FacebookAdsApiGetInfo
    */
    readonly fields?: Array<string>
    
    /**
    * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
    * @type {Array<string>}
    * @memberof FacebookAdsApiGetInfo
    */
    readonly excludeFields?: Array<string>
    
}

/**
 * Request parameters for listAds operation in FacebookAdsApi.
 * @export
 * @interface FacebookAdsApiListAdsRequest
 */
export type FacebookAdsApiListAdsRequest = {
    
    /**
    * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
    * @type {Array<string>}
    * @memberof FacebookAdsApiListAds
    */
    readonly fields?: Array<string>
    
    /**
    * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
    * @type {Array<string>}
    * @memberof FacebookAdsApiListAds
    */
    readonly excludeFields?: Array<string>
    
    /**
    * The number of records to return. Default value is 10. Maximum value is 1000
    * @type {number}
    * @memberof FacebookAdsApiListAds
    */
    readonly count?: number
    
    /**
    * Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
    * @type {number}
    * @memberof FacebookAdsApiListAds
    */
    readonly offset?: number
    
    /**
    * Returns files sorted by the specified field.
    * @type {'created_at' | 'updated_at' | 'end_time'}
    * @memberof FacebookAdsApiListAds
    */
    readonly sortField?: 'created_at' | 'updated_at' | 'end_time'
    
    /**
    * Determines the order direction for sorted results.
    * @type {'ASC' | 'DESC'}
    * @memberof FacebookAdsApiListAds
    */
    readonly sortDir?: 'ASC' | 'DESC'
    
}

/**
 * FacebookAdsApiGenerated - object-oriented interface
 * @export
 * @class FacebookAdsApiGenerated
 * @extends {BaseAPI}
 */
export class FacebookAdsApiGenerated extends BaseAPI {
    /**
     * Get details of a Facebook ad.
     * @summary Get facebook ad info
     * @param {FacebookAdsApiGetInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FacebookAdsApiGenerated
     */
    public getInfo(requestParameters: FacebookAdsApiGetInfoRequest, options?: AxiosRequestConfig) {
        return FacebookAdsApiFp(this.configuration).getInfo(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get list of Facebook ads.
     * @summary List facebook ads
     * @param {FacebookAdsApiListAdsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FacebookAdsApiGenerated
     */
    public listAds(requestParameters: FacebookAdsApiListAdsRequest, options?: AxiosRequestConfig) {
        return FacebookAdsApiFp(this.configuration).listAds(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
