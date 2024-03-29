/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MergeField } from './merge-field';
import { ResourceLink } from './resource-link';

/**
 * The [merge fields](https://mailchimp.com/developer/marketing/docs/merge-fields/) for an audience.
 * @export
 * @interface ListsListMergeFieldsResponse
 */
export interface ListsListMergeFieldsResponse {
    /**
     * An array of objects, each representing a merge field resource.
     * @type {Array<MergeField>}
     * @memberof ListsListMergeFieldsResponse
     */
    'merge_fields'?: Array<MergeField>;
    /**
     * The list id.
     * @type {string}
     * @memberof ListsListMergeFieldsResponse
     */
    'list_id'?: string;
    /**
     * The total number of items matching the query regardless of pagination.
     * @type {number}
     * @memberof ListsListMergeFieldsResponse
     */
    'total_items'?: number;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ListsListMergeFieldsResponse
     */
    '_links'?: Array<ResourceLink>;
}

