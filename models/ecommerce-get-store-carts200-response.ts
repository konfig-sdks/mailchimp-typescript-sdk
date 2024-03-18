/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ECommerceCart1 } from './ecommerce-cart1';
import { ResourceLink } from './resource-link';

/**
 * A collection of a store\'s carts.
 * @export
 * @interface EcommerceGetStoreCarts200Response
 */
export interface EcommerceGetStoreCarts200Response {
    /**
     * The store id.
     * @type {string}
     * @memberof EcommerceGetStoreCarts200Response
     */
    'store_id'?: string;
    /**
     * An array of objects, each representing a cart.
     * @type {Array<ECommerceCart1>}
     * @memberof EcommerceGetStoreCarts200Response
     */
    'carts'?: Array<ECommerceCart1>;
    /**
     * The total number of items matching the query regardless of pagination.
     * @type {number}
     * @memberof EcommerceGetStoreCarts200Response
     */
    'total_items'?: number;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof EcommerceGetStoreCarts200Response
     */
    '_links'?: Array<ResourceLink>;
}
