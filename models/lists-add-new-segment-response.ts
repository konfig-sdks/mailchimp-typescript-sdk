/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ConditionsProperty4 } from './conditions-property4';
import { ResourceLink } from './resource-link';

/**
 * Information about a specific segment.
 * @export
 * @interface ListsAddNewSegmentResponse
 */
export interface ListsAddNewSegmentResponse {
    /**
     * The unique id for the segment.
     * @type {number}
     * @memberof ListsAddNewSegmentResponse
     */
    'id'?: number;
    /**
     * The name of the segment.
     * @type {string}
     * @memberof ListsAddNewSegmentResponse
     */
    'name'?: string;
    /**
     * The number of active subscribers currently included in the segment.
     * @type {number}
     * @memberof ListsAddNewSegmentResponse
     */
    'member_count'?: number;
    /**
     * The type of segment. Static segments are now known as tags. Learn more about [tags](https://mailchimp.com/help/getting-started-tags?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
     * @type {string}
     * @memberof ListsAddNewSegmentResponse
     */
    'type'?: ListsAddNewSegmentResponseTypeEnum;
    /**
     * The date and time the segment was created in ISO 8601 format.
     * @type {string}
     * @memberof ListsAddNewSegmentResponse
     */
    'created_at'?: string;
    /**
     * The date and time the segment was last updated in ISO 8601 format.
     * @type {string}
     * @memberof ListsAddNewSegmentResponse
     */
    'updated_at'?: string;
    /**
     * 
     * @type {ConditionsProperty4}
     * @memberof ListsAddNewSegmentResponse
     */
    'options'?: ConditionsProperty4;
    /**
     * The list id.
     * @type {string}
     * @memberof ListsAddNewSegmentResponse
     */
    'list_id'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ListsAddNewSegmentResponse
     */
    '_links'?: Array<ResourceLink>;
}

type ListsAddNewSegmentResponseTypeEnum = 'saved' | 'static' | 'fuzzy'


