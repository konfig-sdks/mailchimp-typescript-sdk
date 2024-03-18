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
 * @interface SocialProfilesSocialNetworkFollowSegment16
 */
export interface SocialProfilesSocialNetworkFollowSegment16 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment16
     */
    'condition_type'?: SocialProfilesSocialNetworkFollowSegment16ConditionTypeEnum;
    /**
     * Segment by social network in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment16
     */
    'field': SocialProfilesSocialNetworkFollowSegment16FieldEnum;
    /**
     * Members who are/not following a linked account on a given social network.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment16
     */
    'op': SocialProfilesSocialNetworkFollowSegment16OpEnum;
    /**
     * The social network to segment against.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment16
     */
    'value': SocialProfilesSocialNetworkFollowSegment16ValueEnum;
}

type SocialProfilesSocialNetworkFollowSegment16ConditionTypeEnum = 'SocialNetworkFollow'
type SocialProfilesSocialNetworkFollowSegment16FieldEnum = 'social_network'
type SocialProfilesSocialNetworkFollowSegment16OpEnum = 'follow' | 'notfollow'
type SocialProfilesSocialNetworkFollowSegment16ValueEnum = 'twitter_follow'

