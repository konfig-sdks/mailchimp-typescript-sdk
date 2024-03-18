/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AddressProperty1 } from './address-property1';

/**
 * An individual store in an account.
 * @export
 * @interface EcommerceUpdateStoreRequest
 */
export interface EcommerceUpdateStoreRequest {
    /**
     * The name of the store.
     * @type {string}
     * @memberof EcommerceUpdateStoreRequest
     */
    'name'?: string;
    /**
     * The e-commerce platform of the store.
     * @type {string}
     * @memberof EcommerceUpdateStoreRequest
     */
    'platform'?: string;
    /**
     * The store domain.
     * @type {string}
     * @memberof EcommerceUpdateStoreRequest
     */
    'domain'?: string;
    /**
     * Whether to disable automations because the store is currently [syncing](https://mailchimp.com/developer/marketing/docs/e-commerce/#pausing-store-automations).
     * @type {boolean}
     * @memberof EcommerceUpdateStoreRequest
     */
    'is_syncing'?: boolean;
    /**
     * The email address for the store.
     * @type {string}
     * @memberof EcommerceUpdateStoreRequest
     */
    'email_address'?: string;
    /**
     * The three-letter ISO 4217 code for the currency that the store accepts.
     * @type {string}
     * @memberof EcommerceUpdateStoreRequest
     */
    'currency_code'?: string;
    /**
     * The currency format for the store. For example: `$`, `£`, etc.
     * @type {string}
     * @memberof EcommerceUpdateStoreRequest
     */
    'money_format'?: string;
    /**
     * The primary locale for the store. For example: `en`, `de`, etc.
     * @type {string}
     * @memberof EcommerceUpdateStoreRequest
     */
    'primary_locale'?: string;
    /**
     * The timezone for the store.
     * @type {string}
     * @memberof EcommerceUpdateStoreRequest
     */
    'timezone'?: string;
    /**
     * The store phone number.
     * @type {string}
     * @memberof EcommerceUpdateStoreRequest
     */
    'phone'?: string;
    /**
     * 
     * @type {AddressProperty1}
     * @memberof EcommerceUpdateStoreRequest
     */
    'address'?: AddressProperty1;
}

