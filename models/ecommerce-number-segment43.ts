/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by average spent total, number of orders, total number of products purchased, or average number of products per order.
 * @export
 * @interface EcommerceNumberSegment43
 */
export interface EcommerceNumberSegment43 {
    /**
     * 
     * @type {string}
     * @memberof EcommerceNumberSegment43
     */
    'condition_type'?: EcommerceNumberSegment43ConditionTypeEnum;
    /**
     * Segment by average spent total, number of orders, total number of products purchased, or average number of products per order.
     * @type {string}
     * @memberof EcommerceNumberSegment43
     */
    'field': EcommerceNumberSegment43FieldEnum;
    /**
     * Members who have spent exactly, have not spent exactly, spent more, or spent less than the segment value.
     * @type {string}
     * @memberof EcommerceNumberSegment43
     */
    'op': EcommerceNumberSegment43OpEnum;
    /**
     * Members who have spent exactly, have not spent exactly, spent more, or spent less than this amount.
     * @type {number}
     * @memberof EcommerceNumberSegment43
     */
    'value': number;
}

type EcommerceNumberSegment43ConditionTypeEnum = 'EcommNumber'
type EcommerceNumberSegment43FieldEnum = 'ecomm_spent_avg' | 'ecomm_orders' | 'ecomm_prod_all' | 'ecomm_avg_ord'
type EcommerceNumberSegment43OpEnum = 'is' | 'not' | 'greater' | 'less'

