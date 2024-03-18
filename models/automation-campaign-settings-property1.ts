/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The settings for the Automation workflow.
 * @export
 * @interface AutomationCampaignSettingsProperty1
 */
export interface AutomationCampaignSettingsProperty1 {
    /**
     * The title of the Automation.
     * @type {string}
     * @memberof AutomationCampaignSettingsProperty1
     */
    'title'?: string;
    /**
     * The \'from\' name for the Automation (not an email address).
     * @type {string}
     * @memberof AutomationCampaignSettingsProperty1
     */
    'from_name'?: string;
    /**
     * The reply-to email address for the Automation.
     * @type {string}
     * @memberof AutomationCampaignSettingsProperty1
     */
    'reply_to'?: string;
    /**
     * Whether to use Mailchimp Conversation feature to manage replies
     * @type {boolean}
     * @memberof AutomationCampaignSettingsProperty1
     */
    'use_conversation'?: boolean;
    /**
     * The Automation\'s custom \'To\' name, typically the first name [audience field](https://mailchimp.com/help/getting-started-with-merge-tags/).
     * @type {string}
     * @memberof AutomationCampaignSettingsProperty1
     */
    'to_name'?: string;
    /**
     * Whether Mailchimp [authenticated](https://mailchimp.com/help/about-email-authentication/) the Automation. Defaults to `true`.
     * @type {boolean}
     * @memberof AutomationCampaignSettingsProperty1
     */
    'authenticate'?: boolean;
    /**
     * Whether to automatically append Mailchimp\'s [default footer](https://mailchimp.com/help/about-campaign-footers/) to the Automation.
     * @type {boolean}
     * @memberof AutomationCampaignSettingsProperty1
     */
    'auto_footer'?: boolean;
    /**
     * Whether to automatically inline the CSS included with the Automation content.
     * @type {boolean}
     * @memberof AutomationCampaignSettingsProperty1
     */
    'inline_css'?: boolean;
}
