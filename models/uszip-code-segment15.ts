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
 * @interface USZipCodeSegment15
 */
export interface USZipCodeSegment15 {
    /**
     * 
     * @type {string}
     * @memberof USZipCodeSegment15
     */
    'condition_type'?: USZipCodeSegment15ConditionTypeEnum;
    /**
     * Segmenting subscribers who are within a specific location.
     * @type {string}
     * @memberof USZipCodeSegment15
     */
    'field': USZipCodeSegment15FieldEnum;
    /**
     * Segment members who are within a specific US zip code.
     * @type {string}
     * @memberof USZipCodeSegment15
     */
    'op': USZipCodeSegment15OpEnum;
    /**
     * The radius of the target location.
     * @type {number}
     * @memberof USZipCodeSegment15
     */
    'value': number;
    /**
     * The zip code to segment against.
     * @type {number}
     * @memberof USZipCodeSegment15
     */
    'extra': number;
}

type USZipCodeSegment15ConditionTypeEnum = 'IPGeoInZip'
type USZipCodeSegment15FieldEnum = 'ipgeo'
type USZipCodeSegment15OpEnum = 'ipgeoinzip'


