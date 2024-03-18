/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1AudienceActivityClicksInner } from './reporting-list-facebook-ads-reports-response-facebook-ads-inner-all-of1-audience-activity-clicks-inner';
import { ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1AudienceActivityImpressionsInner } from './reporting-list-facebook-ads-reports-response-facebook-ads-inner-all-of1-audience-activity-impressions-inner';
import { ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1AudienceActivityRevenueInner } from './reporting-list-facebook-ads-reports-response-facebook-ads-inner-all-of1-audience-activity-revenue-inner';

/**
 * 
 * @export
 * @interface ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1AudienceActivity
 */
export interface ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1AudienceActivity {
    /**
     * 
     * @type {Array<ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1AudienceActivityClicksInner>}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1AudienceActivity
     */
    'clicks'?: Array<ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1AudienceActivityClicksInner>;
    /**
     * 
     * @type {Array<ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1AudienceActivityImpressionsInner>}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1AudienceActivity
     */
    'impressions'?: Array<ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1AudienceActivityImpressionsInner>;
    /**
     * 
     * @type {Array<ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1AudienceActivityRevenueInner>}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1AudienceActivity
     */
    'revenue'?: Array<ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1AudienceActivityRevenueInner>;
}
