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
 * @interface StaticSegmentMemberSegment31
 */
export interface StaticSegmentMemberSegment31 {
    /**
     * 
     * @type {string}
     * @memberof StaticSegmentMemberSegment31
     */
    'condition_type'?: StaticSegmentMemberSegment31ConditionTypeEnum;
    /**
     * Segment by a given static segment.
     * @type {string}
     * @memberof StaticSegmentMemberSegment31
     */
    'field': StaticSegmentMemberSegment31FieldEnum;
    /**
     * Members who are/are not apart of a static segment.
     * @type {string}
     * @memberof StaticSegmentMemberSegment31
     */
    'op': StaticSegmentMemberSegment31OpEnum;
    /**
     * The id for the static segment.
     * @type {number}
     * @memberof StaticSegmentMemberSegment31
     */
    'value': number;
}

type StaticSegmentMemberSegment31ConditionTypeEnum = 'StaticSegment'
type StaticSegmentMemberSegment31FieldEnum = 'static_segment'
type StaticSegmentMemberSegment31OpEnum = 'static_is' | 'static_not'


