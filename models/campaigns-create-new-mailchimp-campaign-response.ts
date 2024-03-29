/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ABTestOptionsProperty1 } from './abtest-options-property1';
import { ABTestingOptionsProperty } from './abtesting-options-property';
import { CampaignDeliveryStatusProperty } from './campaign-delivery-status-property';
import { CampaignReportSummaryProperty2 } from './campaign-report-summary-property2';
import { CampaignSettingsProperty4 } from './campaign-settings-property4';
import { CampaignSocialCardProperty } from './campaign-social-card-property';
import { CampaignTrackingOptionsProperty } from './campaign-tracking-options-property';
import { ListProperty17 } from './list-property17';
import { RSSOptionsProperty2 } from './rssoptions-property2';
import { ResendShortcutEligibilityProperty } from './resend-shortcut-eligibility-property';
import { ResourceLink } from './resource-link';

/**
 * A summary of an individual campaign\'s settings and content.
 * @export
 * @interface CampaignsCreateNewMailchimpCampaignResponse
 */
export interface CampaignsCreateNewMailchimpCampaignResponse {
    /**
     * A string that uniquely identifies this campaign.
     * @type {string}
     * @memberof CampaignsCreateNewMailchimpCampaignResponse
     */
    'id'?: string;
    /**
     * The ID used in the Mailchimp web application. View this campaign in your Mailchimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`.
     * @type {number}
     * @memberof CampaignsCreateNewMailchimpCampaignResponse
     */
    'web_id'?: number;
    /**
     * If this campaign is the child of another campaign, this identifies the parent campaign. For Example, for RSS or Automation children.
     * @type {string}
     * @memberof CampaignsCreateNewMailchimpCampaignResponse
     */
    'parent_campaign_id'?: string;
    /**
     * There are four types of [campaigns](https://mailchimp.com/help/getting-started-with-campaigns/) you can create in Mailchimp. A/B Split campaigns have been deprecated and variate campaigns should be used instead.
     * @type {string}
     * @memberof CampaignsCreateNewMailchimpCampaignResponse
     */
    'type'?: CampaignsCreateNewMailchimpCampaignResponseTypeEnum;
    /**
     * The date and time the campaign was created in ISO 8601 format.
     * @type {string}
     * @memberof CampaignsCreateNewMailchimpCampaignResponse
     */
    'create_time'?: string;
    /**
     * The link to the campaign\'s archive version in ISO 8601 format.
     * @type {string}
     * @memberof CampaignsCreateNewMailchimpCampaignResponse
     */
    'archive_url'?: string;
    /**
     * The original link to the campaign\'s archive version.
     * @type {string}
     * @memberof CampaignsCreateNewMailchimpCampaignResponse
     */
    'long_archive_url'?: string;
    /**
     * The current status of the campaign.
     * @type {string}
     * @memberof CampaignsCreateNewMailchimpCampaignResponse
     */
    'status'?: CampaignsCreateNewMailchimpCampaignResponseStatusEnum;
    /**
     * The total number of emails sent for this campaign.
     * @type {number}
     * @memberof CampaignsCreateNewMailchimpCampaignResponse
     */
    'emails_sent'?: number;
    /**
     * The date and time a campaign was sent.
     * @type {string}
     * @memberof CampaignsCreateNewMailchimpCampaignResponse
     */
    'send_time'?: string;
    /**
     * How the campaign\'s content is put together.
     * @type {string}
     * @memberof CampaignsCreateNewMailchimpCampaignResponse
     */
    'content_type'?: CampaignsCreateNewMailchimpCampaignResponseContentTypeEnum;
    /**
     * Determines if the campaign needs its blocks refreshed by opening the web-based campaign editor. Deprecated and will always return false.
     * @type {boolean}
     * @memberof CampaignsCreateNewMailchimpCampaignResponse
     */
    'needs_block_refresh'?: boolean;
    /**
     * Determines if the campaign qualifies to be resent to non-openers.
     * @type {boolean}
     * @memberof CampaignsCreateNewMailchimpCampaignResponse
     */
    'resendable'?: boolean;
    /**
     * 
     * @type {ListProperty17}
     * @memberof CampaignsCreateNewMailchimpCampaignResponse
     */
    'recipients'?: ListProperty17;
    /**
     * 
     * @type {CampaignSettingsProperty4}
     * @memberof CampaignsCreateNewMailchimpCampaignResponse
     */
    'settings'?: CampaignSettingsProperty4;
    /**
     * 
     * @type {ABTestOptionsProperty1}
     * @memberof CampaignsCreateNewMailchimpCampaignResponse
     */
    'variate_settings'?: ABTestOptionsProperty1;
    /**
     * 
     * @type {CampaignTrackingOptionsProperty}
     * @memberof CampaignsCreateNewMailchimpCampaignResponse
     */
    'tracking'?: CampaignTrackingOptionsProperty;
    /**
     * 
     * @type {RSSOptionsProperty2}
     * @memberof CampaignsCreateNewMailchimpCampaignResponse
     */
    'rss_opts'?: RSSOptionsProperty2;
    /**
     * 
     * @type {ABTestingOptionsProperty}
     * @memberof CampaignsCreateNewMailchimpCampaignResponse
     */
    'ab_split_opts'?: ABTestingOptionsProperty;
    /**
     * 
     * @type {CampaignSocialCardProperty}
     * @memberof CampaignsCreateNewMailchimpCampaignResponse
     */
    'social_card'?: CampaignSocialCardProperty;
    /**
     * 
     * @type {CampaignReportSummaryProperty2}
     * @memberof CampaignsCreateNewMailchimpCampaignResponse
     */
    'report_summary'?: CampaignReportSummaryProperty2;
    /**
     * 
     * @type {CampaignDeliveryStatusProperty}
     * @memberof CampaignsCreateNewMailchimpCampaignResponse
     */
    'delivery_status'?: CampaignDeliveryStatusProperty;
    /**
     * 
     * @type {ResendShortcutEligibilityProperty}
     * @memberof CampaignsCreateNewMailchimpCampaignResponse
     */
    'resend_shortcut_eligibility'?: ResendShortcutEligibilityProperty;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof CampaignsCreateNewMailchimpCampaignResponse
     */
    '_links'?: Array<ResourceLink>;
}

type CampaignsCreateNewMailchimpCampaignResponseTypeEnum = 'regular' | 'plaintext' | 'absplit' | 'rss' | 'variate'
type CampaignsCreateNewMailchimpCampaignResponseStatusEnum = 'save' | 'paused' | 'schedule' | 'sending' | 'sent' | 'canceled' | 'canceling' | 'archived'
type CampaignsCreateNewMailchimpCampaignResponseContentTypeEnum = 'template' | 'html' | 'url' | 'multichannel'


