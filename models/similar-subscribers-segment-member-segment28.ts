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
 * @interface SimilarSubscribersSegmentMemberSegment28
 */
export interface SimilarSubscribersSegmentMemberSegment28 {
    /**
     * 
     * @type {string}
     * @memberof SimilarSubscribersSegmentMemberSegment28
     */
    'condition_type'?: SimilarSubscribersSegmentMemberSegment28ConditionTypeEnum;
    /**
     * Segment by similar subscribers.
     * @type {string}
     * @memberof SimilarSubscribersSegmentMemberSegment28
     */
    'field': SimilarSubscribersSegmentMemberSegment28FieldEnum;
    /**
     * Members who are/are not apart of a \'similar subscribers\' segment.
     * @type {string}
     * @memberof SimilarSubscribersSegmentMemberSegment28
     */
    'op': SimilarSubscribersSegmentMemberSegment28OpEnum;
    /**
     * The id for the \'similar subscribers\' segment.
     * @type {number}
     * @memberof SimilarSubscribersSegmentMemberSegment28
     */
    'value': number;
}

type SimilarSubscribersSegmentMemberSegment28ConditionTypeEnum = 'FuzzySegment'
type SimilarSubscribersSegmentMemberSegment28FieldEnum = 'fuzzy_segment'
type SimilarSubscribersSegmentMemberSegment28OpEnum = 'fuzzy_is' | 'fuzzy_not'


