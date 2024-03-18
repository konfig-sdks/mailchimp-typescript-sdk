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
 * @interface USZipCodeSegment8
 */
export interface USZipCodeSegment8 {
    /**
     * 
     * @type {string}
     * @memberof USZipCodeSegment8
     */
    'condition_type'?: USZipCodeSegment8ConditionTypeEnum;
    /**
     * Segmenting subscribers who are within a specific location.
     * @type {string}
     * @memberof USZipCodeSegment8
     */
    'field': USZipCodeSegment8FieldEnum;
    /**
     * Segment members who are within a specific US zip code.
     * @type {string}
     * @memberof USZipCodeSegment8
     */
    'op': USZipCodeSegment8OpEnum;
    /**
     * The radius of the target location.
     * @type {number}
     * @memberof USZipCodeSegment8
     */
    'value': number;
    /**
     * The zip code to segment against.
     * @type {number}
     * @memberof USZipCodeSegment8
     */
    'extra': number;
}

type USZipCodeSegment8ConditionTypeEnum = 'IPGeoInZip'
type USZipCodeSegment8FieldEnum = 'ipgeo'
type USZipCodeSegment8OpEnum = 'ipgeoinzip'

