/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CapsuleCRMTrackingProperty1 } from './capsule-crmtracking-property1';
import { SalesforceCRMTrackingProperty1 } from './salesforce-crmtracking-property1';

/**
 * The tracking options for the Automation.
 * @export
 * @interface AutomationTrackingOptionsProperty
 */
export interface AutomationTrackingOptionsProperty {
    /**
     * Whether to [track opens](https://mailchimp.com/help/about-open-tracking/). Defaults to `true`.
     * @type {boolean}
     * @memberof AutomationTrackingOptionsProperty
     */
    'opens'?: boolean;
    /**
     * Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the HTML version of the Automation. Defaults to `true`.
     * @type {boolean}
     * @memberof AutomationTrackingOptionsProperty
     */
    'html_clicks'?: boolean;
    /**
     * Whether to [track clicks](https://mailchimp.com/help/enable-and-view-click-tracking/) in the plain-text version of the Automation. Defaults to `true`.
     * @type {boolean}
     * @memberof AutomationTrackingOptionsProperty
     */
    'text_clicks'?: boolean;
    /**
     * Deprecated
     * @type {boolean}
     * @memberof AutomationTrackingOptionsProperty
     */
    'goal_tracking'?: boolean;
    /**
     * Whether to enable e-commerce tracking.
     * @type {boolean}
     * @memberof AutomationTrackingOptionsProperty
     */
    'ecomm360'?: boolean;
    /**
     * The custom slug for [Google Analytics](https://mailchimp.com/help/integrate-google-analytics-with-mailchimp/) tracking (max of 50 bytes).
     * @type {string}
     * @memberof AutomationTrackingOptionsProperty
     */
    'google_analytics'?: string;
    /**
     * The custom slug for [ClickTale](https://mailchimp.com/help/additional-tracking-options-for-campaigns/) tracking (max of 50 bytes).
     * @type {string}
     * @memberof AutomationTrackingOptionsProperty
     */
    'clicktale'?: string;
    /**
     * 
     * @type {SalesforceCRMTrackingProperty1}
     * @memberof AutomationTrackingOptionsProperty
     */
    'salesforce'?: SalesforceCRMTrackingProperty1;
    /**
     * 
     * @type {CapsuleCRMTrackingProperty1}
     * @memberof AutomationTrackingOptionsProperty
     */
    'capsule'?: CapsuleCRMTrackingProperty1;
}

