/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by email address.
 * @export
 * @interface EmailSegment37
 */
export interface EmailSegment37 {
    /**
     * 
     * @type {string}
     * @memberof EmailSegment37
     */
    'condition_type'?: EmailSegment37ConditionTypeEnum;
    /**
     * Segmenting based off of a subscriber\'s email address.
     * @type {string}
     * @memberof EmailSegment37
     */
    'field': EmailSegment37FieldEnum;
    /**
     * Whether the email address is/not exactly, contains/doesn\'t contain, starts/ends with a string.
     * @type {string}
     * @memberof EmailSegment37
     */
    'op': EmailSegment37OpEnum;
    /**
     * The value to compare the email against.
     * @type {string}
     * @memberof EmailSegment37
     */
    'value'?: string;
}

type EmailSegment37ConditionTypeEnum = 'EmailAddress'
type EmailSegment37FieldEnum = 'merge0' | 'EMAIL'
type EmailSegment37OpEnum = 'is' | 'not' | 'contains' | 'notcontain' | 'starts' | 'ends' | 'greater' | 'less'

