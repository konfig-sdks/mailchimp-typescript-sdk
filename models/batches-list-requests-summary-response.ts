/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Batch } from './batch';
import { ResourceLink } from './resource-link';

/**
 * A summary of batch requests that have been made.
 * @export
 * @interface BatchesListRequestsSummaryResponse
 */
export interface BatchesListRequestsSummaryResponse {
    /**
     * An array of objects representing batch calls.
     * @type {Array<Batch>}
     * @memberof BatchesListRequestsSummaryResponse
     */
    'batches'?: Array<Batch>;
    /**
     * The total number of items matching the query regardless of pagination.
     * @type {number}
     * @memberof BatchesListRequestsSummaryResponse
     */
    'total_items'?: number;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof BatchesListRequestsSummaryResponse
     */
    '_links'?: Array<ResourceLink>;
}

