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
 * @interface ConversationSegment34
 */
export interface ConversationSegment34 {
    /**
     * 
     * @type {string}
     * @memberof ConversationSegment34
     */
    'condition_type'?: ConversationSegment34ConditionTypeEnum;
    /**
     * Segment by interaction with a campaign via Conversations.
     * @type {string}
     * @memberof ConversationSegment34
     */
    'field': ConversationSegment34FieldEnum;
    /**
     * The status of a member\'s interaction with a conversation. One of the following: has replied or has not replied.
     * @type {string}
     * @memberof ConversationSegment34
     */
    'op': ConversationSegment34OpEnum;
    /**
     * The web id value for a specific campaign or \'any\' to account for subscribers who have/have not interacted with any campaigns.
     * @type {string}
     * @memberof ConversationSegment34
     */
    'value': string;
}

type ConversationSegment34ConditionTypeEnum = 'Conversation'
type ConversationSegment34FieldEnum = 'conversation'
type ConversationSegment34OpEnum = 'member' | 'notmember'


