/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ResourceLink } from './resource-link';
import { SentTo } from './sent-to';

/**
 * A list of subscribers who were sent a specific campaign.
 * @export
 * @interface ReportsListCampaignRecipientsResponse
 */
export interface ReportsListCampaignRecipientsResponse {
    /**
     * An array of objects, each representing a campaign recipient.
     * @type {Array<SentTo>}
     * @memberof ReportsListCampaignRecipientsResponse
     */
    'sent_to'?: Array<SentTo>;
    /**
     * The campaign id.
     * @type {string}
     * @memberof ReportsListCampaignRecipientsResponse
     */
    'campaign_id'?: string;
    /**
     * The total number of items matching the query regardless of pagination.
     * @type {number}
     * @memberof ReportsListCampaignRecipientsResponse
     */
    'total_items'?: number;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ReportsListCampaignRecipientsResponse
     */
    '_links'?: Array<ResourceLink>;
}
