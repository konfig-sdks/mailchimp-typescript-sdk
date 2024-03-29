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
import { SurveysGenerateCampaign200Response } from '../models';
// @ts-ignore
import { SurveysGenerateCampaignResponse } from '../models';
// @ts-ignore
import { SurveysGenerateCampaigndefaultResponse } from '../models';
// @ts-ignore
import { SurveysPublishSurveyActionResponse } from '../models';
// @ts-ignore
import { SurveysPublishSurveyActiondefaultResponse } from '../models';
// @ts-ignore
import { SurveysUnpublishSurveyActionResponse } from '../models';
// @ts-ignore
import { SurveysUnpublishSurveyActiondefaultResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * SurveysApi - axios parameter creator
 * @export
 */
export const SurveysApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Utilize the List ID and Survey ID to generate a Campaign that links to your survey.
         * @summary Create a Survey Campaign
         * @param {string} listId The unique ID for the list.
         * @param {string} surveyId The ID of the survey.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateCampaign: async (listId: string, surveyId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'listId' is not null or undefined
            assertParamExists('generateCampaign', 'listId', listId)
            // verify required parameter 'surveyId' is not null or undefined
            assertParamExists('generateCampaign', 'surveyId', surveyId)
            const localVarPath = `/lists/{list_id}/surveys/{survey_id}/actions/create-email`
                .replace(`{${"list_id"}}`, encodeURIComponent(String(listId !== undefined ? listId : `-list_id-`)))
                .replace(`{${"survey_id"}}`, encodeURIComponent(String(surveyId !== undefined ? surveyId : `-survey_id-`)));
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
                pathTemplate: '/lists/{list_id}/surveys/{survey_id}/actions/create-email',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Publish a survey that is in draft, unpublished, or has been previously published and edited.
         * @summary Publish a Survey
         * @param {string} listId The unique ID for the list.
         * @param {string} surveyId The ID of the survey.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        publishSurveyAction: async (listId: string, surveyId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'listId' is not null or undefined
            assertParamExists('publishSurveyAction', 'listId', listId)
            // verify required parameter 'surveyId' is not null or undefined
            assertParamExists('publishSurveyAction', 'surveyId', surveyId)
            const localVarPath = `/lists/{list_id}/surveys/{survey_id}/actions/publish`
                .replace(`{${"list_id"}}`, encodeURIComponent(String(listId !== undefined ? listId : `-list_id-`)))
                .replace(`{${"survey_id"}}`, encodeURIComponent(String(surveyId !== undefined ? surveyId : `-survey_id-`)));
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
                pathTemplate: '/lists/{list_id}/surveys/{survey_id}/actions/publish',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Unpublish a survey that has been published.
         * @summary Unpublish a Survey
         * @param {string} listId The unique ID for the list.
         * @param {string} surveyId The ID of the survey.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unpublishSurveyAction: async (listId: string, surveyId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'listId' is not null or undefined
            assertParamExists('unpublishSurveyAction', 'listId', listId)
            // verify required parameter 'surveyId' is not null or undefined
            assertParamExists('unpublishSurveyAction', 'surveyId', surveyId)
            const localVarPath = `/lists/{list_id}/surveys/{survey_id}/actions/unpublish`
                .replace(`{${"list_id"}}`, encodeURIComponent(String(listId !== undefined ? listId : `-list_id-`)))
                .replace(`{${"survey_id"}}`, encodeURIComponent(String(surveyId !== undefined ? surveyId : `-survey_id-`)));
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
                pathTemplate: '/lists/{list_id}/surveys/{survey_id}/actions/unpublish',
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
 * SurveysApi - functional programming interface
 * @export
 */
export const SurveysApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SurveysApiAxiosParamCreator(configuration)
    return {
        /**
         * Utilize the List ID and Survey ID to generate a Campaign that links to your survey.
         * @summary Create a Survey Campaign
         * @param {SurveysApiGenerateCampaignRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generateCampaign(requestParameters: SurveysApiGenerateCampaignRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SurveysGenerateCampaignResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.generateCampaign(requestParameters.listId, requestParameters.surveyId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Publish a survey that is in draft, unpublished, or has been previously published and edited.
         * @summary Publish a Survey
         * @param {SurveysApiPublishSurveyActionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async publishSurveyAction(requestParameters: SurveysApiPublishSurveyActionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.publishSurveyAction(requestParameters.listId, requestParameters.surveyId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Unpublish a survey that has been published.
         * @summary Unpublish a Survey
         * @param {SurveysApiUnpublishSurveyActionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async unpublishSurveyAction(requestParameters: SurveysApiUnpublishSurveyActionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unpublishSurveyAction(requestParameters.listId, requestParameters.surveyId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SurveysApi - factory interface
 * @export
 */
export const SurveysApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SurveysApiFp(configuration)
    return {
        /**
         * Utilize the List ID and Survey ID to generate a Campaign that links to your survey.
         * @summary Create a Survey Campaign
         * @param {SurveysApiGenerateCampaignRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateCampaign(requestParameters: SurveysApiGenerateCampaignRequest, options?: AxiosRequestConfig): AxiosPromise<SurveysGenerateCampaignResponse> {
            return localVarFp.generateCampaign(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Publish a survey that is in draft, unpublished, or has been previously published and edited.
         * @summary Publish a Survey
         * @param {SurveysApiPublishSurveyActionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        publishSurveyAction(requestParameters: SurveysApiPublishSurveyActionRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.publishSurveyAction(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Unpublish a survey that has been published.
         * @summary Unpublish a Survey
         * @param {SurveysApiUnpublishSurveyActionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unpublishSurveyAction(requestParameters: SurveysApiUnpublishSurveyActionRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.unpublishSurveyAction(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for generateCampaign operation in SurveysApi.
 * @export
 * @interface SurveysApiGenerateCampaignRequest
 */
export type SurveysApiGenerateCampaignRequest = {
    
    /**
    * The unique ID for the list.
    * @type {string}
    * @memberof SurveysApiGenerateCampaign
    */
    readonly listId: string
    
    /**
    * The ID of the survey.
    * @type {string}
    * @memberof SurveysApiGenerateCampaign
    */
    readonly surveyId: string
    
}

/**
 * Request parameters for publishSurveyAction operation in SurveysApi.
 * @export
 * @interface SurveysApiPublishSurveyActionRequest
 */
export type SurveysApiPublishSurveyActionRequest = {
    
    /**
    * The unique ID for the list.
    * @type {string}
    * @memberof SurveysApiPublishSurveyAction
    */
    readonly listId: string
    
    /**
    * The ID of the survey.
    * @type {string}
    * @memberof SurveysApiPublishSurveyAction
    */
    readonly surveyId: string
    
}

/**
 * Request parameters for unpublishSurveyAction operation in SurveysApi.
 * @export
 * @interface SurveysApiUnpublishSurveyActionRequest
 */
export type SurveysApiUnpublishSurveyActionRequest = {
    
    /**
    * The unique ID for the list.
    * @type {string}
    * @memberof SurveysApiUnpublishSurveyAction
    */
    readonly listId: string
    
    /**
    * The ID of the survey.
    * @type {string}
    * @memberof SurveysApiUnpublishSurveyAction
    */
    readonly surveyId: string
    
}

/**
 * SurveysApiGenerated - object-oriented interface
 * @export
 * @class SurveysApiGenerated
 * @extends {BaseAPI}
 */
export class SurveysApiGenerated extends BaseAPI {
    /**
     * Utilize the List ID and Survey ID to generate a Campaign that links to your survey.
     * @summary Create a Survey Campaign
     * @param {SurveysApiGenerateCampaignRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SurveysApiGenerated
     */
    public generateCampaign(requestParameters: SurveysApiGenerateCampaignRequest, options?: AxiosRequestConfig) {
        return SurveysApiFp(this.configuration).generateCampaign(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Publish a survey that is in draft, unpublished, or has been previously published and edited.
     * @summary Publish a Survey
     * @param {SurveysApiPublishSurveyActionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SurveysApiGenerated
     */
    public publishSurveyAction(requestParameters: SurveysApiPublishSurveyActionRequest, options?: AxiosRequestConfig) {
        return SurveysApiFp(this.configuration).publishSurveyAction(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Unpublish a survey that has been published.
     * @summary Unpublish a Survey
     * @param {SurveysApiUnpublishSurveyActionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SurveysApiGenerated
     */
    public unpublishSurveyAction(requestParameters: SurveysApiUnpublishSurveyActionRequest, options?: AxiosRequestConfig) {
        return SurveysApiFp(this.configuration).unpublishSurveyAction(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
