/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Activity feed item representing a time when a contact was sent a particular postcard.
 * @export
 * @interface PostcardSent
 */
export interface PostcardSent {
    /**
     * The type of event activity.
     * @type {string}
     * @memberof PostcardSent
     */
    'activity_type'?: PostcardSentActivityTypeEnum;
    /**
     * The created at timestamp in ISO8601.
     * @type {string}
     * @memberof PostcardSent
     */
    'created_at_timestamp'?: string;
    /**
     * The outreach\'s unique id.
     * @type {string}
     * @memberof PostcardSent
     */
    'outreach_id'?: string;
    /**
     * The title of the outreach.
     * @type {string}
     * @memberof PostcardSent
     */
    'outreach_title'?: string;
}

type PostcardSentActivityTypeEnum = 'postcard_sent'

