/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ResourceLink } from './resource-link';

/**
 * A specific note for a specific member.
 * @export
 * @interface ListsUpdateNoteSpecificListMemberResponse
 */
export interface ListsUpdateNoteSpecificListMemberResponse {
    /**
     * The note id.
     * @type {number}
     * @memberof ListsUpdateNoteSpecificListMemberResponse
     */
    'id'?: number;
    /**
     * The date and time the note was created in ISO 8601 format.
     * @type {string}
     * @memberof ListsUpdateNoteSpecificListMemberResponse
     */
    'created_at'?: string;
    /**
     * The author of the note.
     * @type {string}
     * @memberof ListsUpdateNoteSpecificListMemberResponse
     */
    'created_by'?: string;
    /**
     * The date and time the note was last updated in ISO 8601 format.
     * @type {string}
     * @memberof ListsUpdateNoteSpecificListMemberResponse
     */
    'updated_at'?: string;
    /**
     * The content of the note.
     * @type {string}
     * @memberof ListsUpdateNoteSpecificListMemberResponse
     */
    'note'?: string;
    /**
     * The unique id for the list.
     * @type {string}
     * @memberof ListsUpdateNoteSpecificListMemberResponse
     */
    'list_id'?: string;
    /**
     * The MD5 hash of the lowercase version of the list member\'s email address.
     * @type {string}
     * @memberof ListsUpdateNoteSpecificListMemberResponse
     */
    'email_id'?: string;
    /**
     * As Mailchimp evolves beyond email, you may eventually have contacts without email addresses. While the `email_id` is the MD5 hash of their email address, this `contact_id` is agnostic of contact’s inclusion of an email address.
     * @type {string}
     * @memberof ListsUpdateNoteSpecificListMemberResponse
     */
    'contact_id'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ListsUpdateNoteSpecificListMemberResponse
     */
    '_links'?: Array<ResourceLink>;
}

