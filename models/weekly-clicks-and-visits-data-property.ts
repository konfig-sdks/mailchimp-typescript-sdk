/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ClicksProperty1Inner1 } from './clicks-property1-inner1';
import { UniqueVisitsPropertyInner1 } from './unique-visits-property-inner1';
import { VisitsPropertyInner1 } from './visits-property-inner1';

/**
 * The clicks and visits data from the last five weeks.
 * @export
 * @interface WeeklyClicksAndVisitsDataProperty
 */
export interface WeeklyClicksAndVisitsDataProperty {
    /**
     * The total number of clicks in a week.
     * @type {Array<ClicksProperty1Inner1>}
     * @memberof WeeklyClicksAndVisitsDataProperty
     */
    'clicks'?: Array<ClicksProperty1Inner1>;
    /**
     * The total number of visits in a week.
     * @type {Array<VisitsPropertyInner1>}
     * @memberof WeeklyClicksAndVisitsDataProperty
     */
    'visits'?: Array<VisitsPropertyInner1>;
    /**
     * 
     * @type {Array<UniqueVisitsPropertyInner1>}
     * @memberof WeeklyClicksAndVisitsDataProperty
     */
    'unique_visits'?: Array<UniqueVisitsPropertyInner1>;
}

