/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { GalleryFile } from './gallery-file';
import { ResourceLink } from './resource-link';

/**
 * A list of available images and files stored in the File Manager for the account.
 * @export
 * @interface FileManagerListStoredFilesResponse
 */
export interface FileManagerListStoredFilesResponse {
    /**
     *  A list of files and images in an account.
     * @type {Array<GalleryFile>}
     * @memberof FileManagerListStoredFilesResponse
     */
    'files'?: Array<GalleryFile>;
    /**
     * The total size of all File Manager files in bytes.
     * @type {number}
     * @memberof FileManagerListStoredFilesResponse
     */
    'total_file_size'?: number;
    /**
     * The total number of items matching the query regardless of pagination.
     * @type {number}
     * @memberof FileManagerListStoredFilesResponse
     */
    'total_items'?: number;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof FileManagerListStoredFilesResponse
     */
    '_links'?: Array<ResourceLink>;
}

