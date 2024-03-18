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
 * Campaign feedback details.
 * @export
 * @interface CampaignAdvice
 */
export interface CampaignAdvice {
    /**
     * The sentiment type for a feedback message.
     * @type {string}
     * @memberof CampaignAdvice
     */
    'type'?: CampaignAdviceTypeEnum;
    /**
     * The advice message.
     * @type {string}
     * @memberof CampaignAdvice
     */
    'message'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof CampaignAdvice
     */
    '_links'?: Array<ResourceLink>;
}

type CampaignAdviceTypeEnum = 'negative' | 'positive' | 'neutral'


