/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface VariateContentsPropertyInner3
 */
export interface VariateContentsPropertyInner3 {
    /**
     * Label used to identify the content option.
     * @type {string}
     * @memberof VariateContentsPropertyInner3
     */
    'content_label'?: string;
    /**
     * The plain-text portion of the campaign. If left unspecified, we\'ll generate this automatically.
     * @type {string}
     * @memberof VariateContentsPropertyInner3
     */
    'plain_text'?: string;
    /**
     * The raw HTML for the campaign.
     * @type {string}
     * @memberof VariateContentsPropertyInner3
     */
    'html'?: string;
}

