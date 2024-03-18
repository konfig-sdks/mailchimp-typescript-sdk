/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ResourceLink } from './resource-link';
import { VariateContentsPropertyInner4 } from './variate-contents-property-inner4';

/**
 * The HTML and plain-text content for a campaign.
 * @export
 * @interface CampaignsSetContent200Response
 */
export interface CampaignsSetContent200Response {
    /**
     * Content options for multivariate campaigns.
     * @type {Array<VariateContentsPropertyInner4>}
     * @memberof CampaignsSetContent200Response
     */
    'variate_contents'?: Array<VariateContentsPropertyInner4>;
    /**
     * The plain-text portion of the campaign. If left unspecified, we\'ll generate this automatically.
     * @type {string}
     * @memberof CampaignsSetContent200Response
     */
    'plain_text'?: string;
    /**
     * The raw HTML for the campaign.
     * @type {string}
     * @memberof CampaignsSetContent200Response
     */
    'html'?: string;
    /**
     * The Archive HTML for the campaign.
     * @type {string}
     * @memberof CampaignsSetContent200Response
     */
    'archive_html'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof CampaignsSetContent200Response
     */
    '_links'?: Array<ResourceLink>;
}
