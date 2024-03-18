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
 * @interface EcommerceNumberSegment4
 */
export interface EcommerceNumberSegment4 {
    /**
     * 
     * @type {string}
     * @memberof EcommerceNumberSegment4
     */
    'condition_type'?: EcommerceNumberSegment4ConditionTypeEnum;
    /**
     * Segment by average spent total, number of orders, total number of products purchased, or average number of products per order.
     * @type {string}
     * @memberof EcommerceNumberSegment4
     */
    'field': EcommerceNumberSegment4FieldEnum;
    /**
     * Members who have spent exactly, have not spent exactly, spent more, or spent less than the segment value.
     * @type {string}
     * @memberof EcommerceNumberSegment4
     */
    'op': EcommerceNumberSegment4OpEnum;
    /**
     * Members who have spent exactly, have not spent exactly, spent more, or spent less than this amount.
     * @type {number}
     * @memberof EcommerceNumberSegment4
     */
    'value': number;
}

type EcommerceNumberSegment4ConditionTypeEnum = 'EcommNumber'
type EcommerceNumberSegment4FieldEnum = 'ecomm_spent_avg' | 'ecomm_orders' | 'ecomm_prod_all' | 'ecomm_avg_ord'
type EcommerceNumberSegment4OpEnum = 'is' | 'not' | 'greater' | 'less'

