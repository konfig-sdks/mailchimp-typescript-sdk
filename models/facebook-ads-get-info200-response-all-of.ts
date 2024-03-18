/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Recipients1 } from './recipients1';
import { ReportSummary } from './report-summary';

/**
 * 
 * @export
 * @interface FacebookAdsGetInfo200ResponseAllOf
 */
export interface FacebookAdsGetInfo200ResponseAllOf {
    /**
     * Unique ID of an Outreach.
     * @type {string}
     * @memberof FacebookAdsGetInfo200ResponseAllOf
     */
    'id'?: string;
    /**
     * The ID used in the Mailchimp web application. For example, for a `regular` outreach, you can view this campaign in your Mailchimp account at `https://{dc}.admin.mailchimp.com/campaigns/show/?id={web_id}`.
     * @type {number}
     * @memberof FacebookAdsGetInfo200ResponseAllOf
     */
    'web_id'?: number;
    /**
     * Title or name of an Outreach.
     * @type {string}
     * @memberof FacebookAdsGetInfo200ResponseAllOf
     */
    'name'?: string;
    /**
     * The type of outreach this object is.
     * @type {string}
     * @memberof FacebookAdsGetInfo200ResponseAllOf
     */
    'type'?: FacebookAdsGetInfo200ResponseAllOfTypeEnum;
    /**
     * The status of this outreach.
     * @type {string}
     * @memberof FacebookAdsGetInfo200ResponseAllOf
     */
    'status'?: FacebookAdsGetInfo200ResponseAllOfStatusEnum;
    /**
     * Outreach report availability. Note: This property is hotly debated in what it _should_ convey. See [MCP-1371](https://jira.mailchimp.com/browse/MCP-1371) for more context.
     * @type {boolean}
     * @memberof FacebookAdsGetInfo200ResponseAllOf
     */
    'show_report'?: boolean;
    /**
     * The date and time the outreach was created in ISO 8601 format.
     * @type {string}
     * @memberof FacebookAdsGetInfo200ResponseAllOf
     */
    'create_time'?: string;
    /**
     * The date and time the outreach was started in ISO 8601 format.
     * @type {string}
     * @memberof FacebookAdsGetInfo200ResponseAllOf
     */
    'start_time'?: string;
    /**
     * The date and time the outreach was last updated in ISO 8601 format.
     * @type {string}
     * @memberof FacebookAdsGetInfo200ResponseAllOf
     */
    'updated_at'?: string;
    /**
     * The date and time the outreach was canceled in ISO 8601 format.
     * @type {string}
     * @memberof FacebookAdsGetInfo200ResponseAllOf
     */
    'canceled_at'?: string;
    /**
     * The date and time the outreach was (or will be) published in ISO 8601 format.
     * @type {string}
     * @memberof FacebookAdsGetInfo200ResponseAllOf
     */
    'published_time'?: string;
    /**
     * If this outreach targets a segment of your audience.
     * @type {boolean}
     * @memberof FacebookAdsGetInfo200ResponseAllOf
     */
    'has_segment'?: boolean;
    /**
     * 
     * @type {ReportSummary}
     * @memberof FacebookAdsGetInfo200ResponseAllOf
     */
    'report_summary'?: ReportSummary;
    /**
     * 
     * @type {Recipients1}
     * @memberof FacebookAdsGetInfo200ResponseAllOf
     */
    'recipients'?: Recipients1;
    /**
     * The URL of the thumbnail for this outreach.
     * @type {string}
     * @memberof FacebookAdsGetInfo200ResponseAllOf
     */
    'thumbnail'?: string;
}

type FacebookAdsGetInfo200ResponseAllOfTypeEnum = 'regular' | 'email-touchpoint' | 'plaintext' | 'rss' | 'reconfirm' | 'variate' | 'absplit' | 'automation' | 'facebook' | 'google' | 'autoresponder' | 'transactional' | 'page' | 'website' | 'social_post' | 'survey' | 'customer_journey' | 'sms'
type FacebookAdsGetInfo200ResponseAllOfStatusEnum = 'save' | 'paused' | 'schedule' | 'scheduled' | 'sending' | 'sent' | 'canceled' | 'canceling' | 'active' | 'disconnected' | 'somepaused' | 'draft' | 'completed' | 'partialRejected' | 'pending' | 'rejected' | 'published' | 'unpublished'


