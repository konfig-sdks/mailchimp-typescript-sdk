/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Settings for the campaign including the email subject, from name, and from email address.
 * @export
 * @interface CampaignSettingsProperty3
 */
export interface CampaignSettingsProperty3 {
    /**
     * The title of the campaign.
     * @type {string}
     * @memberof CampaignSettingsProperty3
     */
    'title'?: string;
    /**
     * The subject line for the campaign.
     * @type {string}
     * @memberof CampaignSettingsProperty3
     */
    'subject_line'?: string;
    /**
     * The preview text for the campaign.
     * @type {string}
     * @memberof CampaignSettingsProperty3
     */
    'preview_text'?: string;
    /**
     * The \'from\' name on the campaign (not an email address).
     * @type {string}
     * @memberof CampaignSettingsProperty3
     */
    'from_name'?: string;
    /**
     * The reply-to email address for the campaign.
     * @type {string}
     * @memberof CampaignSettingsProperty3
     */
    'reply_to'?: string;
    /**
     * Whether Mailchimp [authenticated](https://mailchimp.com/help/about-email-authentication/) the campaign. Defaults to `true`.
     * @type {boolean}
     * @memberof CampaignSettingsProperty3
     */
    'authenticate'?: boolean;
    /**
     * Automatically append Mailchimp\'s [default footer](https://mailchimp.com/help/about-campaign-footers/) to the campaign.
     * @type {boolean}
     * @memberof CampaignSettingsProperty3
     */
    'auto_footer'?: boolean;
    /**
     * Automatically inline the CSS included with the campaign content.
     * @type {boolean}
     * @memberof CampaignSettingsProperty3
     */
    'inline_css'?: boolean;
    /**
     * Automatically tweet a link to the [campaign archive](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) page when the campaign is sent.
     * @type {boolean}
     * @memberof CampaignSettingsProperty3
     */
    'auto_tweet'?: boolean;
    /**
     * An array of [Facebook](https://mailchimp.com/help/connect-or-disconnect-the-facebook-integration/) page ids to auto-post to.
     * @type {Array<string>}
     * @memberof CampaignSettingsProperty3
     */
    'auto_fb_post'?: Array<string>;
    /**
     * Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`.
     * @type {boolean}
     * @memberof CampaignSettingsProperty3
     */
    'fb_comments'?: boolean;
    /**
     * The id for the template used in this campaign.
     * @type {number}
     * @memberof CampaignSettingsProperty3
     */
    'template_id'?: number;
    /**
     * Whether the campaign uses the drag-and-drop editor.
     * @type {boolean}
     * @memberof CampaignSettingsProperty3
     */
    'drag_and_drop'?: boolean;
}

