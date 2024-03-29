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
 * @interface EmailClientSegment19
 */
export interface EmailClientSegment19 {
    /**
     * 
     * @type {string}
     * @memberof EmailClientSegment19
     */
    'condition_type'?: EmailClientSegment19ConditionTypeEnum;
    /**
     * Segment by use of a particular email client.
     * @type {string}
     * @memberof EmailClientSegment19
     */
    'field': EmailClientSegment19FieldEnum;
    /**
     * The operation to determine whether we select clients that match the value, or clients that do not match the value.
     * @type {string}
     * @memberof EmailClientSegment19
     */
    'op': EmailClientSegment19OpEnum;
    /**
     * The name of the email client.
     * @type {string}
     * @memberof EmailClientSegment19
     */
    'value': string;
}

type EmailClientSegment19ConditionTypeEnum = 'EmailClient'
type EmailClientSegment19FieldEnum = 'email_client'
type EmailClientSegment19OpEnum = 'client_is' | 'client_not'


