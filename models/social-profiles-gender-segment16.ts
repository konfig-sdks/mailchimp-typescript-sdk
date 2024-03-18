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
 * @interface SocialProfilesGenderSegment16
 */
export interface SocialProfilesGenderSegment16 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesGenderSegment16
     */
    'condition_type'?: SocialProfilesGenderSegment16ConditionTypeEnum;
    /**
     * Segment by listed gender in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesGenderSegment16
     */
    'field': SocialProfilesGenderSegment16FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof SocialProfilesGenderSegment16
     */
    'op': SocialProfilesGenderSegment16OpEnum;
    /**
     * The Social Profiles gender to segment.
     * @type {string}
     * @memberof SocialProfilesGenderSegment16
     */
    'value': SocialProfilesGenderSegment16ValueEnum;
}

type SocialProfilesGenderSegment16ConditionTypeEnum = 'SocialGender'
type SocialProfilesGenderSegment16FieldEnum = 'social_gender'
type SocialProfilesGenderSegment16OpEnum = 'is' | 'not'
type SocialProfilesGenderSegment16ValueEnum = 'male' | 'female'


