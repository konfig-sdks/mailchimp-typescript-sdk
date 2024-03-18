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
 * @interface EcommercePurchasedSegment34
 */
export interface EcommercePurchasedSegment34 {
    /**
     * 
     * @type {string}
     * @memberof EcommercePurchasedSegment34
     */
    'condition_type'?: EcommercePurchasedSegment34ConditionTypeEnum;
    /**
     * Segment by whether someone has purchased anything.
     * @type {string}
     * @memberof EcommercePurchasedSegment34
     */
    'field'?: EcommercePurchasedSegment34FieldEnum;
    /**
     * Members who have have (\'member\') or have not (\'notmember\') purchased.
     * @type {string}
     * @memberof EcommercePurchasedSegment34
     */
    'op'?: EcommercePurchasedSegment34OpEnum;
}

type EcommercePurchasedSegment34ConditionTypeEnum = 'EcommPurchased'
type EcommercePurchasedSegment34FieldEnum = 'ecomm_purchased'
type EcommercePurchasedSegment34OpEnum = 'member' | 'notmember'

