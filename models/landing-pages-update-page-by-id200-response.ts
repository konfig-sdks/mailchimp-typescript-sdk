/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ResourceLink } from './resource-link';
import { TrackingSettingsProperty } from './tracking-settings-property';

/**
 * A summary of an individual landing page\'s settings and content.
 * @export
 * @interface LandingPagesUpdatePageById200Response
 */
export interface LandingPagesUpdatePageById200Response {
    /**
     * The title of this landing page seen in the browser\'s title bar.
     * @type {string}
     * @memberof LandingPagesUpdatePageById200Response
     */
    'title'?: string;
    /**
     * The description of this landing page.
     * @type {string}
     * @memberof LandingPagesUpdatePageById200Response
     */
    'description'?: string;
    /**
     * A string that uniquely identifies this landing page.
     * @type {string}
     * @memberof LandingPagesUpdatePageById200Response
     */
    'id'?: string;
    /**
     * The name of this landing page.
     * @type {string}
     * @memberof LandingPagesUpdatePageById200Response
     */
    'name'?: string;
    /**
     * The template_id of this landing page.
     * @type {number}
     * @memberof LandingPagesUpdatePageById200Response
     */
    'template_id'?: number;
    /**
     * The status of this landing page.
     * @type {string}
     * @memberof LandingPagesUpdatePageById200Response
     */
    'status'?: LandingPagesUpdatePageById200ResponseStatusEnum;
    /**
     * The list\'s ID associated with this landing page.
     * @type {string}
     * @memberof LandingPagesUpdatePageById200Response
     */
    'list_id'?: string;
    /**
     * The ID of the store associated with this landing page.
     * @type {string}
     * @memberof LandingPagesUpdatePageById200Response
     */
    'store_id'?: string;
    /**
     * The ID used in the Mailchimp web application.
     * @type {number}
     * @memberof LandingPagesUpdatePageById200Response
     */
    'web_id'?: number;
    /**
     * Created by mobile or web
     * @type {string}
     * @memberof LandingPagesUpdatePageById200Response
     */
    'created_by_source'?: string;
    /**
     * The url of the published landing page.
     * @type {string}
     * @memberof LandingPagesUpdatePageById200Response
     */
    'url'?: string;
    /**
     * The time this landing page was created.
     * @type {string}
     * @memberof LandingPagesUpdatePageById200Response
     */
    'created_at'?: string;
    /**
     * The time this landing page was published.
     * @type {string}
     * @memberof LandingPagesUpdatePageById200Response
     */
    'published_at'?: string;
    /**
     * The time this landing page was unpublished.
     * @type {string}
     * @memberof LandingPagesUpdatePageById200Response
     */
    'unpublished_at'?: string;
    /**
     * The time this landing page was updated at.
     * @type {string}
     * @memberof LandingPagesUpdatePageById200Response
     */
    'updated_at'?: string;
    /**
     * 
     * @type {TrackingSettingsProperty}
     * @memberof LandingPagesUpdatePageById200Response
     */
    'tracking'?: TrackingSettingsProperty;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof LandingPagesUpdatePageById200Response
     */
    '_links'?: Array<ResourceLink>;
}

type LandingPagesUpdatePageById200ResponseStatusEnum = 'published' | 'unpublished' | 'draft'

