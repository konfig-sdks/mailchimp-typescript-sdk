/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * abandonedCart automation details.
 * @export
 * @interface AbandonedCartAutomationProperty6
 */
export interface AbandonedCartAutomationProperty6 {
    /**
     * Whether this store supports the abandonedCart automation.
     * @type {boolean}
     * @memberof AbandonedCartAutomationProperty6
     */
    'is_supported'?: boolean;
    /**
     * Unique ID of automation parent campaign.
     * @type {string}
     * @memberof AbandonedCartAutomationProperty6
     */
    'id'?: string;
    /**
     * Status of the abandonedCart automation.
     * @type {string}
     * @memberof AbandonedCartAutomationProperty6
     */
    'status'?: AbandonedCartAutomationProperty6StatusEnum;
}

type AbandonedCartAutomationProperty6StatusEnum = 'save' | 'sending' | 'paused'

