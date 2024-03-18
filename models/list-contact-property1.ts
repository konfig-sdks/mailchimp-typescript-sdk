/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * [Contact information displayed in campaign footers](https://mailchimp.com/help/about-campaign-footers/) to comply with international spam laws.
 * @export
 * @interface ListContactProperty1
 */
export interface ListContactProperty1 {
    /**
     * The company name for the list.
     * @type {string}
     * @memberof ListContactProperty1
     */
    'company': string;
    /**
     * The street address for the list contact.
     * @type {string}
     * @memberof ListContactProperty1
     */
    'address1': string;
    /**
     * The street address for the list contact.
     * @type {string}
     * @memberof ListContactProperty1
     */
    'address2'?: string;
    /**
     * The city for the list contact.
     * @type {string}
     * @memberof ListContactProperty1
     */
    'city': string;
    /**
     * The state for the list contact.
     * @type {string}
     * @memberof ListContactProperty1
     */
    'state': string;
    /**
     * The postal or zip code for the list contact.
     * @type {string}
     * @memberof ListContactProperty1
     */
    'zip': string;
    /**
     * A two-character ISO3166 country code. Defaults to US if invalid.
     * @type {string}
     * @memberof ListContactProperty1
     */
    'country': string;
    /**
     * The phone number for the list contact.
     * @type {string}
     * @memberof ListContactProperty1
     */
    'phone'?: string;
}

