/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Determines if the campaign qualifies to be resent to non-openers.
 * @export
 * @interface ToNonOpenersProperty
 */
export interface ToNonOpenersProperty {
    /**
     * Determines if the campaign qualifies to be resent to this segment.
     * @type {boolean}
     * @memberof ToNonOpenersProperty
     */
    'is_eligible'?: boolean;
    /**
     * The reason the campaign is not eligible to be resent to this segment.
     * @type {string}
     * @memberof ToNonOpenersProperty
     */
    'reason'?: string;
}

