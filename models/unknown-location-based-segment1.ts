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
 * @interface UnknownLocationBasedSegment1
 */
export interface UnknownLocationBasedSegment1 {
    /**
     * 
     * @type {string}
     * @memberof UnknownLocationBasedSegment1
     */
    'condition_type'?: UnknownLocationBasedSegment1ConditionTypeEnum;
    /**
     * Segmenting subscribers who are within a specific location.
     * @type {string}
     * @memberof UnknownLocationBasedSegment1
     */
    'field': UnknownLocationBasedSegment1FieldEnum;
    /**
     * Segment members for which location information is unknown.
     * @type {string}
     * @memberof UnknownLocationBasedSegment1
     */
    'op': UnknownLocationBasedSegment1OpEnum;
}

type UnknownLocationBasedSegment1ConditionTypeEnum = 'IPGeoUnknown'
type UnknownLocationBasedSegment1FieldEnum = 'ipgeo'
type UnknownLocationBasedSegment1OpEnum = 'ipgeounknown'


