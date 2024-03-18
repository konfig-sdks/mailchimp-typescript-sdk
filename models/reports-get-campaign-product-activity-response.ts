/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ReportsGetCampaignProductActivityResponseProductsInner } from './reports-get-campaign-product-activity-response-products-inner';
import { ResourceLink } from './resource-link';

/**
 * A collection of ecommerce products.
 * @export
 * @interface ReportsGetCampaignProductActivityResponse
 */
export interface ReportsGetCampaignProductActivityResponse {
    /**
     * 
     * @type {Array<ReportsGetCampaignProductActivityResponseProductsInner>}
     * @memberof ReportsGetCampaignProductActivityResponse
     */
    'products'?: Array<ReportsGetCampaignProductActivityResponseProductsInner>;
    /**
     * The total number of items matching the query regardless of pagination.
     * @type {number}
     * @memberof ReportsGetCampaignProductActivityResponse
     */
    'total_items'?: number;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ReportsGetCampaignProductActivityResponse
     */
    '_links'?: Array<ResourceLink>;
}

