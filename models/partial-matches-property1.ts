/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ListMembers7 } from './list-members7';

/**
 * Partial matches of the provided search query.
 * @export
 * @interface PartialMatchesProperty1
 */
export interface PartialMatchesProperty1 {
    /**
     * An array of objects, each representing a specific list member.
     * @type {Array<ListMembers7>}
     * @memberof PartialMatchesProperty1
     */
    'members'?: Array<ListMembers7>;
    /**
     * The total number of items matching the query regardless of pagination.
     * @type {number}
     * @memberof PartialMatchesProperty1
     */
    'total_items'?: number;
}

