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
 * @interface SocialProfilesAgeSegment8
 */
export interface SocialProfilesAgeSegment8 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesAgeSegment8
     */
    'condition_type'?: SocialProfilesAgeSegment8ConditionTypeEnum;
    /**
     * Segment by age ranges in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesAgeSegment8
     */
    'field': SocialProfilesAgeSegment8FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof SocialProfilesAgeSegment8
     */
    'op': SocialProfilesAgeSegment8OpEnum;
    /**
     * The age range to segment.
     * @type {string}
     * @memberof SocialProfilesAgeSegment8
     */
    'value': SocialProfilesAgeSegment8ValueEnum;
}

type SocialProfilesAgeSegment8ConditionTypeEnum = 'SocialAge'
type SocialProfilesAgeSegment8FieldEnum = 'social_age'
type SocialProfilesAgeSegment8OpEnum = 'is' | 'not'
type SocialProfilesAgeSegment8ValueEnum = '18-24' | '25-34' | '35-54' | '55+'


