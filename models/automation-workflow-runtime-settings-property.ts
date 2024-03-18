/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { HoursProperty } from './hours-property';

/**
 * A workflow\'s runtime settings for an Automation.
 * @export
 * @interface AutomationWorkflowRuntimeSettingsProperty
 */
export interface AutomationWorkflowRuntimeSettingsProperty {
    /**
     * The days an Automation workflow can send.
     * @type {Array<string>}
     * @memberof AutomationWorkflowRuntimeSettingsProperty
     */
    'days'?: Array<AutomationWorkflowRuntimeSettingsPropertyDaysEnum>;
    /**
     * 
     * @type {HoursProperty}
     * @memberof AutomationWorkflowRuntimeSettingsProperty
     */
    'hours'?: HoursProperty;
}

type AutomationWorkflowRuntimeSettingsPropertyDaysEnum = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday'


