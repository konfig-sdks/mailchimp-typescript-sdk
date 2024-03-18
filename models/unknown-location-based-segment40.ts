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
 * @interface UnknownLocationBasedSegment40
 */
export interface UnknownLocationBasedSegment40 {
    /**
     * 
     * @type {string}
     * @memberof UnknownLocationBasedSegment40
     */
    'condition_type'?: UnknownLocationBasedSegment40ConditionTypeEnum;
    /**
     * Segmenting subscribers who are within a specific location.
     * @type {string}
     * @memberof UnknownLocationBasedSegment40
     */
    'field': UnknownLocationBasedSegment40FieldEnum;
    /**
     * Segment members for which location information is unknown.
     * @type {string}
     * @memberof UnknownLocationBasedSegment40
     */
    'op': UnknownLocationBasedSegment40OpEnum;
}

type UnknownLocationBasedSegment40ConditionTypeEnum = 'IPGeoUnknown'
type UnknownLocationBasedSegment40FieldEnum = 'ipgeo'
type UnknownLocationBasedSegment40OpEnum = 'ipgeounknown'


