/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by an address-type merge field within a given distance.
 * @export
 * @interface AddressZipMergeFieldSegment43
 */
export interface AddressZipMergeFieldSegment43 {
    /**
     * 
     * @type {string}
     * @memberof AddressZipMergeFieldSegment43
     */
    'condition_type'?: AddressZipMergeFieldSegment43ConditionTypeEnum;
    /**
     * An address or zip-type merge field to segment.
     * @type {string}
     * @memberof AddressZipMergeFieldSegment43
     */
    'field': string;
    /**
     * Whether the member\'s address merge field is within a given distance from a city or zip.
     * @type {string}
     * @memberof AddressZipMergeFieldSegment43
     */
    'op': AddressZipMergeFieldSegment43OpEnum;
    /**
     * The distance from the city/zip.
     * @type {string}
     * @memberof AddressZipMergeFieldSegment43
     */
    'value': string;
    /**
     * The city or the zip being used to segment against.
     * @type {string}
     * @memberof AddressZipMergeFieldSegment43
     */
    'extra': string;
}

type AddressZipMergeFieldSegment43ConditionTypeEnum = 'ZipMerge'
type AddressZipMergeFieldSegment43OpEnum = 'geoin'


