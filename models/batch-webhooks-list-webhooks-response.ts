/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BatchWebhook } from './batch-webhook';
import { ResourceLink } from './resource-link';

/**
 * Manage webhooks for batch requests.
 * @export
 * @interface BatchWebhooksListWebhooksResponse
 */
export interface BatchWebhooksListWebhooksResponse {
    /**
     * An array of objects, each representing a Batch Webhook.
     * @type {Array<BatchWebhook>}
     * @memberof BatchWebhooksListWebhooksResponse
     */
    'webhooks'?: Array<BatchWebhook>;
    /**
     * The total number of items matching the query regardless of pagination.
     * @type {number}
     * @memberof BatchWebhooksListWebhooksResponse
     */
    'total_items'?: number;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof BatchWebhooksListWebhooksResponse
     */
    '_links'?: Array<ResourceLink>;
}

