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
 * @interface MemberRatingSegment36
 */
export interface MemberRatingSegment36 {
    /**
     * 
     * @type {string}
     * @memberof MemberRatingSegment36
     */
    'condition_type'?: MemberRatingSegment36ConditionTypeEnum;
    /**
     * Segment by member rating.
     * @type {string}
     * @memberof MemberRatingSegment36
     */
    'field': MemberRatingSegment36FieldEnum;
    /**
     * Members who have have a rating that is/not exactly a given number or members who have a rating greater/less than a given number.
     * @type {string}
     * @memberof MemberRatingSegment36
     */
    'op': MemberRatingSegment36OpEnum;
    /**
     * The star rating number to segment against.
     * @type {number}
     * @memberof MemberRatingSegment36
     */
    'value': number;
}

type MemberRatingSegment36ConditionTypeEnum = 'MemberRating'
type MemberRatingSegment36FieldEnum = 'rating'
type MemberRatingSegment36OpEnum = 'is' | 'not' | 'greater' | 'less'

