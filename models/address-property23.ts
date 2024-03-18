/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The customer\'s address.
 * @export
 * @interface AddressProperty23
 */
export interface AddressProperty23 {
    /**
     * The mailing address of the customer.
     * @type {string}
     * @memberof AddressProperty23
     */
    'address1'?: string;
    /**
     * An additional field for the customer\'s mailing address.
     * @type {string}
     * @memberof AddressProperty23
     */
    'address2'?: string;
    /**
     * The city the customer is located in.
     * @type {string}
     * @memberof AddressProperty23
     */
    'city'?: string;
    /**
     * The customer\'s state name or normalized province.
     * @type {string}
     * @memberof AddressProperty23
     */
    'province'?: string;
    /**
     * The two-letter code for the customer\'s province or state.
     * @type {string}
     * @memberof AddressProperty23
     */
    'province_code'?: string;
    /**
     * The customer\'s postal or zip code.
     * @type {string}
     * @memberof AddressProperty23
     */
    'postal_code'?: string;
    /**
     * The customer\'s country.
     * @type {string}
     * @memberof AddressProperty23
     */
    'country'?: string;
    /**
     * The two-letter code for the customer\'s country.
     * @type {string}
     * @memberof AddressProperty23
     */
    'country_code'?: string;
}

