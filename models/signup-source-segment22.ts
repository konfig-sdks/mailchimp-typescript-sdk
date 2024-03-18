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
 * @interface SignupSourceSegment22
 */
export interface SignupSourceSegment22 {
    /**
     * 
     * @type {string}
     * @memberof SignupSourceSegment22
     */
    'condition_type': SignupSourceSegment22ConditionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SignupSourceSegment22
     */
    'field': SignupSourceSegment22FieldEnum;
    /**
     * Whether the member\'s signup source was/was not a particular value.
     * @type {string}
     * @memberof SignupSourceSegment22
     */
    'op': SignupSourceSegment22OpEnum;
    /**
     * The signup source.
     * @type {string}
     * @memberof SignupSourceSegment22
     */
    'value'?: string;
}

type SignupSourceSegment22ConditionTypeEnum = 'SignupSource'
type SignupSourceSegment22FieldEnum = 'source'
type SignupSourceSegment22OpEnum = 'source_is' | 'source_not'


