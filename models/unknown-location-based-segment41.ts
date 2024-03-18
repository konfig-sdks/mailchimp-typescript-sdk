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
 * @interface UnknownLocationBasedSegment41
 */
export interface UnknownLocationBasedSegment41 {
    /**
     * 
     * @type {string}
     * @memberof UnknownLocationBasedSegment41
     */
    'condition_type'?: UnknownLocationBasedSegment41ConditionTypeEnum;
    /**
     * Segmenting subscribers who are within a specific location.
     * @type {string}
     * @memberof UnknownLocationBasedSegment41
     */
    'field': UnknownLocationBasedSegment41FieldEnum;
    /**
     * Segment members for which location information is unknown.
     * @type {string}
     * @memberof UnknownLocationBasedSegment41
     */
    'op': UnknownLocationBasedSegment41OpEnum;
}

type UnknownLocationBasedSegment41ConditionTypeEnum = 'IPGeoUnknown'
type UnknownLocationBasedSegment41FieldEnum = 'ipgeo'
type UnknownLocationBasedSegment41OpEnum = 'ipgeounknown'


