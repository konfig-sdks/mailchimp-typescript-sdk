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
 * @interface EmailSegment6
 */
export interface EmailSegment6 {
    /**
     * 
     * @type {string}
     * @memberof EmailSegment6
     */
    'condition_type'?: EmailSegment6ConditionTypeEnum;
    /**
     * Segmenting based off of a subscriber\'s email address.
     * @type {string}
     * @memberof EmailSegment6
     */
    'field': EmailSegment6FieldEnum;
    /**
     * Whether the email address is/not exactly, contains/doesn\'t contain, starts/ends with a string.
     * @type {string}
     * @memberof EmailSegment6
     */
    'op': EmailSegment6OpEnum;
    /**
     * The value to compare the email against.
     * @type {string}
     * @memberof EmailSegment6
     */
    'value'?: string;
}

type EmailSegment6ConditionTypeEnum = 'EmailAddress'
type EmailSegment6FieldEnum = 'merge0' | 'EMAIL'
type EmailSegment6OpEnum = 'is' | 'not' | 'contains' | 'notcontain' | 'starts' | 'ends' | 'greater' | 'less'


