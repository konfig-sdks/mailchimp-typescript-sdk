/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SegmentTypePropertyInner26 } from './segment-type-property-inner26';

/**
 * An object representing all segmentation options. This object should contain a `saved_segment_id` to use an existing segment, or you can create a new segment by including both `match` and `conditions` options.
 * @export
 * @interface SegmentOptionsProperty25
 */
export interface SegmentOptionsProperty25 {
    /**
     * The id for an existing saved segment.
     * @type {number}
     * @memberof SegmentOptionsProperty25
     */
    'saved_segment_id'?: number;
    /**
     * The prebuilt segment id, if a prebuilt segment has been designated for this campaign.
     * @type {string}
     * @memberof SegmentOptionsProperty25
     */
    'prebuilt_segment_id'?: string;
    /**
     * Segment match type.
     * @type {string}
     * @memberof SegmentOptionsProperty25
     */
    'match'?: SegmentOptionsProperty25MatchEnum;
    /**
     * Segment match conditions. There are multiple possible types, see the [condition types documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#segment-condition-schemas).
     * @type {Array<SegmentTypePropertyInner26>}
     * @memberof SegmentOptionsProperty25
     */
    'conditions'?: Array<SegmentTypePropertyInner26>;
}

type SegmentOptionsProperty25MatchEnum = 'any' | 'all'


