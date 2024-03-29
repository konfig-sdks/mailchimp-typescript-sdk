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
 * @interface SocialProfilesAgeSegment29
 */
export interface SocialProfilesAgeSegment29 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesAgeSegment29
     */
    'condition_type'?: SocialProfilesAgeSegment29ConditionTypeEnum;
    /**
     * Segment by age ranges in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesAgeSegment29
     */
    'field': SocialProfilesAgeSegment29FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof SocialProfilesAgeSegment29
     */
    'op': SocialProfilesAgeSegment29OpEnum;
    /**
     * The age range to segment.
     * @type {string}
     * @memberof SocialProfilesAgeSegment29
     */
    'value': SocialProfilesAgeSegment29ValueEnum;
}

type SocialProfilesAgeSegment29ConditionTypeEnum = 'SocialAge'
type SocialProfilesAgeSegment29FieldEnum = 'social_age'
type SocialProfilesAgeSegment29OpEnum = 'is' | 'not'
type SocialProfilesAgeSegment29ValueEnum = '18-24' | '25-34' | '35-54' | '55+'


