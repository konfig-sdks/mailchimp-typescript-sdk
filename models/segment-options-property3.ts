/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SegmentTypePropertyInner4 } from './segment-type-property-inner4';

/**
 * An object representing all segmentation options.
 * @export
 * @interface SegmentOptionsProperty3
 */
export interface SegmentOptionsProperty3 {
    /**
     * The id for an existing saved segment.
     * @type {number}
     * @memberof SegmentOptionsProperty3
     */
    'saved_segment_id'?: number;
    /**
     * Segment match type.
     * @type {string}
     * @memberof SegmentOptionsProperty3
     */
    'match'?: SegmentOptionsProperty3MatchEnum;
    /**
     * Segment match conditions. There are multiple possible types, see the [condition types documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#segment-condition-schemas).
     * @type {Array<SegmentTypePropertyInner4>}
     * @memberof SegmentOptionsProperty3
     */
    'conditions'?: Array<SegmentTypePropertyInner4>;
}

type SegmentOptionsProperty3MatchEnum = 'any' | 'all'


