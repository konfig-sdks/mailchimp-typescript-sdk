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
 * @interface LanguageSegment15
 */
export interface LanguageSegment15 {
    /**
     * 
     * @type {string}
     * @memberof LanguageSegment15
     */
    'condition_type'?: LanguageSegment15ConditionTypeEnum;
    /**
     * Segmenting based off of a subscriber\'s language.
     * @type {string}
     * @memberof LanguageSegment15
     */
    'field': LanguageSegment15FieldEnum;
    /**
     * Whether the member\'s language is or is not set to a specific language.
     * @type {string}
     * @memberof LanguageSegment15
     */
    'op': LanguageSegment15OpEnum;
    /**
     * A two-letter language identifier.
     * @type {string}
     * @memberof LanguageSegment15
     */
    'value': string;
}

type LanguageSegment15ConditionTypeEnum = 'Language'
type LanguageSegment15FieldEnum = 'language'
type LanguageSegment15OpEnum = 'is' | 'not'

