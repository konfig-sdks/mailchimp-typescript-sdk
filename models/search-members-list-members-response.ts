/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ExactMatchesProperty } from './exact-matches-property';
import { PartialMatchesProperty } from './partial-matches-property';
import { ResourceLink } from './resource-link';

/**
 * Members found for given search term
 * @export
 * @interface SearchMembersListMembersResponse
 */
export interface SearchMembersListMembersResponse {
    /**
     * 
     * @type {ExactMatchesProperty}
     * @memberof SearchMembersListMembersResponse
     */
    'exact_matches'?: ExactMatchesProperty;
    /**
     * 
     * @type {PartialMatchesProperty}
     * @memberof SearchMembersListMembersResponse
     */
    'full_search'?: PartialMatchesProperty;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof SearchMembersListMembersResponse
     */
    '_links'?: Array<ResourceLink>;
}

