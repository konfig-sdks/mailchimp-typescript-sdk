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
 * Information about an Ecommerce Store\'s specific Promo Code
 * @export
 * @interface EcommerceGetPromoCode200Response
 */
export interface EcommerceGetPromoCode200Response {
    /**
     * A unique identifier for the promo Code.
     * @type {string}
     * @memberof EcommerceGetPromoCode200Response
     */
    'id'?: string;
    /**
     * The discount code. Restricted to UTF-8 characters with max length 50.
     * @type {string}
     * @memberof EcommerceGetPromoCode200Response
     */
    'code'?: string;
    /**
     * The url that should be used in the promotion campaign restricted to UTF-8 characters with max length 2000.
     * @type {string}
     * @memberof EcommerceGetPromoCode200Response
     */
    'redemption_url'?: string;
    /**
     * Number of times promo code has been used.
     * @type {number}
     * @memberof EcommerceGetPromoCode200Response
     */
    'usage_count'?: number;
    /**
     * Whether the promo code is currently enabled.
     * @type {boolean}
     * @memberof EcommerceGetPromoCode200Response
     */
    'enabled'?: boolean;
    /**
     * The date and time the promotion was created in ISO 8601 format.
     * @type {string}
     * @memberof EcommerceGetPromoCode200Response
     */
    'created_at_foreign'?: string;
    /**
     * The date and time the promotion was updated in ISO 8601 format.
     * @type {string}
     * @memberof EcommerceGetPromoCode200Response
     */
    'updated_at_foreign'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof EcommerceGetPromoCode200Response
     */
    '_links'?: Array<ResourceLink>;
}

