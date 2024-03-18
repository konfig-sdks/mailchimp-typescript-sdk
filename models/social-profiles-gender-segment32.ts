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
 * @interface SocialProfilesGenderSegment32
 */
export interface SocialProfilesGenderSegment32 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesGenderSegment32
     */
    'condition_type'?: SocialProfilesGenderSegment32ConditionTypeEnum;
    /**
     * Segment by listed gender in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesGenderSegment32
     */
    'field': SocialProfilesGenderSegment32FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof SocialProfilesGenderSegment32
     */
    'op': SocialProfilesGenderSegment32OpEnum;
    /**
     * The Social Profiles gender to segment.
     * @type {string}
     * @memberof SocialProfilesGenderSegment32
     */
    'value': SocialProfilesGenderSegment32ValueEnum;
}

type SocialProfilesGenderSegment32ConditionTypeEnum = 'SocialGender'
type SocialProfilesGenderSegment32FieldEnum = 'social_gender'
type SocialProfilesGenderSegment32OpEnum = 'is' | 'not'
type SocialProfilesGenderSegment32ValueEnum = 'male' | 'female'


