/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by a contact\'s birthday.
 * @export
 * @interface BirthdayMergeFieldSegment42
 */
export interface BirthdayMergeFieldSegment42 {
    /**
     * 
     * @type {string}
     * @memberof BirthdayMergeFieldSegment42
     */
    'condition_type'?: BirthdayMergeFieldSegment42ConditionTypeEnum;
    /**
     * A date merge field to segment.
     * @type {string}
     * @memberof BirthdayMergeFieldSegment42
     */
    'field': string;
    /**
     * Whether the member\'s birthday merge information is/is not a certain date or is/is not blank.
     * @type {string}
     * @memberof BirthdayMergeFieldSegment42
     */
    'op': BirthdayMergeFieldSegment42OpEnum;
    /**
     * A date to segment against (mm/dd).
     * @type {string}
     * @memberof BirthdayMergeFieldSegment42
     */
    'value'?: string;
}

type BirthdayMergeFieldSegment42ConditionTypeEnum = 'BirthdayMerge'
type BirthdayMergeFieldSegment42OpEnum = 'is' | 'not' | 'blank' | 'blank_not'


