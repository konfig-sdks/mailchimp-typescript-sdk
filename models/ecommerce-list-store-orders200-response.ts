/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ECommerceOrder3 } from './ecommerce-order3';
import { ResourceLink } from './resource-link';

/**
 * A collection of orders in a store.
 * @export
 * @interface EcommerceListStoreOrders200Response
 */
export interface EcommerceListStoreOrders200Response {
    /**
     * The unique identifier for the store.
     * @type {string}
     * @memberof EcommerceListStoreOrders200Response
     */
    'store_id'?: string;
    /**
     * An array of objects, each representing an order in a store.
     * @type {Array<ECommerceOrder3>}
     * @memberof EcommerceListStoreOrders200Response
     */
    'orders'?: Array<ECommerceOrder3>;
    /**
     * The total number of items matching the query regardless of pagination.
     * @type {number}
     * @memberof EcommerceListStoreOrders200Response
     */
    'total_items'?: number;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof EcommerceListStoreOrders200Response
     */
    '_links'?: Array<ResourceLink>;
}

