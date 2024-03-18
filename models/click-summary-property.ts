/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Location } from './location';

/**
 * A summary of the click-throughs on the campaign\'s URL.
 * @export
 * @interface ClickSummaryProperty
 */
export interface ClickSummaryProperty {
    /**
     * The total number of clicks to the campaign\'s URL.
     * @type {number}
     * @memberof ClickSummaryProperty
     */
    'clicks'?: number;
    /**
     * The timestamp for the first click to the URL.
     * @type {string}
     * @memberof ClickSummaryProperty
     */
    'first_click'?: string;
    /**
     * The timestamp for the last click to the URL.
     * @type {string}
     * @memberof ClickSummaryProperty
     */
    'last_click'?: string;
    /**
     * A summary of the top click locations.
     * @type {Array<Location>}
     * @memberof ClickSummaryProperty
     */
    'locations'?: Array<Location>;
}
