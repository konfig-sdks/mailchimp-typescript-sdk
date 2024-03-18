/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BillingAddressProperty9 } from './billing-address-property9';
import { ECommerceCustomerProperty19 } from './ecommerce-customer-property19';
import { ECommerceOrderLineItem2 } from './ecommerce-order-line-item2';
import { OutreachProperty9 } from './outreach-property9';
import { PromosPropertyInner1 } from './promos-property-inner1';
import { ResourceLink } from './resource-link';
import { ShippingAddressProperty9 } from './shipping-address-property9';

/**
 * Information about a specific order.
 * @export
 * @interface EcommerceGetStoreOrderInfo200Response
 */
export interface EcommerceGetStoreOrderInfo200Response {
    /**
     * A unique identifier for the order.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'id'?: string;
    /**
     * 
     * @type {ECommerceCustomerProperty19}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'customer'?: ECommerceCustomerProperty19;
    /**
     * The unique identifier for the store.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'store_id'?: string;
    /**
     * A string that uniquely identifies the campaign associated with an order.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'campaign_id'?: string;
    /**
     * The URL for the page where the buyer landed when entering the shop.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'landing_site'?: string;
    /**
     * The order status. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'financial_status'?: string;
    /**
     * The fulfillment status for the order. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'fulfillment_status'?: string;
    /**
     * The three-letter ISO 4217 code for the currency that the store accepts.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'currency_code'?: string;
    /**
     * The order total associated with an order.
     * @type {number}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'order_total'?: number;
    /**
     * The URL for the order.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'order_url'?: string;
    /**
     * The total amount of the discounts to be applied to the price of the order.
     * @type {number}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'discount_total'?: number;
    /**
     * The tax total associated with an order.
     * @type {number}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'tax_total'?: number;
    /**
     * The shipping total for the order.
     * @type {number}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'shipping_total'?: number;
    /**
     * The Mailchimp tracking code for the order. Uses the \'mc_tc\' parameter in E-Commerce tracking URLs.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'tracking_code'?: EcommerceGetStoreOrderInfo200ResponseTrackingCodeEnum;
    /**
     * The date and time the order was processed in ISO 8601 format.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'processed_at_foreign'?: string;
    /**
     * The date and time the order was cancelled in ISO 8601 format.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'cancelled_at_foreign'?: string;
    /**
     * The date and time the order was updated in ISO 8601 format.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'updated_at_foreign'?: string;
    /**
     * 
     * @type {ShippingAddressProperty9}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'shipping_address'?: ShippingAddressProperty9;
    /**
     * 
     * @type {BillingAddressProperty9}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'billing_address'?: BillingAddressProperty9;
    /**
     * The promo codes applied on the order
     * @type {Array<PromosPropertyInner1>}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'promos'?: Array<PromosPropertyInner1>;
    /**
     * An array of the order\'s line items.
     * @type {Array<ECommerceOrderLineItem2>}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'lines'?: Array<ECommerceOrderLineItem2>;
    /**
     * 
     * @type {OutreachProperty9}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'outreach'?: OutreachProperty9;
    /**
     * The tracking number associated with the order.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'tracking_number'?: string;
    /**
     * The tracking carrier associated with the order.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'tracking_carrier'?: string;
    /**
     * The tracking URL associated with the order.
     * @type {string}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    'tracking_url'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof EcommerceGetStoreOrderInfo200Response
     */
    '_links'?: Array<ResourceLink>;
}

type EcommerceGetStoreOrderInfo200ResponseTrackingCodeEnum = 'prec'


