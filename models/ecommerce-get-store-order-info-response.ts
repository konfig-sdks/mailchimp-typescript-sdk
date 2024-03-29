/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BillingAddressProperty8 } from './billing-address-property8';
import { ECommerceCustomerProperty18 } from './ecommerce-customer-property18';
import { ECommerceOrderLineItem2 } from './ecommerce-order-line-item2';
import { OutreachProperty8 } from './outreach-property8';
import { PromosPropertyInner1 } from './promos-property-inner1';
import { ResourceLink } from './resource-link';
import { ShippingAddressProperty8 } from './shipping-address-property8';

/**
 * Information about a specific order.
 * @export
 * @interface EcommerceGetStoreOrderInfoResponse
 */
export interface EcommerceGetStoreOrderInfoResponse {
    /**
     * A unique identifier for the order.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'id'?: string;
    /**
     * 
     * @type {ECommerceCustomerProperty18}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'customer'?: ECommerceCustomerProperty18;
    /**
     * The unique identifier for the store.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'store_id'?: string;
    /**
     * A string that uniquely identifies the campaign associated with an order.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'campaign_id'?: string;
    /**
     * The URL for the page where the buyer landed when entering the shop.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'landing_site'?: string;
    /**
     * The order status. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'financial_status'?: string;
    /**
     * The fulfillment status for the order. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'fulfillment_status'?: string;
    /**
     * The three-letter ISO 4217 code for the currency that the store accepts.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'currency_code'?: string;
    /**
     * The order total associated with an order.
     * @type {number}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'order_total'?: number;
    /**
     * The URL for the order.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'order_url'?: string;
    /**
     * The total amount of the discounts to be applied to the price of the order.
     * @type {number}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'discount_total'?: number;
    /**
     * The tax total associated with an order.
     * @type {number}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'tax_total'?: number;
    /**
     * The shipping total for the order.
     * @type {number}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'shipping_total'?: number;
    /**
     * The Mailchimp tracking code for the order. Uses the \'mc_tc\' parameter in E-Commerce tracking URLs.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'tracking_code'?: EcommerceGetStoreOrderInfoResponseTrackingCodeEnum;
    /**
     * The date and time the order was processed in ISO 8601 format.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'processed_at_foreign'?: string;
    /**
     * The date and time the order was cancelled in ISO 8601 format.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'cancelled_at_foreign'?: string;
    /**
     * The date and time the order was updated in ISO 8601 format.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'updated_at_foreign'?: string;
    /**
     * 
     * @type {ShippingAddressProperty8}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'shipping_address'?: ShippingAddressProperty8;
    /**
     * 
     * @type {BillingAddressProperty8}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'billing_address'?: BillingAddressProperty8;
    /**
     * The promo codes applied on the order
     * @type {Array<PromosPropertyInner1>}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'promos'?: Array<PromosPropertyInner1>;
    /**
     * An array of the order\'s line items.
     * @type {Array<ECommerceOrderLineItem2>}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'lines'?: Array<ECommerceOrderLineItem2>;
    /**
     * 
     * @type {OutreachProperty8}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'outreach'?: OutreachProperty8;
    /**
     * The tracking number associated with the order.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'tracking_number'?: string;
    /**
     * The tracking carrier associated with the order.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'tracking_carrier'?: string;
    /**
     * The tracking URL associated with the order.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    'tracking_url'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof EcommerceGetStoreOrderInfoResponse
     */
    '_links'?: Array<ResourceLink>;
}

type EcommerceGetStoreOrderInfoResponseTrackingCodeEnum = 'prec'


