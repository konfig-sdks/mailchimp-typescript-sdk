/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Collection of Content for List Signup Forms.
 * @export
 * @interface CollectionOfContentForListSignupForms1
 */
export interface CollectionOfContentForListSignupForms1 {
    /**
     * The content section name.
     * @type {string}
     * @memberof CollectionOfContentForListSignupForms1
     */
    'section'?: CollectionOfContentForListSignupForms1SectionEnum;
    /**
     * The content section text.
     * @type {string}
     * @memberof CollectionOfContentForListSignupForms1
     */
    'value'?: string;
}

type CollectionOfContentForListSignupForms1SectionEnum = 'signup_message' | 'unsub_message' | 'signup_thank_you_title'


