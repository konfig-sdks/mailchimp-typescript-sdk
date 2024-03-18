/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LocationProperty1 } from './location-property1';
import { NotesProperty } from './notes-property';
import { ResourceLink } from './resource-link';
import { SubscriberStatsProperty } from './subscriber-stats-property';

/**
 * Individuals who are currently or have been previously subscribed to this list, including members who have bounced or unsubscribed.
 * @export
 * @interface ListsAddMemberToSegmentResponse
 */
export interface ListsAddMemberToSegmentResponse {
    /**
     * The MD5 hash of the lowercase version of the list member\'s email address.
     * @type {string}
     * @memberof ListsAddMemberToSegmentResponse
     */
    'id'?: string;
    /**
     * Email address for a subscriber.
     * @type {string}
     * @memberof ListsAddMemberToSegmentResponse
     */
    'email_address'?: string;
    /**
     * An identifier for the address across all of Mailchimp.
     * @type {string}
     * @memberof ListsAddMemberToSegmentResponse
     */
    'unique_email_id'?: string;
    /**
     * Type of email this member asked to get (\'html\' or \'text\').
     * @type {string}
     * @memberof ListsAddMemberToSegmentResponse
     */
    'email_type'?: string;
    /**
     * Subscriber\'s current status.
     * @type {string}
     * @memberof ListsAddMemberToSegmentResponse
     */
    'status'?: ListsAddMemberToSegmentResponseStatusEnum;
    /**
     * A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.
     * @type {{ [key: string]: any; }}
     * @memberof ListsAddMemberToSegmentResponse
     */
    'merge_fields'?: { [key: string]: any; };
    /**
     * The key of this object\'s properties is the ID of the interest in question.
     * @type {{ [key: string]: boolean; }}
     * @memberof ListsAddMemberToSegmentResponse
     */
    'interests'?: { [key: string]: boolean; };
    /**
     * 
     * @type {SubscriberStatsProperty}
     * @memberof ListsAddMemberToSegmentResponse
     */
    'stats'?: SubscriberStatsProperty;
    /**
     * IP address the subscriber signed up from.
     * @type {string}
     * @memberof ListsAddMemberToSegmentResponse
     */
    'ip_signup'?: string;
    /**
     * The date and time the subscriber signed up for the list in ISO 8601 format.
     * @type {string}
     * @memberof ListsAddMemberToSegmentResponse
     */
    'timestamp_signup'?: string;
    /**
     * The IP address the subscriber used to confirm their opt-in status.
     * @type {string}
     * @memberof ListsAddMemberToSegmentResponse
     */
    'ip_opt'?: string;
    /**
     * The date and time the subscriber confirmed their opt-in status in ISO 8601 format.
     * @type {string}
     * @memberof ListsAddMemberToSegmentResponse
     */
    'timestamp_opt'?: string;
    /**
     * Star rating for this member, between 1 and 5.
     * @type {number}
     * @memberof ListsAddMemberToSegmentResponse
     */
    'member_rating'?: number;
    /**
     * The date and time the member\'s info was last changed in ISO 8601 format.
     * @type {string}
     * @memberof ListsAddMemberToSegmentResponse
     */
    'last_changed'?: string;
    /**
     * If set/detected, the [subscriber\'s language](https://mailchimp.com/help/view-and-edit-contact-languages/).
     * @type {string}
     * @memberof ListsAddMemberToSegmentResponse
     */
    'language'?: string;
    /**
     * [VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.
     * @type {boolean}
     * @memberof ListsAddMemberToSegmentResponse
     */
    'vip'?: boolean;
    /**
     * The list member\'s email client.
     * @type {string}
     * @memberof ListsAddMemberToSegmentResponse
     */
    'email_client'?: string;
    /**
     * 
     * @type {LocationProperty1}
     * @memberof ListsAddMemberToSegmentResponse
     */
    'location'?: LocationProperty1;
    /**
     * 
     * @type {NotesProperty}
     * @memberof ListsAddMemberToSegmentResponse
     */
    'last_note'?: NotesProperty;
    /**
     * The list id.
     * @type {string}
     * @memberof ListsAddMemberToSegmentResponse
     */
    'list_id'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ListsAddMemberToSegmentResponse
     */
    '_links'?: Array<ResourceLink>;
}

type ListsAddMemberToSegmentResponseStatusEnum = 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional'

