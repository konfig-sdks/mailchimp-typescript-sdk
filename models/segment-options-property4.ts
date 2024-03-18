/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SegmentTypePropertyInner5 } from './segment-type-property-inner5';

/**
 * An object representing all segmentation options.
 * @export
 * @interface SegmentOptionsProperty4
 */
export interface SegmentOptionsProperty4 {
    /**
     * The id for an existing saved segment.
     * @type {number}
     * @memberof SegmentOptionsProperty4
     */
    'saved_segment_id'?: number;
    /**
     * Segment match type.
     * @type {string}
     * @memberof SegmentOptionsProperty4
     */
    'match'?: SegmentOptionsProperty4MatchEnum;
    /**
     * Segment match conditions. There are multiple possible types, see the [condition types documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#segment-condition-schemas).
     * @type {Array<SegmentTypePropertyInner5>}
     * @memberof SegmentOptionsProperty4
     */
    'conditions'?: Array<SegmentTypePropertyInner5>;
}

type SegmentOptionsProperty4MatchEnum = 'any' | 'all'

