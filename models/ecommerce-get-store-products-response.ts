/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ECommerceProduct } from './ecommerce-product';
import { ResourceLink } from './resource-link';

/**
 * A collection of a store\'s products.
 * @export
 * @interface EcommerceGetStoreProductsResponse
 */
export interface EcommerceGetStoreProductsResponse {
    /**
     * The store id.
     * @type {string}
     * @memberof EcommerceGetStoreProductsResponse
     */
    'store_id'?: string;
    /**
     * An array of objects, each representing a store product.
     * @type {Array<ECommerceProduct>}
     * @memberof EcommerceGetStoreProductsResponse
     */
    'products'?: Array<ECommerceProduct>;
    /**
     * The total number of items matching the query regardless of pagination.
     * @type {number}
     * @memberof EcommerceGetStoreProductsResponse
     */
    'total_items'?: number;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof EcommerceGetStoreProductsResponse
     */
    '_links'?: Array<ResourceLink>;
}

