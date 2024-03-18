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
 * @interface LandingPagesGetPageInfo200Response
 */
export interface LandingPagesGetPageInfo200Response {
    /**
     * The title of this landing page seen in the browser\'s title bar.
     * @type {string}
     * @memberof LandingPagesGetPageInfo200Response
     */
    'title'?: string;
    /**
     * The description of this landing page.
     * @type {string}
     * @memberof LandingPagesGetPageInfo200Response
     */
    'description'?: string;
    /**
     * A string that uniquely identifies this landing page.
     * @type {string}
     * @memberof LandingPagesGetPageInfo200Response
     */
    'id'?: string;
    /**
     * The name of this landing page.
     * @type {string}
     * @memberof LandingPagesGetPageInfo200Response
     */
    'name'?: string;
    /**
     * The template_id of this landing page.
     * @type {number}
     * @memberof LandingPagesGetPageInfo200Response
     */
    'template_id'?: number;
    /**
     * The status of this landing page.
     * @type {string}
     * @memberof LandingPagesGetPageInfo200Response
     */
    'status'?: LandingPagesGetPageInfo200ResponseStatusEnum;
    /**
     * The list\'s ID associated with this landing page.
     * @type {string}
     * @memberof LandingPagesGetPageInfo200Response
     */
    'list_id'?: string;
    /**
     * The ID of the store associated with this landing page.
     * @type {string}
     * @memberof LandingPagesGetPageInfo200Response
     */
    'store_id'?: string;
    /**
     * The ID used in the Mailchimp web application.
     * @type {number}
     * @memberof LandingPagesGetPageInfo200Response
     */
    'web_id'?: number;
    /**
     * Created by mobile or web
     * @type {string}
     * @memberof LandingPagesGetPageInfo200Response
     */
    'created_by_source'?: string;
    /**
     * The url of the published landing page.
     * @type {string}
     * @memberof LandingPagesGetPageInfo200Response
     */
    'url'?: string;
    /**
     * The time this landing page was created.
     * @type {string}
     * @memberof LandingPagesGetPageInfo200Response
     */
    'created_at'?: string;
    /**
     * The time this landing page was published.
     * @type {string}
     * @memberof LandingPagesGetPageInfo200Response
     */
    'published_at'?: string;
    /**
     * The time this landing page was unpublished.
     * @type {string}
     * @memberof LandingPagesGetPageInfo200Response
     */
    'unpublished_at'?: string;
    /**
     * The time this landing page was updated at.
     * @type {string}
     * @memberof LandingPagesGetPageInfo200Response
     */
    'updated_at'?: string;
    /**
     * 
     * @type {TrackingSettingsProperty}
     * @memberof LandingPagesGetPageInfo200Response
     */
    'tracking'?: TrackingSettingsProperty;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof LandingPagesGetPageInfo200Response
     */
    '_links'?: Array<ResourceLink>;
}

type LandingPagesGetPageInfo200ResponseStatusEnum = 'published' | 'unpublished' | 'draft'

