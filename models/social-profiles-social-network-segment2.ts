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
 * @interface SocialProfilesSocialNetworkSegment2
 */
export interface SocialProfilesSocialNetworkSegment2 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment2
     */
    'condition_type'?: SocialProfilesSocialNetworkSegment2ConditionTypeEnum;
    /**
     * Segment by social network in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment2
     */
    'field': SocialProfilesSocialNetworkSegment2FieldEnum;
    /**
     * Members who are/not on a given social network.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment2
     */
    'op': SocialProfilesSocialNetworkSegment2OpEnum;
    /**
     * The social network to segment against.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment2
     */
    'value': SocialProfilesSocialNetworkSegment2ValueEnum;
}

type SocialProfilesSocialNetworkSegment2ConditionTypeEnum = 'SocialNetworkMember'
type SocialProfilesSocialNetworkSegment2FieldEnum = 'social_network'
type SocialProfilesSocialNetworkSegment2OpEnum = 'member' | 'notmember'
type SocialProfilesSocialNetworkSegment2ValueEnum = 'twitter' | 'facebook' | 'linkedin' | 'flickr' | 'foursquare' | 'lastfm' | 'myspace' | 'quora' | 'vimeo' | 'yelp' | 'youtube'


