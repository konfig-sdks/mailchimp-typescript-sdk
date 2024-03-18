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
 * @interface StaticSegmentMemberSegment23
 */
export interface StaticSegmentMemberSegment23 {
    /**
     * 
     * @type {string}
     * @memberof StaticSegmentMemberSegment23
     */
    'condition_type'?: StaticSegmentMemberSegment23ConditionTypeEnum;
    /**
     * Segment by a given static segment.
     * @type {string}
     * @memberof StaticSegmentMemberSegment23
     */
    'field': StaticSegmentMemberSegment23FieldEnum;
    /**
     * Members who are/are not apart of a static segment.
     * @type {string}
     * @memberof StaticSegmentMemberSegment23
     */
    'op': StaticSegmentMemberSegment23OpEnum;
    /**
     * The id for the static segment.
     * @type {number}
     * @memberof StaticSegmentMemberSegment23
     */
    'value': number;
}

type StaticSegmentMemberSegment23ConditionTypeEnum = 'StaticSegment'
type StaticSegmentMemberSegment23FieldEnum = 'static_segment'
type StaticSegmentMemberSegment23OpEnum = 'static_is' | 'static_not'


