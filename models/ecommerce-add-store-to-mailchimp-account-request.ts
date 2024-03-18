/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AddressProperty } from './address-property';

/**
 * An individual store in an account.
 * @export
 * @interface EcommerceAddStoreToMailchimpAccountRequest
 */
export interface EcommerceAddStoreToMailchimpAccountRequest {
    /**
     * The unique identifier for the store.
     * @type {string}
     * @memberof EcommerceAddStoreToMailchimpAccountRequest
     */
    'id': string;
    /**
     * The unique identifier for the list associated with the store. The `list_id` for a specific store cannot change.
     * @type {string}
     * @memberof EcommerceAddStoreToMailchimpAccountRequest
     */
    'list_id': string;
    /**
     * The name of the store.
     * @type {string}
     * @memberof EcommerceAddStoreToMailchimpAccountRequest
     */
    'name': string;
    /**
     * The e-commerce platform of the store.
     * @type {string}
     * @memberof EcommerceAddStoreToMailchimpAccountRequest
     */
    'platform'?: string;
    /**
     * The store domain. This parameter is required for Connected Sites and Google Ads.
     * @type {string}
     * @memberof EcommerceAddStoreToMailchimpAccountRequest
     */
    'domain'?: string;
    /**
     * Whether to disable automations because the store is currently [syncing](https://mailchimp.com/developer/marketing/docs/e-commerce/#pausing-store-automations).
     * @type {boolean}
     * @memberof EcommerceAddStoreToMailchimpAccountRequest
     */
    'is_syncing'?: boolean;
    /**
     * The email address for the store.
     * @type {string}
     * @memberof EcommerceAddStoreToMailchimpAccountRequest
     */
    'email_address'?: string;
    /**
     * The three-letter ISO 4217 code for the currency that the store accepts.
     * @type {string}
     * @memberof EcommerceAddStoreToMailchimpAccountRequest
     */
    'currency_code': string;
    /**
     * The currency format for the store. For example: `$`, `£`, etc.
     * @type {string}
     * @memberof EcommerceAddStoreToMailchimpAccountRequest
     */
    'money_format'?: string;
    /**
     * The primary locale for the store. For example: `en`, `de`, etc.
     * @type {string}
     * @memberof EcommerceAddStoreToMailchimpAccountRequest
     */
    'primary_locale'?: string;
    /**
     * The timezone for the store.
     * @type {string}
     * @memberof EcommerceAddStoreToMailchimpAccountRequest
     */
    'timezone'?: string;
    /**
     * The store phone number.
     * @type {string}
     * @memberof EcommerceAddStoreToMailchimpAccountRequest
     */
    'phone'?: string;
    /**
     * 
     * @type {AddressProperty}
     * @memberof EcommerceAddStoreToMailchimpAccountRequest
     */
    'address'?: AddressProperty;
}
