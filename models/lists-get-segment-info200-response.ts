/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ConditionsProperty7 } from './conditions-property7';
import { ResourceLink } from './resource-link';

/**
 * Information about a specific segment.
 * @export
 * @interface ListsGetSegmentInfo200Response
 */
export interface ListsGetSegmentInfo200Response {
    /**
     * The unique id for the segment.
     * @type {number}
     * @memberof ListsGetSegmentInfo200Response
     */
    'id'?: number;
    /**
     * The name of the segment.
     * @type {string}
     * @memberof ListsGetSegmentInfo200Response
     */
    'name'?: string;
    /**
     * The number of active subscribers currently included in the segment.
     * @type {number}
     * @memberof ListsGetSegmentInfo200Response
     */
    'member_count'?: number;
    /**
     * The type of segment. Static segments are now known as tags. Learn more about [tags](https://mailchimp.com/help/getting-started-tags?utm_source=mc-api&utm_medium=docs&utm_campaign=apidocs).
     * @type {string}
     * @memberof ListsGetSegmentInfo200Response
     */
    'type'?: ListsGetSegmentInfo200ResponseTypeEnum;
    /**
     * The date and time the segment was created in ISO 8601 format.
     * @type {string}
     * @memberof ListsGetSegmentInfo200Response
     */
    'created_at'?: string;
    /**
     * The date and time the segment was last updated in ISO 8601 format.
     * @type {string}
     * @memberof ListsGetSegmentInfo200Response
     */
    'updated_at'?: string;
    /**
     * 
     * @type {ConditionsProperty7}
     * @memberof ListsGetSegmentInfo200Response
     */
    'options'?: ConditionsProperty7;
    /**
     * The list id.
     * @type {string}
     * @memberof ListsGetSegmentInfo200Response
     */
    'list_id'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ListsGetSegmentInfo200Response
     */
    '_links'?: Array<ResourceLink>;
}

type ListsGetSegmentInfo200ResponseTypeEnum = 'saved' | 'static' | 'fuzzy'


