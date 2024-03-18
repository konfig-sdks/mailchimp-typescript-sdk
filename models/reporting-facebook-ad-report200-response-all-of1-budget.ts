/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface ReportingFacebookAdReport200ResponseAllOf1Budget
 */
export interface ReportingFacebookAdReport200ResponseAllOf1Budget {
    /**
     * Duration of the ad in seconds
     * @type {number}
     * @memberof ReportingFacebookAdReport200ResponseAllOf1Budget
     */
    'duration'?: number;
    /**
     * Total budget of the ad
     * @type {number}
     * @memberof ReportingFacebookAdReport200ResponseAllOf1Budget
     */
    'total_amount'?: number;
    /**
     * Currency code
     * @type {string}
     * @memberof ReportingFacebookAdReport200ResponseAllOf1Budget
     */
    'currency_code'?: string;
}

