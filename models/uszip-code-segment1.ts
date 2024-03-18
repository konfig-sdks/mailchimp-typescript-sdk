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
 * @interface USZipCodeSegment1
 */
export interface USZipCodeSegment1 {
    /**
     * 
     * @type {string}
     * @memberof USZipCodeSegment1
     */
    'condition_type'?: USZipCodeSegment1ConditionTypeEnum;
    /**
     * Segmenting subscribers who are within a specific location.
     * @type {string}
     * @memberof USZipCodeSegment1
     */
    'field': USZipCodeSegment1FieldEnum;
    /**
     * Segment members who are within a specific US zip code.
     * @type {string}
     * @memberof USZipCodeSegment1
     */
    'op': USZipCodeSegment1OpEnum;
    /**
     * The radius of the target location.
     * @type {number}
     * @memberof USZipCodeSegment1
     */
    'value': number;
    /**
     * The zip code to segment against.
     * @type {number}
     * @memberof USZipCodeSegment1
     */
    'extra': number;
}

type USZipCodeSegment1ConditionTypeEnum = 'IPGeoInZip'
type USZipCodeSegment1FieldEnum = 'ipgeo'
type USZipCodeSegment1OpEnum = 'ipgeoinzip'


