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
 * @interface SimilarSubscribersSegmentMemberSegment33
 */
export interface SimilarSubscribersSegmentMemberSegment33 {
    /**
     * 
     * @type {string}
     * @memberof SimilarSubscribersSegmentMemberSegment33
     */
    'condition_type'?: SimilarSubscribersSegmentMemberSegment33ConditionTypeEnum;
    /**
     * Segment by similar subscribers.
     * @type {string}
     * @memberof SimilarSubscribersSegmentMemberSegment33
     */
    'field': SimilarSubscribersSegmentMemberSegment33FieldEnum;
    /**
     * Members who are/are not apart of a \'similar subscribers\' segment.
     * @type {string}
     * @memberof SimilarSubscribersSegmentMemberSegment33
     */
    'op': SimilarSubscribersSegmentMemberSegment33OpEnum;
    /**
     * The id for the \'similar subscribers\' segment.
     * @type {number}
     * @memberof SimilarSubscribersSegmentMemberSegment33
     */
    'value': number;
}

type SimilarSubscribersSegmentMemberSegment33ConditionTypeEnum = 'FuzzySegment'
type SimilarSubscribersSegmentMemberSegment33FieldEnum = 'fuzzy_segment'
type SimilarSubscribersSegmentMemberSegment33OpEnum = 'fuzzy_is' | 'fuzzy_not'


