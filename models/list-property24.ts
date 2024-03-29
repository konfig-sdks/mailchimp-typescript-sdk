/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SegmentOptionsProperty23 } from './segment-options-property23';

/**
 * List settings for the campaign.
 * @export
 * @interface ListProperty24
 */
export interface ListProperty24 {
    /**
     * The unique list id.
     * @type {string}
     * @memberof ListProperty24
     */
    'list_id': string;
    /**
     * The name of the list.
     * @type {string}
     * @memberof ListProperty24
     */
    'list_name'?: string;
    /**
     * A description of the [segment](https://mailchimp.com/help/save-and-manage-segments/) used for the campaign. Formatted as a string marked up with HTML.
     * @type {string}
     * @memberof ListProperty24
     */
    'segment_text'?: string;
    /**
     * Count of the recipients on the associated list. Formatted as an integer.
     * @type {number}
     * @memberof ListProperty24
     */
    'recipient_count'?: number;
    /**
     * 
     * @type {SegmentOptionsProperty23}
     * @memberof ListProperty24
     */
    'segment_opts'?: SegmentOptionsProperty23;
}

