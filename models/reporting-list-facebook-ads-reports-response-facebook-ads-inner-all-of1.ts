/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Audience } from './facebook-ads-list-ads-response-facebook-ads-inner-all-of2-audience';
import { ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1AudienceActivity } from './reporting-list-facebook-ads-reports-response-facebook-ads-inner-all-of1-audience-activity';
import { ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1Budget } from './reporting-list-facebook-ads-reports-response-facebook-ads-inner-all-of1-budget';
import { ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1Channel } from './reporting-list-facebook-ads-reports-response-facebook-ads-inner-all-of1-channel';
import { ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummary } from './reporting-list-facebook-ads-reports-response-facebook-ads-inner-all-of1-report-summary';

/**
 * 
 * @export
 * @interface ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1
 */
export interface ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1 {
    /**
     * 
     * @type {ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1Channel}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1
     */
    'channel'?: ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1Channel;
    /**
     * 
     * @type {FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Audience}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1
     */
    'audience'?: FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Audience;
    /**
     * 
     * @type {ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1Budget}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1
     */
    'budget'?: ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1Budget;
    /**
     * 
     * @type {ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummary}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1
     */
    'report_summary'?: ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1ReportSummary;
    /**
     * 
     * @type {ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1AudienceActivity}
     * @memberof ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1
     */
    'audience_activity'?: ReportingListFacebookAdsReportsResponseFacebookAdsInnerAllOf1AudienceActivity;
}

