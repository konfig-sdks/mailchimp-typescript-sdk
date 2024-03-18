/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ECommerceReportProperty } from './ecommerce-report-property';

/**
 * For sent campaigns, a summary of opens, clicks, and e-commerce data.
 * @export
 * @interface CampaignReportSummaryProperty2
 */
export interface CampaignReportSummaryProperty2 {
    /**
     * The total number of opens for a campaign.
     * @type {number}
     * @memberof CampaignReportSummaryProperty2
     */
    'opens'?: number;
    /**
     * The number of unique opens.
     * @type {number}
     * @memberof CampaignReportSummaryProperty2
     */
    'unique_opens'?: number;
    /**
     * The number of unique opens divided by the total number of successful deliveries.
     * @type {number}
     * @memberof CampaignReportSummaryProperty2
     */
    'open_rate'?: number;
    /**
     * The total number of clicks for an campaign.
     * @type {number}
     * @memberof CampaignReportSummaryProperty2
     */
    'clicks'?: number;
    /**
     * The number of unique clicks.
     * @type {number}
     * @memberof CampaignReportSummaryProperty2
     */
    'subscriber_clicks'?: number;
    /**
     * The number of unique clicks divided by the total number of successful deliveries.
     * @type {number}
     * @memberof CampaignReportSummaryProperty2
     */
    'click_rate'?: number;
    /**
     * 
     * @type {ECommerceReportProperty}
     * @memberof CampaignReportSummaryProperty2
     */
    'ecommerce'?: ECommerceReportProperty;
}

