/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DailyClicksAndVisitsDataProperty1 } from './daily-clicks-and-visits-data-property1';
import { WeeklyClicksAndVisitsDataProperty1 } from './weekly-clicks-and-visits-data-property1';

/**
 * 
 * @export
 * @interface ReportingGetLandingPageReport200ResponseTimeseries
 */
export interface ReportingGetLandingPageReport200ResponseTimeseries {
    /**
     * 
     * @type {DailyClicksAndVisitsDataProperty1}
     * @memberof ReportingGetLandingPageReport200ResponseTimeseries
     */
    'daily_stats'?: DailyClicksAndVisitsDataProperty1;
    /**
     * 
     * @type {WeeklyClicksAndVisitsDataProperty1}
     * @memberof ReportingGetLandingPageReport200ResponseTimeseries
     */
    'weekly_stats'?: WeeklyClicksAndVisitsDataProperty1;
}

