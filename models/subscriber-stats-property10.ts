/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EcommerceStatsProperty9 } from './ecommerce-stats-property9';

/**
 * Open and click rates for this subscriber.
 * @export
 * @interface SubscriberStatsProperty10
 */
export interface SubscriberStatsProperty10 {
    /**
     * A subscriber\'s average open rate.
     * @type {number}
     * @memberof SubscriberStatsProperty10
     */
    'avg_open_rate'?: number;
    /**
     * A subscriber\'s average clickthrough rate.
     * @type {number}
     * @memberof SubscriberStatsProperty10
     */
    'avg_click_rate'?: number;
    /**
     * 
     * @type {EcommerceStatsProperty9}
     * @memberof SubscriberStatsProperty10
     */
    'ecommerce_data'?: EcommerceStatsProperty9;
}

