/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SegmentTypePropertyInner8 } from './segment-type-property-inner8';

/**
 * An object representing all segmentation options.
 * @export
 * @interface SegmentOptionsProperty7
 */
export interface SegmentOptionsProperty7 {
    /**
     * The id for an existing saved segment.
     * @type {number}
     * @memberof SegmentOptionsProperty7
     */
    'saved_segment_id'?: number;
    /**
     * Segment match type.
     * @type {string}
     * @memberof SegmentOptionsProperty7
     */
    'match'?: SegmentOptionsProperty7MatchEnum;
    /**
     * Segment match conditions. There are multiple possible types, see the [condition types documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#segment-condition-schemas).
     * @type {Array<SegmentTypePropertyInner8>}
     * @memberof SegmentOptionsProperty7
     */
    'conditions'?: Array<SegmentTypePropertyInner8>;
}

type SegmentOptionsProperty7MatchEnum = 'any' | 'all'


