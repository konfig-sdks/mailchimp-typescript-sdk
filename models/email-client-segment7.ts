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
 * @interface EmailClientSegment7
 */
export interface EmailClientSegment7 {
    /**
     * 
     * @type {string}
     * @memberof EmailClientSegment7
     */
    'condition_type'?: EmailClientSegment7ConditionTypeEnum;
    /**
     * Segment by use of a particular email client.
     * @type {string}
     * @memberof EmailClientSegment7
     */
    'field': EmailClientSegment7FieldEnum;
    /**
     * The operation to determine whether we select clients that match the value, or clients that do not match the value.
     * @type {string}
     * @memberof EmailClientSegment7
     */
    'op': EmailClientSegment7OpEnum;
    /**
     * The name of the email client.
     * @type {string}
     * @memberof EmailClientSegment7
     */
    'value': string;
}

type EmailClientSegment7ConditionTypeEnum = 'EmailClient'
type EmailClientSegment7FieldEnum = 'email_client'
type EmailClientSegment7OpEnum = 'client_is' | 'client_not'


