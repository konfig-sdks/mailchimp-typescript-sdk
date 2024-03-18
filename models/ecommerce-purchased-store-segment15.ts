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
 * @interface EcommercePurchasedStoreSegment15
 */
export interface EcommercePurchasedStoreSegment15 {
    /**
     * 
     * @type {string}
     * @memberof EcommercePurchasedStoreSegment15
     */
    'condition_type'?: EcommercePurchasedStoreSegment15ConditionTypeEnum;
    /**
     * Segment by purchases from a specific store.
     * @type {string}
     * @memberof EcommercePurchasedStoreSegment15
     */
    'field'?: EcommercePurchasedStoreSegment15FieldEnum;
    /**
     * Members who have or have not purchased from a specific store.
     * @type {string}
     * @memberof EcommercePurchasedStoreSegment15
     */
    'op'?: EcommercePurchasedStoreSegment15OpEnum;
    /**
     * The store id to segment against.
     * @type {string}
     * @memberof EcommercePurchasedStoreSegment15
     */
    'value'?: string;
}

type EcommercePurchasedStoreSegment15ConditionTypeEnum = 'EcommStore'
type EcommercePurchasedStoreSegment15FieldEnum = 'ecomm_store'
type EcommercePurchasedStoreSegment15OpEnum = 'is' | 'not'


