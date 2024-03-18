/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by a given text or number merge field.
 * @export
 * @interface TextOrNumberMergeFieldSegment31
 */
export interface TextOrNumberMergeFieldSegment31 {
    /**
     * 
     * @type {string}
     * @memberof TextOrNumberMergeFieldSegment31
     */
    'condition_type'?: TextOrNumberMergeFieldSegment31ConditionTypeEnum;
    /**
     * A text or number merge field to segment.
     * @type {string}
     * @memberof TextOrNumberMergeFieldSegment31
     */
    'field': string;
    /**
     * Whether the member\'s merge information is/is not, contains/does not contain, starts/ends with, or is greater/less than a value
     * @type {string}
     * @memberof TextOrNumberMergeFieldSegment31
     */
    'op': TextOrNumberMergeFieldSegment31OpEnum;
    /**
     * The value to segment a text or number merge field with.
     * @type {string}
     * @memberof TextOrNumberMergeFieldSegment31
     */
    'value'?: string;
}

type TextOrNumberMergeFieldSegment31ConditionTypeEnum = 'TextMerge'
type TextOrNumberMergeFieldSegment31OpEnum = 'is' | 'not' | 'contains' | 'notcontain' | 'starts' | 'ends' | 'greater' | 'less' | 'blank' | 'blank_not'


