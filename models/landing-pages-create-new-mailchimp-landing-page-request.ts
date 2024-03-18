/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TrackingSettingsProperty } from './tracking-settings-property';

/**
 * A summary of an individual page\'s properties.
 * @export
 * @interface LandingPagesCreateNewMailchimpLandingPageRequest
 */
export interface LandingPagesCreateNewMailchimpLandingPageRequest {
    /**
     * The title of this landing page seen in the browser\'s title bar.
     * @type {string}
     * @memberof LandingPagesCreateNewMailchimpLandingPageRequest
     */
    'title'?: string;
    /**
     * The description of this landing page.
     * @type {string}
     * @memberof LandingPagesCreateNewMailchimpLandingPageRequest
     */
    'description'?: string;
    /**
     * The name of this landing page.
     * @type {string}
     * @memberof LandingPagesCreateNewMailchimpLandingPageRequest
     */
    'name'?: string;
    /**
     * The ID of the store associated with this landing page.
     * @type {string}
     * @memberof LandingPagesCreateNewMailchimpLandingPageRequest
     */
    'store_id'?: string;
    /**
     * The list\'s ID associated with this landing page.
     * @type {string}
     * @memberof LandingPagesCreateNewMailchimpLandingPageRequest
     */
    'list_id'?: string;
    /**
     * The type of template the landing page has.
     * @type {string}
     * @memberof LandingPagesCreateNewMailchimpLandingPageRequest
     */
    'type'?: LandingPagesCreateNewMailchimpLandingPageRequestTypeEnum;
    /**
     * The template_id of this landing page.
     * @type {number}
     * @memberof LandingPagesCreateNewMailchimpLandingPageRequest
     */
    'template_id'?: number;
    /**
     * 
     * @type {TrackingSettingsProperty}
     * @memberof LandingPagesCreateNewMailchimpLandingPageRequest
     */
    'tracking'?: TrackingSettingsProperty;
}

type LandingPagesCreateNewMailchimpLandingPageRequestTypeEnum = 'signup' | 'product'

