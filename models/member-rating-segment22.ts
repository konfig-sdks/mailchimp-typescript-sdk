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
 * @interface MemberRatingSegment22
 */
export interface MemberRatingSegment22 {
    /**
     * 
     * @type {string}
     * @memberof MemberRatingSegment22
     */
    'condition_type'?: MemberRatingSegment22ConditionTypeEnum;
    /**
     * Segment by member rating.
     * @type {string}
     * @memberof MemberRatingSegment22
     */
    'field': MemberRatingSegment22FieldEnum;
    /**
     * Members who have have a rating that is/not exactly a given number or members who have a rating greater/less than a given number.
     * @type {string}
     * @memberof MemberRatingSegment22
     */
    'op': MemberRatingSegment22OpEnum;
    /**
     * The star rating number to segment against.
     * @type {number}
     * @memberof MemberRatingSegment22
     */
    'value': number;
}

type MemberRatingSegment22ConditionTypeEnum = 'MemberRating'
type MemberRatingSegment22FieldEnum = 'rating'
type MemberRatingSegment22OpEnum = 'is' | 'not' | 'greater' | 'less'


