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
 * @interface LocationBasedSegment23
 */
export interface LocationBasedSegment23 {
    /**
     * 
     * @type {string}
     * @memberof LocationBasedSegment23
     */
    'condition_type'?: LocationBasedSegment23ConditionTypeEnum;
    /**
     * Segmenting subscribers who are within a specific location.
     * @type {string}
     * @memberof LocationBasedSegment23
     */
    'field': LocationBasedSegment23FieldEnum;
    /**
     * Segment members who are within a specific country or US state.
     * @type {string}
     * @memberof LocationBasedSegment23
     */
    'op': LocationBasedSegment23OpEnum;
    /**
     * The two-letter country code or US state abbreviation.
     * @type {string}
     * @memberof LocationBasedSegment23
     */
    'value': string;
}

type LocationBasedSegment23ConditionTypeEnum = 'IPGeoCountryState'
type LocationBasedSegment23FieldEnum = 'ipgeo'
type LocationBasedSegment23OpEnum = 'ipgeocountry' | 'ipgeonotcountry' | 'ipgeostate' | 'ipgeonotstate'


