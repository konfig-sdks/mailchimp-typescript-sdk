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
 * @interface PredictedGenderSegment12
 */
export interface PredictedGenderSegment12 {
    /**
     * 
     * @type {string}
     * @memberof PredictedGenderSegment12
     */
    'condition_type'?: PredictedGenderSegment12ConditionTypeEnum;
    /**
     * Segment by predicted gender.
     * @type {string}
     * @memberof PredictedGenderSegment12
     */
    'field': PredictedGenderSegment12FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof PredictedGenderSegment12
     */
    'op': PredictedGenderSegment12OpEnum;
    /**
     * The predicted gender to segment.
     * @type {string}
     * @memberof PredictedGenderSegment12
     */
    'value': PredictedGenderSegment12ValueEnum;
}

type PredictedGenderSegment12ConditionTypeEnum = 'PredictedGender'
type PredictedGenderSegment12FieldEnum = 'predicted_gender'
type PredictedGenderSegment12OpEnum = 'is' | 'not'
type PredictedGenderSegment12ValueEnum = 'male' | 'female'

