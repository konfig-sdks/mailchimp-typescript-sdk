/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ClickDetailMember } from './click-detail-member';
import { ResourceLink } from './resource-link';

/**
 * A collection of members who clicked on a specific link within a campaign.
 * @export
 * @interface ReportsListClickedLinkSubscribers200Response
 */
export interface ReportsListClickedLinkSubscribers200Response {
    /**
     * An array of objects, each representing a member who clicked a specific link within a campaign.
     * @type {Array<ClickDetailMember>}
     * @memberof ReportsListClickedLinkSubscribers200Response
     */
    'members'?: Array<ClickDetailMember>;
    /**
     * The campaign id.
     * @type {string}
     * @memberof ReportsListClickedLinkSubscribers200Response
     */
    'campaign_id'?: string;
    /**
     * The total number of items matching the query regardless of pagination.
     * @type {number}
     * @memberof ReportsListClickedLinkSubscribers200Response
     */
    'total_items'?: number;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ReportsListClickedLinkSubscribers200Response
     */
    '_links'?: Array<ResourceLink>;
}

