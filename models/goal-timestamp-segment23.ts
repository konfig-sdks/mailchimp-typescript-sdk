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
 * @interface GoalTimestampSegment23
 */
export interface GoalTimestampSegment23 {
    /**
     * 
     * @type {string}
     * @memberof GoalTimestampSegment23
     */
    'condition_type'?: GoalTimestampSegment23ConditionTypeEnum;
    /**
     * Segment by most recent interaction with a website.
     * @type {string}
     * @memberof GoalTimestampSegment23
     */
    'field': GoalTimestampSegment23FieldEnum;
    /**
     * Whether the website activity happened after, before, or at a given timestamp.
     * @type {string}
     * @memberof GoalTimestampSegment23
     */
    'op': GoalTimestampSegment23OpEnum;
    /**
     * The date to check Goal activity against.
     * @type {string}
     * @memberof GoalTimestampSegment23
     */
    'value': string;
}

type GoalTimestampSegment23ConditionTypeEnum = 'GoalTimestamp'
type GoalTimestampSegment23FieldEnum = 'goal_last_visited'
type GoalTimestampSegment23OpEnum = 'greater' | 'less' | 'is'


