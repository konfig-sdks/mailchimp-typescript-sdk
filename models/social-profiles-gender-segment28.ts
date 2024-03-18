/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by listed gender in Social Profiles data.
 * @export
 * @interface SocialProfilesGenderSegment28
 */
export interface SocialProfilesGenderSegment28 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesGenderSegment28
     */
    'condition_type'?: SocialProfilesGenderSegment28ConditionTypeEnum;
    /**
     * Segment by listed gender in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesGenderSegment28
     */
    'field': SocialProfilesGenderSegment28FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof SocialProfilesGenderSegment28
     */
    'op': SocialProfilesGenderSegment28OpEnum;
    /**
     * The Social Profiles gender to segment.
     * @type {string}
     * @memberof SocialProfilesGenderSegment28
     */
    'value': SocialProfilesGenderSegment28ValueEnum;
}

type SocialProfilesGenderSegment28ConditionTypeEnum = 'SocialGender'
type SocialProfilesGenderSegment28FieldEnum = 'social_gender'
type SocialProfilesGenderSegment28OpEnum = 'is' | 'not'
type SocialProfilesGenderSegment28ValueEnum = 'male' | 'female'

