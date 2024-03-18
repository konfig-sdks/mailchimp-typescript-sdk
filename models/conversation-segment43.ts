/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by interaction with a campaign via Conversations.
 * @export
 * @interface ConversationSegment43
 */
export interface ConversationSegment43 {
    /**
     * 
     * @type {string}
     * @memberof ConversationSegment43
     */
    'condition_type'?: ConversationSegment43ConditionTypeEnum;
    /**
     * Segment by interaction with a campaign via Conversations.
     * @type {string}
     * @memberof ConversationSegment43
     */
    'field': ConversationSegment43FieldEnum;
    /**
     * The status of a member\'s interaction with a conversation. One of the following: has replied or has not replied.
     * @type {string}
     * @memberof ConversationSegment43
     */
    'op': ConversationSegment43OpEnum;
    /**
     * The web id value for a specific campaign or \'any\' to account for subscribers who have/have not interacted with any campaigns.
     * @type {string}
     * @memberof ConversationSegment43
     */
    'value': string;
}

type ConversationSegment43ConditionTypeEnum = 'Conversation'
type ConversationSegment43FieldEnum = 'conversation'
type ConversationSegment43OpEnum = 'member' | 'notmember'

