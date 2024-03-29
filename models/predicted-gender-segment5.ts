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
 * @interface PredictedGenderSegment5
 */
export interface PredictedGenderSegment5 {
    /**
     * 
     * @type {string}
     * @memberof PredictedGenderSegment5
     */
    'condition_type'?: PredictedGenderSegment5ConditionTypeEnum;
    /**
     * Segment by predicted gender.
     * @type {string}
     * @memberof PredictedGenderSegment5
     */
    'field': PredictedGenderSegment5FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof PredictedGenderSegment5
     */
    'op': PredictedGenderSegment5OpEnum;
    /**
     * The predicted gender to segment.
     * @type {string}
     * @memberof PredictedGenderSegment5
     */
    'value': PredictedGenderSegment5ValueEnum;
}

type PredictedGenderSegment5ConditionTypeEnum = 'PredictedGender'
type PredictedGenderSegment5FieldEnum = 'predicted_gender'
type PredictedGenderSegment5OpEnum = 'is' | 'not'
type PredictedGenderSegment5ValueEnum = 'male' | 'female'


