/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by an interest group merge field.
 * @export
 * @interface InterestsSegment35
 */
export interface InterestsSegment35 {
    /**
     * 
     * @type {string}
     * @memberof InterestsSegment35
     */
    'condition_type'?: InterestsSegment35ConditionTypeEnum;
    /**
     * Segmenting based on interest group information. This should start with \'interests-\' followed by the grouping id. Ex. \'interests-123\'.
     * @type {string}
     * @memberof InterestsSegment35
     */
    'field'?: string;
    /**
     * Whether the member is a part of one, all, or none of the groups.
     * @type {string}
     * @memberof InterestsSegment35
     */
    'op'?: InterestsSegment35OpEnum;
    /**
     * An array containing strings, each representing a group id.
     * @type {Array<string>}
     * @memberof InterestsSegment35
     */
    'value'?: Array<string>;
}

type InterestsSegment35ConditionTypeEnum = 'Interests'
type InterestsSegment35OpEnum = 'interestcontains' | 'interestcontainsall' | 'interestnotcontains'


