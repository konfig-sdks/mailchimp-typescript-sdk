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
 * @interface SurveyMonkeySegment5
 */
export interface SurveyMonkeySegment5 {
    /**
     * 
     * @type {string}
     * @memberof SurveyMonkeySegment5
     */
    'condition_type'?: SurveyMonkeySegment5ConditionTypeEnum;
    /**
     * Segment by interaction with a SurveyMonkey survey.
     * @type {string}
     * @memberof SurveyMonkeySegment5
     */
    'field': SurveyMonkeySegment5FieldEnum;
    /**
     * The status of the member with regard to the survey.One of the following: has started the survey, has completed the survey, has not started the survey, or has not completed the survey.
     * @type {string}
     * @memberof SurveyMonkeySegment5
     */
    'op': SurveyMonkeySegment5OpEnum;
    /**
     * The unique ID of the survey monkey survey.
     * @type {string}
     * @memberof SurveyMonkeySegment5
     */
    'value': string;
}

type SurveyMonkeySegment5ConditionTypeEnum = 'SurveyMonkey'
type SurveyMonkeySegment5FieldEnum = 'survey_monkey'
type SurveyMonkeySegment5OpEnum = 'started' | 'completed' | 'not_started' | 'not_completed'


