/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ScriptProperty12 } from './script-property12';

/**
 * The Connected Site associated with the store.
 * @export
 * @interface ConnectedSiteProperty6
 */
export interface ConnectedSiteProperty6 {
    /**
     * The unique identifier for the connected site.
     * @type {string}
     * @memberof ConnectedSiteProperty6
     */
    'site_foreign_id'?: string;
    /**
     * 
     * @type {ScriptProperty12}
     * @memberof ConnectedSiteProperty6
     */
    'site_script'?: ScriptProperty12;
}

