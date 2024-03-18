/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface ErrorsPropertyInner1
 */
export interface ErrorsPropertyInner1 {
    /**
     * Email addresses added to the static segment or removed
     * @type {Array<string>}
     * @memberof ErrorsPropertyInner1
     */
    'email_addresses'?: Array<string>;
    /**
     * The error message indicating why the email addresses could not be added or updated.
     * @type {string}
     * @memberof ErrorsPropertyInner1
     */
    'error'?: string;
}
