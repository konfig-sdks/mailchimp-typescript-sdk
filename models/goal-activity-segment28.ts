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
 * @interface GoalActivitySegment28
 */
export interface GoalActivitySegment28 {
    /**
     * 
     * @type {string}
     * @memberof GoalActivitySegment28
     */
    'condition_type'?: GoalActivitySegment28ConditionTypeEnum;
    /**
     * Segment by Goal activity.
     * @type {string}
     * @memberof GoalActivitySegment28
     */
    'field': GoalActivitySegment28FieldEnum;
    /**
     * Whether the website URL is/not exactly, contains/doesn\'t contain, starts with/ends with a string.
     * @type {string}
     * @memberof GoalActivitySegment28
     */
    'op': GoalActivitySegment28OpEnum;
    /**
     * The URL to check Goal activity against.
     * @type {string}
     * @memberof GoalActivitySegment28
     */
    'value': string;
}

type GoalActivitySegment28ConditionTypeEnum = 'GoalActivity'
type GoalActivitySegment28FieldEnum = 'goal'
type GoalActivitySegment28OpEnum = 'is' | 'goal_not' | 'contains' | 'goal_notcontain' | 'starts' | 'ends'


