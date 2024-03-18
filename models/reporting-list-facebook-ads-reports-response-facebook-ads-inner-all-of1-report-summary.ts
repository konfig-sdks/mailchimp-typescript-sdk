/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummaryAverageOrderAmount } from './reporting-list-facebook-ads-reports-response-facebook-ads-inner-all-of1-report-summary-average-order-amount';
import { ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummaryEcommerce } from './reporting-list-facebook-ads-reports-response-facebook-ads-inner-all-of1-report-summary-ecommerce';
import { ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummaryExtendedAt } from './reporting-list-facebook-ads-reports-response-facebook-ads-inner-all-of1-report-summary-extended-at';

/**
 * Report summary of facebook ad
 * @export
 * @interface ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummary
 */
export interface ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummary {
    /**
     * 
     * @type {number}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummary
     */
    'reach'?: number;
    /**
     * 
     * @type {number}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummary
     */
    'impressions'?: number;
    /**
     * 
     * @type {number}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummary
     */
    'clicks'?: number;
    /**
     * 
     * @type {number}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummary
     */
    'click_rate'?: number;
    /**
     * 
     * @type {number}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummary
     */
    'unique_clicks'?: number;
    /**
     * 
     * @type {number}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummary
     */
    'first_time_buyers'?: number;
    /**
     * 
     * @type {ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummaryEcommerce}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummary
     */
    'ecommerce'?: ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummaryEcommerce;
    /**
     * 
     * @type {number}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummary
     */
    'total_products_sold'?: number;
    /**
     * 
     * @type {number}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummary
     */
    'total_orders'?: number;
    /**
     * 
     * @type {ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummaryAverageOrderAmount}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummary
     */
    'average_order_amount'?: ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummaryAverageOrderAmount;
    /**
     * 
     * @type {ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummaryAverageOrderAmount}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummary
     */
    'cost_per_click'?: ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummaryAverageOrderAmount;
    /**
     * 
     * @type {ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummaryAverageOrderAmount}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummary
     */
    'average_daily_budget'?: ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummaryAverageOrderAmount;
    /**
     * 
     * @type {number}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummary
     */
    'likes'?: number;
    /**
     * 
     * @type {number}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummary
     */
    'comments'?: number;
    /**
     * 
     * @type {number}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummary
     */
    'shares'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummary
     */
    'has_extended_ad_duration'?: boolean;
    /**
     * 
     * @type {ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummaryExtendedAt}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummary
     */
    'extended_at'?: ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummaryExtendedAt;
    /**
     * 
     * @type {number}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummary
     */
    'return_on_investment'?: number;
}
