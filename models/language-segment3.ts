/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by language.
 * @export
 * @interface LanguageSegment3
 */
export interface LanguageSegment3 {
    /**
     * 
     * @type {string}
     * @memberof LanguageSegment3
     */
    'condition_type'?: LanguageSegment3ConditionTypeEnum;
    /**
     * Segmenting based off of a subscriber\'s language.
     * @type {string}
     * @memberof LanguageSegment3
     */
    'field': LanguageSegment3FieldEnum;
    /**
     * Whether the member\'s language is or is not set to a specific language.
     * @type {string}
     * @memberof LanguageSegment3
     */
    'op': LanguageSegment3OpEnum;
    /**
     * A two-letter language identifier.
     * @type {string}
     * @memberof LanguageSegment3
     */
    'value': string;
}

type LanguageSegment3ConditionTypeEnum = 'Language'
type LanguageSegment3FieldEnum = 'language'
type LanguageSegment3OpEnum = 'is' | 'not'

