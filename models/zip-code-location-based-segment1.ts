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
 * @interface ZipCodeLocationBasedSegment1
 */
export interface ZipCodeLocationBasedSegment1 {
    /**
     * 
     * @type {string}
     * @memberof ZipCodeLocationBasedSegment1
     */
    'condition_type'?: ZipCodeLocationBasedSegment1ConditionTypeEnum;
    /**
     * Segmenting subscribers who are within a specific location.
     * @type {string}
     * @memberof ZipCodeLocationBasedSegment1
     */
    'field': ZipCodeLocationBasedSegment1FieldEnum;
    /**
     * Segment members who are/are not within a specific US zip code.
     * @type {string}
     * @memberof ZipCodeLocationBasedSegment1
     */
    'op': ZipCodeLocationBasedSegment1OpEnum;
    /**
     * The 5-digit zip code.
     * @type {number}
     * @memberof ZipCodeLocationBasedSegment1
     */
    'value': number;
}

type ZipCodeLocationBasedSegment1ConditionTypeEnum = 'IPGeoZip'
type ZipCodeLocationBasedSegment1FieldEnum = 'ipgeo'
type ZipCodeLocationBasedSegment1OpEnum = 'ipgeoiszip' | 'ipgeonotzip'


