/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * abandonedBrowse automation details. abandonedBrowse is also known as Product Retargeting Email or Retarget Site Visitors on the web.
 * @export
 * @interface AbandonedBrowseAutomationProperty5
 */
export interface AbandonedBrowseAutomationProperty5 {
    /**
     * Whether this store supports the abandonedBrowse automation.
     * @type {boolean}
     * @memberof AbandonedBrowseAutomationProperty5
     */
    'is_supported'?: boolean;
    /**
     * Unique ID of automation parent campaign.
     * @type {string}
     * @memberof AbandonedBrowseAutomationProperty5
     */
    'id'?: string;
    /**
     * Status of the abandonedBrowse automation.
     * @type {string}
     * @memberof AbandonedBrowseAutomationProperty5
     */
    'status'?: AbandonedBrowseAutomationProperty5StatusEnum;
}

type AbandonedBrowseAutomationProperty5StatusEnum = 'save' | 'sending' | 'paused'


