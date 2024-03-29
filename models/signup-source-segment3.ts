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
 * @interface SignupSourceSegment3
 */
export interface SignupSourceSegment3 {
    /**
     * 
     * @type {string}
     * @memberof SignupSourceSegment3
     */
    'condition_type': SignupSourceSegment3ConditionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SignupSourceSegment3
     */
    'field': SignupSourceSegment3FieldEnum;
    /**
     * Whether the member\'s signup source was/was not a particular value.
     * @type {string}
     * @memberof SignupSourceSegment3
     */
    'op': SignupSourceSegment3OpEnum;
    /**
     * The signup source.
     * @type {string}
     * @memberof SignupSourceSegment3
     */
    'value'?: string;
}

type SignupSourceSegment3ConditionTypeEnum = 'SignupSource'
type SignupSourceSegment3FieldEnum = 'source'
type SignupSourceSegment3OpEnum = 'source_is' | 'source_not'


