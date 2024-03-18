/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by a given date merge field.
 * @export
 * @interface DateMergeFieldSegment15
 */
export interface DateMergeFieldSegment15 {
    /**
     * 
     * @type {string}
     * @memberof DateMergeFieldSegment15
     */
    'condition_type'?: DateMergeFieldSegment15ConditionTypeEnum;
    /**
     * A date merge field to segment.
     * @type {string}
     * @memberof DateMergeFieldSegment15
     */
    'field': string;
    /**
     * Whether the member\'s merge information is/is not, is greater/less than a value or is/is not blank.
     * @type {string}
     * @memberof DateMergeFieldSegment15
     */
    'op': DateMergeFieldSegment15OpEnum;
    /**
     * A date to segment against.
     * @type {string}
     * @memberof DateMergeFieldSegment15
     */
    'value'?: string;
}

type DateMergeFieldSegment15ConditionTypeEnum = 'DateMerge'
type DateMergeFieldSegment15OpEnum = 'is' | 'not' | 'less' | 'blank' | 'blank_not' | 'greater'


