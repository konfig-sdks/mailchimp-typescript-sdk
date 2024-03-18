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
 * @interface LandingPagesUpdatePageByIdResponse
 */
export interface LandingPagesUpdatePageByIdResponse {
    /**
     * The title of this landing page seen in the browser\'s title bar.
     * @type {string}
     * @memberof LandingPagesUpdatePageByIdResponse
     */
    'title'?: string;
    /**
     * The description of this landing page.
     * @type {string}
     * @memberof LandingPagesUpdatePageByIdResponse
     */
    'description'?: string;
    /**
     * A string that uniquely identifies this landing page.
     * @type {string}
     * @memberof LandingPagesUpdatePageByIdResponse
     */
    'id'?: string;
    /**
     * The name of this landing page.
     * @type {string}
     * @memberof LandingPagesUpdatePageByIdResponse
     */
    'name'?: string;
    /**
     * The template_id of this landing page.
     * @type {number}
     * @memberof LandingPagesUpdatePageByIdResponse
     */
    'template_id'?: number;
    /**
     * The status of this landing page.
     * @type {string}
     * @memberof LandingPagesUpdatePageByIdResponse
     */
    'status'?: LandingPagesUpdatePageByIdResponseStatusEnum;
    /**
     * The list\'s ID associated with this landing page.
     * @type {string}
     * @memberof LandingPagesUpdatePageByIdResponse
     */
    'list_id'?: string;
    /**
     * The ID of the store associated with this landing page.
     * @type {string}
     * @memberof LandingPagesUpdatePageByIdResponse
     */
    'store_id'?: string;
    /**
     * The ID used in the Mailchimp web application.
     * @type {number}
     * @memberof LandingPagesUpdatePageByIdResponse
     */
    'web_id'?: number;
    /**
     * Created by mobile or web
     * @type {string}
     * @memberof LandingPagesUpdatePageByIdResponse
     */
    'created_by_source'?: string;
    /**
     * The url of the published landing page.
     * @type {string}
     * @memberof LandingPagesUpdatePageByIdResponse
     */
    'url'?: string;
    /**
     * The time this landing page was created.
     * @type {string}
     * @memberof LandingPagesUpdatePageByIdResponse
     */
    'created_at'?: string;
    /**
     * The time this landing page was published.
     * @type {string}
     * @memberof LandingPagesUpdatePageByIdResponse
     */
    'published_at'?: string;
    /**
     * The time this landing page was unpublished.
     * @type {string}
     * @memberof LandingPagesUpdatePageByIdResponse
     */
    'unpublished_at'?: string;
    /**
     * The time this landing page was updated at.
     * @type {string}
     * @memberof LandingPagesUpdatePageByIdResponse
     */
    'updated_at'?: string;
    /**
     * 
     * @type {TrackingSettingsProperty}
     * @memberof LandingPagesUpdatePageByIdResponse
     */
    'tracking'?: TrackingSettingsProperty;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof LandingPagesUpdatePageByIdResponse
     */
    '_links'?: Array<ResourceLink>;
}

type LandingPagesUpdatePageByIdResponseStatusEnum = 'published' | 'unpublished' | 'draft'


