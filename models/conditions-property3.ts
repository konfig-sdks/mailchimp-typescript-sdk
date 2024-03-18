/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SegmentTypePropertyInner28 } from './segment-type-property-inner28';

/**
 * The conditions of the segment. Static segments (tags) and fuzzy segments don\'t have conditions.
 * @export
 * @interface ConditionsProperty3
 */
export interface ConditionsProperty3 {
    /**
     * Match type.
     * @type {string}
     * @memberof ConditionsProperty3
     */
    'match'?: ConditionsProperty3MatchEnum;
    /**
     * Segment match conditions. There are multiple possible types, see the [condition types documentation](https://mailchimp.com/developer/marketing/docs/alternative-schemas/#segment-condition-schemas).
     * @type {Array<SegmentTypePropertyInner28>}
     * @memberof ConditionsProperty3
     */
    'conditions'?: Array<SegmentTypePropertyInner28>;
}

type ConditionsProperty3MatchEnum = 'any' | 'all'


