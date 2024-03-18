/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AddressProperty7 } from './address-property7';

/**
 * Information about a specific customer. For existing customers include only the `id` parameter in the `customer` object body.
 * @export
 * @interface ECommerceCustomerProperty2
 */
export interface ECommerceCustomerProperty2 {
    /**
     * A unique identifier for the customer. Limited to 50 characters.
     * @type {string}
     * @memberof ECommerceCustomerProperty2
     */
    'id': string;
    /**
     * The customer\'s email address.
     * @type {string}
     * @memberof ECommerceCustomerProperty2
     */
    'email_address'?: string;
    /**
     * The customer\'s opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don\'t opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
     * @type {boolean}
     * @memberof ECommerceCustomerProperty2
     */
    'opt_in_status'?: boolean;
    /**
     * The customer\'s company.
     * @type {string}
     * @memberof ECommerceCustomerProperty2
     */
    'company'?: string;
    /**
     * The customer\'s first name.
     * @type {string}
     * @memberof ECommerceCustomerProperty2
     */
    'first_name'?: string;
    /**
     * The customer\'s last name.
     * @type {string}
     * @memberof ECommerceCustomerProperty2
     */
    'last_name'?: string;
    /**
     * 
     * @type {AddressProperty7}
     * @memberof ECommerceCustomerProperty2
     */
    'address'?: AddressProperty7;
}

