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
 * @interface SignupSourceSegment23
 */
export interface SignupSourceSegment23 {
    /**
     * 
     * @type {string}
     * @memberof SignupSourceSegment23
     */
    'condition_type': SignupSourceSegment23ConditionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SignupSourceSegment23
     */
    'field': SignupSourceSegment23FieldEnum;
    /**
     * Whether the member\'s signup source was/was not a particular value.
     * @type {string}
     * @memberof SignupSourceSegment23
     */
    'op': SignupSourceSegment23OpEnum;
    /**
     * The signup source.
     * @type {string}
     * @memberof SignupSourceSegment23
     */
    'value'?: string;
}

type SignupSourceSegment23ConditionTypeEnum = 'SignupSource'
type SignupSourceSegment23FieldEnum = 'source'
type SignupSourceSegment23OpEnum = 'source_is' | 'source_not'

