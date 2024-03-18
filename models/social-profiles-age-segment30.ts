/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by age ranges in Social Profiles data.
 * @export
 * @interface SocialProfilesAgeSegment30
 */
export interface SocialProfilesAgeSegment30 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesAgeSegment30
     */
    'condition_type'?: SocialProfilesAgeSegment30ConditionTypeEnum;
    /**
     * Segment by age ranges in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesAgeSegment30
     */
    'field': SocialProfilesAgeSegment30FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof SocialProfilesAgeSegment30
     */
    'op': SocialProfilesAgeSegment30OpEnum;
    /**
     * The age range to segment.
     * @type {string}
     * @memberof SocialProfilesAgeSegment30
     */
    'value': SocialProfilesAgeSegment30ValueEnum;
}

type SocialProfilesAgeSegment30ConditionTypeEnum = 'SocialAge'
type SocialProfilesAgeSegment30FieldEnum = 'social_age'
type SocialProfilesAgeSegment30OpEnum = 'is' | 'not'
type SocialProfilesAgeSegment30ValueEnum = '18-24' | '25-34' | '35-54' | '55+'


