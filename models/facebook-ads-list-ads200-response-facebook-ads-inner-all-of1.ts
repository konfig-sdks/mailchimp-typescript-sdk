/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FacebookAdsListAds200ResponseFacebookAdsInnerAllOf1Budget } from './facebook-ads-list-ads200-response-facebook-ads-inner-all-of1-budget';
import { FacebookAdsListAds200ResponseFacebookAdsInnerAllOf1Channel } from './facebook-ads-list-ads200-response-facebook-ads-inner-all-of1-channel';
import { FacebookAdsListAds200ResponseFacebookAdsInnerAllOf1Site } from './facebook-ads-list-ads200-response-facebook-ads-inner-all-of1-site';
import { FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Audience } from './facebook-ads-list-ads-response-facebook-ads-inner-all-of2-audience';
import { FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Content } from './facebook-ads-list-ads-response-facebook-ads-inner-all-of2-content';
import { FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Feedback } from './facebook-ads-list-ads-response-facebook-ads-inner-all-of2-feedback';

/**
 * A facebook ad.
 * @export
 * @interface FacebookAdsListAds200ResponseFacebookAdsInnerAllOf1
 */
export interface FacebookAdsListAds200ResponseFacebookAdsInnerAllOf1 {
    /**
     * Check if this ad is connected to a facebook page
     * @type {boolean}
     * @memberof FacebookAdsListAds200ResponseFacebookAdsInnerAllOf1
     */
    'is_connected'?: boolean;
    /**
     * Check if this ad has audience setup
     * @type {boolean}
     * @memberof FacebookAdsListAds200ResponseFacebookAdsInnerAllOf1
     */
    'has_audience'?: boolean;
    /**
     * Check if this ad has content
     * @type {boolean}
     * @memberof FacebookAdsListAds200ResponseFacebookAdsInnerAllOf1
     */
    'has_content'?: boolean;
    /**
     * 
     * @type {FacebookAdsListAds200ResponseFacebookAdsInnerAllOf1Channel}
     * @memberof FacebookAdsListAds200ResponseFacebookAdsInnerAllOf1
     */
    'channel'?: FacebookAdsListAds200ResponseFacebookAdsInnerAllOf1Channel;
    /**
     * 
     * @type {FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Feedback}
     * @memberof FacebookAdsListAds200ResponseFacebookAdsInnerAllOf1
     */
    'feedback'?: FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Feedback;
    /**
     * 
     * @type {FacebookAdsListAds200ResponseFacebookAdsInnerAllOf1Site}
     * @memberof FacebookAdsListAds200ResponseFacebookAdsInnerAllOf1
     */
    'site'?: FacebookAdsListAds200ResponseFacebookAdsInnerAllOf1Site;
    /**
     * 
     * @type {FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Audience}
     * @memberof FacebookAdsListAds200ResponseFacebookAdsInnerAllOf1
     */
    'audience'?: FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Audience;
    /**
     * 
     * @type {FacebookAdsListAds200ResponseFacebookAdsInnerAllOf1Budget}
     * @memberof FacebookAdsListAds200ResponseFacebookAdsInnerAllOf1
     */
    'budget'?: FacebookAdsListAds200ResponseFacebookAdsInnerAllOf1Budget;
    /**
     * 
     * @type {FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Content}
     * @memberof FacebookAdsListAds200ResponseFacebookAdsInnerAllOf1
     */
    'content'?: FacebookAdsListAdsResponseFacebookAdsInnerAllOf2Content;
}

