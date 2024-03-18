/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TemplateContentProperty } from './template-content-property';
import { UploadArchiveProperty } from './upload-archive-property';
import { VariateContentsPropertyInner } from './variate-contents-property-inner';

/**
 * The HTML and plain-text content for a campaign
 * @export
 * @interface CampaignsSetContentRequest
 */
export interface CampaignsSetContentRequest {
    /**
     * The plain-text portion of the campaign. If left unspecified, we\'ll generate this automatically.
     * @type {string}
     * @memberof CampaignsSetContentRequest
     */
    'plain_text'?: string;
    /**
     * The raw HTML for the campaign.
     * @type {string}
     * @memberof CampaignsSetContentRequest
     */
    'html'?: string;
    /**
     * When importing a campaign, the URL where the HTML lives.
     * @type {string}
     * @memberof CampaignsSetContentRequest
     */
    'url'?: string;
    /**
     * 
     * @type {TemplateContentProperty}
     * @memberof CampaignsSetContentRequest
     */
    'template'?: TemplateContentProperty;
    /**
     * 
     * @type {UploadArchiveProperty}
     * @memberof CampaignsSetContentRequest
     */
    'archive'?: UploadArchiveProperty;
    /**
     * Content options for [Multivariate Campaigns](https://mailchimp.com/help/about-multivariate-campaigns/). Each content option must provide HTML content and may optionally provide plain text. For campaigns not testing content, only one object should be provided.
     * @type {Array<VariateContentsPropertyInner>}
     * @memberof CampaignsSetContentRequest
     */
    'variate_contents'?: Array<VariateContentsPropertyInner>;
}
