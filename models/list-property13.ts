/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SegmentOptionsProperty12 } from './segment-options-property12';

/**
 * List settings for the campaign.
 * @export
 * @interface ListProperty13
 */
export interface ListProperty13 {
    /**
     * The unique list id.
     * @type {string}
     * @memberof ListProperty13
     */
    'list_id'?: string;
    /**
     * The status of the list used, namely if it\'s deleted or disabled.
     * @type {boolean}
     * @memberof ListProperty13
     */
    'list_is_active'?: boolean;
    /**
     * The name of the list.
     * @type {string}
     * @memberof ListProperty13
     */
    'list_name'?: string;
    /**
     * A description of the [segment](https://mailchimp.com/help/getting-started-with-groups/) used for the campaign. Formatted as a string marked up with HTML.
     * @type {string}
     * @memberof ListProperty13
     */
    'segment_text'?: string;
    /**
     * Count of the recipients on the associated list. Formatted as an integer.
     * @type {number}
     * @memberof ListProperty13
     */
    'recipient_count'?: number;
    /**
     * 
     * @type {SegmentOptionsProperty12}
     * @memberof ListProperty13
     */
    'segment_opts'?: SegmentOptionsProperty12;
}

