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
import { ActivityFeedGetLatestChimpChatter200Response } from '../models';
// @ts-ignore
import { ActivityFeedGetLatestChimpChatterResponse } from '../models';
// @ts-ignore
import { ActivityFeedGetLatestChimpChatterdefaultResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ActivityFeedApi - axios parameter creator
 * @export
 */
export const ActivityFeedApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Return the Chimp Chatter for this account ordered by most recent.
         * @summary Get latest chimp chatter
         * @param {number} [count] The number of records to return. Default value is 10. Maximum value is 1000
         * @param {number} [offset] Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLatestChimpChatter: async (count?: number, offset?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/activity-feed/chimp-chatter`;
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
                pathTemplate: '/activity-feed/chimp-chatter',
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
 * ActivityFeedApi - functional programming interface
 * @export
 */
export const ActivityFeedApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ActivityFeedApiAxiosParamCreator(configuration)
    return {
        /**
         * Return the Chimp Chatter for this account ordered by most recent.
         * @summary Get latest chimp chatter
         * @param {ActivityFeedApiGetLatestChimpChatterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLatestChimpChatter(requestParameters: ActivityFeedApiGetLatestChimpChatterRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ActivityFeedGetLatestChimpChatterResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLatestChimpChatter(requestParameters.count, requestParameters.offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ActivityFeedApi - factory interface
 * @export
 */
export const ActivityFeedApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ActivityFeedApiFp(configuration)
    return {
        /**
         * Return the Chimp Chatter for this account ordered by most recent.
         * @summary Get latest chimp chatter
         * @param {ActivityFeedApiGetLatestChimpChatterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLatestChimpChatter(requestParameters: ActivityFeedApiGetLatestChimpChatterRequest = {}, options?: AxiosRequestConfig): AxiosPromise<ActivityFeedGetLatestChimpChatterResponse> {
            return localVarFp.getLatestChimpChatter(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getLatestChimpChatter operation in ActivityFeedApi.
 * @export
 * @interface ActivityFeedApiGetLatestChimpChatterRequest
 */
export type ActivityFeedApiGetLatestChimpChatterRequest = {
    
    /**
    * The number of records to return. Default value is 10. Maximum value is 1000
    * @type {number}
    * @memberof ActivityFeedApiGetLatestChimpChatter
    */
    readonly count?: number
    
    /**
    * Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
    * @type {number}
    * @memberof ActivityFeedApiGetLatestChimpChatter
    */
    readonly offset?: number
    
}

/**
 * ActivityFeedApiGenerated - object-oriented interface
 * @export
 * @class ActivityFeedApiGenerated
 * @extends {BaseAPI}
 */
export class ActivityFeedApiGenerated extends BaseAPI {
    /**
     * Return the Chimp Chatter for this account ordered by most recent.
     * @summary Get latest chimp chatter
     * @param {ActivityFeedApiGetLatestChimpChatterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivityFeedApiGenerated
     */
    public getLatestChimpChatter(requestParameters: ActivityFeedApiGetLatestChimpChatterRequest = {}, options?: AxiosRequestConfig) {
        return ActivityFeedApiFp(this.configuration).getLatestChimpChatter(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
