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
 * @interface ListsGetMemberNote200Response
 */
export interface ListsGetMemberNote200Response {
    /**
     * The note id.
     * @type {number}
     * @memberof ListsGetMemberNote200Response
     */
    'id'?: number;
    /**
     * The date and time the note was created in ISO 8601 format.
     * @type {string}
     * @memberof ListsGetMemberNote200Response
     */
    'created_at'?: string;
    /**
     * The author of the note.
     * @type {string}
     * @memberof ListsGetMemberNote200Response
     */
    'created_by'?: string;
    /**
     * The date and time the note was last updated in ISO 8601 format.
     * @type {string}
     * @memberof ListsGetMemberNote200Response
     */
    'updated_at'?: string;
    /**
     * The content of the note.
     * @type {string}
     * @memberof ListsGetMemberNote200Response
     */
    'note'?: string;
    /**
     * The unique id for the list.
     * @type {string}
     * @memberof ListsGetMemberNote200Response
     */
    'list_id'?: string;
    /**
     * The MD5 hash of the lowercase version of the list member\'s email address.
     * @type {string}
     * @memberof ListsGetMemberNote200Response
     */
    'email_id'?: string;
    /**
     * As Mailchimp evolves beyond email, you may eventually have contacts without email addresses. While the `email_id` is the MD5 hash of their email address, this `contact_id` is agnostic of contact’s inclusion of an email address.
     * @type {string}
     * @memberof ListsGetMemberNote200Response
     */
    'contact_id'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof ListsGetMemberNote200Response
     */
    '_links'?: Array<ResourceLink>;
}

