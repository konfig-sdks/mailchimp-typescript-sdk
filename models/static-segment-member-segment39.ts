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
 * @interface StaticSegmentMemberSegment39
 */
export interface StaticSegmentMemberSegment39 {
    /**
     * 
     * @type {string}
     * @memberof StaticSegmentMemberSegment39
     */
    'condition_type'?: StaticSegmentMemberSegment39ConditionTypeEnum;
    /**
     * Segment by a given static segment.
     * @type {string}
     * @memberof StaticSegmentMemberSegment39
     */
    'field': StaticSegmentMemberSegment39FieldEnum;
    /**
     * Members who are/are not apart of a static segment.
     * @type {string}
     * @memberof StaticSegmentMemberSegment39
     */
    'op': StaticSegmentMemberSegment39OpEnum;
    /**
     * The id for the static segment.
     * @type {number}
     * @memberof StaticSegmentMemberSegment39
     */
    'value': number;
}

type StaticSegmentMemberSegment39ConditionTypeEnum = 'StaticSegment'
type StaticSegmentMemberSegment39FieldEnum = 'static_segment'
type StaticSegmentMemberSegment39OpEnum = 'static_is' | 'static_not'

