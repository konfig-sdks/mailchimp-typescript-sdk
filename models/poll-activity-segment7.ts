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
 * @interface PollActivitySegment7
 */
export interface PollActivitySegment7 {
    /**
     * 
     * @type {string}
     * @memberof PollActivitySegment7
     */
    'condition_type'?: PollActivitySegment7ConditionTypeEnum;
    /**
     * Segment by poll activity.
     * @type {string}
     * @memberof PollActivitySegment7
     */
    'field': PollActivitySegment7FieldEnum;
    /**
     * Members have/have not interacted with a specific poll in a Mailchimp email.
     * @type {string}
     * @memberof PollActivitySegment7
     */
    'op': PollActivitySegment7OpEnum;
    /**
     * The id for the poll.
     * @type {number}
     * @memberof PollActivitySegment7
     */
    'value': number;
}

type PollActivitySegment7ConditionTypeEnum = 'CampaignPoll'
type PollActivitySegment7FieldEnum = 'poll'
type PollActivitySegment7OpEnum = 'member' | 'notmember'


