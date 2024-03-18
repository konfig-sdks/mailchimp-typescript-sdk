/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface ListsPropertyInner
 */
export interface ListsPropertyInner {
    /**
     * The ISO 3166 2 digit country code.
     * @type {string}
     * @memberof ListsPropertyInner
     */
    'country_code'?: string;
    /**
     * An internal code for the region representing the more specific location area such as city or state. When this is blank, it indicates we know the country, but not the region.
     * @type {string}
     * @memberof ListsPropertyInner
     */
    'region'?: string;
    /**
     * The name of the region, if we have one. For blank \"region\" values, this will be \"Rest of Country\".
     * @type {string}
     * @memberof ListsPropertyInner
     */
    'region_name'?: string;
    /**
     * The number of unique campaign opens for a region.
     * @type {number}
     * @memberof ListsPropertyInner
     */
    'opens'?: number;
}
