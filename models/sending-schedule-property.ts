/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DailySendingDaysProperty } from './daily-sending-days-property';

/**
 * The schedule for sending the RSS Campaign.
 * @export
 * @interface SendingScheduleProperty
 */
export interface SendingScheduleProperty {
    /**
     * The hour to send the campaign in local time. Acceptable hours are 0-23. For example, \'4\' would be 4am in [your account\'s default time zone](https://mailchimp.com/help/set-account-defaults/).
     * @type {number}
     * @memberof SendingScheduleProperty
     */
    'hour'?: number;
    /**
     * 
     * @type {DailySendingDaysProperty}
     * @memberof SendingScheduleProperty
     */
    'daily_send'?: DailySendingDaysProperty;
    /**
     * The day of the week to send a weekly RSS Campaign.
     * @type {string}
     * @memberof SendingScheduleProperty
     */
    'weekly_send_day'?: SendingSchedulePropertyWeeklySendDayEnum;
    /**
     * The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where \'0\' is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February.
     * @type {number}
     * @memberof SendingScheduleProperty
     */
    'monthly_send_date'?: number;
}

type SendingSchedulePropertyWeeklySendDayEnum = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday'

