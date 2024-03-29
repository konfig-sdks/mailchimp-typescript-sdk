/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by a given static segment.
 * @export
 * @interface StaticSegmentMemberSegment35
 */
export interface StaticSegmentMemberSegment35 {
    /**
     * 
     * @type {string}
     * @memberof StaticSegmentMemberSegment35
     */
    'condition_type'?: StaticSegmentMemberSegment35ConditionTypeEnum;
    /**
     * Segment by a given static segment.
     * @type {string}
     * @memberof StaticSegmentMemberSegment35
     */
    'field': StaticSegmentMemberSegment35FieldEnum;
    /**
     * Members who are/are not apart of a static segment.
     * @type {string}
     * @memberof StaticSegmentMemberSegment35
     */
    'op': StaticSegmentMemberSegment35OpEnum;
    /**
     * The id for the static segment.
     * @type {number}
     * @memberof StaticSegmentMemberSegment35
     */
    'value': number;
}

type StaticSegmentMemberSegment35ConditionTypeEnum = 'StaticSegment'
type StaticSegmentMemberSegment35FieldEnum = 'static_segment'
type StaticSegmentMemberSegment35OpEnum = 'static_is' | 'static_not'


