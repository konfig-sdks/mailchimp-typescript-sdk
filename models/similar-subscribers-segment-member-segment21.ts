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
 * @interface SimilarSubscribersSegmentMemberSegment21
 */
export interface SimilarSubscribersSegmentMemberSegment21 {
    /**
     * 
     * @type {string}
     * @memberof SimilarSubscribersSegmentMemberSegment21
     */
    'condition_type'?: SimilarSubscribersSegmentMemberSegment21ConditionTypeEnum;
    /**
     * Segment by similar subscribers.
     * @type {string}
     * @memberof SimilarSubscribersSegmentMemberSegment21
     */
    'field': SimilarSubscribersSegmentMemberSegment21FieldEnum;
    /**
     * Members who are/are not apart of a \'similar subscribers\' segment.
     * @type {string}
     * @memberof SimilarSubscribersSegmentMemberSegment21
     */
    'op': SimilarSubscribersSegmentMemberSegment21OpEnum;
    /**
     * The id for the \'similar subscribers\' segment.
     * @type {number}
     * @memberof SimilarSubscribersSegmentMemberSegment21
     */
    'value': number;
}

type SimilarSubscribersSegmentMemberSegment21ConditionTypeEnum = 'FuzzySegment'
type SimilarSubscribersSegmentMemberSegment21FieldEnum = 'fuzzy_segment'
type SimilarSubscribersSegmentMemberSegment21OpEnum = 'fuzzy_is' | 'fuzzy_not'

