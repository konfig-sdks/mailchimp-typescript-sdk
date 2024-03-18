/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Subscriber location information.
 * @export
 * @interface LocationProperty2
 */
export interface LocationProperty2 {
    /**
     * The location latitude.
     * @type {number}
     * @memberof LocationProperty2
     */
    'latitude'?: number;
    /**
     * The location longitude.
     * @type {number}
     * @memberof LocationProperty2
     */
    'longitude'?: number;
    /**
     * The time difference in hours from GMT.
     * @type {number}
     * @memberof LocationProperty2
     */
    'gmtoff'?: number;
    /**
     * The offset for timezones where daylight saving time is observed.
     * @type {number}
     * @memberof LocationProperty2
     */
    'dstoff'?: number;
    /**
     * The unique code for the location country.
     * @type {string}
     * @memberof LocationProperty2
     */
    'country_code'?: string;
    /**
     * The timezone for the location.
     * @type {string}
     * @memberof LocationProperty2
     */
    'timezone'?: string;
    /**
     * The region for the location.
     * @type {string}
     * @memberof LocationProperty2
     */
    'region'?: string;
}

