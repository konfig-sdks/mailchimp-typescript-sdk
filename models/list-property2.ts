/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SegmentOptionsProperty1 } from './segment-options-property1';

/**
 * List settings for the campaign.
 * @export
 * @interface ListProperty2
 */
export interface ListProperty2 {
    /**
     * The unique list id.
     * @type {string}
     * @memberof ListProperty2
     */
    'list_id': string;
    /**
     * 
     * @type {SegmentOptionsProperty1}
     * @memberof ListProperty2
     */
    'segment_opts'?: SegmentOptionsProperty1;
}

