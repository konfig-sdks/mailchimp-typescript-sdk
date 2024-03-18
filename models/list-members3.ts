/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LocationProperty2 } from './location-property2';
import { MarketingPermission1 } from './marketing-permission1';
import { NotesProperty } from './notes-property';
import { ResourceLink } from './resource-link';
import { SubscriberStatsProperty2 } from './subscriber-stats-property2';
import { TagsPropertyInner } from './tags-property-inner';

/**
 * Individuals who are currently or have been previously subscribed to this list, including members who have bounced or unsubscribed.
 * @export
 * @interface ListMembers3
 */
export interface ListMembers3 {
    /**
     * Returns up to 50 tags applied to this member. To retrieve all tags see [Member Tags](https://mailchimp.com/developer/marketing/api/list-member-tags/).
     * @type {Array<TagsPropertyInner>}
     * @memberof ListMembers3
     */
    'tags'?: Array<TagsPropertyInner>;
    /**
     * The MD5 hash of the lowercase version of the list member\'s email address.
     * @type {string}
     * @memberof ListMembers3
     */
    'id'?: string;
    /**
     * Email address for a subscriber.
     * @type {string}
     * @memberof ListMembers3
     */
    'email_address'?: string;
    /**
     * An identifier for the address across all of Mailchimp.
     * @type {string}
     * @memberof ListMembers3
     */
    'unique_email_id'?: string;
    /**
     * As Mailchimp evolves beyond email, you may eventually have contacts without email addresses. While the `id` is the MD5 hash of their email address, this `contact_id` is agnostic of contact’s inclusion of an email address.
     * @type {string}
     * @memberof ListMembers3
     */
    'contact_id'?: string;
    /**
     * The contact\'s full name.
     * @type {string}
     * @memberof ListMembers3
     */
    'full_name'?: string;
    /**
     * The ID used in the Mailchimp web application. View this member in your Mailchimp account at `https://{dc}.admin.mailchimp.com/lists/members/view?id={web_id}`.
     * @type {number}
     * @memberof ListMembers3
     */
    'web_id'?: number;
    /**
     * Type of email this member asked to get (\'html\' or \'text\').
     * @type {string}
     * @memberof ListMembers3
     */
    'email_type'?: string;
    /**
     * Subscriber\'s current status.
     * @type {string}
     * @memberof ListMembers3
     */
    'status'?: ListMembers3StatusEnum;
    /**
     * A subscriber\'s reason for unsubscribing.
     * @type {string}
     * @memberof ListMembers3
     */
    'unsubscribe_reason'?: string;
    /**
     * Indicates whether a contact consents to 1:1 messaging.
     * @type {boolean}
     * @memberof ListMembers3
     */
    'consents_to_one_to_one_messaging'?: boolean;
    /**
     * A US phone number for SMS contact.
     * @type {string}
     * @memberof ListMembers3
     */
    'sms_phone_number'?: string;
    /**
     * The status of an SMS subscription.
     * @type {string}
     * @memberof ListMembers3
     */
    'sms_subscription_status'?: ListMembers3SmsSubscriptionStatusEnum;
    /**
     * The datetime when the SMS subscription was last updated
     * @type {string}
     * @memberof ListMembers3
     */
    'sms_subscription_last_updated'?: string;
    /**
     * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
     * @type {{ [key: string]: any; }}
     * @memberof ListMembers3
     */
    'merge_fields'?: { [key: string]: any; };
    /**
     * The key of this object\'s properties is the ID of the interest in question.
     * @type {{ [key: string]: boolean; }}
     * @memberof ListMembers3
     */
    'interests'?: { [key: string]: boolean; };
    /**
     * 
     * @type {SubscriberStatsProperty2}
     * @memberof ListMembers3
     */
    'stats'?: SubscriberStatsProperty2;
    /**
     * IP address the subscriber signed up from.
     * @type {string}
     * @memberof ListMembers3
     */
    'ip_signup'?: string;
    /**
     * The date and time the subscriber signed up for the list in ISO 8601 format.
     * @type {string}
     * @memberof ListMembers3
     */
    'timestamp_signup'?: string;
    /**
     * The IP address the subscriber used to confirm their opt-in status.
     * @type {string}
     * @memberof ListMembers3
     */
    'ip_opt'?: string;
    /**
     * The date and time the subscriber confirmed their opt-in status in ISO 8601 format.
     * @type {string}
     * @memberof ListMembers3
     */
    'timestamp_opt'?: string;
    /**
     * Star rating for this member, between 1 and 5.
     * @type {number}
     * @memberof ListMembers3
     */
    'member_rating'?: number;
    /**
     * The date and time the member\'s info was last changed in ISO 8601 format.
     * @type {string}
     * @memberof ListMembers3
     */
    'last_changed'?: string;
    /**
     * If set/detected, the [subscriber\'s language](https://mailchimp.com/help/view-and-edit-contact-languages/).
     * @type {string}
     * @memberof ListMembers3
     */
    'language'?: string;
    /**
     * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
     * @type {boolean}
     * @memberof ListMembers3
     */
    'vip'?: boolean;
    /**
     * The list member\'s email client.
     * @type {string}
     * @memberof ListMembers3
     */
    'email_client'?: string;
    /**
     * 
     * @type {LocationProperty2}
     * @memberof ListMembers3
     */
    'location'?: LocationProperty2;
    /**
     * The marketing permissions for the subscriber.
     * @type {Array<MarketingPermission1>}
     * @memberof ListMembers3
     */
    'marketing_permissions'?: Array<MarketingPermission1>;
    /**
     * 
     * @type {NotesProperty}
     * @memberof ListMembers3
     */
    'last_note'?: NotesProperty;
    /**
     * The source from which the subscriber was added to this list.
     * @type {string}
     * @memberof ListMembers3
     */
    'source'?: string;
    /**
     * The number of tags applied to this member.
     * @type {number}
     * @memberof ListMembers3
     */
    'tags_count'?: number;
    /**
     * The list id.
     * @type {string}
     * @memberof ListMembers3
     */
    'list_id'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ListMembers3
     */
    '_links'?: Array<ResourceLink>;
}

type ListMembers3StatusEnum = 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional' | 'archived'
type ListMembers3SmsSubscriptionStatusEnum = 'subscribed' | 'unsubscribed' | 'nonsubscribed' | 'pending'


