/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The shipping address for the order.
 * @export
 * @interface ShippingAddressProperty5
 */
export interface ShippingAddressProperty5 {
    /**
     * The name associated with an order\'s shipping address.
     * @type {string}
     * @memberof ShippingAddressProperty5
     */
    'name'?: string;
    /**
     * The shipping address for the order.
     * @type {string}
     * @memberof ShippingAddressProperty5
     */
    'address1'?: string;
    /**
     * An additional field for the shipping address.
     * @type {string}
     * @memberof ShippingAddressProperty5
     */
    'address2'?: string;
    /**
     * The city in the order\'s shipping address.
     * @type {string}
     * @memberof ShippingAddressProperty5
     */
    'city'?: string;
    /**
     * The state or normalized province in the order\'s shipping address.
     * @type {string}
     * @memberof ShippingAddressProperty5
     */
    'province'?: string;
    /**
     * The two-letter code for the province or state the order\'s shipping address is located in.
     * @type {string}
     * @memberof ShippingAddressProperty5
     */
    'province_code'?: string;
    /**
     * The postal or zip code in the order\'s shipping address.
     * @type {string}
     * @memberof ShippingAddressProperty5
     */
    'postal_code'?: string;
    /**
     * The country in the order\'s shipping address.
     * @type {string}
     * @memberof ShippingAddressProperty5
     */
    'country'?: string;
    /**
     * The two-letter code for the country in the shipping address.
     * @type {string}
     * @memberof ShippingAddressProperty5
     */
    'country_code'?: string;
    /**
     * The longitude for the shipping address location.
     * @type {number}
     * @memberof ShippingAddressProperty5
     */
    'longitude'?: number;
    /**
     * The latitude for the shipping address location.
     * @type {number}
     * @memberof ShippingAddressProperty5
     */
    'latitude'?: number;
    /**
     * The phone number for the order\'s shipping address
     * @type {string}
     * @memberof ShippingAddressProperty5
     */
    'phone'?: string;
    /**
     * The company associated with an order\'s shipping address.
     * @type {string}
     * @memberof ShippingAddressProperty5
     */
    'company'?: string;
}

