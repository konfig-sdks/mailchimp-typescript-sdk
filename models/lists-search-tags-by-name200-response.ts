/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TagsPropertyInner1 } from './tags-property-inner1';

/**
 * A list of tags matching the input query.
 * @export
 * @interface ListsSearchTagsByName200Response
 */
export interface ListsSearchTagsByName200Response {
    /**
     * A list of matching tags.
     * @type {Array<TagsPropertyInner1>}
     * @memberof ListsSearchTagsByName200Response
     */
    'tags'?: Array<TagsPropertyInner1>;
    /**
     * The total number of items matching the query regardless of pagination.
     * @type {number}
     * @memberof ListsSearchTagsByName200Response
     */
    'total_items'?: number;
}

