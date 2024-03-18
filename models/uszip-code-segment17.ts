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
 * @interface USZipCodeSegment17
 */
export interface USZipCodeSegment17 {
    /**
     * 
     * @type {string}
     * @memberof USZipCodeSegment17
     */
    'condition_type'?: USZipCodeSegment17ConditionTypeEnum;
    /**
     * Segmenting subscribers who are within a specific location.
     * @type {string}
     * @memberof USZipCodeSegment17
     */
    'field': USZipCodeSegment17FieldEnum;
    /**
     * Segment members who are within a specific US zip code.
     * @type {string}
     * @memberof USZipCodeSegment17
     */
    'op': USZipCodeSegment17OpEnum;
    /**
     * The radius of the target location.
     * @type {number}
     * @memberof USZipCodeSegment17
     */
    'value': number;
    /**
     * The zip code to segment against.
     * @type {number}
     * @memberof USZipCodeSegment17
     */
    'extra': number;
}

type USZipCodeSegment17ConditionTypeEnum = 'IPGeoInZip'
type USZipCodeSegment17FieldEnum = 'ipgeo'
type USZipCodeSegment17OpEnum = 'ipgeoinzip'

