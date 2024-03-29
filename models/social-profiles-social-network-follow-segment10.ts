/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by social network in Social Profiles data.
 * @export
 * @interface SocialProfilesSocialNetworkFollowSegment10
 */
export interface SocialProfilesSocialNetworkFollowSegment10 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment10
     */
    'condition_type'?: SocialProfilesSocialNetworkFollowSegment10ConditionTypeEnum;
    /**
     * Segment by social network in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment10
     */
    'field': SocialProfilesSocialNetworkFollowSegment10FieldEnum;
    /**
     * Members who are/not following a linked account on a given social network.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment10
     */
    'op': SocialProfilesSocialNetworkFollowSegment10OpEnum;
    /**
     * The social network to segment against.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment10
     */
    'value': SocialProfilesSocialNetworkFollowSegment10ValueEnum;
}

type SocialProfilesSocialNetworkFollowSegment10ConditionTypeEnum = 'SocialNetworkFollow'
type SocialProfilesSocialNetworkFollowSegment10FieldEnum = 'social_network'
type SocialProfilesSocialNetworkFollowSegment10OpEnum = 'follow' | 'notfollow'
type SocialProfilesSocialNetworkFollowSegment10ValueEnum = 'twitter_follow'


