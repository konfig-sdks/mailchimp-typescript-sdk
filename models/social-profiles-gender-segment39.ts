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
 * @interface SocialProfilesGenderSegment39
 */
export interface SocialProfilesGenderSegment39 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesGenderSegment39
     */
    'condition_type'?: SocialProfilesGenderSegment39ConditionTypeEnum;
    /**
     * Segment by listed gender in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesGenderSegment39
     */
    'field': SocialProfilesGenderSegment39FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof SocialProfilesGenderSegment39
     */
    'op': SocialProfilesGenderSegment39OpEnum;
    /**
     * The Social Profiles gender to segment.
     * @type {string}
     * @memberof SocialProfilesGenderSegment39
     */
    'value': SocialProfilesGenderSegment39ValueEnum;
}

type SocialProfilesGenderSegment39ConditionTypeEnum = 'SocialGender'
type SocialProfilesGenderSegment39FieldEnum = 'social_gender'
type SocialProfilesGenderSegment39OpEnum = 'is' | 'not'
type SocialProfilesGenderSegment39ValueEnum = 'male' | 'female'


