/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FacebookAdsGetInfoResponseAllOf2Audience } from './facebook-ads-get-info-response-all-of2-audience';
import { ReportingFacebookAdReport200ResponseAllOf1Budget } from './reporting-facebook-ad-report200-response-all-of1-budget';
import { ReportingFacebookAdReport200ResponseAllOf1Channel } from './reporting-facebook-ad-report200-response-all-of1-channel';
import { ReportingFacebookAdReportResponseAllOf1AudienceActivity } from './reporting-facebook-ad-report-response-all-of1-audience-activity';
import { ReportingFacebookAdReportResponseAllOf1ReportSummary } from './reporting-facebook-ad-report-response-all-of1-report-summary';

/**
 * 
 * @export
 * @interface ReportingFacebookAdReport200ResponseAllOf1
 */
export interface ReportingFacebookAdReport200ResponseAllOf1 {
    /**
     * 
     * @type {ReportingFacebookAdReport200ResponseAllOf1Channel}
     * @memberof ReportingFacebookAdReport200ResponseAllOf1
     */
    'channel'?: ReportingFacebookAdReport200ResponseAllOf1Channel;
    /**
     * 
     * @type {FacebookAdsGetInfoResponseAllOf2Audience}
     * @memberof ReportingFacebookAdReport200ResponseAllOf1
     */
    'audience'?: FacebookAdsGetInfoResponseAllOf2Audience;
    /**
     * 
     * @type {ReportingFacebookAdReport200ResponseAllOf1Budget}
     * @memberof ReportingFacebookAdReport200ResponseAllOf1
     */
    'budget'?: ReportingFacebookAdReport200ResponseAllOf1Budget;
    /**
     * 
     * @type {ReportingFacebookAdReportResponseAllOf1ReportSummary}
     * @memberof ReportingFacebookAdReport200ResponseAllOf1
     */
    'report_summary'?: ReportingFacebookAdReportResponseAllOf1ReportSummary;
    /**
     * 
     * @type {ReportingFacebookAdReportResponseAllOf1AudienceActivity}
     * @memberof ReportingFacebookAdReport200ResponseAllOf1
     */
    'audience_activity'?: ReportingFacebookAdReportResponseAllOf1AudienceActivity;
}

