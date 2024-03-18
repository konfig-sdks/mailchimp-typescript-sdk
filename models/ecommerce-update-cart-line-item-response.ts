/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ResourceLink } from './resource-link';

/**
 * Information about a specific cart line item.
 * @export
 * @interface EcommerceUpdateCartLineItemResponse
 */
export interface EcommerceUpdateCartLineItemResponse {
    /**
     * A unique identifier for the cart line item.
     * @type {string}
     * @memberof EcommerceUpdateCartLineItemResponse
     */
    'id'?: string;
    /**
     * A unique identifier for the product associated with the cart line item.
     * @type {string}
     * @memberof EcommerceUpdateCartLineItemResponse
     */
    'product_id'?: string;
    /**
     * The name of the product for the cart line item.
     * @type {string}
     * @memberof EcommerceUpdateCartLineItemResponse
     */
    'product_title'?: string;
    /**
     * A unique identifier for the product variant associated with the cart line item.
     * @type {string}
     * @memberof EcommerceUpdateCartLineItemResponse
     */
    'product_variant_id'?: string;
    /**
     * The name of the product variant for the cart line item.
     * @type {string}
     * @memberof EcommerceUpdateCartLineItemResponse
     */
    'product_variant_title'?: string;
    /**
     * The quantity of a cart line item.
     * @type {number}
     * @memberof EcommerceUpdateCartLineItemResponse
     */
    'quantity'?: number;
    /**
     * The price of a cart line item.
     * @type {number}
     * @memberof EcommerceUpdateCartLineItemResponse
     */
    'price'?: number;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof EcommerceUpdateCartLineItemResponse
     */
    '_links'?: Array<ResourceLink>;
}
