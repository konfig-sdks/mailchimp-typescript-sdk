/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LastMessageProperty } from './last-message-property';
import { ResourceLink } from './resource-link';

/**
 * Details about an individual conversation. Conversation tracking is a feature available to paid accounts that lets you view replies to your campaigns in your Mailchimp account.
 * @export
 * @interface ConversationsGetByIdResponse
 */
export interface ConversationsGetByIdResponse {
    /**
     * A string that uniquely identifies this conversation.
     * @type {string}
     * @memberof ConversationsGetByIdResponse
     */
    'id'?: string;
    /**
     * The total number of messages in this conversation.
     * @type {number}
     * @memberof ConversationsGetByIdResponse
     */
    'message_count'?: number;
    /**
     * The unique identifier of the campaign for this conversation.
     * @type {string}
     * @memberof ConversationsGetByIdResponse
     */
    'campaign_id'?: string;
    /**
     * The unique identifier of the list for this conversation.
     * @type {string}
     * @memberof ConversationsGetByIdResponse
     */
    'list_id'?: string;
    /**
     * The number of unread messages in this conversation.
     * @type {number}
     * @memberof ConversationsGetByIdResponse
     */
    'unread_messages'?: number;
    /**
     * A label representing the sender of this message.
     * @type {string}
     * @memberof ConversationsGetByIdResponse
     */
    'from_label'?: string;
    /**
     * A label representing the email of the sender of this message.
     * @type {string}
     * @memberof ConversationsGetByIdResponse
     */
    'from_email'?: string;
    /**
     * The subject of the message.
     * @type {string}
     * @memberof ConversationsGetByIdResponse
     */
    'subject'?: string;
    /**
     * 
     * @type {LastMessageProperty}
     * @memberof ConversationsGetByIdResponse
     */
    'last_message'?: LastMessageProperty;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ConversationsGetByIdResponse
     */
    '_links'?: Array<ResourceLink>;
}
