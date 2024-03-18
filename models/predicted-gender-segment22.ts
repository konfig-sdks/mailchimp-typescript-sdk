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
 * @interface PredictedGenderSegment22
 */
export interface PredictedGenderSegment22 {
    /**
     * 
     * @type {string}
     * @memberof PredictedGenderSegment22
     */
    'condition_type'?: PredictedGenderSegment22ConditionTypeEnum;
    /**
     * Segment by predicted gender.
     * @type {string}
     * @memberof PredictedGenderSegment22
     */
    'field': PredictedGenderSegment22FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof PredictedGenderSegment22
     */
    'op': PredictedGenderSegment22OpEnum;
    /**
     * The predicted gender to segment.
     * @type {string}
     * @memberof PredictedGenderSegment22
     */
    'value': PredictedGenderSegment22ValueEnum;
}

type PredictedGenderSegment22ConditionTypeEnum = 'PredictedGender'
type PredictedGenderSegment22FieldEnum = 'predicted_gender'
type PredictedGenderSegment22OpEnum = 'is' | 'not'
type PredictedGenderSegment22ValueEnum = 'male' | 'female'


