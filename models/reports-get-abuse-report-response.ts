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
 * Details of abuse complaints for a specific list. An abuse complaint occurs when your recipient clicks to \'report spam\' in their email program.
 * @export
 * @interface ReportsGetAbuseReportResponse
 */
export interface ReportsGetAbuseReportResponse {
    /**
     * The id for the abuse report
     * @type {number}
     * @memberof ReportsGetAbuseReportResponse
     */
    'id'?: number;
    /**
     * The campaign id for the abuse report
     * @type {string}
     * @memberof ReportsGetAbuseReportResponse
     */
    'campaign_id'?: string;
    /**
     * The unique id of the list for the abuse report.
     * @type {string}
     * @memberof ReportsGetAbuseReportResponse
     */
    'list_id'?: string;
    /**
     * The status of the list used, namely if it\'s deleted or disabled.
     * @type {boolean}
     * @memberof ReportsGetAbuseReportResponse
     */
    'list_is_active'?: boolean;
    /**
     * The MD5 hash of the lowercase version of the list member\'s email address.
     * @type {string}
     * @memberof ReportsGetAbuseReportResponse
     */
    'email_id'?: string;
    /**
     * Email address for a subscriber.
     * @type {string}
     * @memberof ReportsGetAbuseReportResponse
     */
    'email_address'?: string;
    /**
     * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
     * @type {{ [key: string]: any; }}
     * @memberof ReportsGetAbuseReportResponse
     */
    'merge_fields'?: { [key: string]: any; };
    /**
     * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
     * @type {boolean}
     * @memberof ReportsGetAbuseReportResponse
     */
    'vip'?: boolean;
    /**
     * Date for the abuse report
     * @type {string}
     * @memberof ReportsGetAbuseReportResponse
     */
    'date'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ReportsGetAbuseReportResponse
     */
    '_links'?: Array<ResourceLink>;
}

