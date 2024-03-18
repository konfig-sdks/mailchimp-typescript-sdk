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
 * @interface SocialProfilesSocialNetworkFollowSegment28
 */
export interface SocialProfilesSocialNetworkFollowSegment28 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment28
     */
    'condition_type'?: SocialProfilesSocialNetworkFollowSegment28ConditionTypeEnum;
    /**
     * Segment by social network in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment28
     */
    'field': SocialProfilesSocialNetworkFollowSegment28FieldEnum;
    /**
     * Members who are/not following a linked account on a given social network.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment28
     */
    'op': SocialProfilesSocialNetworkFollowSegment28OpEnum;
    /**
     * The social network to segment against.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment28
     */
    'value': SocialProfilesSocialNetworkFollowSegment28ValueEnum;
}

type SocialProfilesSocialNetworkFollowSegment28ConditionTypeEnum = 'SocialNetworkFollow'
type SocialProfilesSocialNetworkFollowSegment28FieldEnum = 'social_network'
type SocialProfilesSocialNetworkFollowSegment28OpEnum = 'follow' | 'notfollow'
type SocialProfilesSocialNetworkFollowSegment28ValueEnum = 'twitter_follow'

