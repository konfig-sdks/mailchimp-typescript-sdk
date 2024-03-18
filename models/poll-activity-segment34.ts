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
 * @interface PollActivitySegment34
 */
export interface PollActivitySegment34 {
    /**
     * 
     * @type {string}
     * @memberof PollActivitySegment34
     */
    'condition_type'?: PollActivitySegment34ConditionTypeEnum;
    /**
     * Segment by poll activity.
     * @type {string}
     * @memberof PollActivitySegment34
     */
    'field': PollActivitySegment34FieldEnum;
    /**
     * Members have/have not interacted with a specific poll in a Mailchimp email.
     * @type {string}
     * @memberof PollActivitySegment34
     */
    'op': PollActivitySegment34OpEnum;
    /**
     * The id for the poll.
     * @type {number}
     * @memberof PollActivitySegment34
     */
    'value': number;
}

type PollActivitySegment34ConditionTypeEnum = 'CampaignPoll'
type PollActivitySegment34FieldEnum = 'poll'
type PollActivitySegment34OpEnum = 'member' | 'notmember'


