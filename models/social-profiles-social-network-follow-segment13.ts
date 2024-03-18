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
 * @interface SocialProfilesSocialNetworkFollowSegment13
 */
export interface SocialProfilesSocialNetworkFollowSegment13 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment13
     */
    'condition_type'?: SocialProfilesSocialNetworkFollowSegment13ConditionTypeEnum;
    /**
     * Segment by social network in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment13
     */
    'field': SocialProfilesSocialNetworkFollowSegment13FieldEnum;
    /**
     * Members who are/not following a linked account on a given social network.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment13
     */
    'op': SocialProfilesSocialNetworkFollowSegment13OpEnum;
    /**
     * The social network to segment against.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment13
     */
    'value': SocialProfilesSocialNetworkFollowSegment13ValueEnum;
}

type SocialProfilesSocialNetworkFollowSegment13ConditionTypeEnum = 'SocialNetworkFollow'
type SocialProfilesSocialNetworkFollowSegment13FieldEnum = 'social_network'
type SocialProfilesSocialNetworkFollowSegment13OpEnum = 'follow' | 'notfollow'
type SocialProfilesSocialNetworkFollowSegment13ValueEnum = 'twitter_follow'

