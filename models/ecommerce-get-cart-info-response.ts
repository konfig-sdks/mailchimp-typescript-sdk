/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ECommerceCartLineItem2 } from './ecommerce-cart-line-item2';
import { ECommerceCustomerProperty10 } from './ecommerce-customer-property10';
import { ResourceLink } from './resource-link';

/**
 * Information about a specific cart.
 * @export
 * @interface EcommerceGetCartInfoResponse
 */
export interface EcommerceGetCartInfoResponse {
    /**
     * A unique identifier for the cart.
     * @type {string}
     * @memberof EcommerceGetCartInfoResponse
     */
    'id'?: string;
    /**
     * 
     * @type {ECommerceCustomerProperty10}
     * @memberof EcommerceGetCartInfoResponse
     */
    'customer'?: ECommerceCustomerProperty10;
    /**
     * A string that uniquely identifies the campaign associated with a cart.
     * @type {string}
     * @memberof EcommerceGetCartInfoResponse
     */
    'campaign_id'?: string;
    /**
     * The URL for the cart. This parameter is required for [Abandoned Cart](https://mailchimp.com/help/create-an-abandoned-cart-email/) automations.
     * @type {string}
     * @memberof EcommerceGetCartInfoResponse
     */
    'checkout_url'?: string;
    /**
     * The three-letter ISO 4217 code for the currency that the cart uses.
     * @type {string}
     * @memberof EcommerceGetCartInfoResponse
     */
    'currency_code'?: string;
    /**
     * The order total for the cart.
     * @type {number}
     * @memberof EcommerceGetCartInfoResponse
     */
    'order_total'?: number;
    /**
     * The total tax for the cart.
     * @type {number}
     * @memberof EcommerceGetCartInfoResponse
     */
    'tax_total'?: number;
    /**
     * An array of the cart\'s line items.
     * @type {Array<ECommerceCartLineItem2>}
     * @memberof EcommerceGetCartInfoResponse
     */
    'lines'?: Array<ECommerceCartLineItem2>;
    /**
     * The date and time the cart was created in ISO 8601 format.
     * @type {string}
     * @memberof EcommerceGetCartInfoResponse
     */
    'created_at'?: string;
    /**
     * The date and time the cart was last updated in ISO 8601 format.
     * @type {string}
     * @memberof EcommerceGetCartInfoResponse
     */
    'updated_at'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof EcommerceGetCartInfoResponse
     */
    '_links'?: Array<ResourceLink>;
}

