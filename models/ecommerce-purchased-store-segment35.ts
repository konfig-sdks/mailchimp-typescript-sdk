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
 * @interface EcommercePurchasedStoreSegment35
 */
export interface EcommercePurchasedStoreSegment35 {
    /**
     * 
     * @type {string}
     * @memberof EcommercePurchasedStoreSegment35
     */
    'condition_type'?: EcommercePurchasedStoreSegment35ConditionTypeEnum;
    /**
     * Segment by purchases from a specific store.
     * @type {string}
     * @memberof EcommercePurchasedStoreSegment35
     */
    'field'?: EcommercePurchasedStoreSegment35FieldEnum;
    /**
     * Members who have or have not purchased from a specific store.
     * @type {string}
     * @memberof EcommercePurchasedStoreSegment35
     */
    'op'?: EcommercePurchasedStoreSegment35OpEnum;
    /**
     * The store id to segment against.
     * @type {string}
     * @memberof EcommercePurchasedStoreSegment35
     */
    'value'?: string;
}

type EcommercePurchasedStoreSegment35ConditionTypeEnum = 'EcommStore'
type EcommercePurchasedStoreSegment35FieldEnum = 'ecomm_store'
type EcommercePurchasedStoreSegment35OpEnum = 'is' | 'not'


