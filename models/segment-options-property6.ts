/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SegmentTypePropertyInner7 } from './segment-type-property-inner7';

/**
 * An object representing all segmentation options.
 * @export
 * @interface SegmentOptionsProperty6
 */
export interface SegmentOptionsProperty6 {
    /**
     * The id for an existing saved segment.
     * @type {number}
     * @memberof SegmentOptionsProperty6
     */
    'saved_segment_id'?: number;
    /**
     * Segment match type.
     * @type {string}
     * @memberof SegmentOptionsProperty6
     */
    'match'?: SegmentOptionsProperty6MatchEnum;
    /**
     * Segment match conditions. There are multiple possible types, see the [condition types documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#segment-condition-schemas).
     * @type {Array<SegmentTypePropertyInner7>}
     * @memberof SegmentOptionsProperty6
     */
    'conditions'?: Array<SegmentTypePropertyInner7>;
}

type SegmentOptionsProperty6MatchEnum = 'any' | 'all'


