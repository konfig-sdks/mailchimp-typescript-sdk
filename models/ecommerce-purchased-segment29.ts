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
 * @interface EcommercePurchasedSegment29
 */
export interface EcommercePurchasedSegment29 {
    /**
     * 
     * @type {string}
     * @memberof EcommercePurchasedSegment29
     */
    'condition_type'?: EcommercePurchasedSegment29ConditionTypeEnum;
    /**
     * Segment by whether someone has purchased anything.
     * @type {string}
     * @memberof EcommercePurchasedSegment29
     */
    'field'?: EcommercePurchasedSegment29FieldEnum;
    /**
     * Members who have have (\'member\') or have not (\'notmember\') purchased.
     * @type {string}
     * @memberof EcommercePurchasedSegment29
     */
    'op'?: EcommercePurchasedSegment29OpEnum;
}

type EcommercePurchasedSegment29ConditionTypeEnum = 'EcommPurchased'
type EcommercePurchasedSegment29FieldEnum = 'ecomm_purchased'
type EcommercePurchasedSegment29OpEnum = 'member' | 'notmember'


