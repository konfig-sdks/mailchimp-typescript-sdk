/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface Operations
 */
export interface Operations {
    /**
     * The HTTP method to use for the operation.
     * @type {string}
     * @memberof Operations
     */
    'method': OperationsMethodEnum;
    /**
     * The relative path to use for the operation.
     * @type {string}
     * @memberof Operations
     */
    'path': string;
    /**
     * Any request query parameters. Example parameters: {\"count\":10, \"offset\":0}
     * @type {object}
     * @memberof Operations
     */
    'params'?: object;
    /**
     * A string containing the JSON body to use with the request.
     * @type {string}
     * @memberof Operations
     */
    'body'?: string;
    /**
     * An optional client-supplied id returned with the operation results.
     * @type {string}
     * @memberof Operations
     */
    'operation_id'?: string;
}

type OperationsMethodEnum = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

