/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Activity feed item representing an SMS campaign sent to the contact.
 * @export
 * @interface SMSBulkSent
 */
export interface SMSBulkSent {
    /**
     * The type of event activity.
     * @type {string}
     * @memberof SMSBulkSent
     */
    'activity_type'?: SMSBulkSentActivityTypeEnum;
    /**
     * The created at timestamp in ISO8601.
     * @type {string}
     * @memberof SMSBulkSent
     */
    'created_at_timestamp'?: string;
    /**
     * The campaign\'s unique id.
     * @type {string}
     * @memberof SMSBulkSent
     */
    'campaign_id'?: string;
    /**
     * The title of the SMS campaign.
     * @type {string}
     * @memberof SMSBulkSent
     */
    'campaign_title'?: string;
}

type SMSBulkSentActivityTypeEnum = 'sms_bulk_sent'


