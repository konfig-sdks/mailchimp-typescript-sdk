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
 * @interface SocialProfilesGenderSegment1
 */
export interface SocialProfilesGenderSegment1 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesGenderSegment1
     */
    'condition_type'?: SocialProfilesGenderSegment1ConditionTypeEnum;
    /**
     * Segment by listed gender in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesGenderSegment1
     */
    'field': SocialProfilesGenderSegment1FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof SocialProfilesGenderSegment1
     */
    'op': SocialProfilesGenderSegment1OpEnum;
    /**
     * The Social Profiles gender to segment.
     * @type {string}
     * @memberof SocialProfilesGenderSegment1
     */
    'value': SocialProfilesGenderSegment1ValueEnum;
}

type SocialProfilesGenderSegment1ConditionTypeEnum = 'SocialGender'
type SocialProfilesGenderSegment1FieldEnum = 'social_gender'
type SocialProfilesGenderSegment1OpEnum = 'is' | 'not'
type SocialProfilesGenderSegment1ValueEnum = 'male' | 'female'


