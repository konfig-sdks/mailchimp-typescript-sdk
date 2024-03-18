/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Segment by purchases from a specific store.
 * @export
 * @interface EcommercePurchasedStoreSegment24
 */
export interface EcommercePurchasedStoreSegment24 {
    /**
     * 
     * @type {string}
     * @memberof EcommercePurchasedStoreSegment24
     */
    'condition_type'?: EcommercePurchasedStoreSegment24ConditionTypeEnum;
    /**
     * Segment by purchases from a specific store.
     * @type {string}
     * @memberof EcommercePurchasedStoreSegment24
     */
    'field'?: EcommercePurchasedStoreSegment24FieldEnum;
    /**
     * Members who have or have not purchased from a specific store.
     * @type {string}
     * @memberof EcommercePurchasedStoreSegment24
     */
    'op'?: EcommercePurchasedStoreSegment24OpEnum;
    /**
     * The store id to segment against.
     * @type {string}
     * @memberof EcommercePurchasedStoreSegment24
     */
    'value'?: string;
}

type EcommercePurchasedStoreSegment24ConditionTypeEnum = 'EcommStore'
type EcommercePurchasedStoreSegment24FieldEnum = 'ecomm_store'
type EcommercePurchasedStoreSegment24OpEnum = 'is' | 'not'

