/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SegmentOptionsProperty2 } from './segment-options-property2';

/**
 * List settings for the Automation.
 * @export
 * @interface ListProperty3
 */
export interface ListProperty3 {
    /**
     * The unique list id.
     * @type {string}
     * @memberof ListProperty3
     */
    'list_id'?: string;
    /**
     * The status of the list used, namely if it\'s deleted or disabled.
     * @type {boolean}
     * @memberof ListProperty3
     */
    'list_is_active'?: boolean;
    /**
     * List Name.
     * @type {string}
     * @memberof ListProperty3
     */
    'list_name'?: string;
    /**
     * 
     * @type {SegmentOptionsProperty2}
     * @memberof ListProperty3
     */
    'segment_opts'?: SegmentOptionsProperty2;
    /**
     * The id of the store.
     * @type {string}
     * @memberof ListProperty3
     */
    'store_id'?: string;
}

