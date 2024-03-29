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
 * @interface SimilarSubscribersSegmentMemberSegment6
 */
export interface SimilarSubscribersSegmentMemberSegment6 {
    /**
     * 
     * @type {string}
     * @memberof SimilarSubscribersSegmentMemberSegment6
     */
    'condition_type'?: SimilarSubscribersSegmentMemberSegment6ConditionTypeEnum;
    /**
     * Segment by similar subscribers.
     * @type {string}
     * @memberof SimilarSubscribersSegmentMemberSegment6
     */
    'field': SimilarSubscribersSegmentMemberSegment6FieldEnum;
    /**
     * Members who are/are not apart of a \'similar subscribers\' segment.
     * @type {string}
     * @memberof SimilarSubscribersSegmentMemberSegment6
     */
    'op': SimilarSubscribersSegmentMemberSegment6OpEnum;
    /**
     * The id for the \'similar subscribers\' segment.
     * @type {number}
     * @memberof SimilarSubscribersSegmentMemberSegment6
     */
    'value': number;
}

type SimilarSubscribersSegmentMemberSegment6ConditionTypeEnum = 'FuzzySegment'
type SimilarSubscribersSegmentMemberSegment6FieldEnum = 'fuzzy_segment'
type SimilarSubscribersSegmentMemberSegment6OpEnum = 'fuzzy_is' | 'fuzzy_not'


