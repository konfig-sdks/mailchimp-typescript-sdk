/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The settings specific to A/B test campaigns.
 * @export
 * @interface ABTestOptionsProperty
 */
export interface ABTestOptionsProperty {
    /**
     * The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue -- or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_criteria is ignored. For Multivariate Campaigns with \'manual\' as the winner_criteria, the winner must be chosen in the Mailchimp web application.
     * @type {string}
     * @memberof ABTestOptionsProperty
     */
    'winner_criteria': ABTestOptionsPropertyWinnerCriteriaEnum;
    /**
     * The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes.
     * @type {number}
     * @memberof ABTestOptionsProperty
     */
    'wait_time'?: number;
    /**
     * The percentage of recipients to send the test combinations to, must be a value between 10 and 100.
     * @type {number}
     * @memberof ABTestOptionsProperty
     */
    'test_size'?: number;
    /**
     * The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used.
     * @type {Array<string>}
     * @memberof ABTestOptionsProperty
     */
    'subject_lines'?: Array<string>;
    /**
     * The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored.
     * @type {Array<string>}
     * @memberof ABTestOptionsProperty
     */
    'send_times'?: Array<string>;
    /**
     * The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used.
     * @type {Array<string>}
     * @memberof ABTestOptionsProperty
     */
    'from_names'?: Array<string>;
    /**
     * The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used.
     * @type {Array<string>}
     * @memberof ABTestOptionsProperty
     */
    'reply_to_addresses'?: Array<string>;
}

type ABTestOptionsPropertyWinnerCriteriaEnum = 'opens' | 'clicks' | 'manual' | 'total_revenue'


