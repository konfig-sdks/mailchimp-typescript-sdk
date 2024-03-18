/*
Mailchimp Marketing API

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

The version of the OpenAPI document: 3.0.55
Contact: apihelp@mailchimp.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Options for customizing your signup form header.
 * @export
 * @interface SignupFormHeaderOptionsProperty3
 */
export interface SignupFormHeaderOptionsProperty3 {
    /**
     * Header image URL.
     * @type {string}
     * @memberof SignupFormHeaderOptionsProperty3
     */
    'image_url'?: string;
    /**
     * Header text.
     * @type {string}
     * @memberof SignupFormHeaderOptionsProperty3
     */
    'text'?: string;
    /**
     * Image width, in pixels.
     * @type {string}
     * @memberof SignupFormHeaderOptionsProperty3
     */
    'image_width'?: string;
    /**
     * Image height, in pixels.
     * @type {string}
     * @memberof SignupFormHeaderOptionsProperty3
     */
    'image_height'?: string;
    /**
     * Alt text for the image.
     * @type {string}
     * @memberof SignupFormHeaderOptionsProperty3
     */
    'image_alt'?: string;
    /**
     * The URL that the header image will link to.
     * @type {string}
     * @memberof SignupFormHeaderOptionsProperty3
     */
    'image_link'?: string;
    /**
     * Image alignment.
     * @type {string}
     * @memberof SignupFormHeaderOptionsProperty3
     */
    'image_align'?: SignupFormHeaderOptionsProperty3ImageAlignEnum;
    /**
     * Image border width.
     * @type {string}
     * @memberof SignupFormHeaderOptionsProperty3
     */
    'image_border_width'?: string;
    /**
     * Image border style.
     * @type {string}
     * @memberof SignupFormHeaderOptionsProperty3
     */
    'image_border_style'?: SignupFormHeaderOptionsProperty3ImageBorderStyleEnum;
    /**
     * Image border color.
     * @type {string}
     * @memberof SignupFormHeaderOptionsProperty3
     */
    'image_border_color'?: string;
    /**
     * Image link target.
     * @type {string}
     * @memberof SignupFormHeaderOptionsProperty3
     */
    'image_target'?: SignupFormHeaderOptionsProperty3ImageTargetEnum;
}

type SignupFormHeaderOptionsProperty3ImageAlignEnum = 'none' | 'left' | 'center' | 'right'
type SignupFormHeaderOptionsProperty3ImageBorderStyleEnum = 'none' | 'solid' | 'dotted' | 'dashed' | 'double' | 'groove' | 'outset' | 'inset' | 'ridge'
type SignupFormHeaderOptionsProperty3ImageTargetEnum = '_blank' | 'null'

