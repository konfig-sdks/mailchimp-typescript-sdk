/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { RecipientsProperty } from './recipients-property';
import { ReportSummaryProperty } from './report-summary-property';

/**
 * 
 * @export
 * @interface FacebookAdsListAdsResponseFacebookAdsInnerAllOf
 */
export interface FacebookAdsListAdsResponseFacebookAdsInnerAllOf {
    /**
     * Unique ID of an Outreach.
     * @type {string}
     * @memberof FacebookAdsListAdsResponseFacebookAdsInnerAllOf
     */
    'id'?: string;
    /**
     * The ID used in the Mailchimp web application. For example, for a `regular` outreach, you can view this campaign in your Mailchimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`.
     * @type {number}
     * @memberof FacebookAdsListAdsResponseFacebookAdsInnerAllOf
     */
    'web_id'?: number;
    /**
     * Title or name of an Outreach.
     * @type {string}
     * @memberof FacebookAdsListAdsResponseFacebookAdsInnerAllOf
     */
    'name'?: string;
    /**
     * The type of outreach this object is.
     * @type {string}
     * @memberof FacebookAdsListAdsResponseFacebookAdsInnerAllOf
     */
    'type'?: FacebookAdsListAdsResponseFacebookAdsInnerAllOfTypeEnum;
    /**
     * The status of this outreach.
     * @type {string}
     * @memberof FacebookAdsListAdsResponseFacebookAdsInnerAllOf
     */
    'status'?: FacebookAdsListAdsResponseFacebookAdsInnerAllOfStatusEnum;
    /**
     * Outreach report availability. Note: This property is hotly debated in what it _should_ convey. See [MCP-1371](https://jira.mailchimp.com/browse/MCP-1371) for more context.
     * @type {boolean}
     * @memberof FacebookAdsListAdsResponseFacebookAdsInnerAllOf
     */
    'show_report'?: boolean;
    /**
     * The date and time the outreach was created in ISO 8601 format.
     * @type {string}
     * @memberof FacebookAdsListAdsResponseFacebookAdsInnerAllOf
     */
    'create_time'?: string;
    /**
     * The date and time the outreach was started in ISO 8601 format.
     * @type {string}
     * @memberof FacebookAdsListAdsResponseFacebookAdsInnerAllOf
     */
    'start_time'?: string;
    /**
     * The date and time the outreach was last updated in ISO 8601 format.
     * @type {string}
     * @memberof FacebookAdsListAdsResponseFacebookAdsInnerAllOf
     */
    'updated_at'?: string;
    /**
     * The date and time the outreach was canceled in ISO 8601 format.
     * @type {string}
     * @memberof FacebookAdsListAdsResponseFacebookAdsInnerAllOf
     */
    'canceled_at'?: string;
    /**
     * The date and time the outreach was (or will be) published in ISO 8601 format.
     * @type {string}
     * @memberof FacebookAdsListAdsResponseFacebookAdsInnerAllOf
     */
    'published_time'?: string;
    /**
     * If this outreach targets a segment of your audience.
     * @type {boolean}
     * @memberof FacebookAdsListAdsResponseFacebookAdsInnerAllOf
     */
    'has_segment'?: boolean;
    /**
     * 
     * @type {ReportSummaryProperty}
     * @memberof FacebookAdsListAdsResponseFacebookAdsInnerAllOf
     */
    'report_summary'?: ReportSummaryProperty;
    /**
     * 
     * @type {RecipientsProperty}
     * @memberof FacebookAdsListAdsResponseFacebookAdsInnerAllOf
     */
    'recipients'?: RecipientsProperty;
    /**
     * The URL of the thumbnail for this outreach.
     * @type {string}
     * @memberof FacebookAdsListAdsResponseFacebookAdsInnerAllOf
     */
    'thumbnail'?: string;
}

type FacebookAdsListAdsResponseFacebookAdsInnerAllOfTypeEnum = 'regular' | 'email-touchpoint' | 'plaintext' | 'rss' | 'reconfirm' | 'variate' | 'absplit' | 'automation' | 'facebook' | 'google' | 'autoresponder' | 'transactional' | 'page' | 'website' | 'social_post' | 'survey' | 'customer_journey' | 'sms'
type FacebookAdsListAdsResponseFacebookAdsInnerAllOfStatusEnum = 'save' | 'paused' | 'schedule' | 'scheduled' | 'sending' | 'sent' | 'canceled' | 'canceling' | 'active' | 'disconnected' | 'somepaused' | 'draft' | 'completed' | 'partialRejected' | 'pending' | 'rejected' | 'published' | 'unpublished'


