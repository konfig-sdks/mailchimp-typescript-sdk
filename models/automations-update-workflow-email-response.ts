/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AutomationDelayProperty5 } from './automation-delay-property5';
import { AutomationTriggerProperty1 } from './automation-trigger-property1';
import { CampaignReportSummaryProperty1 } from './campaign-report-summary-property1';
import { CampaignSettingsProperty3 } from './campaign-settings-property3';
import { CampaignSocialCardProperty } from './campaign-social-card-property';
import { CampaignTrackingOptionsProperty1 } from './campaign-tracking-options-property1';
import { ListProperty13 } from './list-property13';
import { ResourceLink } from './resource-link';

/**
 * A summary of an individual Automation workflow email.
 * @export
 * @interface AutomationsUpdateWorkflowEmailResponse
 */
export interface AutomationsUpdateWorkflowEmailResponse {
    /**
     * A string that uniquely identifies the Automation email.
     * @type {string}
     * @memberof AutomationsUpdateWorkflowEmailResponse
     */
    'id'?: string;
    /**
     * The ID used in the Mailchimp web application. View this automation in your Mailchimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`.
     * @type {number}
     * @memberof AutomationsUpdateWorkflowEmailResponse
     */
    'web_id'?: number;
    /**
     * A string that uniquely identifies an Automation workflow.
     * @type {string}
     * @memberof AutomationsUpdateWorkflowEmailResponse
     */
    'workflow_id'?: string;
    /**
     * The position of an Automation email in a workflow.
     * @type {number}
     * @memberof AutomationsUpdateWorkflowEmailResponse
     */
    'position'?: number;
    /**
     * 
     * @type {AutomationDelayProperty5}
     * @memberof AutomationsUpdateWorkflowEmailResponse
     */
    'delay'?: AutomationDelayProperty5;
    /**
     * The date and time the campaign was created in ISO 8601 format.
     * @type {string}
     * @memberof AutomationsUpdateWorkflowEmailResponse
     */
    'create_time'?: string;
    /**
     * The date and time the campaign was started in ISO 8601 format.
     * @type {string}
     * @memberof AutomationsUpdateWorkflowEmailResponse
     */
    'start_time'?: string;
    /**
     * The link to the campaign\'s archive version in ISO 8601 format.
     * @type {string}
     * @memberof AutomationsUpdateWorkflowEmailResponse
     */
    'archive_url'?: string;
    /**
     * The current status of the campaign.
     * @type {string}
     * @memberof AutomationsUpdateWorkflowEmailResponse
     */
    'status'?: AutomationsUpdateWorkflowEmailResponseStatusEnum;
    /**
     * The total number of emails sent for this campaign.
     * @type {number}
     * @memberof AutomationsUpdateWorkflowEmailResponse
     */
    'emails_sent'?: number;
    /**
     *  The date and time a campaign was sent in ISO 8601 format
     * @type {string}
     * @memberof AutomationsUpdateWorkflowEmailResponse
     */
    'send_time'?: string;
    /**
     * How the campaign\'s content is put together (\'template\', \'drag_and_drop\', \'html\', \'url\').
     * @type {string}
     * @memberof AutomationsUpdateWorkflowEmailResponse
     */
    'content_type'?: string;
    /**
     * Determines if the automation email needs its blocks refreshed by opening the web-based campaign editor.
     * @type {boolean}
     * @memberof AutomationsUpdateWorkflowEmailResponse
     */
    'needs_block_refresh'?: boolean;
    /**
     * Determines if the campaign contains the *|BRAND:LOGO|* merge tag.
     * @type {boolean}
     * @memberof AutomationsUpdateWorkflowEmailResponse
     */
    'has_logo_merge_tag'?: boolean;
    /**
     * 
     * @type {ListProperty13}
     * @memberof AutomationsUpdateWorkflowEmailResponse
     */
    'recipients'?: ListProperty13;
    /**
     * 
     * @type {CampaignSettingsProperty3}
     * @memberof AutomationsUpdateWorkflowEmailResponse
     */
    'settings'?: CampaignSettingsProperty3;
    /**
     * 
     * @type {CampaignTrackingOptionsProperty1}
     * @memberof AutomationsUpdateWorkflowEmailResponse
     */
    'tracking'?: CampaignTrackingOptionsProperty1;
    /**
     * 
     * @type {CampaignSocialCardProperty}
     * @memberof AutomationsUpdateWorkflowEmailResponse
     */
    'social_card'?: CampaignSocialCardProperty;
    /**
     * 
     * @type {AutomationTriggerProperty1}
     * @memberof AutomationsUpdateWorkflowEmailResponse
     */
    'trigger_settings'?: AutomationTriggerProperty1;
    /**
     * 
     * @type {CampaignReportSummaryProperty1}
     * @memberof AutomationsUpdateWorkflowEmailResponse
     */
    'report_summary'?: CampaignReportSummaryProperty1;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof AutomationsUpdateWorkflowEmailResponse
     */
    '_links'?: Array<ResourceLink>;
}

type AutomationsUpdateWorkflowEmailResponseStatusEnum = 'save' | 'paused' | 'sending'


