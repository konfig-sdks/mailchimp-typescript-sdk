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
 * @interface StaticSegmentMemberSegment7
 */
export interface StaticSegmentMemberSegment7 {
    /**
     * 
     * @type {string}
     * @memberof StaticSegmentMemberSegment7
     */
    'condition_type'?: StaticSegmentMemberSegment7ConditionTypeEnum;
    /**
     * Segment by a given static segment.
     * @type {string}
     * @memberof StaticSegmentMemberSegment7
     */
    'field': StaticSegmentMemberSegment7FieldEnum;
    /**
     * Members who are/are not apart of a static segment.
     * @type {string}
     * @memberof StaticSegmentMemberSegment7
     */
    'op': StaticSegmentMemberSegment7OpEnum;
    /**
     * The id for the static segment.
     * @type {number}
     * @memberof StaticSegmentMemberSegment7
     */
    'value': number;
}

type StaticSegmentMemberSegment7ConditionTypeEnum = 'StaticSegment'
type StaticSegmentMemberSegment7FieldEnum = 'static_segment'
type StaticSegmentMemberSegment7OpEnum = 'static_is' | 'static_not'


