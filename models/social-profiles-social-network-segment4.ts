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
 * @interface SocialProfilesSocialNetworkSegment4
 */
export interface SocialProfilesSocialNetworkSegment4 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment4
     */
    'condition_type'?: SocialProfilesSocialNetworkSegment4ConditionTypeEnum;
    /**
     * Segment by social network in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment4
     */
    'field': SocialProfilesSocialNetworkSegment4FieldEnum;
    /**
     * Members who are/not on a given social network.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment4
     */
    'op': SocialProfilesSocialNetworkSegment4OpEnum;
    /**
     * The social network to segment against.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment4
     */
    'value': SocialProfilesSocialNetworkSegment4ValueEnum;
}

type SocialProfilesSocialNetworkSegment4ConditionTypeEnum = 'SocialNetworkMember'
type SocialProfilesSocialNetworkSegment4FieldEnum = 'social_network'
type SocialProfilesSocialNetworkSegment4OpEnum = 'member' | 'notmember'
type SocialProfilesSocialNetworkSegment4ValueEnum = 'twitter' | 'facebook' | 'linkedin' | 'flickr' | 'foursquare' | 'lastfm' | 'myspace' | 'quora' | 'vimeo' | 'yelp' | 'youtube'


