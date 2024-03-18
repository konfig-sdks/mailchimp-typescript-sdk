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
 * An individual message in a conversation. Conversation tracking is a feature available to paid accounts that lets you view replies to your campaigns in your Mailchimp account.
 * @export
 * @interface ConversationsGetMessageByIdResponse
 */
export interface ConversationsGetMessageByIdResponse {
    /**
     * A string that uniquely identifies this message
     * @type {string}
     * @memberof ConversationsGetMessageByIdResponse
     */
    'id'?: string;
    /**
     * A string that identifies this message\'s conversation
     * @type {string}
     * @memberof ConversationsGetMessageByIdResponse
     */
    'conversation_id'?: string;
    /**
     * The list\'s web ID
     * @type {number}
     * @memberof ConversationsGetMessageByIdResponse
     */
    'list_id'?: number;
    /**
     * A label representing the sender of this message
     * @type {string}
     * @memberof ConversationsGetMessageByIdResponse
     */
    'from_label'?: string;
    /**
     * A label representing the email of the sender of this message
     * @type {string}
     * @memberof ConversationsGetMessageByIdResponse
     */
    'from_email'?: string;
    /**
     * The subject of this message
     * @type {string}
     * @memberof ConversationsGetMessageByIdResponse
     */
    'subject'?: string;
    /**
     * The plain-text content of the message
     * @type {string}
     * @memberof ConversationsGetMessageByIdResponse
     */
    'message'?: string;
    /**
     * Whether this message has been marked as read
     * @type {boolean}
     * @memberof ConversationsGetMessageByIdResponse
     */
    'read'?: boolean;
    /**
     * The date and time the message was either sent or received in ISO 8601 format.
     * @type {string}
     * @memberof ConversationsGetMessageByIdResponse
     */
    'timestamp'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ConversationsGetMessageByIdResponse
     */
    '_links'?: Array<ResourceLink>;
}

