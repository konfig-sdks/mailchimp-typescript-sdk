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
 * @interface SocialProfilesInfluenceSegment20
 */
export interface SocialProfilesInfluenceSegment20 {
    /**
     * 
     * @type {string}
     * @memberof SocialProfilesInfluenceSegment20
     */
    'condition_type'?: SocialProfilesInfluenceSegment20ConditionTypeEnum;
    /**
     * Segment by influence rating in Social Profiles data.
     * @type {string}
     * @memberof SocialProfilesInfluenceSegment20
     */
    'field': SocialProfilesInfluenceSegment20FieldEnum;
    /**
     * Members who have a rating that is/not or greater/less than the rating provided.
     * @type {string}
     * @memberof SocialProfilesInfluenceSegment20
     */
    'op': SocialProfilesInfluenceSegment20OpEnum;
    /**
     * The Social Profiles influence rating to segment.
     * @type {number}
     * @memberof SocialProfilesInfluenceSegment20
     */
    'value': number;
}

type SocialProfilesInfluenceSegment20ConditionTypeEnum = 'SocialInfluence'
type SocialProfilesInfluenceSegment20FieldEnum = 'social_influence'
type SocialProfilesInfluenceSegment20OpEnum = 'is' | 'not' | 'greater' | 'less'

