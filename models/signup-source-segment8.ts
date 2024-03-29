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
 * @interface SignupSourceSegment8
 */
export interface SignupSourceSegment8 {
    /**
     * 
     * @type {string}
     * @memberof SignupSourceSegment8
     */
    'condition_type': SignupSourceSegment8ConditionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SignupSourceSegment8
     */
    'field': SignupSourceSegment8FieldEnum;
    /**
     * Whether the member\'s signup source was/was not a particular value.
     * @type {string}
     * @memberof SignupSourceSegment8
     */
    'op': SignupSourceSegment8OpEnum;
    /**
     * The signup source.
     * @type {string}
     * @memberof SignupSourceSegment8
     */
    'value'?: string;
}

type SignupSourceSegment8ConditionTypeEnum = 'SignupSource'
type SignupSourceSegment8FieldEnum = 'source'
type SignupSourceSegment8OpEnum = 'source_is' | 'source_not'


