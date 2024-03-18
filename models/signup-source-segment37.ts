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
 * @interface SignupSourceSegment37
 */
export interface SignupSourceSegment37 {
    /**
     * 
     * @type {string}
     * @memberof SignupSourceSegment37
     */
    'condition_type': SignupSourceSegment37ConditionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SignupSourceSegment37
     */
    'field': SignupSourceSegment37FieldEnum;
    /**
     * Whether the member\'s signup source was/was not a particular value.
     * @type {string}
     * @memberof SignupSourceSegment37
     */
    'op': SignupSourceSegment37OpEnum;
    /**
     * The signup source.
     * @type {string}
     * @memberof SignupSourceSegment37
     */
    'value'?: string;
}

type SignupSourceSegment37ConditionTypeEnum = 'SignupSource'
type SignupSourceSegment37FieldEnum = 'source'
type SignupSourceSegment37OpEnum = 'source_is' | 'source_not'

