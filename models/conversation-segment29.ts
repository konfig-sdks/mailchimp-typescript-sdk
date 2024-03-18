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
 * @interface ConversationSegment29
 */
export interface ConversationSegment29 {
    /**
     * 
     * @type {string}
     * @memberof ConversationSegment29
     */
    'condition_type'?: ConversationSegment29ConditionTypeEnum;
    /**
     * Segment by interaction with a campaign via Conversations.
     * @type {string}
     * @memberof ConversationSegment29
     */
    'field': ConversationSegment29FieldEnum;
    /**
     * The status of a member\'s interaction with a conversation. One of the following: has replied or has not replied.
     * @type {string}
     * @memberof ConversationSegment29
     */
    'op': ConversationSegment29OpEnum;
    /**
     * The web id value for a specific campaign or \'any\' to account for subscribers who have/have not interacted with any campaigns.
     * @type {string}
     * @memberof ConversationSegment29
     */
    'value': string;
}

type ConversationSegment29ConditionTypeEnum = 'Conversation'
type ConversationSegment29FieldEnum = 'conversation'
type ConversationSegment29OpEnum = 'member' | 'notmember'

