/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The tracking settings applied to this landing page.
 * @export
 * @interface TrackingSettingsProperty
 */
export interface TrackingSettingsProperty {
    /**
     * Use cookies to track unique visitors and calculate overall conversion rate. Learn more [here](https://mailchimp.com/help/use-track-mailchimp/).
     * @type {boolean}
     * @memberof TrackingSettingsProperty
     */
    'track_with_mailchimp'?: boolean;
    /**
     * Google offers restricted data processing in connection with the California Consumer Privacy Act (CCPA) to restrict how Google uses certain identifiers and other data processed in the provision of its services. You can learn more about Google\'s restricted data processing within Google Ads [here](https://privacy.google.com/businesses/rdp/).
     * @type {boolean}
     * @memberof TrackingSettingsProperty
     */
    'enable_restricted_data_processing'?: boolean;
}

