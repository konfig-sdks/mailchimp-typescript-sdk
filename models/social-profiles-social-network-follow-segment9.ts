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
 * @interface SocialProfilesSocialNetworkFollowSegment9
 */
export interface SocialProfilesSocialNetworkFollowSegment9 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment9
     */
    'condition_type'?: SocialProfilesSocialNetworkFollowSegment9ConditionTypeEnum;
    /**
     * Segment by social network in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment9
     */
    'field': SocialProfilesSocialNetworkFollowSegment9FieldEnum;
    /**
     * Members who are/not following a linked account on a given social network.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment9
     */
    'op': SocialProfilesSocialNetworkFollowSegment9OpEnum;
    /**
     * The social network to segment against.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment9
     */
    'value': SocialProfilesSocialNetworkFollowSegment9ValueEnum;
}

type SocialProfilesSocialNetworkFollowSegment9ConditionTypeEnum = 'SocialNetworkFollow'
type SocialProfilesSocialNetworkFollowSegment9FieldEnum = 'social_network'
type SocialProfilesSocialNetworkFollowSegment9OpEnum = 'follow' | 'notfollow'
type SocialProfilesSocialNetworkFollowSegment9ValueEnum = 'twitter_follow'


