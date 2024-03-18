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
 * @interface SocialProfilesSocialNetworkSegment7
 */
export interface SocialProfilesSocialNetworkSegment7 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment7
     */
    'condition_type'?: SocialProfilesSocialNetworkSegment7ConditionTypeEnum;
    /**
     * Segment by social network in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment7
     */
    'field': SocialProfilesSocialNetworkSegment7FieldEnum;
    /**
     * Members who are/not on a given social network.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment7
     */
    'op': SocialProfilesSocialNetworkSegment7OpEnum;
    /**
     * The social network to segment against.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment7
     */
    'value': SocialProfilesSocialNetworkSegment7ValueEnum;
}

type SocialProfilesSocialNetworkSegment7ConditionTypeEnum = 'SocialNetworkMember'
type SocialProfilesSocialNetworkSegment7FieldEnum = 'social_network'
type SocialProfilesSocialNetworkSegment7OpEnum = 'member' | 'notmember'
type SocialProfilesSocialNetworkSegment7ValueEnum = 'twitter' | 'facebook' | 'linkedin' | 'flickr' | 'foursquare' | 'lastfm' | 'myspace' | 'quora' | 'vimeo' | 'yelp' | 'youtube'


