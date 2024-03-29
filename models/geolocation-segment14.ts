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
 * @interface GeolocationSegment14
 */
export interface GeolocationSegment14 {
    /**
     * 
     * @type {string}
     * @memberof GeolocationSegment14
     */
    'condition_type'?: GeolocationSegment14ConditionTypeEnum;
    /**
     * Segmenting subscribers who are within a specific location.
     * @type {string}
     * @memberof GeolocationSegment14
     */
    'field': GeolocationSegment14FieldEnum;
    /**
     * Segment members who are within a specific geographic region.
     * @type {string}
     * @memberof GeolocationSegment14
     */
    'op': GeolocationSegment14OpEnum;
    /**
     * The radius of the target location.
     * @type {number}
     * @memberof GeolocationSegment14
     */
    'value': number;
    /**
     * The address of the target location.
     * @type {string}
     * @memberof GeolocationSegment14
     */
    'addr': string;
    /**
     * The latitude of the target location.
     * @type {string}
     * @memberof GeolocationSegment14
     */
    'lat': string;
    /**
     * The longitude of the target location.
     * @type {string}
     * @memberof GeolocationSegment14
     */
    'lng': string;
}

type GeolocationSegment14ConditionTypeEnum = 'IPGeoIn'
type GeolocationSegment14FieldEnum = 'ipgeo'
type GeolocationSegment14OpEnum = 'ipgeoin' | 'ipgeonotin'


