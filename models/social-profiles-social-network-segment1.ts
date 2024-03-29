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
 * @interface SocialProfilesSocialNetworkSegment1
 */
export interface SocialProfilesSocialNetworkSegment1 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment1
     */
    'condition_type'?: SocialProfilesSocialNetworkSegment1ConditionTypeEnum;
    /**
     * Segment by social network in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment1
     */
    'field': SocialProfilesSocialNetworkSegment1FieldEnum;
    /**
     * Members who are/not on a given social network.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment1
     */
    'op': SocialProfilesSocialNetworkSegment1OpEnum;
    /**
     * The social network to segment against.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment1
     */
    'value': SocialProfilesSocialNetworkSegment1ValueEnum;
}

type SocialProfilesSocialNetworkSegment1ConditionTypeEnum = 'SocialNetworkMember'
type SocialProfilesSocialNetworkSegment1FieldEnum = 'social_network'
type SocialProfilesSocialNetworkSegment1OpEnum = 'member' | 'notmember'
type SocialProfilesSocialNetworkSegment1ValueEnum = 'twitter' | 'facebook' | 'linkedin' | 'flickr' | 'foursquare' | 'lastfm' | 'myspace' | 'quora' | 'vimeo' | 'yelp' | 'youtube'


