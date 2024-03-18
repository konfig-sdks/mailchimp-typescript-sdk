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
 * Interest categories organize interests, which are used to group subscribers based on their preferences. These correspond to Group Titles the application.
 * @export
 * @interface InterestCategory
 */
export interface InterestCategory {
    /**
     * The text description of this category. This field appears on signup forms and is often phrased as a question.
     * @type {string}
     * @memberof InterestCategory
     */
    'title'?: string;
    /**
     * The unique list id for the category.
     * @type {string}
     * @memberof InterestCategory
     */
    'list_id'?: string;
    /**
     * The id for the interest category.
     * @type {string}
     * @memberof InterestCategory
     */
    'id'?: string;
    /**
     * The order that the categories are displayed in the list. Lower numbers display first.
     * @type {number}
     * @memberof InterestCategory
     */
    'display_order'?: number;
    /**
     * Determines how this category’s interests appear on signup forms.
     * @type {string}
     * @memberof InterestCategory
     */
    'type'?: InterestCategoryTypeEnum;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof InterestCategory
     */
    '_links'?: Array<ResourceLink>;
}

type InterestCategoryTypeEnum = 'checkboxes' | 'dropdown' | 'radio' | 'hidden'


