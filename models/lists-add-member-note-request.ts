/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A specific note for a specific member.
 * @export
 * @interface ListsAddMemberNoteRequest
 */
export interface ListsAddMemberNoteRequest {
    /**
     * The content of the note. Note length is limited to 1,000 characters.
     * @type {string}
     * @memberof ListsAddMemberNoteRequest
     */
    'note'?: string;
}
