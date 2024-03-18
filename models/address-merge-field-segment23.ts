/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by an address-type merge field.
 * @export
 * @interface AddressMergeFieldSegment23
 */
export interface AddressMergeFieldSegment23 {
    /**
     * 
     * @type {string}
     * @memberof AddressMergeFieldSegment23
     */
    'condition_type'?: AddressMergeFieldSegment23ConditionTypeEnum;
    /**
     * An address-type merge field to segment.
     * @type {string}
     * @memberof AddressMergeFieldSegment23
     */
    'field': string;
    /**
     * Whether the member\'s address merge field contains/does not contain a value or is/is not blank.
     * @type {string}
     * @memberof AddressMergeFieldSegment23
     */
    'op': AddressMergeFieldSegment23OpEnum;
    /**
     * The value to segment a text merge field with.
     * @type {string}
     * @memberof AddressMergeFieldSegment23
     */
    'value'?: string;
}

type AddressMergeFieldSegment23ConditionTypeEnum = 'AddressMerge'
type AddressMergeFieldSegment23OpEnum = 'contains' | 'notcontain' | 'blank' | 'blank_not'


