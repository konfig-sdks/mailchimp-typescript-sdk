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
 * @interface ZipCodeLocationBasedSegment10
 */
export interface ZipCodeLocationBasedSegment10 {
    /**
     * 
     * @type {string}
     * @memberof ZipCodeLocationBasedSegment10
     */
    'condition_type'?: ZipCodeLocationBasedSegment10ConditionTypeEnum;
    /**
     * Segmenting subscribers who are within a specific location.
     * @type {string}
     * @memberof ZipCodeLocationBasedSegment10
     */
    'field': ZipCodeLocationBasedSegment10FieldEnum;
    /**
     * Segment members who are/are not within a specific US zip code.
     * @type {string}
     * @memberof ZipCodeLocationBasedSegment10
     */
    'op': ZipCodeLocationBasedSegment10OpEnum;
    /**
     * The 5-digit zip code.
     * @type {number}
     * @memberof ZipCodeLocationBasedSegment10
     */
    'value': number;
}

type ZipCodeLocationBasedSegment10ConditionTypeEnum = 'IPGeoZip'
type ZipCodeLocationBasedSegment10FieldEnum = 'ipgeo'
type ZipCodeLocationBasedSegment10OpEnum = 'ipgeoiszip' | 'ipgeonotzip'


