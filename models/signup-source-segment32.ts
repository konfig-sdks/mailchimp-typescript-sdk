/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by signup source.
 * @export
 * @interface SignupSourceSegment32
 */
export interface SignupSourceSegment32 {
    /**
     * 
     * @type {string}
     * @memberof SignupSourceSegment32
     */
    'condition_type': SignupSourceSegment32ConditionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SignupSourceSegment32
     */
    'field': SignupSourceSegment32FieldEnum;
    /**
     * Whether the member\'s signup source was/was not a particular value.
     * @type {string}
     * @memberof SignupSourceSegment32
     */
    'op': SignupSourceSegment32OpEnum;
    /**
     * The signup source.
     * @type {string}
     * @memberof SignupSourceSegment32
     */
    'value'?: string;
}

type SignupSourceSegment32ConditionTypeEnum = 'SignupSource'
type SignupSourceSegment32FieldEnum = 'source'
type SignupSourceSegment32OpEnum = 'source_is' | 'source_not'


