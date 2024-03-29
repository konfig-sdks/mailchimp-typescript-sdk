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
 * @interface PollActivitySegment14
 */
export interface PollActivitySegment14 {
    /**
     * 
     * @type {string}
     * @memberof PollActivitySegment14
     */
    'condition_type'?: PollActivitySegment14ConditionTypeEnum;
    /**
     * Segment by poll activity.
     * @type {string}
     * @memberof PollActivitySegment14
     */
    'field': PollActivitySegment14FieldEnum;
    /**
     * Members have/have not interacted with a specific poll in a Mailchimp email.
     * @type {string}
     * @memberof PollActivitySegment14
     */
    'op': PollActivitySegment14OpEnum;
    /**
     * The id for the poll.
     * @type {number}
     * @memberof PollActivitySegment14
     */
    'value': number;
}

type PollActivitySegment14ConditionTypeEnum = 'CampaignPoll'
type PollActivitySegment14FieldEnum = 'poll'
type PollActivitySegment14OpEnum = 'member' | 'notmember'


