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
import { ListProperty7 } from './list-property7';
import { ResourceLink } from './resource-link';

/**
 * A summary of an individual Automation workflow\'s settings and content.
 * @export
 * @interface AutomationsGetClassicWorkflowInfoResponse
 */
export interface AutomationsGetClassicWorkflowInfoResponse {
    /**
     * A string that identifies the Automation.
     * @type {string}
     * @memberof AutomationsGetClassicWorkflowInfoResponse
     */
    'id'?: string;
    /**
     * The date and time the Automation was created in ISO 8601 format.
     * @type {string}
     * @memberof AutomationsGetClassicWorkflowInfoResponse
     */
    'create_time'?: string;
    /**
     * The date and time the Automation was started in ISO 8601 format.
     * @type {string}
     * @memberof AutomationsGetClassicWorkflowInfoResponse
     */
    'start_time'?: string;
    /**
     * The current status of the Automation.
     * @type {string}
     * @memberof AutomationsGetClassicWorkflowInfoResponse
     */
    'status'?: AutomationsGetClassicWorkflowInfoResponseStatusEnum;
    /**
     * The total number of emails sent for the Automation.
     * @type {number}
     * @memberof AutomationsGetClassicWorkflowInfoResponse
     */
    'emails_sent'?: number;
    /**
     * 
     * @type {ListProperty7}
     * @memberof AutomationsGetClassicWorkflowInfoResponse
     */
    'recipients'?: ListProperty7;
    /**
     * 
     * @type {AutomationCampaignSettingsProperty1}
     * @memberof AutomationsGetClassicWorkflowInfoResponse
     */
    'settings'?: AutomationCampaignSettingsProperty1;
    /**
     * 
     * @type {AutomationTrackingOptionsProperty}
     * @memberof AutomationsGetClassicWorkflowInfoResponse
     */
    'tracking'?: AutomationTrackingOptionsProperty;
    /**
     * 
     * @type {AutomationTriggerProperty1}
     * @memberof AutomationsGetClassicWorkflowInfoResponse
     */
    'trigger_settings'?: AutomationTriggerProperty1;
    /**
     * 
     * @type {CampaignReportSummaryProperty}
     * @memberof AutomationsGetClassicWorkflowInfoResponse
     */
    'report_summary'?: CampaignReportSummaryProperty;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof AutomationsGetClassicWorkflowInfoResponse
     */
    '_links'?: Array<ResourceLink>;
}

type AutomationsGetClassicWorkflowInfoResponseStatusEnum = 'save' | 'paused' | 'sending'


