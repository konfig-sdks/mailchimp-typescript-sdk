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
 * @interface BirthdayMergeFieldSegment26
 */
export interface BirthdayMergeFieldSegment26 {
    /**
     * 
     * @type {string}
     * @memberof BirthdayMergeFieldSegment26
     */
    'condition_type'?: BirthdayMergeFieldSegment26ConditionTypeEnum;
    /**
     * A date merge field to segment.
     * @type {string}
     * @memberof BirthdayMergeFieldSegment26
     */
    'field': string;
    /**
     * Whether the member\'s birthday merge information is/is not a certain date or is/is not blank.
     * @type {string}
     * @memberof BirthdayMergeFieldSegment26
     */
    'op': BirthdayMergeFieldSegment26OpEnum;
    /**
     * A date to segment against (mm/dd).
     * @type {string}
     * @memberof BirthdayMergeFieldSegment26
     */
    'value'?: string;
}

type BirthdayMergeFieldSegment26ConditionTypeEnum = 'BirthdayMerge'
type BirthdayMergeFieldSegment26OpEnum = 'is' | 'not' | 'blank' | 'blank_not'


