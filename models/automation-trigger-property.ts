/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Trigger settings for the Automation.
 * @export
 * @interface AutomationTriggerProperty
 */
export interface AutomationTriggerProperty {
    /**
     * The type of Automation workflow. Currently only supports \'abandonedCart\'.
     * @type {string}
     * @memberof AutomationTriggerProperty
     */
    'workflow_type': string;
}

