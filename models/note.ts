/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Activity feed item representing a note on the contact record.
 * @export
 * @interface Note
 */
export interface Note {
    /**
     * The type of event activity.
     * @type {string}
     * @memberof Note
     */
    'activity_type'?: NoteActivityTypeEnum;
    /**
     * The created at timestamp in ISO8601.
     * @type {string}
     * @memberof Note
     */
    'created_at_timestamp'?: string;
    /**
     * The updated at timestamp in ISO8601.
     * @type {string}
     * @memberof Note
     */
    'updated_at_timestamp'?: string;
    /**
     * The note\'s unique id.
     * @type {string}
     * @memberof Note
     */
    'note_id'?: string;
    /**
     * The note\'s text.
     * @type {string}
     * @memberof Note
     */
    'note_text'?: string;
    /**
     * The person who created the note.
     * @type {string}
     * @memberof Note
     */
    'created_by'?: string;
    /**
     * The URL of the contact\'s profile gravatar image.
     * @type {string}
     * @memberof Note
     */
    'avatar_url'?: string;
}

type NoteActivityTypeEnum = 'note'


