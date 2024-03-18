/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by similar subscribers.
 * @export
 * @interface SimilarSubscribersSegmentMemberSegment8
 */
export interface SimilarSubscribersSegmentMemberSegment8 {
    /**
     * 
     * @type {string}
     * @memberof SimilarSubscribersSegmentMemberSegment8
     */
    'condition_type'?: SimilarSubscribersSegmentMemberSegment8ConditionTypeEnum;
    /**
     * Segment by similar subscribers.
     * @type {string}
     * @memberof SimilarSubscribersSegmentMemberSegment8
     */
    'field': SimilarSubscribersSegmentMemberSegment8FieldEnum;
    /**
     * Members who are/are not apart of a \'similar subscribers\' segment.
     * @type {string}
     * @memberof SimilarSubscribersSegmentMemberSegment8
     */
    'op': SimilarSubscribersSegmentMemberSegment8OpEnum;
    /**
     * The id for the \'similar subscribers\' segment.
     * @type {number}
     * @memberof SimilarSubscribersSegmentMemberSegment8
     */
    'value': number;
}

type SimilarSubscribersSegmentMemberSegment8ConditionTypeEnum = 'FuzzySegment'
type SimilarSubscribersSegmentMemberSegment8FieldEnum = 'fuzzy_segment'
type SimilarSubscribersSegmentMemberSegment8OpEnum = 'fuzzy_is' | 'fuzzy_not'


