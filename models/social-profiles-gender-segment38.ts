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
 * @interface SocialProfilesGenderSegment38
 */
export interface SocialProfilesGenderSegment38 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesGenderSegment38
     */
    'condition_type'?: SocialProfilesGenderSegment38ConditionTypeEnum;
    /**
     * Segment by listed gender in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesGenderSegment38
     */
    'field': SocialProfilesGenderSegment38FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof SocialProfilesGenderSegment38
     */
    'op': SocialProfilesGenderSegment38OpEnum;
    /**
     * The Social Profiles gender to segment.
     * @type {string}
     * @memberof SocialProfilesGenderSegment38
     */
    'value': SocialProfilesGenderSegment38ValueEnum;
}

type SocialProfilesGenderSegment38ConditionTypeEnum = 'SocialGender'
type SocialProfilesGenderSegment38FieldEnum = 'social_gender'
type SocialProfilesGenderSegment38OpEnum = 'is' | 'not'
type SocialProfilesGenderSegment38ValueEnum = 'male' | 'female'

