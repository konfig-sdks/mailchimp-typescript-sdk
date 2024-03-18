/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * An individual segment condition
 * @export
 * @interface DropdownRadioMergeFieldSegment40
 */
export interface DropdownRadioMergeFieldSegment40 {
    /**
     * 
     * @type {string}
     * @memberof DropdownRadioMergeFieldSegment40
     */
    'condition_type'?: DropdownRadioMergeFieldSegment40ConditionTypeEnum;
    /**
     * A merge field to segment.
     * @type {string}
     * @memberof DropdownRadioMergeFieldSegment40
     */
    'field': string;
    /**
     * Whether the member\'s merge information is/is not a value or is/is not blank.
     * @type {string}
     * @memberof DropdownRadioMergeFieldSegment40
     */
    'op': DropdownRadioMergeFieldSegment40OpEnum;
    /**
     * The value to segment a text merge field with.
     * @type {string}
     * @memberof DropdownRadioMergeFieldSegment40
     */
    'value'?: string;
}

type DropdownRadioMergeFieldSegment40ConditionTypeEnum = 'SelectMerge'
type DropdownRadioMergeFieldSegment40OpEnum = 'is' | 'not' | 'blank' | 'blank_not' | 'notcontain' | 'contains'

