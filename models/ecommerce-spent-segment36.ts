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
 * @interface EcommerceSpentSegment36
 */
export interface EcommerceSpentSegment36 {
    /**
     * 
     * @type {string}
     * @memberof EcommerceSpentSegment36
     */
    'condition_type'?: EcommerceSpentSegment36ConditionTypeEnum;
    /**
     * Segment by amount spent on a single order or across all orders.
     * @type {string}
     * @memberof EcommerceSpentSegment36
     */
    'field'?: EcommerceSpentSegment36FieldEnum;
    /**
     * Members who have spent \'more\' or \'less\' than then specified value.
     * @type {string}
     * @memberof EcommerceSpentSegment36
     */
    'op'?: EcommerceSpentSegment36OpEnum;
    /**
     * The total amount a member spent.
     * @type {number}
     * @memberof EcommerceSpentSegment36
     */
    'value'?: number;
}

type EcommerceSpentSegment36ConditionTypeEnum = 'EcommSpent'
type EcommerceSpentSegment36FieldEnum = 'ecomm_spent_one' | 'ecomm_spent_all'
type EcommerceSpentSegment36OpEnum = 'greater' | 'less'

