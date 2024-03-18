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
 * @interface SocialProfilesSocialNetworkFollowSegment36
 */
export interface SocialProfilesSocialNetworkFollowSegment36 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment36
     */
    'condition_type'?: SocialProfilesSocialNetworkFollowSegment36ConditionTypeEnum;
    /**
     * Segment by social network in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment36
     */
    'field': SocialProfilesSocialNetworkFollowSegment36FieldEnum;
    /**
     * Members who are/not following a linked account on a given social network.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment36
     */
    'op': SocialProfilesSocialNetworkFollowSegment36OpEnum;
    /**
     * The social network to segment against.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkFollowSegment36
     */
    'value': SocialProfilesSocialNetworkFollowSegment36ValueEnum;
}

type SocialProfilesSocialNetworkFollowSegment36ConditionTypeEnum = 'SocialNetworkFollow'
type SocialProfilesSocialNetworkFollowSegment36FieldEnum = 'social_network'
type SocialProfilesSocialNetworkFollowSegment36OpEnum = 'follow' | 'notfollow'
type SocialProfilesSocialNetworkFollowSegment36ValueEnum = 'twitter_follow'


