/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ResourceLink } from './resource-link';
import { TagsPropertyInner2 } from './tags-property-inner2';

/**
 * A list of tags assigned to a list member.
 * @export
 * @interface ListsGetMemberTagsResponse
 */
export interface ListsGetMemberTagsResponse {
    /**
     * A list of tags assigned to the list member.
     * @type {Array<TagsPropertyInner2>}
     * @memberof ListsGetMemberTagsResponse
     */
    'tags'?: Array<TagsPropertyInner2>;
    /**
     * The total number of items matching the query regardless of pagination.
     * @type {number}
     * @memberof ListsGetMemberTagsResponse
     */
    'total_items'?: number;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ListsGetMemberTagsResponse
     */
    '_links'?: Array<ResourceLink>;
}

