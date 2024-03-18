/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AutomationDelayProperty } from './automation-delay-property';
import { CampaignSettingsProperty } from './campaign-settings-property';

/**
 * Update information about an individual Automation workflow email.
 * @export
 * @interface AutomationsUpdateWorkflowEmailRequest
 */
export interface AutomationsUpdateWorkflowEmailRequest {
    /**
     * 
     * @type {CampaignSettingsProperty}
     * @memberof AutomationsUpdateWorkflowEmailRequest
     */
    'settings'?: CampaignSettingsProperty;
    /**
     * 
     * @type {AutomationDelayProperty}
     * @memberof AutomationsUpdateWorkflowEmailRequest
     */
    'delay'?: AutomationDelayProperty;
}

