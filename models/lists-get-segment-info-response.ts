/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ConditionsProperty6 } from './conditions-property6';
import { ResourceLink } from './resource-link';

/**
 * Information about a specific segment.
 * @export
 * @interface ListsGetSegmentInfoResponse
 */
export interface ListsGetSegmentInfoResponse {
    /**
     * The unique id for the segment.
     * @type {number}
     * @memberof ListsGetSegmentInfoResponse
     */
    'id'?: number;
    /**
     * The name of the segment.
     * @type {string}
     * @memberof ListsGetSegmentInfoResponse
     */
    'name'?: string;
    /**
     * The number of active subscribers currently included in the segment.
     * @type {number}
     * @memberof ListsGetSegmentInfoResponse
     */
    'member_count'?: number;
    /**
     * The type of segment. Static segments are now known as tags. Learn more about [tags](https://mailchimp.com/help/getting-started-tags?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
     * @type {string}
     * @memberof ListsGetSegmentInfoResponse
     */
    'type'?: ListsGetSegmentInfoResponseTypeEnum;
    /**
     * The date and time the segment was created in ISO 8601 format.
     * @type {string}
     * @memberof ListsGetSegmentInfoResponse
     */
    'created_at'?: string;
    /**
     * The date and time the segment was last updated in ISO 8601 format.
     * @type {string}
     * @memberof ListsGetSegmentInfoResponse
     */
    'updated_at'?: string;
    /**
     * 
     * @type {ConditionsProperty6}
     * @memberof ListsGetSegmentInfoResponse
     */
    'options'?: ConditionsProperty6;
    /**
     * The list id.
     * @type {string}
     * @memberof ListsGetSegmentInfoResponse
     */
    'list_id'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ListsGetSegmentInfoResponse
     */
    '_links'?: Array<ResourceLink>;
}

type ListsGetSegmentInfoResponseTypeEnum = 'saved' | 'static' | 'fuzzy'

