/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * An object describing the forwards and forward activity for the campaign.
 * @export
 * @interface ForwardsProperty
 */
export interface ForwardsProperty {
    /**
     * How many times the campaign has been forwarded.
     * @type {number}
     * @memberof ForwardsProperty
     */
    'forwards_count'?: number;
    /**
     * How many times the forwarded campaign has been opened.
     * @type {number}
     * @memberof ForwardsProperty
     */
    'forwards_opens'?: number;
}

