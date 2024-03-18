/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ClicksProperty1Inner3 } from './clicks-property1-inner3';
import { UniqueVisitsPropertyInner3 } from './unique-visits-property-inner3';
import { VisitsPropertyInner3 } from './visits-property-inner3';

/**
 * The clicks and visits data from the last five weeks.
 * @export
 * @interface WeeklyClicksAndVisitsDataProperty1
 */
export interface WeeklyClicksAndVisitsDataProperty1 {
    /**
     * The total number of clicks in a week.
     * @type {Array<ClicksProperty1Inner3>}
     * @memberof WeeklyClicksAndVisitsDataProperty1
     */
    'clicks'?: Array<ClicksProperty1Inner3>;
    /**
     * The total number of visits in a week.
     * @type {Array<VisitsPropertyInner3>}
     * @memberof WeeklyClicksAndVisitsDataProperty1
     */
    'visits'?: Array<VisitsPropertyInner3>;
    /**
     * 
     * @type {Array<UniqueVisitsPropertyInner3>}
     * @memberof WeeklyClicksAndVisitsDataProperty1
     */
    'unique_visits'?: Array<UniqueVisitsPropertyInner3>;
}
