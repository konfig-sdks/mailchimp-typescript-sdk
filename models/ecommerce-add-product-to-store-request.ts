/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ECommerceProductImage } from './ecommerce-product-image';
import { ECommerceProductVariant } from './ecommerce-product-variant';

/**
 * Information about a specific product.
 * @export
 * @interface EcommerceAddProductToStoreRequest
 */
export interface EcommerceAddProductToStoreRequest {
    /**
     * The title of a product.
     * @type {string}
     * @memberof EcommerceAddProductToStoreRequest
     */
    'title': string;
    /**
     * The description of a product.
     * @type {string}
     * @memberof EcommerceAddProductToStoreRequest
     */
    'description'?: string;
    /**
     * A unique identifier for the product.
     * @type {string}
     * @memberof EcommerceAddProductToStoreRequest
     */
    'id': string;
    /**
     * The handle of a product.
     * @type {string}
     * @memberof EcommerceAddProductToStoreRequest
     */
    'handle'?: string;
    /**
     * The URL for a product.
     * @type {string}
     * @memberof EcommerceAddProductToStoreRequest
     */
    'url'?: string;
    /**
     * The type of product.
     * @type {string}
     * @memberof EcommerceAddProductToStoreRequest
     */
    'type'?: string;
    /**
     * The vendor for a product.
     * @type {string}
     * @memberof EcommerceAddProductToStoreRequest
     */
    'vendor'?: string;
    /**
     * The image URL for a product.
     * @type {string}
     * @memberof EcommerceAddProductToStoreRequest
     */
    'image_url'?: string;
    /**
     * An array of the product\'s variants. At least one variant is required for each product. A variant can use the same `id` and `title` as the parent product.
     * @type {Array<ECommerceProductVariant>}
     * @memberof EcommerceAddProductToStoreRequest
     */
    'variants': Array<ECommerceProductVariant>;
    /**
     * An array of the product\'s images.
     * @type {Array<ECommerceProductImage>}
     * @memberof EcommerceAddProductToStoreRequest
     */
    'images'?: Array<ECommerceProductImage>;
    /**
     * The date and time the product was published.
     * @type {string}
     * @memberof EcommerceAddProductToStoreRequest
     */
    'published_at_foreign'?: string;
}
