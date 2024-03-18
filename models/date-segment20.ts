/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by a specific date field.
 * @export
 * @interface DateSegment20
 */
export interface DateSegment20 {
    /**
     * 
     * @type {string}
     * @memberof DateSegment20
     */
    'condition_type'?: DateSegment20ConditionTypeEnum;
    /**
     * The type of date field to segment on: The opt-in time for a signup, the date the subscriber was last updated, or the date of their last ecomm purchase.
     * @type {string}
     * @memberof DateSegment20
     */
    'field': DateSegment20FieldEnum;
    /**
     * When the event took place:  Before, after, is a specific date, is not a specific date, is blank, or is not blank.
     * @type {string}
     * @memberof DateSegment20
     */
    'op': DateSegment20OpEnum;
    /**
     * What type of data to segment on: a specific date, a specific campaign, or the last campaign sent.
     * @type {string}
     * @memberof DateSegment20
     */
    'value': string;
    /**
     * When segmenting on \'date\' or \'campaign\', the date for the segment formatted as YYYY-MM-DD or the web id for the campaign.
     * @type {string}
     * @memberof DateSegment20
     */
    'extra'?: string;
}

type DateSegment20ConditionTypeEnum = 'Date'
type DateSegment20FieldEnum = 'timestamp_opt' | 'info_changed' | 'ecomm_date'
type DateSegment20OpEnum = 'greater' | 'less' | 'is' | 'not' | 'blank' | 'blank_not' | 'within' | 'notwithin'

