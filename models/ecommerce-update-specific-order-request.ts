/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BillingAddressProperty1 } from './billing-address-property1';
import { ECommerceCustomerProperty3 } from './ecommerce-customer-property3';
import { ECommerceOrderLineItem1 } from './ecommerce-order-line-item1';
import { OutreachProperty1 } from './outreach-property1';
import { PromosPropertyInner } from './promos-property-inner';
import { ShippingAddressProperty1 } from './shipping-address-property1';

/**
 * Information about a specific order.
 * @export
 * @interface EcommerceUpdateSpecificOrderRequest
 */
export interface EcommerceUpdateSpecificOrderRequest {
    /**
     * 
     * @type {ECommerceCustomerProperty3}
     * @memberof EcommerceUpdateSpecificOrderRequest
     */
    'customer'?: ECommerceCustomerProperty3;
    /**
     * A string that uniquely identifies the campaign associated with an order.
     * @type {string}
     * @memberof EcommerceUpdateSpecificOrderRequest
     */
    'campaign_id'?: string;
    /**
     * The URL for the page where the buyer landed when entering the shop.
     * @type {string}
     * @memberof EcommerceUpdateSpecificOrderRequest
     */
    'landing_site'?: string;
    /**
     * The order status. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
     * @type {string}
     * @memberof EcommerceUpdateSpecificOrderRequest
     */
    'financial_status'?: string;
    /**
     * The fulfillment status for the order. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).
     * @type {string}
     * @memberof EcommerceUpdateSpecificOrderRequest
     */
    'fulfillment_status'?: string;
    /**
     * The three-letter ISO 4217 code for the currency that the store accepts.
     * @type {string}
     * @memberof EcommerceUpdateSpecificOrderRequest
     */
    'currency_code'?: string;
    /**
     * The order total associated with an order.
     * @type {number}
     * @memberof EcommerceUpdateSpecificOrderRequest
     */
    'order_total'?: number;
    /**
     * The URL for the order.
     * @type {string}
     * @memberof EcommerceUpdateSpecificOrderRequest
     */
    'order_url'?: string;
    /**
     * The total amount of the discounts to be applied to the price of the order.
     * @type {number}
     * @memberof EcommerceUpdateSpecificOrderRequest
     */
    'discount_total'?: number;
    /**
     * The tax total associated with an order.
     * @type {number}
     * @memberof EcommerceUpdateSpecificOrderRequest
     */
    'tax_total'?: number;
    /**
     * The shipping total for the order.
     * @type {number}
     * @memberof EcommerceUpdateSpecificOrderRequest
     */
    'shipping_total'?: number;
    /**
     * The Mailchimp tracking code for the order. Uses the \'mc_tc\' parameter in E-Commerce tracking URLs.
     * @type {string}
     * @memberof EcommerceUpdateSpecificOrderRequest
     */
    'tracking_code'?: EcommerceUpdateSpecificOrderRequestTrackingCodeEnum;
    /**
     * The date and time the order was processed in ISO 8601 format.
     * @type {string}
     * @memberof EcommerceUpdateSpecificOrderRequest
     */
    'processed_at_foreign'?: string;
    /**
     * The date and time the order was cancelled in ISO 8601 format. Note: passing a value for this parameter will cancel the order being edited.
     * @type {string}
     * @memberof EcommerceUpdateSpecificOrderRequest
     */
    'cancelled_at_foreign'?: string;
    /**
     * The date and time the order was updated in ISO 8601 format.
     * @type {string}
     * @memberof EcommerceUpdateSpecificOrderRequest
     */
    'updated_at_foreign'?: string;
    /**
     * 
     * @type {ShippingAddressProperty1}
     * @memberof EcommerceUpdateSpecificOrderRequest
     */
    'shipping_address'?: ShippingAddressProperty1;
    /**
     * 
     * @type {BillingAddressProperty1}
     * @memberof EcommerceUpdateSpecificOrderRequest
     */
    'billing_address'?: BillingAddressProperty1;
    /**
     * The promo codes applied on the order. Note: Patch will completely replace the value of promos with the new one provided.
     * @type {Array<PromosPropertyInner>}
     * @memberof EcommerceUpdateSpecificOrderRequest
     */
    'promos'?: Array<PromosPropertyInner>;
    /**
     * An array of the order\'s line items.
     * @type {Array<ECommerceOrderLineItem1>}
     * @memberof EcommerceUpdateSpecificOrderRequest
     */
    'lines'?: Array<ECommerceOrderLineItem1>;
    /**
     * 
     * @type {OutreachProperty1}
     * @memberof EcommerceUpdateSpecificOrderRequest
     */
    'outreach'?: OutreachProperty1;
    /**
     * The tracking number associated with the order.
     * @type {string}
     * @memberof EcommerceUpdateSpecificOrderRequest
     */
    'tracking_number'?: string;
    /**
     * The tracking carrier associated with the order.
     * @type {string}
     * @memberof EcommerceUpdateSpecificOrderRequest
     */
    'tracking_carrier'?: string;
    /**
     * The tracking URL associated with the order.
     * @type {string}
     * @memberof EcommerceUpdateSpecificOrderRequest
     */
    'tracking_url'?: string;
}

type EcommerceUpdateSpecificOrderRequestTrackingCodeEnum = 'prec'


