/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by amount spent on a single order or across all orders.
 * @export
 * @interface EcommerceSpentSegment5
 */
export interface EcommerceSpentSegment5 {
    /**
     * 
     * @type {string}
     * @memberof EcommerceSpentSegment5
     */
    'condition_type'?: EcommerceSpentSegment5ConditionTypeEnum;
    /**
     * Segment by amount spent on a single order or across all orders.
     * @type {string}
     * @memberof EcommerceSpentSegment5
     */
    'field'?: EcommerceSpentSegment5FieldEnum;
    /**
     * Members who have spent \'more\' or \'less\' than then specified value.
     * @type {string}
     * @memberof EcommerceSpentSegment5
     */
    'op'?: EcommerceSpentSegment5OpEnum;
    /**
     * The total amount a member spent.
     * @type {number}
     * @memberof EcommerceSpentSegment5
     */
    'value'?: number;
}

type EcommerceSpentSegment5ConditionTypeEnum = 'EcommSpent'
type EcommerceSpentSegment5FieldEnum = 'ecomm_spent_one' | 'ecomm_spent_all'
type EcommerceSpentSegment5OpEnum = 'greater' | 'less'


