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
 * @interface LanguageSegment4
 */
export interface LanguageSegment4 {
    /**
     * 
     * @type {string}
     * @memberof LanguageSegment4
     */
    'condition_type'?: LanguageSegment4ConditionTypeEnum;
    /**
     * Segmenting based off of a subscriber\'s language.
     * @type {string}
     * @memberof LanguageSegment4
     */
    'field': LanguageSegment4FieldEnum;
    /**
     * Whether the member\'s language is or is not set to a specific language.
     * @type {string}
     * @memberof LanguageSegment4
     */
    'op': LanguageSegment4OpEnum;
    /**
     * A two-letter language identifier.
     * @type {string}
     * @memberof LanguageSegment4
     */
    'value': string;
}

type LanguageSegment4ConditionTypeEnum = 'Language'
type LanguageSegment4FieldEnum = 'language'
type LanguageSegment4OpEnum = 'is' | 'not'


