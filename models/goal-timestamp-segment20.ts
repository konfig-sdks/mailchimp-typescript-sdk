/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by most recent interaction with a website.
 * @export
 * @interface GoalTimestampSegment20
 */
export interface GoalTimestampSegment20 {
    /**
     * 
     * @type {string}
     * @memberof GoalTimestampSegment20
     */
    'condition_type'?: GoalTimestampSegment20ConditionTypeEnum;
    /**
     * Segment by most recent interaction with a website.
     * @type {string}
     * @memberof GoalTimestampSegment20
     */
    'field': GoalTimestampSegment20FieldEnum;
    /**
     * Whether the website activity happened after, before, or at a given timestamp.
     * @type {string}
     * @memberof GoalTimestampSegment20
     */
    'op': GoalTimestampSegment20OpEnum;
    /**
     * The date to check Goal activity against.
     * @type {string}
     * @memberof GoalTimestampSegment20
     */
    'value': string;
}

type GoalTimestampSegment20ConditionTypeEnum = 'GoalTimestamp'
type GoalTimestampSegment20FieldEnum = 'goal_last_visited'
type GoalTimestampSegment20OpEnum = 'greater' | 'less' | 'is'


