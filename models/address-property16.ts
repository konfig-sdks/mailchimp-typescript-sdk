/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The store address.
 * @export
 * @interface AddressProperty16
 */
export interface AddressProperty16 {
    /**
     * The store\'s mailing address.
     * @type {string}
     * @memberof AddressProperty16
     */
    'address1'?: string;
    /**
     * An additional field for the store\'s mailing address.
     * @type {string}
     * @memberof AddressProperty16
     */
    'address2'?: string;
    /**
     * The city the store is located in.
     * @type {string}
     * @memberof AddressProperty16
     */
    'city'?: string;
    /**
     * The store\'s state name or normalized province.
     * @type {string}
     * @memberof AddressProperty16
     */
    'province'?: string;
    /**
     * The two-letter code for the store\'s province or state.
     * @type {string}
     * @memberof AddressProperty16
     */
    'province_code'?: string;
    /**
     * The store\'s postal or zip code.
     * @type {string}
     * @memberof AddressProperty16
     */
    'postal_code'?: string;
    /**
     * The store\'s country.
     * @type {string}
     * @memberof AddressProperty16
     */
    'country'?: string;
    /**
     * The two-letter code for to the store\'s country.
     * @type {string}
     * @memberof AddressProperty16
     */
    'country_code'?: string;
    /**
     * The longitude of the store location.
     * @type {number}
     * @memberof AddressProperty16
     */
    'longitude'?: number;
    /**
     * The latitude of the store location.
     * @type {number}
     * @memberof AddressProperty16
     */
    'latitude'?: number;
}

