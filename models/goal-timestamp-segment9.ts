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
 * @interface GoalTimestampSegment9
 */
export interface GoalTimestampSegment9 {
    /**
     * 
     * @type {string}
     * @memberof GoalTimestampSegment9
     */
    'condition_type'?: GoalTimestampSegment9ConditionTypeEnum;
    /**
     * Segment by most recent interaction with a website.
     * @type {string}
     * @memberof GoalTimestampSegment9
     */
    'field': GoalTimestampSegment9FieldEnum;
    /**
     * Whether the website activity happened after, before, or at a given timestamp.
     * @type {string}
     * @memberof GoalTimestampSegment9
     */
    'op': GoalTimestampSegment9OpEnum;
    /**
     * The date to check Goal activity against.
     * @type {string}
     * @memberof GoalTimestampSegment9
     */
    'value': string;
}

type GoalTimestampSegment9ConditionTypeEnum = 'GoalTimestamp'
type GoalTimestampSegment9FieldEnum = 'goal_last_visited'
type GoalTimestampSegment9OpEnum = 'greater' | 'less' | 'is'

