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
 * @interface EcommerceSpentSegment40
 */
export interface EcommerceSpentSegment40 {
    /**
     * 
     * @type {string}
     * @memberof EcommerceSpentSegment40
     */
    'condition_type'?: EcommerceSpentSegment40ConditionTypeEnum;
    /**
     * Segment by amount spent on a single order or across all orders.
     * @type {string}
     * @memberof EcommerceSpentSegment40
     */
    'field'?: EcommerceSpentSegment40FieldEnum;
    /**
     * Members who have spent \'more\' or \'less\' than then specified value.
     * @type {string}
     * @memberof EcommerceSpentSegment40
     */
    'op'?: EcommerceSpentSegment40OpEnum;
    /**
     * The total amount a member spent.
     * @type {number}
     * @memberof EcommerceSpentSegment40
     */
    'value'?: number;
}

type EcommerceSpentSegment40ConditionTypeEnum = 'EcommSpent'
type EcommerceSpentSegment40FieldEnum = 'ecomm_spent_one' | 'ecomm_spent_all'
type EcommerceSpentSegment40OpEnum = 'greater' | 'less'

