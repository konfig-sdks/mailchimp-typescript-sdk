/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by member rating.
 * @export
 * @interface MemberRatingSegment29
 */
export interface MemberRatingSegment29 {
    /**
     * 
     * @type {string}
     * @memberof MemberRatingSegment29
     */
    'condition_type'?: MemberRatingSegment29ConditionTypeEnum;
    /**
     * Segment by member rating.
     * @type {string}
     * @memberof MemberRatingSegment29
     */
    'field': MemberRatingSegment29FieldEnum;
    /**
     * Members who have have a rating that is/not exactly a given number or members who have a rating greater/less than a given number.
     * @type {string}
     * @memberof MemberRatingSegment29
     */
    'op': MemberRatingSegment29OpEnum;
    /**
     * The star rating number to segment against.
     * @type {number}
     * @memberof MemberRatingSegment29
     */
    'value': number;
}

type MemberRatingSegment29ConditionTypeEnum = 'MemberRating'
type MemberRatingSegment29FieldEnum = 'rating'
type MemberRatingSegment29OpEnum = 'is' | 'not' | 'greater' | 'less'

