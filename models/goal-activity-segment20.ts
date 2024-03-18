/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by Goal activity.
 * @export
 * @interface GoalActivitySegment20
 */
export interface GoalActivitySegment20 {
    /**
     * 
     * @type {string}
     * @memberof GoalActivitySegment20
     */
    'condition_type'?: GoalActivitySegment20ConditionTypeEnum;
    /**
     * Segment by Goal activity.
     * @type {string}
     * @memberof GoalActivitySegment20
     */
    'field': GoalActivitySegment20FieldEnum;
    /**
     * Whether the website URL is/not exactly, contains/doesn\'t contain, starts with/ends with a string.
     * @type {string}
     * @memberof GoalActivitySegment20
     */
    'op': GoalActivitySegment20OpEnum;
    /**
     * The URL to check Goal activity against.
     * @type {string}
     * @memberof GoalActivitySegment20
     */
    'value': string;
}

type GoalActivitySegment20ConditionTypeEnum = 'GoalActivity'
type GoalActivitySegment20FieldEnum = 'goal'
type GoalActivitySegment20OpEnum = 'is' | 'goal_not' | 'contains' | 'goal_notcontain' | 'starts' | 'ends'


