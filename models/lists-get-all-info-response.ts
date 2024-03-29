/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CollectionAuthorizationProperty } from './collection-authorization-property';
import { ResourceLink } from './resource-link';
import { SubscriberList } from './subscriber-list';

/**
 * A collection of subscriber lists for this account. Lists contain subscribers who have opted-in to receive correspondence from you or your organization.
 * @export
 * @interface ListsGetAllInfoResponse
 */
export interface ListsGetAllInfoResponse {
    /**
     * An array of objects, each representing a list.
     * @type {Array<SubscriberList>}
     * @memberof ListsGetAllInfoResponse
     */
    'lists': Array<SubscriberList>;
    /**
     * The total number of items matching the query regardless of pagination.
     * @type {number}
     * @memberof ListsGetAllInfoResponse
     */
    'total_items'?: number;
    /**
     * 
     * @type {CollectionAuthorizationProperty}
     * @memberof ListsGetAllInfoResponse
     */
    'constraints'?: CollectionAuthorizationProperty;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ListsGetAllInfoResponse
     */
    '_links'?: Array<ResourceLink>;
}

