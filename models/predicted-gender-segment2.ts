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
 * @interface PredictedGenderSegment2
 */
export interface PredictedGenderSegment2 {
    /**
     * 
     * @type {string}
     * @memberof PredictedGenderSegment2
     */
    'condition_type'?: PredictedGenderSegment2ConditionTypeEnum;
    /**
     * Segment by predicted gender.
     * @type {string}
     * @memberof PredictedGenderSegment2
     */
    'field': PredictedGenderSegment2FieldEnum;
    /**
     * Members who are/not the exact criteria listed.
     * @type {string}
     * @memberof PredictedGenderSegment2
     */
    'op': PredictedGenderSegment2OpEnum;
    /**
     * The predicted gender to segment.
     * @type {string}
     * @memberof PredictedGenderSegment2
     */
    'value': PredictedGenderSegment2ValueEnum;
}

type PredictedGenderSegment2ConditionTypeEnum = 'PredictedGender'
type PredictedGenderSegment2FieldEnum = 'predicted_gender'
type PredictedGenderSegment2OpEnum = 'is' | 'not'
type PredictedGenderSegment2ValueEnum = 'male' | 'female'


