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
 * @interface ZipCodeLocationBasedSegment23
 */
export interface ZipCodeLocationBasedSegment23 {
    /**
     * 
     * @type {string}
     * @memberof ZipCodeLocationBasedSegment23
     */
    'condition_type'?: ZipCodeLocationBasedSegment23ConditionTypeEnum;
    /**
     * Segmenting subscribers who are within a specific location.
     * @type {string}
     * @memberof ZipCodeLocationBasedSegment23
     */
    'field': ZipCodeLocationBasedSegment23FieldEnum;
    /**
     * Segment members who are/are not within a specific US zip code.
     * @type {string}
     * @memberof ZipCodeLocationBasedSegment23
     */
    'op': ZipCodeLocationBasedSegment23OpEnum;
    /**
     * The 5-digit zip code.
     * @type {number}
     * @memberof ZipCodeLocationBasedSegment23
     */
    'value': number;
}

type ZipCodeLocationBasedSegment23ConditionTypeEnum = 'IPGeoZip'
type ZipCodeLocationBasedSegment23FieldEnum = 'ipgeo'
type ZipCodeLocationBasedSegment23OpEnum = 'ipgeoiszip' | 'ipgeonotzip'


