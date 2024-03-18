/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ABTestOptionsProperty2 } from './abtest-options-property2';
import { ABTestingOptionsProperty } from './abtesting-options-property';
import { CampaignDeliveryStatusProperty } from './campaign-delivery-status-property';
import { CampaignReportSummaryProperty3 } from './campaign-report-summary-property3';
import { CampaignSettingsProperty5 } from './campaign-settings-property5';
import { CampaignSocialCardProperty } from './campaign-social-card-property';
import { CampaignTrackingOptionsProperty } from './campaign-tracking-options-property';
import { ListProperty24 } from './list-property24';
import { RSSOptionsProperty3 } from './rssoptions-property3';
import { ResourceLink } from './resource-link';

/**
 * A summary of an individual campaign\'s settings and content.
 * @export
 * @interface CampaignsReplicateAction200Response
 */
export interface CampaignsReplicateAction200Response {
    /**
     * A string that uniquely identifies this campaign.
     * @type {string}
     * @memberof CampaignsReplicateAction200Response
     */
    'id'?: string;
    /**
     * The ID used in the Mailchimp web application. View this campaign in your Mailchimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`.
     * @type {number}
     * @memberof CampaignsReplicateAction200Response
     */
    'web_id'?: number;
    /**
     * If this campaign is the child of another campaign, this identifies the parent campaign. For Example, for RSS or Automation children.
     * @type {string}
     * @memberof CampaignsReplicateAction200Response
     */
    'parent_campaign_id'?: string;
    /**
     * There are four types of [campaigns](https://mailchimp.com/help/getting-started-with-campaigns/) you can create in Mailchimp. A/B Split campaigns have been deprecated and variate campaigns should be used instead.
     * @type {string}
     * @memberof CampaignsReplicateAction200Response
     */
    'type': CampaignsReplicateAction200ResponseTypeEnum;
    /**
     * The date and time the campaign was created in ISO 8601 format.
     * @type {string}
     * @memberof CampaignsReplicateAction200Response
     */
    'create_time'?: string;
    /**
     * The link to the campaign\'s archive version.
     * @type {string}
     * @memberof CampaignsReplicateAction200Response
     */
    'archive_url'?: string;
    /**
     * The original link to the campaign\'s archive version.
     * @type {string}
     * @memberof CampaignsReplicateAction200Response
     */
    'long_archive_url'?: string;
    /**
     * The current status of the campaign.
     * @type {string}
     * @memberof CampaignsReplicateAction200Response
     */
    'status'?: CampaignsReplicateAction200ResponseStatusEnum;
    /**
     * The total number of emails sent for this campaign.
     * @type {number}
     * @memberof CampaignsReplicateAction200Response
     */
    'emails_sent'?: number;
    /**
     * The date and time a campaign was sent in ISO 8601 format.
     * @type {string}
     * @memberof CampaignsReplicateAction200Response
     */
    'send_time'?: string;
    /**
     * How the campaign\'s content is put together (\'template\', \'drag_and_drop\', \'html\', \'url\').
     * @type {string}
     * @memberof CampaignsReplicateAction200Response
     */
    'content_type'?: string;
    /**
     * Determines if the campaign needs its blocks refreshed by opening the web-based campaign editor. Deprecated and will always return false.
     * @type {boolean}
     * @memberof CampaignsReplicateAction200Response
     */
    'needs_block_refresh'?: boolean;
    /**
     * Determines if the campaign qualifies to be resent to non-openers.
     * @type {boolean}
     * @memberof CampaignsReplicateAction200Response
     */
    'resendable'?: boolean;
    /**
     * 
     * @type {ListProperty24}
     * @memberof CampaignsReplicateAction200Response
     */
    'recipients'?: ListProperty24;
    /**
     * 
     * @type {CampaignSettingsProperty5}
     * @memberof CampaignsReplicateAction200Response
     */
    'settings'?: CampaignSettingsProperty5;
    /**
     * 
     * @type {ABTestOptionsProperty2}
     * @memberof CampaignsReplicateAction200Response
     */
    'variate_settings'?: ABTestOptionsProperty2;
    /**
     * 
     * @type {CampaignTrackingOptionsProperty}
     * @memberof CampaignsReplicateAction200Response
     */
    'tracking'?: CampaignTrackingOptionsProperty;
    /**
     * 
     * @type {RSSOptionsProperty3}
     * @memberof CampaignsReplicateAction200Response
     */
    'rss_opts'?: RSSOptionsProperty3;
    /**
     * 
     * @type {ABTestingOptionsProperty}
     * @memberof CampaignsReplicateAction200Response
     */
    'ab_split_opts'?: ABTestingOptionsProperty;
    /**
     * 
     * @type {CampaignSocialCardProperty}
     * @memberof CampaignsReplicateAction200Response
     */
    'social_card'?: CampaignSocialCardProperty;
    /**
     * 
     * @type {CampaignReportSummaryProperty3}
     * @memberof CampaignsReplicateAction200Response
     */
    'report_summary'?: CampaignReportSummaryProperty3;
    /**
     * 
     * @type {CampaignDeliveryStatusProperty}
     * @memberof CampaignsReplicateAction200Response
     */
    'delivery_status'?: CampaignDeliveryStatusProperty;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof CampaignsReplicateAction200Response
     */
    '_links'?: Array<ResourceLink>;
}

type CampaignsReplicateAction200ResponseTypeEnum = 'regular' | 'plaintext' | 'absplit' | 'rss' | 'variate'
type CampaignsReplicateAction200ResponseStatusEnum = 'save' | 'paused' | 'schedule' | 'sending' | 'sent' | 'canceled' | 'canceling' | 'archived'

