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
import { ListProperty22 } from './list-property22';
import { RSSOptionsProperty2 } from './rssoptions-property2';
import { ResendShortcutEligibilityProperty } from './resend-shortcut-eligibility-property';
import { ResourceLink } from './resource-link';

/**
 * A summary of an individual campaign\'s settings and content.
 * @export
 * @interface CampaignsUpdateSettings200Response
 */
export interface CampaignsUpdateSettings200Response {
    /**
     * A string that uniquely identifies this campaign.
     * @type {string}
     * @memberof CampaignsUpdateSettings200Response
     */
    'id'?: string;
    /**
     * The ID used in the Mailchimp web application. View this campaign in your Mailchimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`.
     * @type {number}
     * @memberof CampaignsUpdateSettings200Response
     */
    'web_id'?: number;
    /**
     * If this campaign is the child of another campaign, this identifies the parent campaign. For Example, for RSS or Automation children.
     * @type {string}
     * @memberof CampaignsUpdateSettings200Response
     */
    'parent_campaign_id'?: string;
    /**
     * There are four types of [campaigns](https://mailchimp.com/help/getting-started-with-campaigns/) you can create in Mailchimp. A/B Split campaigns have been deprecated and variate campaigns should be used instead.
     * @type {string}
     * @memberof CampaignsUpdateSettings200Response
     */
    'type'?: CampaignsUpdateSettings200ResponseTypeEnum;
    /**
     * The date and time the campaign was created in ISO 8601 format.
     * @type {string}
     * @memberof CampaignsUpdateSettings200Response
     */
    'create_time'?: string;
    /**
     * The link to the campaign\'s archive version in ISO 8601 format.
     * @type {string}
     * @memberof CampaignsUpdateSettings200Response
     */
    'archive_url'?: string;
    /**
     * The original link to the campaign\'s archive version.
     * @type {string}
     * @memberof CampaignsUpdateSettings200Response
     */
    'long_archive_url'?: string;
    /**
     * The current status of the campaign.
     * @type {string}
     * @memberof CampaignsUpdateSettings200Response
     */
    'status'?: CampaignsUpdateSettings200ResponseStatusEnum;
    /**
     * The total number of emails sent for this campaign.
     * @type {number}
     * @memberof CampaignsUpdateSettings200Response
     */
    'emails_sent'?: number;
    /**
     * The date and time a campaign was sent.
     * @type {string}
     * @memberof CampaignsUpdateSettings200Response
     */
    'send_time'?: string;
    /**
     * How the campaign\'s content is put together.
     * @type {string}
     * @memberof CampaignsUpdateSettings200Response
     */
    'content_type'?: CampaignsUpdateSettings200ResponseContentTypeEnum;
    /**
     * Determines if the campaign needs its blocks refreshed by opening the web-based campaign editor. Deprecated and will always return false.
     * @type {boolean}
     * @memberof CampaignsUpdateSettings200Response
     */
    'needs_block_refresh'?: boolean;
    /**
     * Determines if the campaign qualifies to be resent to non-openers.
     * @type {boolean}
     * @memberof CampaignsUpdateSettings200Response
     */
    'resendable'?: boolean;
    /**
     * 
     * @type {ListProperty22}
     * @memberof CampaignsUpdateSettings200Response
     */
    'recipients'?: ListProperty22;
    /**
     * 
     * @type {CampaignSettingsProperty4}
     * @memberof CampaignsUpdateSettings200Response
     */
    'settings'?: CampaignSettingsProperty4;
    /**
     * 
     * @type {ABTestOptionsProperty1}
     * @memberof CampaignsUpdateSettings200Response
     */
    'variate_settings'?: ABTestOptionsProperty1;
    /**
     * 
     * @type {CampaignTrackingOptionsProperty}
     * @memberof CampaignsUpdateSettings200Response
     */
    'tracking'?: CampaignTrackingOptionsProperty;
    /**
     * 
     * @type {RSSOptionsProperty2}
     * @memberof CampaignsUpdateSettings200Response
     */
    'rss_opts'?: RSSOptionsProperty2;
    /**
     * 
     * @type {ABTestingOptionsProperty}
     * @memberof CampaignsUpdateSettings200Response
     */
    'ab_split_opts'?: ABTestingOptionsProperty;
    /**
     * 
     * @type {CampaignSocialCardProperty}
     * @memberof CampaignsUpdateSettings200Response
     */
    'social_card'?: CampaignSocialCardProperty;
    /**
     * 
     * @type {CampaignReportSummaryProperty2}
     * @memberof CampaignsUpdateSettings200Response
     */
    'report_summary'?: CampaignReportSummaryProperty2;
    /**
     * 
     * @type {CampaignDeliveryStatusProperty}
     * @memberof CampaignsUpdateSettings200Response
     */
    'delivery_status'?: CampaignDeliveryStatusProperty;
    /**
     * 
     * @type {ResendShortcutEligibilityProperty}
     * @memberof CampaignsUpdateSettings200Response
     */
    'resend_shortcut_eligibility'?: ResendShortcutEligibilityProperty;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof CampaignsUpdateSettings200Response
     */
    '_links'?: Array<ResourceLink>;
}

type CampaignsUpdateSettings200ResponseTypeEnum = 'regular' | 'plaintext' | 'absplit' | 'rss' | 'variate'
type CampaignsUpdateSettings200ResponseStatusEnum = 'save' | 'paused' | 'schedule' | 'sending' | 'sent' | 'canceled' | 'canceling' | 'archived'
type CampaignsUpdateSettings200ResponseContentTypeEnum = 'template' | 'html' | 'url' | 'multichannel'


