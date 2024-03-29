/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AutomationDelayProperty1 } from './automation-delay-property1';
import { AutomationTriggerProperty1 } from './automation-trigger-property1';
import { CampaignReportSummaryProperty1 } from './campaign-report-summary-property1';
import { CampaignSettingsProperty3 } from './campaign-settings-property3';
import { CampaignSocialCardProperty } from './campaign-social-card-property';
import { CampaignTrackingOptionsProperty1 } from './campaign-tracking-options-property1';
import { ListProperty9 } from './list-property9';
import { ResourceLink } from './resource-link';

/**
 * A summary of an individual Automation workflow email.
 * @export
 * @interface AutomationWorkflowEmail
 */
export interface AutomationWorkflowEmail {
    /**
     * A string that uniquely identifies the Automation email.
     * @type {string}
     * @memberof AutomationWorkflowEmail
     */
    'id'?: string;
    /**
     * The ID used in the Mailchimp web application. View this automation in your Mailchimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`.
     * @type {number}
     * @memberof AutomationWorkflowEmail
     */
    'web_id'?: number;
    /**
     * A string that uniquely identifies an Automation workflow.
     * @type {string}
     * @memberof AutomationWorkflowEmail
     */
    'workflow_id'?: string;
    /**
     * The position of an Automation email in a workflow.
     * @type {number}
     * @memberof AutomationWorkflowEmail
     */
    'position'?: number;
    /**
     * 
     * @type {AutomationDelayProperty1}
     * @memberof AutomationWorkflowEmail
     */
    'delay'?: AutomationDelayProperty1;
    /**
     * The date and time the campaign was created in ISO 8601 format.
     * @type {string}
     * @memberof AutomationWorkflowEmail
     */
    'create_time'?: string;
    /**
     * The date and time the campaign was started in ISO 8601 format.
     * @type {string}
     * @memberof AutomationWorkflowEmail
     */
    'start_time'?: string;
    /**
     * The link to the campaign\'s archive version in ISO 8601 format.
     * @type {string}
     * @memberof AutomationWorkflowEmail
     */
    'archive_url'?: string;
    /**
     * The current status of the campaign.
     * @type {string}
     * @memberof AutomationWorkflowEmail
     */
    'status'?: AutomationWorkflowEmailStatusEnum;
    /**
     * The total number of emails sent for this campaign.
     * @type {number}
     * @memberof AutomationWorkflowEmail
     */
    'emails_sent'?: number;
    /**
     *  The date and time a campaign was sent in ISO 8601 format
     * @type {string}
     * @memberof AutomationWorkflowEmail
     */
    'send_time'?: string;
    /**
     * How the campaign\'s content is put together (\'template\', \'drag_and_drop\', \'html\', \'url\').
     * @type {string}
     * @memberof AutomationWorkflowEmail
     */
    'content_type'?: string;
    /**
     * Determines if the automation email needs its blocks refreshed by opening the web-based campaign editor.
     * @type {boolean}
     * @memberof AutomationWorkflowEmail
     */
    'needs_block_refresh'?: boolean;
    /**
     * Determines if the campaign contains the *|BRAND:LOGO|* merge tag.
     * @type {boolean}
     * @memberof AutomationWorkflowEmail
     */
    'has_logo_merge_tag'?: boolean;
    /**
     * 
     * @type {ListProperty9}
     * @memberof AutomationWorkflowEmail
     */
    'recipients'?: ListProperty9;
    /**
     * 
     * @type {CampaignSettingsProperty3}
     * @memberof AutomationWorkflowEmail
     */
    'settings'?: CampaignSettingsProperty3;
    /**
     * 
     * @type {CampaignTrackingOptionsProperty1}
     * @memberof AutomationWorkflowEmail
     */
    'tracking'?: CampaignTrackingOptionsProperty1;
    /**
     * 
     * @type {CampaignSocialCardProperty}
     * @memberof AutomationWorkflowEmail
     */
    'social_card'?: CampaignSocialCardProperty;
    /**
     * 
     * @type {AutomationTriggerProperty1}
     * @memberof AutomationWorkflowEmail
     */
    'trigger_settings'?: AutomationTriggerProperty1;
    /**
     * 
     * @type {CampaignReportSummaryProperty1}
     * @memberof AutomationWorkflowEmail
     */
    'report_summary'?: CampaignReportSummaryProperty1;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof AutomationWorkflowEmail
     */
    '_links'?: Array<ResourceLink>;
}

type AutomationWorkflowEmailStatusEnum = 'save' | 'paused' | 'sending'


