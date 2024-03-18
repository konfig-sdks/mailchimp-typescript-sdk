/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Activity feed item representing a thread located in Inbox.
 * @export
 * @interface InboxThread
 */
export interface InboxThread {
    /**
     * The type of event activity.
     * @type {string}
     * @memberof InboxThread
     */
    'activity_type'?: InboxThreadActivityTypeEnum;
    /**
     * The created at timestamp in ISO8601.
     * @type {string}
     * @memberof InboxThread
     */
    'created_at_timestamp'?: string;
    /**
     * The ID of the thread.
     * @type {string}
     * @memberof InboxThread
     */
    'id'?: string;
    /**
     * The subject of the thread.
     * @type {string}
     * @memberof InboxThread
     */
    'thread_subject'?: string;
    /**
     * The url of the thread.
     * @type {string}
     * @memberof InboxThread
     */
    'thread_url'?: string;
    /**
     * The direction of the message noting if it is outbound or inbound.
     * @type {string}
     * @memberof InboxThread
     */
    'thread_direction'?: InboxThreadThreadDirectionEnum;
    /**
     * The author of the thread.
     * @type {string}
     * @memberof InboxThread
     */
    'thread_author'?: string;
}

type InboxThreadActivityTypeEnum = 'inbox_thread'
type InboxThreadThreadDirectionEnum = 'INBOUND' | 'OUTBOUND'

