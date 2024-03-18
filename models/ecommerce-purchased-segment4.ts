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
 * @interface EcommercePurchasedSegment4
 */
export interface EcommercePurchasedSegment4 {
    /**
     * 
     * @type {string}
     * @memberof EcommercePurchasedSegment4
     */
    'condition_type'?: EcommercePurchasedSegment4ConditionTypeEnum;
    /**
     * Segment by whether someone has purchased anything.
     * @type {string}
     * @memberof EcommercePurchasedSegment4
     */
    'field'?: EcommercePurchasedSegment4FieldEnum;
    /**
     * Members who have have (\'member\') or have not (\'notmember\') purchased.
     * @type {string}
     * @memberof EcommercePurchasedSegment4
     */
    'op'?: EcommercePurchasedSegment4OpEnum;
}

type EcommercePurchasedSegment4ConditionTypeEnum = 'EcommPurchased'
type EcommercePurchasedSegment4FieldEnum = 'ecomm_purchased'
type EcommercePurchasedSegment4OpEnum = 'member' | 'notmember'

