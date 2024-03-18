/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ListMembers3 } from './list-members3';
import { ResourceLink } from './resource-link';

/**
 * Manage members of a specific Mailchimp list, including currently subscribed, unsubscribed, and bounced members.
 * @export
 * @interface ListsGetMembersInfo200Response
 */
export interface ListsGetMembersInfo200Response {
    /**
     * An array of objects, each representing a specific list member.
     * @type {Array<ListMembers3>}
     * @memberof ListsGetMembersInfo200Response
     */
    'members'?: Array<ListMembers3>;
    /**
     * The list id.
     * @type {string}
     * @memberof ListsGetMembersInfo200Response
     */
    'list_id'?: string;
    /**
     * The total number of items matching the query regardless of pagination.
     * @type {number}
     * @memberof ListsGetMembersInfo200Response
     */
    'total_items'?: number;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ListsGetMembersInfo200Response
     */
    '_links'?: Array<ResourceLink>;
}

