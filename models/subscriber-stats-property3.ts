/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EcommerceStatsProperty2 } from './ecommerce-stats-property2';

/**
 * Open and click rates for this subscriber.
 * @export
 * @interface SubscriberStatsProperty3
 */
export interface SubscriberStatsProperty3 {
    /**
     * A subscriber\'s average open rate.
     * @type {number}
     * @memberof SubscriberStatsProperty3
     */
    'avg_open_rate'?: number;
    /**
     * A subscriber\'s average clickthrough rate.
     * @type {number}
     * @memberof SubscriberStatsProperty3
     */
    'avg_click_rate'?: number;
    /**
     * 
     * @type {EcommerceStatsProperty2}
     * @memberof SubscriberStatsProperty3
     */
    'ecommerce_data'?: EcommerceStatsProperty2;
}

