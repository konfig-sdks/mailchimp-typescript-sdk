/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The most recent message in the conversation.
 * @export
 * @interface LastMessageProperty
 */
export interface LastMessageProperty {
    /**
     * A label representing the sender of this message.
     * @type {string}
     * @memberof LastMessageProperty
     */
    'from_label'?: string;
    /**
     * A label representing the email of the sender of this message.
     * @type {string}
     * @memberof LastMessageProperty
     */
    'from_email'?: string;
    /**
     * The subject of this message.
     * @type {string}
     * @memberof LastMessageProperty
     */
    'subject'?: string;
    /**
     * The plain-text content of the message.
     * @type {string}
     * @memberof LastMessageProperty
     */
    'message'?: string;
    /**
     * Whether this message has been marked as read.
     * @type {boolean}
     * @memberof LastMessageProperty
     */
    'read'?: boolean;
    /**
     * The date and time the message was either sent or received in ISO 8601 format.
     * @type {string}
     * @memberof LastMessageProperty
     */
    'timestamp'?: string;
}
