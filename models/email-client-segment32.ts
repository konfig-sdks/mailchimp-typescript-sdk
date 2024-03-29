/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by use of a particular email client.
 * @export
 * @interface EmailClientSegment32
 */
export interface EmailClientSegment32 {
    /**
     * 
     * @type {string}
     * @memberof EmailClientSegment32
     */
    'condition_type'?: EmailClientSegment32ConditionTypeEnum;
    /**
     * Segment by use of a particular email client.
     * @type {string}
     * @memberof EmailClientSegment32
     */
    'field': EmailClientSegment32FieldEnum;
    /**
     * The operation to determine whether we select clients that match the value, or clients that do not match the value.
     * @type {string}
     * @memberof EmailClientSegment32
     */
    'op': EmailClientSegment32OpEnum;
    /**
     * The name of the email client.
     * @type {string}
     * @memberof EmailClientSegment32
     */
    'value': string;
}

type EmailClientSegment32ConditionTypeEnum = 'EmailClient'
type EmailClientSegment32FieldEnum = 'email_client'
type EmailClientSegment32OpEnum = 'client_is' | 'client_not'


