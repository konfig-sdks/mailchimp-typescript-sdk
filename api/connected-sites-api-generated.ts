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
import { ConnectedSitesCreateNewMailchimpSite200Response } from '../models';
// @ts-ignore
import { ConnectedSitesCreateNewMailchimpSiteRequest } from '../models';
// @ts-ignore
import { ConnectedSitesCreateNewMailchimpSiteResponse } from '../models';
// @ts-ignore
import { ConnectedSitesCreateNewMailchimpSitedefaultResponse } from '../models';
// @ts-ignore
import { ConnectedSitesGetInfo200Response } from '../models';
// @ts-ignore
import { ConnectedSitesGetInfoResponse } from '../models';
// @ts-ignore
import { ConnectedSitesGetInfodefaultResponse } from '../models';
// @ts-ignore
import { ConnectedSitesListAll200Response } from '../models';
// @ts-ignore
import { ConnectedSitesListAllResponse } from '../models';
// @ts-ignore
import { ConnectedSitesListAlldefaultResponse } from '../models';
// @ts-ignore
import { ConnectedSitesRemoveSiteResponse } from '../models';
// @ts-ignore
import { ConnectedSitesRemoveSitedefaultResponse } from '../models';
// @ts-ignore
import { ConnectedSitesVerifyScriptInstallationResponse } from '../models';
// @ts-ignore
import { ConnectedSitesVerifyScriptInstallationdefaultResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ConnectedSitesApi - axios parameter creator
 * @export
 */
export const ConnectedSitesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new Mailchimp connected site.
         * @summary Add connected site
         * @param {ConnectedSitesCreateNewMailchimpSiteRequest} connectedSitesCreateNewMailchimpSiteRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewMailchimpSite: async (connectedSitesCreateNewMailchimpSiteRequest: ConnectedSitesCreateNewMailchimpSiteRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'connectedSitesCreateNewMailchimpSiteRequest' is not null or undefined
            assertParamExists('createNewMailchimpSite', 'connectedSitesCreateNewMailchimpSiteRequest', connectedSitesCreateNewMailchimpSiteRequest)
            const localVarPath = `/connected-sites`;
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
                requestBody: connectedSitesCreateNewMailchimpSiteRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/connected-sites',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(connectedSitesCreateNewMailchimpSiteRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get information about a specific connected site.
         * @summary Get connected site
         * @param {string} connectedSiteId The unique identifier for the site.
         * @param {Array<string>} [fields] A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         * @param {Array<string>} [excludeFields] A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInfo: async (connectedSiteId: string, fields?: Array<string>, excludeFields?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'connectedSiteId' is not null or undefined
            assertParamExists('getInfo', 'connectedSiteId', connectedSiteId)
            const localVarPath = `/connected-sites/{connected_site_id}`
                .replace(`{${"connected_site_id"}}`, encodeURIComponent(String(connectedSiteId !== undefined ? connectedSiteId : `-connected_site_id-`)));
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
                pathTemplate: '/connected-sites/{connected_site_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all connected sites in an account.
         * @summary List connected sites
         * @param {Array<string>} [fields] A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
         * @param {Array<string>} [excludeFields] A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
         * @param {number} [count] The number of records to return. Default value is 10. Maximum value is 1000
         * @param {number} [offset] Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll: async (fields?: Array<string>, excludeFields?: Array<string>, count?: number, offset?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/connected-sites`;
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
                pathTemplate: '/connected-sites',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Remove a connected site from your Mailchimp account.
         * @summary Delete connected site
         * @param {string} connectedSiteId The unique identifier for the site.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeSite: async (connectedSiteId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'connectedSiteId' is not null or undefined
            assertParamExists('removeSite', 'connectedSiteId', connectedSiteId)
            const localVarPath = `/connected-sites/{connected_site_id}`
                .replace(`{${"connected_site_id"}}`, encodeURIComponent(String(connectedSiteId !== undefined ? connectedSiteId : `-connected_site_id-`)));
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
                pathTemplate: '/connected-sites/{connected_site_id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Verify that the connected sites script has been installed, either via the script URL or fragment.
         * @summary Verify connected site script
         * @param {string} connectedSiteId The unique identifier for the site.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyScriptInstallation: async (connectedSiteId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'connectedSiteId' is not null or undefined
            assertParamExists('verifyScriptInstallation', 'connectedSiteId', connectedSiteId)
            const localVarPath = `/connected-sites/{connected_site_id}/actions/verify-script-installation`
                .replace(`{${"connected_site_id"}}`, encodeURIComponent(String(connectedSiteId !== undefined ? connectedSiteId : `-connected_site_id-`)));
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/connected-sites/{connected_site_id}/actions/verify-script-installation',
                httpMethod: 'POST'
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
 * ConnectedSitesApi - functional programming interface
 * @export
 */
export const ConnectedSitesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ConnectedSitesApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new Mailchimp connected site.
         * @summary Add connected site
         * @param {ConnectedSitesApiCreateNewMailchimpSiteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewMailchimpSite(requestParameters: ConnectedSitesApiCreateNewMailchimpSiteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConnectedSitesCreateNewMailchimpSiteResponse>> {
            const connectedSitesCreateNewMailchimpSiteRequest: ConnectedSitesCreateNewMailchimpSiteRequest = {
                foreign_id: requestParameters.foreign_id,
                domain: requestParameters.domain
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewMailchimpSite(connectedSitesCreateNewMailchimpSiteRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get information about a specific connected site.
         * @summary Get connected site
         * @param {ConnectedSitesApiGetInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInfo(requestParameters: ConnectedSitesApiGetInfoRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConnectedSitesGetInfoResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInfo(requestParameters.connectedSiteId, requestParameters.fields, requestParameters.excludeFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all connected sites in an account.
         * @summary List connected sites
         * @param {ConnectedSitesApiListAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAll(requestParameters: ConnectedSitesApiListAllRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConnectedSitesListAllResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAll(requestParameters.fields, requestParameters.excludeFields, requestParameters.count, requestParameters.offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Remove a connected site from your Mailchimp account.
         * @summary Delete connected site
         * @param {ConnectedSitesApiRemoveSiteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeSite(requestParameters: ConnectedSitesApiRemoveSiteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeSite(requestParameters.connectedSiteId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Verify that the connected sites script has been installed, either via the script URL or fragment.
         * @summary Verify connected site script
         * @param {ConnectedSitesApiVerifyScriptInstallationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verifyScriptInstallation(requestParameters: ConnectedSitesApiVerifyScriptInstallationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.verifyScriptInstallation(requestParameters.connectedSiteId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ConnectedSitesApi - factory interface
 * @export
 */
export const ConnectedSitesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ConnectedSitesApiFp(configuration)
    return {
        /**
         * Create a new Mailchimp connected site.
         * @summary Add connected site
         * @param {ConnectedSitesApiCreateNewMailchimpSiteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewMailchimpSite(requestParameters: ConnectedSitesApiCreateNewMailchimpSiteRequest, options?: AxiosRequestConfig): AxiosPromise<ConnectedSitesCreateNewMailchimpSiteResponse> {
            return localVarFp.createNewMailchimpSite(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get information about a specific connected site.
         * @summary Get connected site
         * @param {ConnectedSitesApiGetInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInfo(requestParameters: ConnectedSitesApiGetInfoRequest, options?: AxiosRequestConfig): AxiosPromise<ConnectedSitesGetInfoResponse> {
            return localVarFp.getInfo(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all connected sites in an account.
         * @summary List connected sites
         * @param {ConnectedSitesApiListAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll(requestParameters: ConnectedSitesApiListAllRequest, options?: AxiosRequestConfig): AxiosPromise<ConnectedSitesListAllResponse> {
            return localVarFp.listAll(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Remove a connected site from your Mailchimp account.
         * @summary Delete connected site
         * @param {ConnectedSitesApiRemoveSiteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeSite(requestParameters: ConnectedSitesApiRemoveSiteRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.removeSite(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Verify that the connected sites script has been installed, either via the script URL or fragment.
         * @summary Verify connected site script
         * @param {ConnectedSitesApiVerifyScriptInstallationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyScriptInstallation(requestParameters: ConnectedSitesApiVerifyScriptInstallationRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.verifyScriptInstallation(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewMailchimpSite operation in ConnectedSitesApi.
 * @export
 * @interface ConnectedSitesApiCreateNewMailchimpSiteRequest
 */
export type ConnectedSitesApiCreateNewMailchimpSiteRequest = {
    
} & ConnectedSitesCreateNewMailchimpSiteRequest

/**
 * Request parameters for getInfo operation in ConnectedSitesApi.
 * @export
 * @interface ConnectedSitesApiGetInfoRequest
 */
export type ConnectedSitesApiGetInfoRequest = {
    
    /**
    * The unique identifier for the site.
    * @type {string}
    * @memberof ConnectedSitesApiGetInfo
    */
    readonly connectedSiteId: string
    
    /**
    * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
    * @type {Array<string>}
    * @memberof ConnectedSitesApiGetInfo
    */
    readonly fields?: Array<string>
    
    /**
    * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
    * @type {Array<string>}
    * @memberof ConnectedSitesApiGetInfo
    */
    readonly excludeFields?: Array<string>
    
}

/**
 * Request parameters for listAll operation in ConnectedSitesApi.
 * @export
 * @interface ConnectedSitesApiListAllRequest
 */
export type ConnectedSitesApiListAllRequest = {
    
    /**
    * A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
    * @type {Array<string>}
    * @memberof ConnectedSitesApiListAll
    */
    readonly fields?: Array<string>
    
    /**
    * A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
    * @type {Array<string>}
    * @memberof ConnectedSitesApiListAll
    */
    readonly excludeFields?: Array<string>
    
    /**
    * The number of records to return. Default value is 10. Maximum value is 1000
    * @type {number}
    * @memberof ConnectedSitesApiListAll
    */
    readonly count?: number
    
    /**
    * Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.
    * @type {number}
    * @memberof ConnectedSitesApiListAll
    */
    readonly offset?: number
    
}

/**
 * Request parameters for removeSite operation in ConnectedSitesApi.
 * @export
 * @interface ConnectedSitesApiRemoveSiteRequest
 */
export type ConnectedSitesApiRemoveSiteRequest = {
    
    /**
    * The unique identifier for the site.
    * @type {string}
    * @memberof ConnectedSitesApiRemoveSite
    */
    readonly connectedSiteId: string
    
}

/**
 * Request parameters for verifyScriptInstallation operation in ConnectedSitesApi.
 * @export
 * @interface ConnectedSitesApiVerifyScriptInstallationRequest
 */
export type ConnectedSitesApiVerifyScriptInstallationRequest = {
    
    /**
    * The unique identifier for the site.
    * @type {string}
    * @memberof ConnectedSitesApiVerifyScriptInstallation
    */
    readonly connectedSiteId: string
    
}

/**
 * ConnectedSitesApiGenerated - object-oriented interface
 * @export
 * @class ConnectedSitesApiGenerated
 * @extends {BaseAPI}
 */
export class ConnectedSitesApiGenerated extends BaseAPI {
    /**
     * Create a new Mailchimp connected site.
     * @summary Add connected site
     * @param {ConnectedSitesApiCreateNewMailchimpSiteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectedSitesApiGenerated
     */
    public createNewMailchimpSite(requestParameters: ConnectedSitesApiCreateNewMailchimpSiteRequest, options?: AxiosRequestConfig) {
        return ConnectedSitesApiFp(this.configuration).createNewMailchimpSite(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get information about a specific connected site.
     * @summary Get connected site
     * @param {ConnectedSitesApiGetInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectedSitesApiGenerated
     */
    public getInfo(requestParameters: ConnectedSitesApiGetInfoRequest, options?: AxiosRequestConfig) {
        return ConnectedSitesApiFp(this.configuration).getInfo(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all connected sites in an account.
     * @summary List connected sites
     * @param {ConnectedSitesApiListAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectedSitesApiGenerated
     */
    public listAll(requestParameters: ConnectedSitesApiListAllRequest, options?: AxiosRequestConfig) {
        return ConnectedSitesApiFp(this.configuration).listAll(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Remove a connected site from your Mailchimp account.
     * @summary Delete connected site
     * @param {ConnectedSitesApiRemoveSiteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectedSitesApiGenerated
     */
    public removeSite(requestParameters: ConnectedSitesApiRemoveSiteRequest, options?: AxiosRequestConfig) {
        return ConnectedSitesApiFp(this.configuration).removeSite(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Verify that the connected sites script has been installed, either via the script URL or fragment.
     * @summary Verify connected site script
     * @param {ConnectedSitesApiVerifyScriptInstallationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectedSitesApiGenerated
     */
    public verifyScriptInstallation(requestParameters: ConnectedSitesApiVerifyScriptInstallationRequest, options?: AxiosRequestConfig) {
        return ConnectedSitesApiFp(this.configuration).verifyScriptInstallation(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
