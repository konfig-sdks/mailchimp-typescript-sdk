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
 * @interface SocialProfilesSocialNetworkSegment11
 */
export interface SocialProfilesSocialNetworkSegment11 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment11
     */
    'condition_type'?: SocialProfilesSocialNetworkSegment11ConditionTypeEnum;
    /**
     * Segment by social network in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment11
     */
    'field': SocialProfilesSocialNetworkSegment11FieldEnum;
    /**
     * Members who are/not on a given social network.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment11
     */
    'op': SocialProfilesSocialNetworkSegment11OpEnum;
    /**
     * The social network to segment against.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment11
     */
    'value': SocialProfilesSocialNetworkSegment11ValueEnum;
}

type SocialProfilesSocialNetworkSegment11ConditionTypeEnum = 'SocialNetworkMember'
type SocialProfilesSocialNetworkSegment11FieldEnum = 'social_network'
type SocialProfilesSocialNetworkSegment11OpEnum = 'member' | 'notmember'
type SocialProfilesSocialNetworkSegment11ValueEnum = 'twitter' | 'facebook' | 'linkedin' | 'flickr' | 'foursquare' | 'lastfm' | 'myspace' | 'quora' | 'vimeo' | 'yelp' | 'youtube'


