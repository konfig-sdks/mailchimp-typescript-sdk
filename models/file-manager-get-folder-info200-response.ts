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
 * An individual folder listed in the File Manager.
 * @export
 * @interface FileManagerGetFolderInfo200Response
 */
export interface FileManagerGetFolderInfo200Response {
    /**
     * The unique id for the folder.
     * @type {number}
     * @memberof FileManagerGetFolderInfo200Response
     */
    'id'?: number;
    /**
     * The name of the folder.
     * @type {string}
     * @memberof FileManagerGetFolderInfo200Response
     */
    'name'?: string;
    /**
     * The number of files in the folder.
     * @type {number}
     * @memberof FileManagerGetFolderInfo200Response
     */
    'file_count'?: number;
    /**
     * The date and time a file was added to the File Manager in ISO 8601 format.
     * @type {string}
     * @memberof FileManagerGetFolderInfo200Response
     */
    'created_at'?: string;
    /**
     * The username of the profile that created the folder.
     * @type {string}
     * @memberof FileManagerGetFolderInfo200Response
     */
    'created_by'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof FileManagerGetFolderInfo200Response
     */
    '_links'?: Array<ResourceLink>;
}

