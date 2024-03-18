/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ECommerceProductImage2 } from './ecommerce-product-image2';
import { ECommerceProductVariant5 } from './ecommerce-product-variant5';
import { ResourceLink } from './resource-link';

/**
 * Information about a specific product.
 * @export
 * @interface EcommerceAddProductToStore200Response
 */
export interface EcommerceAddProductToStore200Response {
    /**
     * The title of a product.
     * @type {string}
     * @memberof EcommerceAddProductToStore200Response
     */
    'title'?: string;
    /**
     * The description of a product.
     * @type {string}
     * @memberof EcommerceAddProductToStore200Response
     */
    'description'?: string;
    /**
     * A unique identifier for the product.
     * @type {string}
     * @memberof EcommerceAddProductToStore200Response
     */
    'id'?: string;
    /**
     * The currency code
     * @type {string}
     * @memberof EcommerceAddProductToStore200Response
     */
    'currency_code'?: string;
    /**
     * The handle of a product.
     * @type {string}
     * @memberof EcommerceAddProductToStore200Response
     */
    'handle'?: string;
    /**
     * The URL for a product.
     * @type {string}
     * @memberof EcommerceAddProductToStore200Response
     */
    'url'?: string;
    /**
     * The type of product.
     * @type {string}
     * @memberof EcommerceAddProductToStore200Response
     */
    'type'?: string;
    /**
     * The vendor for a product.
     * @type {string}
     * @memberof EcommerceAddProductToStore200Response
     */
    'vendor'?: string;
    /**
     * The image URL for a product.
     * @type {string}
     * @memberof EcommerceAddProductToStore200Response
     */
    'image_url'?: string;
    /**
     * Returns up to 50 of the product\'s variants. To retrieve all variants use [Product Variants](https://mailchimp.com/developer/marketing/api/ecommerce-product-variants/).
     * @type {Array<ECommerceProductVariant5>}
     * @memberof EcommerceAddProductToStore200Response
     */
    'variants'?: Array<ECommerceProductVariant5>;
    /**
     * An array of the product\'s images.
     * @type {Array<ECommerceProductImage2>}
     * @memberof EcommerceAddProductToStore200Response
     */
    'images'?: Array<ECommerceProductImage2>;
    /**
     * The date and time the product was published in ISO 8601 format.
     * @type {string}
     * @memberof EcommerceAddProductToStore200Response
     */
    'published_at_foreign'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof EcommerceAddProductToStore200Response
     */
    '_links'?: Array<ResourceLink>;
}
