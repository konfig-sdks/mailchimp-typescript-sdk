/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MergeFieldOptionsProperty3 } from './merge-field-options-property3';
import { ResourceLink } from './resource-link';

/**
 * A [merge field](https://mailchimp.com/developer/marketing/docs/merge-fields/) for an audience.
 * @export
 * @interface MergeField1
 */
export interface MergeField1 {
    /**
     * An unchanging id for the merge field.
     * @type {number}
     * @memberof MergeField1
     */
    'merge_id'?: number;
    /**
     * The merge tag used for Mailchimp campaigns and [adding contact information](https://mailchimp.com/developer/marketing/docs/merge-fields/#add-merge-data-to-contacts).
     * @type {string}
     * @memberof MergeField1
     */
    'tag'?: string;
    /**
     * The name of the merge field (audience field).
     * @type {string}
     * @memberof MergeField1
     */
    'name'?: string;
    /**
     * The [type](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for the merge field.
     * @type {string}
     * @memberof MergeField1
     */
    'type'?: MergeField1TypeEnum;
    /**
     * The boolean value if the merge field is required.
     * @type {boolean}
     * @memberof MergeField1
     */
    'required'?: boolean;
    /**
     * The default value for the merge field if `null`.
     * @type {string}
     * @memberof MergeField1
     */
    'default_value'?: string;
    /**
     * Whether the merge field is displayed on the signup form.
     * @type {boolean}
     * @memberof MergeField1
     */
    'public'?: boolean;
    /**
     * The order that the merge field displays on the list signup form.
     * @type {number}
     * @memberof MergeField1
     */
    'display_order'?: number;
    /**
     * 
     * @type {MergeFieldOptionsProperty3}
     * @memberof MergeField1
     */
    'options'?: MergeFieldOptionsProperty3;
    /**
     * Extra text to help the subscriber fill out the form.
     * @type {string}
     * @memberof MergeField1
     */
    'help_text'?: string;
    /**
     * The ID that identifies this merge field\'s audience\'.
     * @type {string}
     * @memberof MergeField1
     */
    'list_id'?: string;
    /**
     * A list of link types and descriptions for the API schema documents.
     * @type {Array<ResourceLink>}
     * @memberof MergeField1
     */
    '_links'?: Array<ResourceLink>;
}

type MergeField1TypeEnum = 'text' | 'number' | 'address' | 'phone' | 'date' | 'url' | 'imageurl' | 'radio' | 'dropdown' | 'birthday' | 'zip'


