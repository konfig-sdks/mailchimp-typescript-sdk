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
 * @interface SocialProfilesInfluenceSegment43
 */
export interface SocialProfilesInfluenceSegment43 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesInfluenceSegment43
     */
    'condition_type'?: SocialProfilesInfluenceSegment43ConditionTypeEnum;
    /**
     * Segment by influence rating in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesInfluenceSegment43
     */
    'field': SocialProfilesInfluenceSegment43FieldEnum;
    /**
     * Members who have a rating that is/not or greater/less than the rating provided.
     * @type {string}
     * @memberof SocialProfilesInfluenceSegment43
     */
    'op': SocialProfilesInfluenceSegment43OpEnum;
    /**
     * The Social Profiles influence rating to segment.
     * @type {number}
     * @memberof SocialProfilesInfluenceSegment43
     */
    'value': number;
}

type SocialProfilesInfluenceSegment43ConditionTypeEnum = 'SocialInfluence'
type SocialProfilesInfluenceSegment43FieldEnum = 'social_influence'
type SocialProfilesInfluenceSegment43OpEnum = 'is' | 'not' | 'greater' | 'less'


