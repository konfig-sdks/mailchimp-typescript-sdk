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
 * Information about a specific order line.
 * @export
 * @interface EcommerceGetOrderLineItem200Response
 */
export interface EcommerceGetOrderLineItem200Response {
    /**
     * A unique identifier for an order line item.
     * @type {string}
     * @memberof EcommerceGetOrderLineItem200Response
     */
    'id'?: string;
    /**
     * A unique identifier for the product associated with an order line item.
     * @type {string}
     * @memberof EcommerceGetOrderLineItem200Response
     */
    'product_id'?: string;
    /**
     * The name of the product for an order line item.
     * @type {string}
     * @memberof EcommerceGetOrderLineItem200Response
     */
    'product_title'?: string;
    /**
     * A unique identifier for the product variant associated with an order line item.
     * @type {string}
     * @memberof EcommerceGetOrderLineItem200Response
     */
    'product_variant_id'?: string;
    /**
     * The name of the product variant for an order line item.
     * @type {string}
     * @memberof EcommerceGetOrderLineItem200Response
     */
    'product_variant_title'?: string;
    /**
     * The image URL for a product.
     * @type {string}
     * @memberof EcommerceGetOrderLineItem200Response
     */
    'image_url'?: string;
    /**
     * The order line item quantity.
     * @type {number}
     * @memberof EcommerceGetOrderLineItem200Response
     */
    'quantity'?: number;
    /**
     * The order line item price.
     * @type {number}
     * @memberof EcommerceGetOrderLineItem200Response
     */
    'price'?: number;
    /**
     * The total discount amount applied to a line item.
     * @type {number}
     * @memberof EcommerceGetOrderLineItem200Response
     */
    'discount'?: number;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof EcommerceGetOrderLineItem200Response
     */
    '_links'?: Array<ResourceLink>;
}

