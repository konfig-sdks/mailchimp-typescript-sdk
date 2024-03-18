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
 * @interface SocialProfilesAgeSegment39
 */
export interface SocialProfilesAgeSegment39 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesAgeSegment39
     */
    'condition_type'?: SocialProfilesAgeSegment39ConditionTypeEnum;
    /**
     * Segment by age ranges in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesAgeSegment39
     */
    'field': SocialProfilesAgeSegment39FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof SocialProfilesAgeSegment39
     */
    'op': SocialProfilesAgeSegment39OpEnum;
    /**
     * The age range to segment.
     * @type {string}
     * @memberof SocialProfilesAgeSegment39
     */
    'value': SocialProfilesAgeSegment39ValueEnum;
}

type SocialProfilesAgeSegment39ConditionTypeEnum = 'SocialAge'
type SocialProfilesAgeSegment39FieldEnum = 'social_age'
type SocialProfilesAgeSegment39OpEnum = 'is' | 'not'
type SocialProfilesAgeSegment39ValueEnum = '18-24' | '25-34' | '35-54' | '55+'

