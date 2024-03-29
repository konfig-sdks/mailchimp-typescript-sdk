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
 * @interface SimilarSubscribersSegmentMemberSegment19
 */
export interface SimilarSubscribersSegmentMemberSegment19 {
    /**
     * 
     * @type {string}
     * @memberof SimilarSubscribersSegmentMemberSegment19
     */
    'condition_type'?: SimilarSubscribersSegmentMemberSegment19ConditionTypeEnum;
    /**
     * Segment by similar subscribers.
     * @type {string}
     * @memberof SimilarSubscribersSegmentMemberSegment19
     */
    'field': SimilarSubscribersSegmentMemberSegment19FieldEnum;
    /**
     * Members who are/are not apart of a \'similar subscribers\' segment.
     * @type {string}
     * @memberof SimilarSubscribersSegmentMemberSegment19
     */
    'op': SimilarSubscribersSegmentMemberSegment19OpEnum;
    /**
     * The id for the \'similar subscribers\' segment.
     * @type {number}
     * @memberof SimilarSubscribersSegmentMemberSegment19
     */
    'value': number;
}

type SimilarSubscribersSegmentMemberSegment19ConditionTypeEnum = 'FuzzySegment'
type SimilarSubscribersSegmentMemberSegment19FieldEnum = 'fuzzy_segment'
type SimilarSubscribersSegmentMemberSegment19OpEnum = 'fuzzy_is' | 'fuzzy_not'


