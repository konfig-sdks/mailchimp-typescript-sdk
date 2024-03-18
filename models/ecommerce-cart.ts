/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ECommerceCartLineItem2 } from './ecommerce-cart-line-item2';
import { ECommerceCustomerProperty6 } from './ecommerce-customer-property6';
import { ResourceLink } from './resource-link';

/**
 * Information about a specific cart.
 * @export
 * @interface ECommerceCart
 */
export interface ECommerceCart {
    /**
     * A unique identifier for the cart.
     * @type {string}
     * @memberof ECommerceCart
     */
    'id'?: string;
    /**
     * 
     * @type {ECommerceCustomerProperty6}
     * @memberof ECommerceCart
     */
    'customer'?: ECommerceCustomerProperty6;
    /**
     * A string that uniquely identifies the campaign associated with a cart.
     * @type {string}
     * @memberof ECommerceCart
     */
    'campaign_id'?: string;
    /**
     * The URL for the cart. This parameter is required for [Abandoned Cart](https://mailchimp.com/help/create-an-abandoned-cart-email/) automations.
     * @type {string}
     * @memberof ECommerceCart
     */
    'checkout_url'?: string;
    /**
     * The three-letter ISO 4217 code for the currency that the cart uses.
     * @type {string}
     * @memberof ECommerceCart
     */
    'currency_code'?: string;
    /**
     * The order total for the cart.
     * @type {number}
     * @memberof ECommerceCart
     */
    'order_total'?: number;
    /**
     * The total tax for the cart.
     * @type {number}
     * @memberof ECommerceCart
     */
    'tax_total'?: number;
    /**
     * An array of the cart\'s line items.
     * @type {Array<ECommerceCartLineItem2>}
     * @memberof ECommerceCart
     */
    'lines'?: Array<ECommerceCartLineItem2>;
    /**
     * The date and time the cart was created in ISO 8601 format.
     * @type {string}
     * @memberof ECommerceCart
     */
    'created_at'?: string;
    /**
     * The date and time the cart was last updated in ISO 8601 format.
     * @type {string}
     * @memberof ECommerceCart
     */
    'updated_at'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ECommerceCart
     */
    '_links'?: Array<ResourceLink>;
}
