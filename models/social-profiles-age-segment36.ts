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
 * @interface SocialProfilesAgeSegment36
 */
export interface SocialProfilesAgeSegment36 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesAgeSegment36
     */
    'condition_type'?: SocialProfilesAgeSegment36ConditionTypeEnum;
    /**
     * Segment by age ranges in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesAgeSegment36
     */
    'field': SocialProfilesAgeSegment36FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof SocialProfilesAgeSegment36
     */
    'op': SocialProfilesAgeSegment36OpEnum;
    /**
     * The age range to segment.
     * @type {string}
     * @memberof SocialProfilesAgeSegment36
     */
    'value': SocialProfilesAgeSegment36ValueEnum;
}

type SocialProfilesAgeSegment36ConditionTypeEnum = 'SocialAge'
type SocialProfilesAgeSegment36FieldEnum = 'social_age'
type SocialProfilesAgeSegment36OpEnum = 'is' | 'not'
type SocialProfilesAgeSegment36ValueEnum = '18-24' | '25-34' | '35-54' | '55+'


