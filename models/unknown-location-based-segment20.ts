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
 * @interface UnknownLocationBasedSegment20
 */
export interface UnknownLocationBasedSegment20 {
    /**
     * 
     * @type {string}
     * @memberof UnknownLocationBasedSegment20
     */
    'condition_type'?: UnknownLocationBasedSegment20ConditionTypeEnum;
    /**
     * Segmenting subscribers who are within a specific location.
     * @type {string}
     * @memberof UnknownLocationBasedSegment20
     */
    'field': UnknownLocationBasedSegment20FieldEnum;
    /**
     * Segment members for which location information is unknown.
     * @type {string}
     * @memberof UnknownLocationBasedSegment20
     */
    'op': UnknownLocationBasedSegment20OpEnum;
}

type UnknownLocationBasedSegment20ConditionTypeEnum = 'IPGeoUnknown'
type UnknownLocationBasedSegment20FieldEnum = 'ipgeo'
type UnknownLocationBasedSegment20OpEnum = 'ipgeounknown'

