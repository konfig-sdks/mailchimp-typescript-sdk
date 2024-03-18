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
 * @interface ZipCodeLocationBasedSegment31
 */
export interface ZipCodeLocationBasedSegment31 {
    /**
     * 
     * @type {string}
     * @memberof ZipCodeLocationBasedSegment31
     */
    'condition_type'?: ZipCodeLocationBasedSegment31ConditionTypeEnum;
    /**
     * Segmenting subscribers who are within a specific location.
     * @type {string}
     * @memberof ZipCodeLocationBasedSegment31
     */
    'field': ZipCodeLocationBasedSegment31FieldEnum;
    /**
     * Segment members who are/are not within a specific US zip code.
     * @type {string}
     * @memberof ZipCodeLocationBasedSegment31
     */
    'op': ZipCodeLocationBasedSegment31OpEnum;
    /**
     * The 5-digit zip code.
     * @type {number}
     * @memberof ZipCodeLocationBasedSegment31
     */
    'value': number;
}

type ZipCodeLocationBasedSegment31ConditionTypeEnum = 'IPGeoZip'
type ZipCodeLocationBasedSegment31FieldEnum = 'ipgeo'
type ZipCodeLocationBasedSegment31OpEnum = 'ipgeoiszip' | 'ipgeonotzip'


