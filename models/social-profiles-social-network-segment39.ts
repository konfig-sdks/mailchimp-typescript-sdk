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
 * @interface SocialProfilesSocialNetworkSegment39
 */
export interface SocialProfilesSocialNetworkSegment39 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment39
     */
    'condition_type'?: SocialProfilesSocialNetworkSegment39ConditionTypeEnum;
    /**
     * Segment by social network in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment39
     */
    'field': SocialProfilesSocialNetworkSegment39FieldEnum;
    /**
     * Members who are/not on a given social network.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment39
     */
    'op': SocialProfilesSocialNetworkSegment39OpEnum;
    /**
     * The social network to segment against.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment39
     */
    'value': SocialProfilesSocialNetworkSegment39ValueEnum;
}

type SocialProfilesSocialNetworkSegment39ConditionTypeEnum = 'SocialNetworkMember'
type SocialProfilesSocialNetworkSegment39FieldEnum = 'social_network'
type SocialProfilesSocialNetworkSegment39OpEnum = 'member' | 'notmember'
type SocialProfilesSocialNetworkSegment39ValueEnum = 'twitter' | 'facebook' | 'linkedin' | 'flickr' | 'foursquare' | 'lastfm' | 'myspace' | 'quora' | 'vimeo' | 'yelp' | 'youtube'

