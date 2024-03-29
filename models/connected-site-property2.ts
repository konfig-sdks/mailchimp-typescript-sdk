/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ScriptProperty8 } from './script-property8';

/**
 * The Connected Site associated with the store.
 * @export
 * @interface ConnectedSiteProperty2
 */
export interface ConnectedSiteProperty2 {
    /**
     * The unique identifier for the connected site.
     * @type {string}
     * @memberof ConnectedSiteProperty2
     */
    'site_foreign_id'?: string;
    /**
     * 
     * @type {ScriptProperty8}
     * @memberof ConnectedSiteProperty2
     */
    'site_script'?: ScriptProperty8;
}

