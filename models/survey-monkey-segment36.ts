/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by interaction with a SurveyMonkey survey.
 * @export
 * @interface SurveyMonkeySegment36
 */
export interface SurveyMonkeySegment36 {
    /**
     * 
     * @type {string}
     * @memberof SurveyMonkeySegment36
     */
    'condition_type'?: SurveyMonkeySegment36ConditionTypeEnum;
    /**
     * Segment by interaction with a SurveyMonkey survey.
     * @type {string}
     * @memberof SurveyMonkeySegment36
     */
    'field': SurveyMonkeySegment36FieldEnum;
    /**
     * The status of the member with regard to the survey.One of the following: has started the survey, has completed the survey, has not started the survey, or has not completed the survey.
     * @type {string}
     * @memberof SurveyMonkeySegment36
     */
    'op': SurveyMonkeySegment36OpEnum;
    /**
     * The unique ID of the survey monkey survey.
     * @type {string}
     * @memberof SurveyMonkeySegment36
     */
    'value': string;
}

type SurveyMonkeySegment36ConditionTypeEnum = 'SurveyMonkey'
type SurveyMonkeySegment36FieldEnum = 'survey_monkey'
type SurveyMonkeySegment36OpEnum = 'started' | 'completed' | 'not_started' | 'not_completed'


