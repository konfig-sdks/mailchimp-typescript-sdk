/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by a specific US ZIP code.
 * @export
 * @interface ZipCodeLocationBasedSegment36
 */
export interface ZipCodeLocationBasedSegment36 {
    /**
     * 
     * @type {string}
     * @memberof ZipCodeLocationBasedSegment36
     */
    'condition_type'?: ZipCodeLocationBasedSegment36ConditionTypeEnum;
    /**
     * Segmenting subscribers who are within a specific location.
     * @type {string}
     * @memberof ZipCodeLocationBasedSegment36
     */
    'field': ZipCodeLocationBasedSegment36FieldEnum;
    /**
     * Segment members who are/are not within a specific US zip code.
     * @type {string}
     * @memberof ZipCodeLocationBasedSegment36
     */
    'op': ZipCodeLocationBasedSegment36OpEnum;
    /**
     * The 5-digit zip code.
     * @type {number}
     * @memberof ZipCodeLocationBasedSegment36
     */
    'value': number;
}

type ZipCodeLocationBasedSegment36ConditionTypeEnum = 'IPGeoZip'
type ZipCodeLocationBasedSegment36FieldEnum = 'ipgeo'
type ZipCodeLocationBasedSegment36OpEnum = 'ipgeoiszip' | 'ipgeonotzip'


