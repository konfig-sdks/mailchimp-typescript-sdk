/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AutomationCampaignSettingsProperty1 } from './automation-campaign-settings-property1';
import { AutomationTrackingOptionsProperty } from './automation-tracking-options-property';
import { AutomationTriggerProperty1 } from './automation-trigger-property1';
import { CampaignReportSummaryProperty } from './campaign-report-summary-property';
import { ListProperty4 } from './list-property4';
import { ResourceLink } from './resource-link';

/**
 * A summary of an individual Automation workflow\'s settings and content.
 * @export
 * @interface AutomationWorkflow1
 */
export interface AutomationWorkflow1 {
    /**
     * A string that identifies the Automation.
     * @type {string}
     * @memberof AutomationWorkflow1
     */
    'id'?: string;
    /**
     * The date and time the Automation was created in ISO 8601 format.
     * @type {string}
     * @memberof AutomationWorkflow1
     */
    'create_time'?: string;
    /**
     * The date and time the Automation was started in ISO 8601 format.
     * @type {string}
     * @memberof AutomationWorkflow1
     */
    'start_time'?: string;
    /**
     * The current status of the Automation.
     * @type {string}
     * @memberof AutomationWorkflow1
     */
    'status'?: AutomationWorkflow1StatusEnum;
    /**
     * The total number of emails sent for the Automation.
     * @type {number}
     * @memberof AutomationWorkflow1
     */
    'emails_sent'?: number;
    /**
     * 
     * @type {ListProperty4}
     * @memberof AutomationWorkflow1
     */
    'recipients'?: ListProperty4;
    /**
     * 
     * @type {AutomationCampaignSettingsProperty1}
     * @memberof AutomationWorkflow1
     */
    'settings'?: AutomationCampaignSettingsProperty1;
    /**
     * 
     * @type {AutomationTrackingOptionsProperty}
     * @memberof AutomationWorkflow1
     */
    'tracking'?: AutomationTrackingOptionsProperty;
    /**
     * 
     * @type {AutomationTriggerProperty1}
     * @memberof AutomationWorkflow1
     */
    'trigger_settings'?: AutomationTriggerProperty1;
    /**
     * 
     * @type {CampaignReportSummaryProperty}
     * @memberof AutomationWorkflow1
     */
    'report_summary'?: CampaignReportSummaryProperty;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof AutomationWorkflow1
     */
    '_links'?: Array<ResourceLink>;
}

type AutomationWorkflow1StatusEnum = 'save' | 'paused' | 'sending'


