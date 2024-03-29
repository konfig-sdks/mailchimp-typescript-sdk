/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Stats for Campaign B.
 * @export
 * @interface CampaignBProperty
 */
export interface CampaignBProperty {
    /**
     * Bounces for Campaign B.
     * @type {number}
     * @memberof CampaignBProperty
     */
    'bounces'?: number;
    /**
     * Abuse reports for Campaign B.
     * @type {number}
     * @memberof CampaignBProperty
     */
    'abuse_reports'?: number;
    /**
     * Unsubscribes for Campaign B.
     * @type {number}
     * @memberof CampaignBProperty
     */
    'unsubs'?: number;
    /**
     * Recipients clicks for Campaign B.
     * @type {number}
     * @memberof CampaignBProperty
     */
    'recipient_clicks'?: number;
    /**
     * Forwards for Campaign B.
     * @type {number}
     * @memberof CampaignBProperty
     */
    'forwards'?: number;
    /**
     * Opens for forwards from Campaign B.
     * @type {number}
     * @memberof CampaignBProperty
     */
    'forwards_opens'?: number;
    /**
     * Opens for Campaign B.
     * @type {number}
     * @memberof CampaignBProperty
     */
    'opens'?: number;
    /**
     * The last open for Campaign B.
     * @type {string}
     * @memberof CampaignBProperty
     */
    'last_open'?: string;
    /**
     * Unique opens for Campaign B.
     * @type {number}
     * @memberof CampaignBProperty
     */
    'unique_opens'?: number;
}

