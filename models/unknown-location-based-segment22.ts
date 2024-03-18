/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment members whose location information is unknown.
 * @export
 * @interface UnknownLocationBasedSegment22
 */
export interface UnknownLocationBasedSegment22 {
    /**
     * 
     * @type {string}
     * @memberof UnknownLocationBasedSegment22
     */
    'condition_type'?: UnknownLocationBasedSegment22ConditionTypeEnum;
    /**
     * Segmenting subscribers who are within a specific location.
     * @type {string}
     * @memberof UnknownLocationBasedSegment22
     */
    'field': UnknownLocationBasedSegment22FieldEnum;
    /**
     * Segment members for which location information is unknown.
     * @type {string}
     * @memberof UnknownLocationBasedSegment22
     */
    'op': UnknownLocationBasedSegment22OpEnum;
}

type UnknownLocationBasedSegment22ConditionTypeEnum = 'IPGeoUnknown'
type UnknownLocationBasedSegment22FieldEnum = 'ipgeo'
type UnknownLocationBasedSegment22OpEnum = 'ipgeounknown'


