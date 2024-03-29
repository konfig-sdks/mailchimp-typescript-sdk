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
 * An account export.
 * @export
 * @interface AccountExportInfoResponse
 */
export interface AccountExportInfoResponse {
    /**
     * The ID for the export.
     * @type {number}
     * @memberof AccountExportInfoResponse
     */
    'export_id'?: number;
    /**
     * Start time for the export.
     * @type {string}
     * @memberof AccountExportInfoResponse
     */
    'started'?: string;
    /**
     * If finished, the finish time for the export.
     * @type {string}
     * @memberof AccountExportInfoResponse
     */
    'finished'?: string;
    /**
     * The size of the uncompressed export in bytes.
     * @type {number}
     * @memberof AccountExportInfoResponse
     */
    'size_in_bytes'?: number;
    /**
     * If the export is finished, the download URL for an export. URLs are only valid for 90 days after the export completes.
     * @type {string}
     * @memberof AccountExportInfoResponse
     */
    'download_url'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof AccountExportInfoResponse
     */
    '_links'?: Array<ResourceLink>;
}

