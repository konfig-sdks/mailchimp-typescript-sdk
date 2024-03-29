/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by a specific geographic region.
 * @export
 * @interface GeolocationSegment13
 */
export interface GeolocationSegment13 {
    /**
     * 
     * @type {string}
     * @memberof GeolocationSegment13
     */
    'condition_type'?: GeolocationSegment13ConditionTypeEnum;
    /**
     * Segmenting subscribers who are within a specific location.
     * @type {string}
     * @memberof GeolocationSegment13
     */
    'field': GeolocationSegment13FieldEnum;
    /**
     * Segment members who are within a specific geographic region.
     * @type {string}
     * @memberof GeolocationSegment13
     */
    'op': GeolocationSegment13OpEnum;
    /**
     * The radius of the target location.
     * @type {number}
     * @memberof GeolocationSegment13
     */
    'value': number;
    /**
     * The address of the target location.
     * @type {string}
     * @memberof GeolocationSegment13
     */
    'addr': string;
    /**
     * The latitude of the target location.
     * @type {string}
     * @memberof GeolocationSegment13
     */
    'lat': string;
    /**
     * The longitude of the target location.
     * @type {string}
     * @memberof GeolocationSegment13
     */
    'lng': string;
}

type GeolocationSegment13ConditionTypeEnum = 'IPGeoIn'
type GeolocationSegment13FieldEnum = 'ipgeo'
type GeolocationSegment13OpEnum = 'ipgeoin' | 'ipgeonotin'


