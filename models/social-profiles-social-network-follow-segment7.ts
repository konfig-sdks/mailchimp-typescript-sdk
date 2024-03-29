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
 * @interface SocialProfilesSocialNetworkFollowSegment7
 */
export interface SocialProfilesSocialNetworkFollowSegment7 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment7
     */
    'condition_type'?: SocialProfilesSocialNetworkFollowSegment7ConditionTypeEnum;
    /**
     * Segment by social network in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment7
     */
    'field': SocialProfilesSocialNetworkFollowSegment7FieldEnum;
    /**
     * Members who are/not following a linked account on a given social network.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment7
     */
    'op': SocialProfilesSocialNetworkFollowSegment7OpEnum;
    /**
     * The social network to segment against.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment7
     */
    'value': SocialProfilesSocialNetworkFollowSegment7ValueEnum;
}

type SocialProfilesSocialNetworkFollowSegment7ConditionTypeEnum = 'SocialNetworkFollow'
type SocialProfilesSocialNetworkFollowSegment7FieldEnum = 'social_network'
type SocialProfilesSocialNetworkFollowSegment7OpEnum = 'follow' | 'notfollow'
type SocialProfilesSocialNetworkFollowSegment7ValueEnum = 'twitter_follow'


