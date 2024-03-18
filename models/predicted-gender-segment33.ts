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
 * @interface PredictedGenderSegment33
 */
export interface PredictedGenderSegment33 {
    /**
     * 
     * @type {string}
     * @memberof PredictedGenderSegment33
     */
    'condition_type'?: PredictedGenderSegment33ConditionTypeEnum;
    /**
     * Segment by predicted gender.
     * @type {string}
     * @memberof PredictedGenderSegment33
     */
    'field': PredictedGenderSegment33FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof PredictedGenderSegment33
     */
    'op': PredictedGenderSegment33OpEnum;
    /**
     * The predicted gender to segment.
     * @type {string}
     * @memberof PredictedGenderSegment33
     */
    'value': PredictedGenderSegment33ValueEnum;
}

type PredictedGenderSegment33ConditionTypeEnum = 'PredictedGender'
type PredictedGenderSegment33FieldEnum = 'predicted_gender'
type PredictedGenderSegment33OpEnum = 'is' | 'not'
type PredictedGenderSegment33ValueEnum = 'male' | 'female'

