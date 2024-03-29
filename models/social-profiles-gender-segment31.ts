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
 * @interface SocialProfilesGenderSegment31
 */
export interface SocialProfilesGenderSegment31 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesGenderSegment31
     */
    'condition_type'?: SocialProfilesGenderSegment31ConditionTypeEnum;
    /**
     * Segment by listed gender in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesGenderSegment31
     */
    'field': SocialProfilesGenderSegment31FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof SocialProfilesGenderSegment31
     */
    'op': SocialProfilesGenderSegment31OpEnum;
    /**
     * The Social Profiles gender to segment.
     * @type {string}
     * @memberof SocialProfilesGenderSegment31
     */
    'value': SocialProfilesGenderSegment31ValueEnum;
}

type SocialProfilesGenderSegment31ConditionTypeEnum = 'SocialGender'
type SocialProfilesGenderSegment31FieldEnum = 'social_gender'
type SocialProfilesGenderSegment31OpEnum = 'is' | 'not'
type SocialProfilesGenderSegment31ValueEnum = 'male' | 'female'


