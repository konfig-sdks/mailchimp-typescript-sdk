/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Interest } from './interest';
import { ResourceLink } from './resource-link';

/**
 * A list of this category\'s interests
 * @export
 * @interface ListsListCategoryInterests200Response
 */
export interface ListsListCategoryInterests200Response {
    /**
     * An array of this category\'s interests
     * @type {Array<Interest>}
     * @memberof ListsListCategoryInterests200Response
     */
    'interests'?: Array<Interest>;
    /**
     * The unique list id that the interests belong to.
     * @type {string}
     * @memberof ListsListCategoryInterests200Response
     */
    'list_id'?: string;
    /**
     * The id for the interest category.
     * @type {string}
     * @memberof ListsListCategoryInterests200Response
     */
    'category_id'?: string;
    /**
     * The total number of items matching the query regardless of pagination.
     * @type {number}
     * @memberof ListsListCategoryInterests200Response
     */
    'total_items'?: number;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ListsListCategoryInterests200Response
     */
    '_links'?: Array<ResourceLink>;
}

