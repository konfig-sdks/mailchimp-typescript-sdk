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
 * @interface EmailClientSegment5
 */
export interface EmailClientSegment5 {
    /**
     * 
     * @type {string}
     * @memberof EmailClientSegment5
     */
    'condition_type'?: EmailClientSegment5ConditionTypeEnum;
    /**
     * Segment by use of a particular email client.
     * @type {string}
     * @memberof EmailClientSegment5
     */
    'field': EmailClientSegment5FieldEnum;
    /**
     * The operation to determine whether we select clients that match the value, or clients that do not match the value.
     * @type {string}
     * @memberof EmailClientSegment5
     */
    'op': EmailClientSegment5OpEnum;
    /**
     * The name of the email client.
     * @type {string}
     * @memberof EmailClientSegment5
     */
    'value': string;
}

type EmailClientSegment5ConditionTypeEnum = 'EmailClient'
type EmailClientSegment5FieldEnum = 'email_client'
type EmailClientSegment5OpEnum = 'client_is' | 'client_not'


