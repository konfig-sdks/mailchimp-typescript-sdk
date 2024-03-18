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
 * @interface GoalActivitySegment18
 */
export interface GoalActivitySegment18 {
    /**
     * 
     * @type {string}
     * @memberof GoalActivitySegment18
     */
    'condition_type'?: GoalActivitySegment18ConditionTypeEnum;
    /**
     * Segment by Goal activity.
     * @type {string}
     * @memberof GoalActivitySegment18
     */
    'field': GoalActivitySegment18FieldEnum;
    /**
     * Whether the website URL is/not exactly, contains/doesn\'t contain, starts with/ends with a string.
     * @type {string}
     * @memberof GoalActivitySegment18
     */
    'op': GoalActivitySegment18OpEnum;
    /**
     * The URL to check Goal activity against.
     * @type {string}
     * @memberof GoalActivitySegment18
     */
    'value': string;
}

type GoalActivitySegment18ConditionTypeEnum = 'GoalActivity'
type GoalActivitySegment18FieldEnum = 'goal'
type GoalActivitySegment18OpEnum = 'is' | 'goal_not' | 'contains' | 'goal_notcontain' | 'starts' | 'ends'

