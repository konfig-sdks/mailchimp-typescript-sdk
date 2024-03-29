/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by whether someone has purchased anything.
 * @export
 * @interface EcommercePurchasedSegment37
 */
export interface EcommercePurchasedSegment37 {
    /**
     * 
     * @type {string}
     * @memberof EcommercePurchasedSegment37
     */
    'condition_type'?: EcommercePurchasedSegment37ConditionTypeEnum;
    /**
     * Segment by whether someone has purchased anything.
     * @type {string}
     * @memberof EcommercePurchasedSegment37
     */
    'field'?: EcommercePurchasedSegment37FieldEnum;
    /**
     * Members who have have (\'member\') or have not (\'notmember\') purchased.
     * @type {string}
     * @memberof EcommercePurchasedSegment37
     */
    'op'?: EcommercePurchasedSegment37OpEnum;
}

type EcommercePurchasedSegment37ConditionTypeEnum = 'EcommPurchased'
type EcommercePurchasedSegment37FieldEnum = 'ecomm_purchased'
type EcommercePurchasedSegment37OpEnum = 'member' | 'notmember'


