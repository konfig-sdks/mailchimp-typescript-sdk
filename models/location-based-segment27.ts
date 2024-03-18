/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by a specific country or US state.
 * @export
 * @interface LocationBasedSegment27
 */
export interface LocationBasedSegment27 {
    /**
     * 
     * @type {string}
     * @memberof LocationBasedSegment27
     */
    'condition_type'?: LocationBasedSegment27ConditionTypeEnum;
    /**
     * Segmenting subscribers who are within a specific location.
     * @type {string}
     * @memberof LocationBasedSegment27
     */
    'field': LocationBasedSegment27FieldEnum;
    /**
     * Segment members who are within a specific country or US state.
     * @type {string}
     * @memberof LocationBasedSegment27
     */
    'op': LocationBasedSegment27OpEnum;
    /**
     * The two-letter country code or US state abbreviation.
     * @type {string}
     * @memberof LocationBasedSegment27
     */
    'value': string;
}

type LocationBasedSegment27ConditionTypeEnum = 'IPGeoCountryState'
type LocationBasedSegment27FieldEnum = 'ipgeo'
type LocationBasedSegment27OpEnum = 'ipgeocountry' | 'ipgeonotcountry' | 'ipgeostate' | 'ipgeonotstate'


