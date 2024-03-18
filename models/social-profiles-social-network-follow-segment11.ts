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
 * @interface SocialProfilesSocialNetworkFollowSegment11
 */
export interface SocialProfilesSocialNetworkFollowSegment11 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment11
     */
    'condition_type'?: SocialProfilesSocialNetworkFollowSegment11ConditionTypeEnum;
    /**
     * Segment by social network in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment11
     */
    'field': SocialProfilesSocialNetworkFollowSegment11FieldEnum;
    /**
     * Members who are/not following a linked account on a given social network.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment11
     */
    'op': SocialProfilesSocialNetworkFollowSegment11OpEnum;
    /**
     * The social network to segment against.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment11
     */
    'value': SocialProfilesSocialNetworkFollowSegment11ValueEnum;
}

type SocialProfilesSocialNetworkFollowSegment11ConditionTypeEnum = 'SocialNetworkFollow'
type SocialProfilesSocialNetworkFollowSegment11FieldEnum = 'social_network'
type SocialProfilesSocialNetworkFollowSegment11OpEnum = 'follow' | 'notfollow'
type SocialProfilesSocialNetworkFollowSegment11ValueEnum = 'twitter_follow'

