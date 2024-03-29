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
 * @interface SocialProfilesSocialNetworkSegment16
 */
export interface SocialProfilesSocialNetworkSegment16 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment16
     */
    'condition_type'?: SocialProfilesSocialNetworkSegment16ConditionTypeEnum;
    /**
     * Segment by social network in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment16
     */
    'field': SocialProfilesSocialNetworkSegment16FieldEnum;
    /**
     * Members who are/not on a given social network.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment16
     */
    'op': SocialProfilesSocialNetworkSegment16OpEnum;
    /**
     * The social network to segment against.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment16
     */
    'value': SocialProfilesSocialNetworkSegment16ValueEnum;
}

type SocialProfilesSocialNetworkSegment16ConditionTypeEnum = 'SocialNetworkMember'
type SocialProfilesSocialNetworkSegment16FieldEnum = 'social_network'
type SocialProfilesSocialNetworkSegment16OpEnum = 'member' | 'notmember'
type SocialProfilesSocialNetworkSegment16ValueEnum = 'twitter' | 'facebook' | 'linkedin' | 'flickr' | 'foursquare' | 'lastfm' | 'myspace' | 'quora' | 'vimeo' | 'yelp' | 'youtube'


