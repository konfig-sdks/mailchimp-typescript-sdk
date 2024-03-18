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
 * An individual file listed in the File Manager.
 * @export
 * @interface FileManagerUploadFileResponse
 */
export interface FileManagerUploadFileResponse {
    /**
     * The unique id of the file.
     * @type {number}
     * @memberof FileManagerUploadFileResponse
     */
    'id'?: number;
    /**
     * The id of the folder.
     * @type {number}
     * @memberof FileManagerUploadFileResponse
     */
    'folder_id'?: number;
    /**
     * The type of file in the File Manager.
     * @type {string}
     * @memberof FileManagerUploadFileResponse
     */
    'type'?: FileManagerUploadFileResponseTypeEnum;
    /**
     * The name of the file.
     * @type {string}
     * @memberof FileManagerUploadFileResponse
     */
    'name'?: string;
    /**
     * The url of the full-size file.
     * @type {string}
     * @memberof FileManagerUploadFileResponse
     */
    'full_size_url'?: string;
    /**
     * The url of the thumbnail preview.
     * @type {string}
     * @memberof FileManagerUploadFileResponse
     */
    'thumbnail_url'?: string;
    /**
     * The size of the file in bytes.
     * @type {number}
     * @memberof FileManagerUploadFileResponse
     */
    'size'?: number;
    /**
     * The date and time a file was added to the File Manager in ISO 8601 format.
     * @type {string}
     * @memberof FileManagerUploadFileResponse
     */
    'created_at'?: string;
    /**
     * The username of the profile that uploaded the file.
     * @type {string}
     * @memberof FileManagerUploadFileResponse
     */
    'created_by'?: string;
    /**
     * The width of the image.
     * @type {number}
     * @memberof FileManagerUploadFileResponse
     */
    'width'?: number;
    /**
     * The height of an image.
     * @type {number}
     * @memberof FileManagerUploadFileResponse
     */
    'height'?: number;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof FileManagerUploadFileResponse
     */
    '_links'?: Array<ResourceLink>;
}

type FileManagerUploadFileResponseTypeEnum = 'image' | 'file'

