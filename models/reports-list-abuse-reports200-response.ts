/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AbuseComplaint1 } from './abuse-complaint1';
import { ResourceLink } from './resource-link';

/**
 * A list of abuse complaints for a specific list.
 * @export
 * @interface ReportsListAbuseReports200Response
 */
export interface ReportsListAbuseReports200Response {
    /**
     * An array of objects, each representing an abuse report resource.
     * @type {Array<AbuseComplaint1>}
     * @memberof ReportsListAbuseReports200Response
     */
    'abuse_reports'?: Array<AbuseComplaint1>;
    /**
     * The campaign id.
     * @type {string}
     * @memberof ReportsListAbuseReports200Response
     */
    'campaign_id'?: string;
    /**
     * The total number of items matching the query regardless of pagination.
     * @type {number}
     * @memberof ReportsListAbuseReports200Response
     */
    'total_items'?: number;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ReportsListAbuseReports200Response
     */
    '_links'?: Array<ResourceLink>;
}

