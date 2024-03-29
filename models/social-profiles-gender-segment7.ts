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
 * @interface SocialProfilesGenderSegment7
 */
export interface SocialProfilesGenderSegment7 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesGenderSegment7
     */
    'condition_type'?: SocialProfilesGenderSegment7ConditionTypeEnum;
    /**
     * Segment by listed gender in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesGenderSegment7
     */
    'field': SocialProfilesGenderSegment7FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof SocialProfilesGenderSegment7
     */
    'op': SocialProfilesGenderSegment7OpEnum;
    /**
     * The Social Profiles gender to segment.
     * @type {string}
     * @memberof SocialProfilesGenderSegment7
     */
    'value': SocialProfilesGenderSegment7ValueEnum;
}

type SocialProfilesGenderSegment7ConditionTypeEnum = 'SocialGender'
type SocialProfilesGenderSegment7FieldEnum = 'social_gender'
type SocialProfilesGenderSegment7OpEnum = 'is' | 'not'
type SocialProfilesGenderSegment7ValueEnum = 'male' | 'female'


