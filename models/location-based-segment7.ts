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
 * @interface LocationBasedSegment7
 */
export interface LocationBasedSegment7 {
    /**
     * 
     * @type {string}
     * @memberof LocationBasedSegment7
     */
    'condition_type'?: LocationBasedSegment7ConditionTypeEnum;
    /**
     * Segmenting subscribers who are within a specific location.
     * @type {string}
     * @memberof LocationBasedSegment7
     */
    'field': LocationBasedSegment7FieldEnum;
    /**
     * Segment members who are within a specific country or US state.
     * @type {string}
     * @memberof LocationBasedSegment7
     */
    'op': LocationBasedSegment7OpEnum;
    /**
     * The two-letter country code or US state abbreviation.
     * @type {string}
     * @memberof LocationBasedSegment7
     */
    'value': string;
}

type LocationBasedSegment7ConditionTypeEnum = 'IPGeoCountryState'
type LocationBasedSegment7FieldEnum = 'ipgeo'
type LocationBasedSegment7OpEnum = 'ipgeocountry' | 'ipgeonotcountry' | 'ipgeostate' | 'ipgeonotstate'


