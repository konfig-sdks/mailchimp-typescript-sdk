/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by influence rating in Social Profiles data.
 * @export
 * @interface SocialProfilesInfluenceSegment4
 */
export interface SocialProfilesInfluenceSegment4 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesInfluenceSegment4
     */
    'condition_type'?: SocialProfilesInfluenceSegment4ConditionTypeEnum;
    /**
     * Segment by influence rating in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesInfluenceSegment4
     */
    'field': SocialProfilesInfluenceSegment4FieldEnum;
    /**
     * Members who have a rating that is/not or greater/less than the rating provided.
     * @type {string}
     * @memberof SocialProfilesInfluenceSegment4
     */
    'op': SocialProfilesInfluenceSegment4OpEnum;
    /**
     * The Social Profiles influence rating to segment.
     * @type {number}
     * @memberof SocialProfilesInfluenceSegment4
     */
    'value': number;
}

type SocialProfilesInfluenceSegment4ConditionTypeEnum = 'SocialInfluence'
type SocialProfilesInfluenceSegment4FieldEnum = 'social_influence'
type SocialProfilesInfluenceSegment4OpEnum = 'is' | 'not' | 'greater' | 'less'


