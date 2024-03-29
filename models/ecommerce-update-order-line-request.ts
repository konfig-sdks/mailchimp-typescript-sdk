/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about a specific order line.
 * @export
 * @interface EcommerceUpdateOrderLineRequest
 */
export interface EcommerceUpdateOrderLineRequest {
    /**
     * A unique identifier for the product associated with the order line item.
     * @type {string}
     * @memberof EcommerceUpdateOrderLineRequest
     */
    'product_id'?: string;
    /**
     * A unique identifier for the product variant associated with the order line item.
     * @type {string}
     * @memberof EcommerceUpdateOrderLineRequest
     */
    'product_variant_id'?: string;
    /**
     * The quantity of an order line item.
     * @type {number}
     * @memberof EcommerceUpdateOrderLineRequest
     */
    'quantity'?: number;
    /**
     * The price of an order line item.
     * @type {number}
     * @memberof EcommerceUpdateOrderLineRequest
     */
    'price'?: number;
    /**
     * The total discount amount applied to this line item.
     * @type {number}
     * @memberof EcommerceUpdateOrderLineRequest
     */
    'discount'?: number;
}

