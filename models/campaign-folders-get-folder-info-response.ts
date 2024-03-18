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
 * A folder used to organize campaigns.
 * @export
 * @interface CampaignFoldersGetFolderInfoResponse
 */
export interface CampaignFoldersGetFolderInfoResponse {
    /**
     * The name of the folder.
     * @type {string}
     * @memberof CampaignFoldersGetFolderInfoResponse
     */
    'name'?: string;
    /**
     * A string that uniquely identifies this campaign folder.
     * @type {string}
     * @memberof CampaignFoldersGetFolderInfoResponse
     */
    'id'?: string;
    /**
     * The number of campaigns in the folder.
     * @type {number}
     * @memberof CampaignFoldersGetFolderInfoResponse
     */
    'count'?: number;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof CampaignFoldersGetFolderInfoResponse
     */
    '_links'?: Array<ResourceLink>;
}

