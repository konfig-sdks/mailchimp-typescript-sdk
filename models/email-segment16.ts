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
 * @interface EmailSegment16
 */
export interface EmailSegment16 {
    /**
     * 
     * @type {string}
     * @memberof EmailSegment16
     */
    'condition_type'?: EmailSegment16ConditionTypeEnum;
    /**
     * Segmenting based off of a subscriber\'s email address.
     * @type {string}
     * @memberof EmailSegment16
     */
    'field': EmailSegment16FieldEnum;
    /**
     * Whether the email address is/not exactly, contains/doesn\'t contain, starts/ends with a string.
     * @type {string}
     * @memberof EmailSegment16
     */
    'op': EmailSegment16OpEnum;
    /**
     * The value to compare the email against.
     * @type {string}
     * @memberof EmailSegment16
     */
    'value'?: string;
}

type EmailSegment16ConditionTypeEnum = 'EmailAddress'
type EmailSegment16FieldEnum = 'merge0' | 'EMAIL'
type EmailSegment16OpEnum = 'is' | 'not' | 'contains' | 'notcontain' | 'starts' | 'ends' | 'greater' | 'less'


