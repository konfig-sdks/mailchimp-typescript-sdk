/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by predicted gender.
 * @export
 * @interface PredictedGenderSegment40
 */
export interface PredictedGenderSegment40 {
    /**
     * 
     * @type {string}
     * @memberof PredictedGenderSegment40
     */
    'condition_type'?: PredictedGenderSegment40ConditionTypeEnum;
    /**
     * Segment by predicted gender.
     * @type {string}
     * @memberof PredictedGenderSegment40
     */
    'field': PredictedGenderSegment40FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof PredictedGenderSegment40
     */
    'op': PredictedGenderSegment40OpEnum;
    /**
     * The predicted gender to segment.
     * @type {string}
     * @memberof PredictedGenderSegment40
     */
    'value': PredictedGenderSegment40ValueEnum;
}

type PredictedGenderSegment40ConditionTypeEnum = 'PredictedGender'
type PredictedGenderSegment40FieldEnum = 'predicted_gender'
type PredictedGenderSegment40OpEnum = 'is' | 'not'
type PredictedGenderSegment40ValueEnum = 'male' | 'female'


