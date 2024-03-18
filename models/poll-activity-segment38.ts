/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by poll activity.
 * @export
 * @interface PollActivitySegment38
 */
export interface PollActivitySegment38 {
    /**
     * 
     * @type {string}
     * @memberof PollActivitySegment38
     */
    'condition_type'?: PollActivitySegment38ConditionTypeEnum;
    /**
     * Segment by poll activity.
     * @type {string}
     * @memberof PollActivitySegment38
     */
    'field': PollActivitySegment38FieldEnum;
    /**
     * Members have/have not interacted with a specific poll in a Mailchimp email.
     * @type {string}
     * @memberof PollActivitySegment38
     */
    'op': PollActivitySegment38OpEnum;
    /**
     * The id for the poll.
     * @type {number}
     * @memberof PollActivitySegment38
     */
    'value': number;
}

type PollActivitySegment38ConditionTypeEnum = 'CampaignPoll'
type PollActivitySegment38FieldEnum = 'poll'
type PollActivitySegment38OpEnum = 'member' | 'notmember'

