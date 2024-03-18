/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AddressProperty33 } from './address-property33';
import { ResourceLink } from './resource-link';

/**
 * Information about a specific customer.
 * @export
 * @interface EcommerceUpdateCustomerResponse
 */
export interface EcommerceUpdateCustomerResponse {
    /**
     * A unique identifier for the customer.
     * @type {string}
     * @memberof EcommerceUpdateCustomerResponse
     */
    'id'?: string;
    /**
     * The customer\'s email address.
     * @type {string}
     * @memberof EcommerceUpdateCustomerResponse
     */
    'email_address'?: string;
    /**
     * The customer\'s opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don\'t opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).
     * @type {boolean}
     * @memberof EcommerceUpdateCustomerResponse
     */
    'opt_in_status'?: boolean;
    /**
     * The customer\'s company.
     * @type {string}
     * @memberof EcommerceUpdateCustomerResponse
     */
    'company'?: string;
    /**
     * The customer\'s first name.
     * @type {string}
     * @memberof EcommerceUpdateCustomerResponse
     */
    'first_name'?: string;
    /**
     * The customer\'s last name.
     * @type {string}
     * @memberof EcommerceUpdateCustomerResponse
     */
    'last_name'?: string;
    /**
     * The customer\'s total order count.
     * @type {number}
     * @memberof EcommerceUpdateCustomerResponse
     */
    'orders_count'?: number;
    /**
     * The total amount the customer has spent.
     * @type {number}
     * @memberof EcommerceUpdateCustomerResponse
     */
    'total_spent'?: number;
    /**
     * 
     * @type {AddressProperty33}
     * @memberof EcommerceUpdateCustomerResponse
     */
    'address'?: AddressProperty33;
    /**
     * The date and time the customer was created in ISO 8601 format.
     * @type {string}
     * @memberof EcommerceUpdateCustomerResponse
     */
    'created_at'?: string;
    /**
     * The date and time the customer was last updated in ISO 8601 format.
     * @type {string}
     * @memberof EcommerceUpdateCustomerResponse
     */
    'updated_at'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof EcommerceUpdateCustomerResponse
     */
    '_links'?: Array<ResourceLink>;
}

