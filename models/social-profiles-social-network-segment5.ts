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
 * @interface SocialProfilesSocialNetworkSegment5
 */
export interface SocialProfilesSocialNetworkSegment5 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment5
     */
    'condition_type'?: SocialProfilesSocialNetworkSegment5ConditionTypeEnum;
    /**
     * Segment by social network in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment5
     */
    'field': SocialProfilesSocialNetworkSegment5FieldEnum;
    /**
     * Members who are/not on a given social network.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment5
     */
    'op': SocialProfilesSocialNetworkSegment5OpEnum;
    /**
     * The social network to segment against.
     * @type {string}
     * @memberof SocialProfilesSocialNetworkSegment5
     */
    'value': SocialProfilesSocialNetworkSegment5ValueEnum;
}

type SocialProfilesSocialNetworkSegment5ConditionTypeEnum = 'SocialNetworkMember'
type SocialProfilesSocialNetworkSegment5FieldEnum = 'social_network'
type SocialProfilesSocialNetworkSegment5OpEnum = 'member' | 'notmember'
type SocialProfilesSocialNetworkSegment5ValueEnum = 'twitter' | 'facebook' | 'linkedin' | 'flickr' | 'foursquare' | 'lastfm' | 'myspace' | 'quora' | 'vimeo' | 'yelp' | 'youtube'


