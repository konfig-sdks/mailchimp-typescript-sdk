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
 * Information about a specific product variant.
 * @export
 * @interface ECommerceProductVariant4
 */
export interface ECommerceProductVariant4 {
    /**
     * The title of a product variant.
     * @type {string}
     * @memberof ECommerceProductVariant4
     */
    'title'?: string;
    /**
     * A unique identifier for the product variant.
     * @type {string}
     * @memberof ECommerceProductVariant4
     */
    'id'?: string;
    /**
     * The URL for a product variant.
     * @type {string}
     * @memberof ECommerceProductVariant4
     */
    'url'?: string;
    /**
     * The stock keeping unit (SKU) of a product variant.
     * @type {string}
     * @memberof ECommerceProductVariant4
     */
    'sku'?: string;
    /**
     * The price of a product variant.
     * @type {number}
     * @memberof ECommerceProductVariant4
     */
    'price'?: number;
    /**
     * The inventory quantity of a product variant.
     * @type {number}
     * @memberof ECommerceProductVariant4
     */
    'inventory_quantity'?: number;
    /**
     * The image URL for a product variant.
     * @type {string}
     * @memberof ECommerceProductVariant4
     */
    'image_url'?: string;
    /**
     * The backorders of a product variant.
     * @type {string}
     * @memberof ECommerceProductVariant4
     */
    'backorders'?: string;
    /**
     * The visibility of a product variant.
     * @type {string}
     * @memberof ECommerceProductVariant4
     */
    'visibility'?: string;
    /**
     * The date and time the product was created in ISO 8601 format.
     * @type {string}
     * @memberof ECommerceProductVariant4
     */
    'created_at'?: string;
    /**
     * The date and time the product was last updated in ISO 8601 format.
     * @type {string}
     * @memberof ECommerceProductVariant4
     */
    'updated_at'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ECommerceProductVariant4
     */
    '_links'?: Array<ResourceLink>;
}

