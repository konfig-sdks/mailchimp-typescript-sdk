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
 * @interface EmailClientSegment12
 */
export interface EmailClientSegment12 {
    /**
     * 
     * @type {string}
     * @memberof EmailClientSegment12
     */
    'condition_type'?: EmailClientSegment12ConditionTypeEnum;
    /**
     * Segment by use of a particular email client.
     * @type {string}
     * @memberof EmailClientSegment12
     */
    'field': EmailClientSegment12FieldEnum;
    /**
     * The operation to determine whether we select clients that match the value, or clients that do not match the value.
     * @type {string}
     * @memberof EmailClientSegment12
     */
    'op': EmailClientSegment12OpEnum;
    /**
     * The name of the email client.
     * @type {string}
     * @memberof EmailClientSegment12
     */
    'value': string;
}

type EmailClientSegment12ConditionTypeEnum = 'EmailClient'
type EmailClientSegment12FieldEnum = 'email_client'
type EmailClientSegment12OpEnum = 'client_is' | 'client_not'


