/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The billing address for the order.
 * @export
 * @interface BillingAddressProperty9
 */
export interface BillingAddressProperty9 {
    /**
     * The name associated with an order\'s billing address.
     * @type {string}
     * @memberof BillingAddressProperty9
     */
    'name'?: string;
    /**
     * The billing address for the order.
     * @type {string}
     * @memberof BillingAddressProperty9
     */
    'address1'?: string;
    /**
     * An additional field for the billing address.
     * @type {string}
     * @memberof BillingAddressProperty9
     */
    'address2'?: string;
    /**
     * The city in the billing address.
     * @type {string}
     * @memberof BillingAddressProperty9
     */
    'city'?: string;
    /**
     * The state or normalized province in the billing address.
     * @type {string}
     * @memberof BillingAddressProperty9
     */
    'province'?: string;
    /**
     * The two-letter code for the province or state in the billing address.
     * @type {string}
     * @memberof BillingAddressProperty9
     */
    'province_code'?: string;
    /**
     * The postal or zip code in the billing address.
     * @type {string}
     * @memberof BillingAddressProperty9
     */
    'postal_code'?: string;
    /**
     * The country in the billing address.
     * @type {string}
     * @memberof BillingAddressProperty9
     */
    'country'?: string;
    /**
     * The two-letter code for the country in the billing address.
     * @type {string}
     * @memberof BillingAddressProperty9
     */
    'country_code'?: string;
    /**
     * The longitude for the billing address location.
     * @type {number}
     * @memberof BillingAddressProperty9
     */
    'longitude'?: number;
    /**
     * The latitude for the billing address location.
     * @type {number}
     * @memberof BillingAddressProperty9
     */
    'latitude'?: number;
    /**
     * The phone number for the billing address.
     * @type {string}
     * @memberof BillingAddressProperty9
     */
    'phone'?: string;
    /**
     * The company associated with the billing address.
     * @type {string}
     * @memberof BillingAddressProperty9
     */
    'company'?: string;
}

