/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Assign subscribers to interests to group them together. Interests are referred to as \'group names\' in the Mailchimp application.
 * @export
 * @interface ListsAddInterestInCategoryRequest
 */
export interface ListsAddInterestInCategoryRequest {
    /**
     * The name of the interest. This can be shown publicly on a subscription form.
     * @type {string}
     * @memberof ListsAddInterestInCategoryRequest
     */
    'name': string;
    /**
     * The display order for interests.
     * @type {number}
     * @memberof ListsAddInterestInCategoryRequest
     */
    'display_order'?: number;
}
