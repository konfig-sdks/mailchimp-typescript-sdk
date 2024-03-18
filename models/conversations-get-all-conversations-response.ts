/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Conversation } from './conversation';
import { ResourceLink } from './resource-link';

/**
 * A collection of this account\'s tracked conversations.
 * @export
 * @interface ConversationsGetAllConversationsResponse
 */
export interface ConversationsGetAllConversationsResponse {
    /**
     * A list of conversations.
     * @type {Array<Conversation>}
     * @memberof ConversationsGetAllConversationsResponse
     */
    'conversations'?: Array<Conversation>;
    /**
     * The total number of items matching the query regardless of pagination.
     * @type {number}
     * @memberof ConversationsGetAllConversationsResponse
     */
    'total_items'?: number;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ConversationsGetAllConversationsResponse
     */
    '_links'?: Array<ResourceLink>;
}
