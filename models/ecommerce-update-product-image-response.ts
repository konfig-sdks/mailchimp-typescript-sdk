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
 * Information about a specific product image.
 * @export
 * @interface EcommerceUpdateProductImageResponse
 */
export interface EcommerceUpdateProductImageResponse {
    /**
     * A unique identifier for the product image.
     * @type {string}
     * @memberof EcommerceUpdateProductImageResponse
     */
    'id'?: string;
    /**
     * The URL for a product image.
     * @type {string}
     * @memberof EcommerceUpdateProductImageResponse
     */
    'url'?: string;
    /**
     * The list of product variants using the image.
     * @type {Array<string>}
     * @memberof EcommerceUpdateProductImageResponse
     */
    'variant_ids'?: Array<string>;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof EcommerceUpdateProductImageResponse
     */
    '_links'?: Array<ResourceLink>;
}

