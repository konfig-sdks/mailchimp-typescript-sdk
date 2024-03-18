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
 * @interface SocialProfilesSocialNetworkSegment28
 */
export interface SocialProfilesSocialNetworkSegment28 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment28
     */
    'condition_type'?: SocialProfilesSocialNetworkSegment28ConditionTypeEnum;
    /**
     * Segment by social network in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment28
     */
    'field': SocialProfilesSocialNetworkSegment28FieldEnum;
    /**
     * Members who are/not on a given social network.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment28
     */
    'op': SocialProfilesSocialNetworkSegment28OpEnum;
    /**
     * The social network to segment against.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment28
     */
    'value': SocialProfilesSocialNetworkSegment28ValueEnum;
}

type SocialProfilesSocialNetworkSegment28ConditionTypeEnum = 'SocialNetworkMember'
type SocialProfilesSocialNetworkSegment28FieldEnum = 'social_network'
type SocialProfilesSocialNetworkSegment28OpEnum = 'member' | 'notmember'
type SocialProfilesSocialNetworkSegment28ValueEnum = 'twitter' | 'facebook' | 'linkedin' | 'flickr' | 'foursquare' | 'lastfm' | 'myspace' | 'quora' | 'vimeo' | 'yelp' | 'youtube'


