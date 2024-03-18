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
 * @interface SocialProfilesSocialNetworkSegment35
 */
export interface SocialProfilesSocialNetworkSegment35 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment35
     */
    'condition_type'?: SocialProfilesSocialNetworkSegment35ConditionTypeEnum;
    /**
     * Segment by social network in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment35
     */
    'field': SocialProfilesSocialNetworkSegment35FieldEnum;
    /**
     * Members who are/not on a given social network.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment35
     */
    'op': SocialProfilesSocialNetworkSegment35OpEnum;
    /**
     * The social network to segment against.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment35
     */
    'value': SocialProfilesSocialNetworkSegment35ValueEnum;
}

type SocialProfilesSocialNetworkSegment35ConditionTypeEnum = 'SocialNetworkMember'
type SocialProfilesSocialNetworkSegment35FieldEnum = 'social_network'
type SocialProfilesSocialNetworkSegment35OpEnum = 'member' | 'notmember'
type SocialProfilesSocialNetworkSegment35ValueEnum = 'twitter' | 'facebook' | 'linkedin' | 'flickr' | 'foursquare' | 'lastfm' | 'myspace' | 'quora' | 'vimeo' | 'yelp' | 'youtube'


