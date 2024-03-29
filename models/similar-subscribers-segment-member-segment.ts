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
 * @interface SimilarSubscribersSegmentMemberSegment
 */
export interface SimilarSubscribersSegmentMemberSegment {
    /**
     * 
     * @type {string}
     * @memberof SimilarSubscribersSegmentMemberSegment
     */
    'condition_type'?: SimilarSubscribersSegmentMemberSegmentConditionTypeEnum;
    /**
     * Segment by similar subscribers.
     * @type {string}
     * @memberof SimilarSubscribersSegmentMemberSegment
     */
    'field': SimilarSubscribersSegmentMemberSegmentFieldEnum;
    /**
     * Members who are/are not apart of a \'similar subscribers\' segment.
     * @type {string}
     * @memberof SimilarSubscribersSegmentMemberSegment
     */
    'op': SimilarSubscribersSegmentMemberSegmentOpEnum;
    /**
     * The id for the \'similar subscribers\' segment.
     * @type {number}
     * @memberof SimilarSubscribersSegmentMemberSegment
     */
    'value': number;
}

type SimilarSubscribersSegmentMemberSegmentConditionTypeEnum = 'FuzzySegment'
type SimilarSubscribersSegmentMemberSegmentFieldEnum = 'fuzzy_segment'
type SimilarSubscribersSegmentMemberSegmentOpEnum = 'fuzzy_is' | 'fuzzy_not'


