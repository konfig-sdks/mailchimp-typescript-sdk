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
 * @interface InterestsSegment28
 */
export interface InterestsSegment28 {
    /**
     * 
     * @type {string}
     * @memberof InterestsSegment28
     */
    'condition_type'?: InterestsSegment28ConditionTypeEnum;
    /**
     * Segmenting based on interest group information. This should start with \'interests-\' followed by the grouping id. Ex. \'interests-123\'.
     * @type {string}
     * @memberof InterestsSegment28
     */
    'field'?: string;
    /**
     * Whether the member is a part of one, all, or none of the groups.
     * @type {string}
     * @memberof InterestsSegment28
     */
    'op'?: InterestsSegment28OpEnum;
    /**
     * An array containing strings, each representing a group id.
     * @type {Array<string>}
     * @memberof InterestsSegment28
     */
    'value'?: Array<string>;
}

type InterestsSegment28ConditionTypeEnum = 'Interests'
type InterestsSegment28OpEnum = 'interestcontains' | 'interestcontainsall' | 'interestnotcontains'


