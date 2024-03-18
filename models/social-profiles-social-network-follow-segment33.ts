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
 * @interface SocialProfilesSocialNetworkFollowSegment33
 */
export interface SocialProfilesSocialNetworkFollowSegment33 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment33
     */
    'condition_type'?: SocialProfilesSocialNetworkFollowSegment33ConditionTypeEnum;
    /**
     * Segment by social network in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment33
     */
    'field': SocialProfilesSocialNetworkFollowSegment33FieldEnum;
    /**
     * Members who are/not following a linked account on a given social network.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment33
     */
    'op': SocialProfilesSocialNetworkFollowSegment33OpEnum;
    /**
     * The social network to segment against.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment33
     */
    'value': SocialProfilesSocialNetworkFollowSegment33ValueEnum;
}

type SocialProfilesSocialNetworkFollowSegment33ConditionTypeEnum = 'SocialNetworkFollow'
type SocialProfilesSocialNetworkFollowSegment33FieldEnum = 'social_network'
type SocialProfilesSocialNetworkFollowSegment33OpEnum = 'follow' | 'notfollow'
type SocialProfilesSocialNetworkFollowSegment33ValueEnum = 'twitter_follow'


