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
 * @interface GoalTimestampSegment5
 */
export interface GoalTimestampSegment5 {
    /**
     * 
     * @type {string}
     * @memberof GoalTimestampSegment5
     */
    'condition_type'?: GoalTimestampSegment5ConditionTypeEnum;
    /**
     * Segment by most recent interaction with a website.
     * @type {string}
     * @memberof GoalTimestampSegment5
     */
    'field': GoalTimestampSegment5FieldEnum;
    /**
     * Whether the website activity happened after, before, or at a given timestamp.
     * @type {string}
     * @memberof GoalTimestampSegment5
     */
    'op': GoalTimestampSegment5OpEnum;
    /**
     * The date to check Goal activity against.
     * @type {string}
     * @memberof GoalTimestampSegment5
     */
    'value': string;
}

type GoalTimestampSegment5ConditionTypeEnum = 'GoalTimestamp'
type GoalTimestampSegment5FieldEnum = 'goal_last_visited'
type GoalTimestampSegment5OpEnum = 'greater' | 'less' | 'is'


