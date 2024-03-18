/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ECommerceCustomer } from './ecommerce-customer';
import { ResourceLink } from './resource-link';

/**
 * A collection of the store\'s customers.
 * @export
 * @interface EcommerceGetStoreCustomersResponse
 */
export interface EcommerceGetStoreCustomersResponse {
    /**
     * The store id.
     * @type {string}
     * @memberof EcommerceGetStoreCustomersResponse
     */
    'store_id'?: string;
    /**
     * An array of objects, each representing a customer of a store.
     * @type {Array<ECommerceCustomer>}
     * @memberof EcommerceGetStoreCustomersResponse
     */
    'customers'?: Array<ECommerceCustomer>;
    /**
     * The total number of items matching the query regardless of pagination.
     * @type {number}
     * @memberof EcommerceGetStoreCustomersResponse
     */
    'total_items'?: number;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof EcommerceGetStoreCustomersResponse
     */
    '_links'?: Array<ResourceLink>;
}

