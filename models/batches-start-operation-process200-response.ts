/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ResourceLink } from './resource-link';

/**
 * The status of a batch request
 * @export
 * @interface BatchesStartOperationProcess200Response
 */
export interface BatchesStartOperationProcess200Response {
    /**
     * A string that uniquely identifies this batch request.
     * @type {string}
     * @memberof BatchesStartOperationProcess200Response
     */
    'id'?: string;
    /**
     * The status of the batch call. [Learn more](https://mailchimp.com/developer/marketing/guides/run-async-requests-batch-endpoint/#check-the-status-of-a-batch-operation) about the batch operation status.
     * @type {string}
     * @memberof BatchesStartOperationProcess200Response
     */
    'status'?: BatchesStartOperationProcess200ResponseStatusEnum;
    /**
     * The total number of operations to complete as part of this batch request. For GET requests requiring pagination, each page counts as a separate operation.
     * @type {number}
     * @memberof BatchesStartOperationProcess200Response
     */
    'total_operations'?: number;
    /**
     * The number of completed operations. This includes operations that returned an error.
     * @type {number}
     * @memberof BatchesStartOperationProcess200Response
     */
    'finished_operations'?: number;
    /**
     * The number of completed operations that returned an error.
     * @type {number}
     * @memberof BatchesStartOperationProcess200Response
     */
    'errored_operations'?: number;
    /**
     * The date and time when the server received the batch request in ISO 8601 format.
     * @type {string}
     * @memberof BatchesStartOperationProcess200Response
     */
    'submitted_at'?: string;
    /**
     * The date and time when all operations in the batch request completed in ISO 8601 format.
     * @type {string}
     * @memberof BatchesStartOperationProcess200Response
     */
    'completed_at'?: string;
    /**
     * The URL of the gzipped archive of the results of all the operations.
     * @type {string}
     * @memberof BatchesStartOperationProcess200Response
     */
    'response_body_url'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof BatchesStartOperationProcess200Response
     */
    '_links'?: Array<ResourceLink>;
}

type BatchesStartOperationProcess200ResponseStatusEnum = 'pending' | 'preprocessing' | 'started' | 'finalizing' | 'finished'


