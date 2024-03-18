/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Check if this ad is connected to a facebook page
 * @export
 * @interface FacebookAdsGetInfoResponseAllOf2Feedback
 */
export interface FacebookAdsGetInfoResponseAllOf2Feedback {
    /**
     * Feedback regarding the content of this Ad.
     * @type {string}
     * @memberof FacebookAdsGetInfoResponseAllOf2Feedback
     */
    'content'?: string;
    /**
     * Feedback regarding the audience of this Ad.
     * @type {string}
     * @memberof FacebookAdsGetInfoResponseAllOf2Feedback
     */
    'audience'?: string;
    /**
     * Feedback regarding the budget of this Ad.
     * @type {string}
     * @memberof FacebookAdsGetInfoResponseAllOf2Feedback
     */
    'budget'?: string;
    /**
     * Feedback regarding the compliance of this Ad.
     * @type {string}
     * @memberof FacebookAdsGetInfoResponseAllOf2Feedback
     */
    'compliance'?: string;
}

