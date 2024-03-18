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
 * @interface StaticSegmentMemberSegment25
 */
export interface StaticSegmentMemberSegment25 {
    /**
     * 
     * @type {string}
     * @memberof StaticSegmentMemberSegment25
     */
    'condition_type'?: StaticSegmentMemberSegment25ConditionTypeEnum;
    /**
     * Segment by a given static segment.
     * @type {string}
     * @memberof StaticSegmentMemberSegment25
     */
    'field': StaticSegmentMemberSegment25FieldEnum;
    /**
     * Members who are/are not apart of a static segment.
     * @type {string}
     * @memberof StaticSegmentMemberSegment25
     */
    'op': StaticSegmentMemberSegment25OpEnum;
    /**
     * The id for the static segment.
     * @type {number}
     * @memberof StaticSegmentMemberSegment25
     */
    'value': number;
}

type StaticSegmentMemberSegment25ConditionTypeEnum = 'StaticSegment'
type StaticSegmentMemberSegment25FieldEnum = 'static_segment'
type StaticSegmentMemberSegment25OpEnum = 'static_is' | 'static_not'


