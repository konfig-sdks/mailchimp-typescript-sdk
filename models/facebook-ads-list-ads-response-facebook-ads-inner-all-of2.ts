/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Audience } from './facebook-ads-list-ads-response-facebook-ads-inner-all-of2-audience';
import { FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Budget } from './facebook-ads-list-ads-response-facebook-ads-inner-all-of2-budget';
import { FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Channel } from './facebook-ads-list-ads-response-facebook-ads-inner-all-of2-channel';
import { FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Content } from './facebook-ads-list-ads-response-facebook-ads-inner-all-of2-content';
import { FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Feedback } from './facebook-ads-list-ads-response-facebook-ads-inner-all-of2-feedback';
import { FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Site } from './facebook-ads-list-ads-response-facebook-ads-inner-all-of2-site';

/**
 * A facebook ad.
 * @export
 * @interface FacebookAdsListAdsResponseFacebookAdsInnerAllOf2
 */
export interface FacebookAdsListAdsResponseFacebookAdsInnerAllOf2 {
    /**
     * Check if this ad is connected to a facebook page
     * @type {boolean}
     * @memberof FacebookAdsListAdsResponseFacebookAdsInnerAllOf2
     */
    'is_connected'?: boolean;
    /**
     * Check if this ad has audience setup
     * @type {boolean}
     * @memberof FacebookAdsListAdsResponseFacebookAdsInnerAllOf2
     */
    'has_audience'?: boolean;
    /**
     * Check if this ad has content
     * @type {boolean}
     * @memberof FacebookAdsListAdsResponseFacebookAdsInnerAllOf2
     */
    'has_content'?: boolean;
    /**
     * 
     * @type {FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Channel}
     * @memberof FacebookAdsListAdsResponseFacebookAdsInnerAllOf2
     */
    'channel'?: FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Channel;
    /**
     * 
     * @type {FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Feedback}
     * @memberof FacebookAdsListAdsResponseFacebookAdsInnerAllOf2
     */
    'feedback'?: FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Feedback;
    /**
     * 
     * @type {FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Site}
     * @memberof FacebookAdsListAdsResponseFacebookAdsInnerAllOf2
     */
    'site'?: FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Site;
    /**
     * 
     * @type {FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Audience}
     * @memberof FacebookAdsListAdsResponseFacebookAdsInnerAllOf2
     */
    'audience'?: FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Audience;
    /**
     * 
     * @type {FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Budget}
     * @memberof FacebookAdsListAdsResponseFacebookAdsInnerAllOf2
     */
    'budget'?: FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Budget;
    /**
     * 
     * @type {FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Content}
     * @memberof FacebookAdsListAdsResponseFacebookAdsInnerAllOf2
     */
    'content'?: FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Content;
}

