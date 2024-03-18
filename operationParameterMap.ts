type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/lists/{list_id}/surveys/{survey_id}/actions/create-email-POST': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'survey_id'
            },
        ]
    },
    '/lists/{list_id}/surveys/{survey_id}/actions/publish-POST': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'survey_id'
            },
        ]
    },
    '/lists/{list_id}/surveys/{survey_id}/actions/unpublish-POST': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'survey_id'
            },
        ]
    },
    '/account-exports/{export_id}-GET': {
        parameters: [
            {
                name: 'export_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/account-exports-POST': {
        parameters: [
            {
                name: 'include_stages'
            },
            {
                name: 'since_timestamp'
            },
        ]
    },
    '/account-exports-GET': {
        parameters: [
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/activity-feed/chimp-chatter-GET': {
        parameters: [
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/authorized-apps/{app_id}-GET': {
        parameters: [
            {
                name: 'app_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/authorized-apps-GET': {
        parameters: [
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/automations/{workflow_id}/emails/{workflow_email_id}/queue-POST': {
        parameters: [
            {
                name: 'email_address'
            },
            {
                name: 'workflow_id'
            },
            {
                name: 'workflow_email_id'
            },
        ]
    },
    '/automations/{workflow_id}/actions/archive-POST': {
        parameters: [
            {
                name: 'workflow_id'
            },
        ]
    },
    '/automations/{workflow_id}/emails/{workflow_email_id}/queue/{subscriber_hash}-GET': {
        parameters: [
            {
                name: 'workflow_id'
            },
            {
                name: 'workflow_email_id'
            },
            {
                name: 'subscriber_hash'
            },
        ]
    },
    '/automations-POST': {
        parameters: [
            {
                name: 'recipients'
            },
            {
                name: 'trigger_settings'
            },
            {
                name: 'settings'
            },
        ]
    },
    '/automations/{workflow_id}/emails/{workflow_email_id}-DELETE': {
        parameters: [
            {
                name: 'workflow_id'
            },
            {
                name: 'workflow_email_id'
            },
        ]
    },
    '/automations/{workflow_id}/emails-GET': {
        parameters: [
            {
                name: 'workflow_id'
            },
        ]
    },
    '/automations/{workflow_id}-GET': {
        parameters: [
            {
                name: 'workflow_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/automations/{workflow_id}/emails/{workflow_email_id}-GET': {
        parameters: [
            {
                name: 'workflow_id'
            },
            {
                name: 'workflow_email_id'
            },
        ]
    },
    '/automations/{workflow_id}/removed-subscribers/{subscriber_hash}-GET': {
        parameters: [
            {
                name: 'workflow_id'
            },
            {
                name: 'subscriber_hash'
            },
        ]
    },
    '/automations/{workflow_id}/removed-subscribers-GET': {
        parameters: [
            {
                name: 'workflow_id'
            },
        ]
    },
    '/automations/{workflow_id}/emails/{workflow_email_id}/queue-GET': {
        parameters: [
            {
                name: 'workflow_id'
            },
            {
                name: 'workflow_email_id'
            },
        ]
    },
    '/automations-GET': {
        parameters: [
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'before_create_time'
            },
            {
                name: 'since_create_time'
            },
            {
                name: 'before_start_time'
            },
            {
                name: 'since_start_time'
            },
            {
                name: 'status'
            },
        ]
    },
    '/automations/{workflow_id}/emails/{workflow_email_id}/actions/pause-POST': {
        parameters: [
            {
                name: 'workflow_id'
            },
            {
                name: 'workflow_email_id'
            },
        ]
    },
    '/automations/{workflow_id}/actions/pause-all-emails-POST': {
        parameters: [
            {
                name: 'workflow_id'
            },
        ]
    },
    '/automations/{workflow_id}/removed-subscribers-POST': {
        parameters: [
            {
                name: 'email_address'
            },
            {
                name: 'workflow_id'
            },
        ]
    },
    '/automations/{workflow_id}/actions/start-all-emails-POST': {
        parameters: [
            {
                name: 'workflow_id'
            },
        ]
    },
    '/automations/{workflow_id}/emails/{workflow_email_id}/actions/start-POST': {
        parameters: [
            {
                name: 'workflow_id'
            },
            {
                name: 'workflow_email_id'
            },
        ]
    },
    '/automations/{workflow_id}/emails/{workflow_email_id}-PATCH': {
        parameters: [
            {
                name: 'workflow_id'
            },
            {
                name: 'workflow_email_id'
            },
            {
                name: 'settings'
            },
            {
                name: 'delay'
            },
        ]
    },
    '/batch-webhooks-POST': {
        parameters: [
            {
                name: 'url'
            },
            {
                name: 'enabled'
            },
        ]
    },
    '/batch-webhooks/{batch_webhook_id}-GET': {
        parameters: [
            {
                name: 'batch_webhook_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/batch-webhooks-GET': {
        parameters: [
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/batch-webhooks/{batch_webhook_id}-DELETE': {
        parameters: [
            {
                name: 'batch_webhook_id'
            },
        ]
    },
    '/batch-webhooks/{batch_webhook_id}-PATCH': {
        parameters: [
            {
                name: 'batch_webhook_id'
            },
            {
                name: 'url'
            },
            {
                name: 'enabled'
            },
        ]
    },
    '/batches/{batch_id}-GET': {
        parameters: [
            {
                name: 'batch_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/batches-GET': {
        parameters: [
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/batches-POST': {
        parameters: [
            {
                name: 'operations'
            },
        ]
    },
    '/batches/{batch_id}-DELETE': {
        parameters: [
            {
                name: 'batch_id'
            },
        ]
    },
    '/campaign-folders-POST': {
        parameters: [
            {
                name: 'name'
            },
        ]
    },
    '/campaign-folders/{folder_id}-DELETE': {
        parameters: [
            {
                name: 'folder_id'
            },
        ]
    },
    '/campaign-folders/{folder_id}-GET': {
        parameters: [
            {
                name: 'folder_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/campaign-folders-GET': {
        parameters: [
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/campaign-folders/{folder_id}-PATCH': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'folder_id'
            },
        ]
    },
    '/campaigns/{campaign_id}/feedback-POST': {
        parameters: [
            {
                name: 'message'
            },
            {
                name: 'campaign_id'
            },
            {
                name: 'block_id'
            },
            {
                name: 'is_complete'
            },
        ]
    },
    '/campaigns/{campaign_id}/actions/cancel-send-POST': {
        parameters: [
            {
                name: 'campaign_id'
            },
        ]
    },
    '/campaigns-POST': {
        parameters: [
            {
                name: 'type'
            },
            {
                name: 'recipients'
            },
            {
                name: 'settings'
            },
            {
                name: 'variate_settings'
            },
            {
                name: 'tracking'
            },
            {
                name: 'rss_opts'
            },
            {
                name: 'social_card'
            },
            {
                name: 'content_type'
            },
        ]
    },
    '/campaigns-GET': {
        parameters: [
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'type'
            },
            {
                name: 'status'
            },
            {
                name: 'before_send_time'
            },
            {
                name: 'since_send_time'
            },
            {
                name: 'before_create_time'
            },
            {
                name: 'since_create_time'
            },
            {
                name: 'list_id'
            },
            {
                name: 'folder_id'
            },
            {
                name: 'member_id'
            },
            {
                name: 'sort_field'
            },
            {
                name: 'sort_dir'
            },
            {
                name: 'include_resend_shortcut_eligibility'
            },
        ]
    },
    '/campaigns/{campaign_id}/content-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/campaigns/{campaign_id}/feedback/{feedback_id}-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'feedback_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/campaigns/{campaign_id}-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'include_resend_shortcut_eligibility'
            },
        ]
    },
    '/campaigns/{campaign_id}/send-checklist-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/campaigns/{campaign_id}/feedback-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/campaigns/{campaign_id}/actions/pause-POST': {
        parameters: [
            {
                name: 'campaign_id'
            },
        ]
    },
    '/campaigns/{campaign_id}-DELETE': {
        parameters: [
            {
                name: 'campaign_id'
            },
        ]
    },
    '/campaigns/{campaign_id}/feedback/{feedback_id}-DELETE': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'feedback_id'
            },
        ]
    },
    '/campaigns/{campaign_id}/actions/replicate-POST': {
        parameters: [
            {
                name: 'campaign_id'
            },
        ]
    },
    '/campaigns/{campaign_id}/actions/create-resend-POST': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'shortcut_type'
            },
        ]
    },
    '/campaigns/{campaign_id}/actions/resume-POST': {
        parameters: [
            {
                name: 'campaign_id'
            },
        ]
    },
    '/campaigns/{campaign_id}/actions/schedule-POST': {
        parameters: [
            {
                name: 'schedule_time'
            },
            {
                name: 'campaign_id'
            },
            {
                name: 'timewarp'
            },
            {
                name: 'batch_delivery'
            },
        ]
    },
    '/campaigns/{campaign_id}/actions/send-POST': {
        parameters: [
            {
                name: 'campaign_id'
            },
        ]
    },
    '/campaigns/{campaign_id}/actions/test-POST': {
        parameters: [
            {
                name: 'test_emails'
            },
            {
                name: 'send_type'
            },
            {
                name: 'campaign_id'
            },
        ]
    },
    '/campaigns/{campaign_id}/content-PUT': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'plain_text'
            },
            {
                name: 'html'
            },
            {
                name: 'url'
            },
            {
                name: 'template'
            },
            {
                name: 'archive'
            },
            {
                name: 'variate_contents'
            },
        ]
    },
    '/campaigns/{campaign_id}/actions/unschedule-POST': {
        parameters: [
            {
                name: 'campaign_id'
            },
        ]
    },
    '/campaigns/{campaign_id}/feedback/{feedback_id}-PATCH': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'feedback_id'
            },
            {
                name: 'block_id'
            },
            {
                name: 'message'
            },
            {
                name: 'is_complete'
            },
        ]
    },
    '/campaigns/{campaign_id}-PATCH': {
        parameters: [
            {
                name: 'settings'
            },
            {
                name: 'campaign_id'
            },
            {
                name: 'recipients'
            },
            {
                name: 'variate_settings'
            },
            {
                name: 'tracking'
            },
            {
                name: 'rss_opts'
            },
            {
                name: 'social_card'
            },
        ]
    },
    '/connected-sites-POST': {
        parameters: [
            {
                name: 'foreign_id'
            },
            {
                name: 'domain'
            },
        ]
    },
    '/connected-sites/{connected_site_id}-GET': {
        parameters: [
            {
                name: 'connected_site_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/connected-sites-GET': {
        parameters: [
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/connected-sites/{connected_site_id}-DELETE': {
        parameters: [
            {
                name: 'connected_site_id'
            },
        ]
    },
    '/connected-sites/{connected_site_id}/actions/verify-script-installation-POST': {
        parameters: [
            {
                name: 'connected_site_id'
            },
        ]
    },
    '/conversations-GET': {
        parameters: [
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'has_unread_messages'
            },
            {
                name: 'list_id'
            },
            {
                name: 'campaign_id'
            },
        ]
    },
    '/conversations/{conversation_id}-GET': {
        parameters: [
            {
                name: 'conversation_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/conversations/{conversation_id}/messages/{message_id}-GET': {
        parameters: [
            {
                name: 'conversation_id'
            },
            {
                name: 'message_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/conversations/{conversation_id}/messages-GET': {
        parameters: [
            {
                name: 'conversation_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'is_read'
            },
            {
                name: 'before_timestamp'
            },
            {
                name: 'since_timestamp'
            },
        ]
    },
    '/customer-journeys/journeys/{journey_id}/steps/{step_id}/actions/trigger-POST': {
        parameters: [
            {
                name: 'email_address'
            },
            {
                name: 'journey_id'
            },
            {
                name: 'step_id'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/carts/{cart_id}/lines-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'product_id'
            },
            {
                name: 'product_variant_id'
            },
            {
                name: 'quantity'
            },
            {
                name: 'price'
            },
            {
                name: 'store_id'
            },
            {
                name: 'cart_id'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/carts-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'customer'
            },
            {
                name: 'currency_code'
            },
            {
                name: 'order_total'
            },
            {
                name: 'lines'
            },
            {
                name: 'store_id'
            },
            {
                name: 'campaign_id'
            },
            {
                name: 'checkout_url'
            },
            {
                name: 'tax_total'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/customers-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'email_address'
            },
            {
                name: 'opt_in_status'
            },
            {
                name: 'store_id'
            },
            {
                name: 'company'
            },
            {
                name: 'first_name'
            },
            {
                name: 'last_name'
            },
            {
                name: 'address'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/customers/{customer_id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'email_address'
            },
            {
                name: 'opt_in_status'
            },
            {
                name: 'store_id'
            },
            {
                name: 'customer_id'
            },
            {
                name: 'company'
            },
            {
                name: 'first_name'
            },
            {
                name: 'last_name'
            },
            {
                name: 'address'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}-PUT': {
        parameters: [
            {
                name: 'title'
            },
            {
                name: 'id'
            },
            {
                name: 'store_id'
            },
            {
                name: 'product_id'
            },
            {
                name: 'variant_id'
            },
            {
                name: 'url'
            },
            {
                name: 'sku'
            },
            {
                name: 'price'
            },
            {
                name: 'inventory_quantity'
            },
            {
                name: 'image_url'
            },
            {
                name: 'backorders'
            },
            {
                name: 'visibility'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/orders/{order_id}/lines-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'product_id'
            },
            {
                name: 'product_variant_id'
            },
            {
                name: 'quantity'
            },
            {
                name: 'price'
            },
            {
                name: 'store_id'
            },
            {
                name: 'order_id'
            },
            {
                name: 'discount'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/orders-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'customer'
            },
            {
                name: 'currency_code'
            },
            {
                name: 'order_total'
            },
            {
                name: 'lines'
            },
            {
                name: 'store_id'
            },
            {
                name: 'campaign_id'
            },
            {
                name: 'landing_site'
            },
            {
                name: 'financial_status'
            },
            {
                name: 'fulfillment_status'
            },
            {
                name: 'order_url'
            },
            {
                name: 'discount_total'
            },
            {
                name: 'tax_total'
            },
            {
                name: 'shipping_total'
            },
            {
                name: 'tracking_code'
            },
            {
                name: 'processed_at_foreign'
            },
            {
                name: 'cancelled_at_foreign'
            },
            {
                name: 'updated_at_foreign'
            },
            {
                name: 'shipping_address'
            },
            {
                name: 'billing_address'
            },
            {
                name: 'promos'
            },
            {
                name: 'outreach'
            },
            {
                name: 'tracking_number'
            },
            {
                name: 'tracking_carrier'
            },
            {
                name: 'tracking_url'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/products/{product_id}/images-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'url'
            },
            {
                name: 'store_id'
            },
            {
                name: 'product_id'
            },
            {
                name: 'variant_ids'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/products-POST': {
        parameters: [
            {
                name: 'title'
            },
            {
                name: 'id'
            },
            {
                name: 'variants'
            },
            {
                name: 'store_id'
            },
            {
                name: 'description'
            },
            {
                name: 'handle'
            },
            {
                name: 'url'
            },
            {
                name: 'type'
            },
            {
                name: 'vendor'
            },
            {
                name: 'image_url'
            },
            {
                name: 'images'
            },
            {
                name: 'published_at_foreign'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/products/{product_id}/variants-POST': {
        parameters: [
            {
                name: 'title'
            },
            {
                name: 'id'
            },
            {
                name: 'store_id'
            },
            {
                name: 'product_id'
            },
            {
                name: 'url'
            },
            {
                name: 'sku'
            },
            {
                name: 'price'
            },
            {
                name: 'inventory_quantity'
            },
            {
                name: 'image_url'
            },
            {
                name: 'backorders'
            },
            {
                name: 'visibility'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'code'
            },
            {
                name: 'redemption_url'
            },
            {
                name: 'store_id'
            },
            {
                name: 'promo_rule_id'
            },
            {
                name: 'usage_count'
            },
            {
                name: 'enabled'
            },
            {
                name: 'created_at_foreign'
            },
            {
                name: 'updated_at_foreign'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/promo-rules-POST': {
        parameters: [
            {
                name: 'description'
            },
            {
                name: 'id'
            },
            {
                name: 'amount'
            },
            {
                name: 'type'
            },
            {
                name: 'target'
            },
            {
                name: 'store_id'
            },
            {
                name: 'title'
            },
            {
                name: 'starts_at'
            },
            {
                name: 'ends_at'
            },
            {
                name: 'enabled'
            },
            {
                name: 'created_at_foreign'
            },
            {
                name: 'updated_at_foreign'
            },
        ]
    },
    '/ecommerce/stores-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'list_id'
            },
            {
                name: 'name'
            },
            {
                name: 'currency_code'
            },
            {
                name: 'platform'
            },
            {
                name: 'domain'
            },
            {
                name: 'is_syncing'
            },
            {
                name: 'email_address'
            },
            {
                name: 'money_format'
            },
            {
                name: 'primary_locale'
            },
            {
                name: 'timezone'
            },
            {
                name: 'phone'
            },
            {
                name: 'address'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}-DELETE': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'cart_id'
            },
            {
                name: 'line_id'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/orders/{order_id}-DELETE': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'order_id'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}-DELETE': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'order_id'
            },
            {
                name: 'line_id'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/products/{product_id}-DELETE': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'product_id'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}-DELETE': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'product_id'
            },
            {
                name: 'image_id'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}-DELETE': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'product_id'
            },
            {
                name: 'variant_id'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes/{promo_code_id}-DELETE': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'promo_rule_id'
            },
            {
                name: 'promo_code_id'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}-DELETE': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'promo_rule_id'
            },
        ]
    },
    '/ecommerce/stores/{store_id}-DELETE': {
        parameters: [
            {
                name: 'store_id'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/carts/{cart_id}-GET': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'cart_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}-GET': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'cart_id'
            },
            {
                name: 'line_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/customers/{customer_id}-GET': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'customer_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}-GET': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'order_id'
            },
            {
                name: 'line_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}-GET': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'product_id'
            },
            {
                name: 'image_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/products/{product_id}/images-GET': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'product_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}-GET': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'product_id'
            },
            {
                name: 'variant_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes/{promo_code_id}-GET': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'promo_rule_id'
            },
            {
                name: 'promo_code_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/carts-GET': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/customers-GET': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'email_address'
            },
        ]
    },
    '/ecommerce/stores/{store_id}-GET': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/orders/{order_id}-GET': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'order_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/orders/{order_id}/lines-GET': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'order_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/products/{product_id}-GET': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'product_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/products-GET': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes-GET': {
        parameters: [
            {
                name: 'promo_rule_id'
            },
            {
                name: 'store_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}-GET': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'promo_rule_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/promo-rules-GET': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/ecommerce/orders-GET': {
        parameters: [
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'campaign_id'
            },
            {
                name: 'outreach_id'
            },
            {
                name: 'customer_id'
            },
            {
                name: 'has_outreach'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/carts/{cart_id}/lines-GET': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'cart_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/products/{product_id}/variants-GET': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'product_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/orders-GET': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'customer_id'
            },
            {
                name: 'has_outreach'
            },
            {
                name: 'campaign_id'
            },
            {
                name: 'outreach_id'
            },
        ]
    },
    '/ecommerce/stores-GET': {
        parameters: [
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/carts/{cart_id}-DELETE': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'cart_id'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/customers/{customer_id}-DELETE': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'customer_id'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/carts/{cart_id}-PATCH': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'cart_id'
            },
            {
                name: 'customer'
            },
            {
                name: 'campaign_id'
            },
            {
                name: 'checkout_url'
            },
            {
                name: 'currency_code'
            },
            {
                name: 'order_total'
            },
            {
                name: 'tax_total'
            },
            {
                name: 'lines'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}-PATCH': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'cart_id'
            },
            {
                name: 'line_id'
            },
            {
                name: 'product_id'
            },
            {
                name: 'product_variant_id'
            },
            {
                name: 'quantity'
            },
            {
                name: 'price'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/customers/{customer_id}-PATCH': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'customer_id'
            },
            {
                name: 'opt_in_status'
            },
            {
                name: 'company'
            },
            {
                name: 'first_name'
            },
            {
                name: 'last_name'
            },
            {
                name: 'address'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}-PATCH': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'order_id'
            },
            {
                name: 'line_id'
            },
            {
                name: 'product_id'
            },
            {
                name: 'product_variant_id'
            },
            {
                name: 'quantity'
            },
            {
                name: 'price'
            },
            {
                name: 'discount'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/products/{product_id}-PATCH': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'product_id'
            },
            {
                name: 'title'
            },
            {
                name: 'description'
            },
            {
                name: 'handle'
            },
            {
                name: 'url'
            },
            {
                name: 'type'
            },
            {
                name: 'vendor'
            },
            {
                name: 'image_url'
            },
            {
                name: 'variants'
            },
            {
                name: 'images'
            },
            {
                name: 'published_at_foreign'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}-PATCH': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'product_id'
            },
            {
                name: 'image_id'
            },
            {
                name: 'id'
            },
            {
                name: 'url'
            },
            {
                name: 'variant_ids'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}-PATCH': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'product_id'
            },
            {
                name: 'variant_id'
            },
            {
                name: 'title'
            },
            {
                name: 'url'
            },
            {
                name: 'sku'
            },
            {
                name: 'price'
            },
            {
                name: 'inventory_quantity'
            },
            {
                name: 'image_url'
            },
            {
                name: 'backorders'
            },
            {
                name: 'visibility'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes/{promo_code_id}-PATCH': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'promo_rule_id'
            },
            {
                name: 'promo_code_id'
            },
            {
                name: 'code'
            },
            {
                name: 'redemption_url'
            },
            {
                name: 'usage_count'
            },
            {
                name: 'enabled'
            },
            {
                name: 'created_at_foreign'
            },
            {
                name: 'updated_at_foreign'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}-PATCH': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'promo_rule_id'
            },
            {
                name: 'title'
            },
            {
                name: 'description'
            },
            {
                name: 'starts_at'
            },
            {
                name: 'ends_at'
            },
            {
                name: 'amount'
            },
            {
                name: 'type'
            },
            {
                name: 'target'
            },
            {
                name: 'enabled'
            },
            {
                name: 'created_at_foreign'
            },
            {
                name: 'updated_at_foreign'
            },
        ]
    },
    '/ecommerce/stores/{store_id}/orders/{order_id}-PATCH': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'order_id'
            },
            {
                name: 'customer'
            },
            {
                name: 'campaign_id'
            },
            {
                name: 'landing_site'
            },
            {
                name: 'financial_status'
            },
            {
                name: 'fulfillment_status'
            },
            {
                name: 'currency_code'
            },
            {
                name: 'order_total'
            },
            {
                name: 'order_url'
            },
            {
                name: 'discount_total'
            },
            {
                name: 'tax_total'
            },
            {
                name: 'shipping_total'
            },
            {
                name: 'tracking_code'
            },
            {
                name: 'processed_at_foreign'
            },
            {
                name: 'cancelled_at_foreign'
            },
            {
                name: 'updated_at_foreign'
            },
            {
                name: 'shipping_address'
            },
            {
                name: 'billing_address'
            },
            {
                name: 'promos'
            },
            {
                name: 'lines'
            },
            {
                name: 'outreach'
            },
            {
                name: 'tracking_number'
            },
            {
                name: 'tracking_carrier'
            },
            {
                name: 'tracking_url'
            },
        ]
    },
    '/ecommerce/stores/{store_id}-PATCH': {
        parameters: [
            {
                name: 'store_id'
            },
            {
                name: 'name'
            },
            {
                name: 'platform'
            },
            {
                name: 'domain'
            },
            {
                name: 'is_syncing'
            },
            {
                name: 'email_address'
            },
            {
                name: 'currency_code'
            },
            {
                name: 'money_format'
            },
            {
                name: 'primary_locale'
            },
            {
                name: 'timezone'
            },
            {
                name: 'phone'
            },
            {
                name: 'address'
            },
        ]
    },
    '/facebook-ads/{outreach_id}-GET': {
        parameters: [
            {
                name: 'outreach_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/facebook-ads-GET': {
        parameters: [
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'sort_field'
            },
            {
                name: 'sort_dir'
            },
        ]
    },
    '/file-manager/folders-POST': {
        parameters: [
            {
                name: 'name'
            },
        ]
    },
    '/file-manager/folders/{folder_id}-DELETE': {
        parameters: [
            {
                name: 'folder_id'
            },
        ]
    },
    '/file-manager/files/{file_id}-GET': {
        parameters: [
            {
                name: 'file_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/file-manager/folders/{folder_id}-GET': {
        parameters: [
            {
                name: 'folder_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/file-manager/folders-GET': {
        parameters: [
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'created_by'
            },
            {
                name: 'before_created_at'
            },
            {
                name: 'since_created_at'
            },
        ]
    },
    '/file-manager/files-GET': {
        parameters: [
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'type'
            },
            {
                name: 'created_by'
            },
            {
                name: 'before_created_at'
            },
            {
                name: 'since_created_at'
            },
            {
                name: 'sort_field'
            },
            {
                name: 'sort_dir'
            },
        ]
    },
    '/file-manager/folders/{folder_id}/files-GET': {
        parameters: [
            {
                name: 'folder_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'type'
            },
            {
                name: 'created_by'
            },
            {
                name: 'before_created_at'
            },
            {
                name: 'since_created_at'
            },
            {
                name: 'sort_field'
            },
            {
                name: 'sort_dir'
            },
        ]
    },
    '/file-manager/files/{file_id}-DELETE': {
        parameters: [
            {
                name: 'file_id'
            },
        ]
    },
    '/file-manager/files/{file_id}-PATCH': {
        parameters: [
            {
                name: 'file_id'
            },
            {
                name: 'folder_id'
            },
            {
                name: 'name'
            },
        ]
    },
    '/file-manager/folders/{folder_id}-PATCH': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'folder_id'
            },
        ]
    },
    '/file-manager/files-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'file_data'
            },
            {
                name: 'folder_id'
            },
        ]
    },
    '/landing-pages-POST': {
        parameters: [
            {
                name: 'title'
            },
            {
                name: 'description'
            },
            {
                name: 'name'
            },
            {
                name: 'store_id'
            },
            {
                name: 'list_id'
            },
            {
                name: 'type'
            },
            {
                name: 'template_id'
            },
            {
                name: 'tracking'
            },
            {
                name: 'use_default_list'
            },
        ]
    },
    '/landing-pages/{page_id}-DELETE': {
        parameters: [
            {
                name: 'page_id'
            },
        ]
    },
    '/landing-pages/{page_id}/content-GET': {
        parameters: [
            {
                name: 'page_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/landing-pages/{page_id}-GET': {
        parameters: [
            {
                name: 'page_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/landing-pages-GET': {
        parameters: [
            {
                name: 'sort_dir'
            },
            {
                name: 'sort_field'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
        ]
    },
    '/landing-pages/{page_id}/actions/publish-POST': {
        parameters: [
            {
                name: 'page_id'
            },
        ]
    },
    '/landing-pages/{page_id}/actions/unpublish-POST': {
        parameters: [
            {
                name: 'page_id'
            },
        ]
    },
    '/landing-pages/{page_id}-PATCH': {
        parameters: [
            {
                name: 'page_id'
            },
            {
                name: 'title'
            },
            {
                name: 'description'
            },
            {
                name: 'name'
            },
            {
                name: 'store_id'
            },
            {
                name: 'list_id'
            },
            {
                name: 'tracking'
            },
        ]
    },
    '/lists/{list_id}/interest-categories-POST': {
        parameters: [
            {
                name: 'title'
            },
            {
                name: 'type'
            },
            {
                name: 'list_id'
            },
            {
                name: 'display_order'
            },
        ]
    },
    '/lists/{list_id}/interest-categories/{interest_category_id}/interests-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'list_id'
            },
            {
                name: 'interest_category_id'
            },
            {
                name: 'display_order'
            },
        ]
    },
    '/lists/{list_id}/members/{subscriber_hash}/events-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'list_id'
            },
            {
                name: 'subscriber_hash'
            },
            {
                name: 'properties'
            },
            {
                name: 'is_syncing'
            },
            {
                name: 'occurred_at'
            },
        ]
    },
    '/lists/{list_id}/members/{subscriber_hash}/notes-POST': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'subscriber_hash'
            },
            {
                name: 'note'
            },
        ]
    },
    '/lists/{list_id}/members/{subscriber_hash}/tags-POST': {
        parameters: [
            {
                name: 'tags'
            },
            {
                name: 'list_id'
            },
            {
                name: 'subscriber_hash'
            },
            {
                name: 'is_syncing'
            },
        ]
    },
    '/lists/{list_id}/members-POST': {
        parameters: [
            {
                name: 'email_address'
            },
            {
                name: 'status'
            },
            {
                name: 'list_id'
            },
            {
                name: 'tags'
            },
            {
                name: 'email_type'
            },
            {
                name: 'merge_fields'
            },
            {
                name: 'interests'
            },
            {
                name: 'language'
            },
            {
                name: 'vip'
            },
            {
                name: 'location'
            },
            {
                name: 'marketing_permissions'
            },
            {
                name: 'ip_signup'
            },
            {
                name: 'timestamp_signup'
            },
            {
                name: 'ip_opt'
            },
            {
                name: 'timestamp_opt'
            },
            {
                name: 'skip_merge_validation'
            },
        ]
    },
    '/lists/{list_id}/segments/{segment_id}/members-POST': {
        parameters: [
            {
                name: 'email_address'
            },
            {
                name: 'list_id'
            },
            {
                name: 'segment_id'
            },
        ]
    },
    '/lists/{list_id}/merge-fields-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'type'
            },
            {
                name: 'list_id'
            },
            {
                name: 'tag'
            },
            {
                name: 'required'
            },
            {
                name: 'default_value'
            },
            {
                name: 'public'
            },
            {
                name: 'display_order'
            },
            {
                name: 'options'
            },
            {
                name: 'help_text'
            },
        ]
    },
    '/lists/{list_id}/segments-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'list_id'
            },
            {
                name: 'static_segment'
            },
            {
                name: 'options'
            },
        ]
    },
    '/lists/{list_id}/members/{subscriber_hash}-PUT': {
        parameters: [
            {
                name: 'email_address'
            },
            {
                name: 'status_if_new'
            },
            {
                name: 'list_id'
            },
            {
                name: 'subscriber_hash'
            },
            {
                name: 'email_type'
            },
            {
                name: 'status'
            },
            {
                name: 'merge_fields'
            },
            {
                name: 'interests'
            },
            {
                name: 'language'
            },
            {
                name: 'vip'
            },
            {
                name: 'location'
            },
            {
                name: 'marketing_permissions'
            },
            {
                name: 'ip_signup'
            },
            {
                name: 'timestamp_signup'
            },
            {
                name: 'ip_opt'
            },
            {
                name: 'timestamp_opt'
            },
            {
                name: 'skip_merge_validation'
            },
        ]
    },
    '/lists/{list_id}/members/{subscriber_hash}-DELETE': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'subscriber_hash'
            },
        ]
    },
    '/lists/{list_id}/segments/{segment_id}-POST': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'segment_id'
            },
            {
                name: 'members_to_add'
            },
            {
                name: 'members_to_remove'
            },
        ]
    },
    '/lists/{list_id}-POST': {
        parameters: [
            {
                name: 'members'
            },
            {
                name: 'list_id'
            },
            {
                name: 'sync_tags'
            },
            {
                name: 'update_existing'
            },
            {
                name: 'skip_merge_validation'
            },
            {
                name: 'skip_duplicate_check'
            },
        ]
    },
    '/lists-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'contact'
            },
            {
                name: 'permission_reminder'
            },
            {
                name: 'campaign_defaults'
            },
            {
                name: 'email_type_option'
            },
            {
                name: 'use_archive_bar'
            },
            {
                name: 'notify_on_subscribe'
            },
            {
                name: 'notify_on_unsubscribe'
            },
            {
                name: 'double_optin'
            },
            {
                name: 'marketing_permissions'
            },
        ]
    },
    '/lists/{list_id}/webhooks-POST': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'url'
            },
            {
                name: 'events'
            },
            {
                name: 'sources'
            },
        ]
    },
    '/lists/{list_id}/signup-forms-POST': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'header'
            },
            {
                name: 'contents'
            },
            {
                name: 'styles'
            },
        ]
    },
    '/lists/{list_id}/interest-categories/{interest_category_id}-DELETE': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'interest_category_id'
            },
        ]
    },
    '/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}-DELETE': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'interest_category_id'
            },
            {
                name: 'interest_id'
            },
        ]
    },
    '/lists/{list_id}-DELETE': {
        parameters: [
            {
                name: 'list_id'
            },
        ]
    },
    '/lists/{list_id}/merge-fields/{merge_id}-DELETE': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'merge_id'
            },
        ]
    },
    '/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}-DELETE': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'subscriber_hash'
            },
            {
                name: 'note_id'
            },
        ]
    },
    '/lists/{list_id}/segments/{segment_id}-DELETE': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'segment_id'
            },
        ]
    },
    '/lists/{list_id}/webhooks/{webhook_id}-DELETE': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'webhook_id'
            },
        ]
    },
    '/lists/{list_id}/abuse-reports/{report_id}-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'report_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/lists/{list_id}/abuse-reports-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/lists-GET': {
        parameters: [
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'before_date_created'
            },
            {
                name: 'since_date_created'
            },
            {
                name: 'before_campaign_last_sent'
            },
            {
                name: 'since_campaign_last_sent'
            },
            {
                name: 'email'
            },
            {
                name: 'sort_field'
            },
            {
                name: 'sort_dir'
            },
            {
                name: 'has_ecommerce_store'
            },
            {
                name: 'include_total_contacts'
            },
        ]
    },
    '/lists/{list_id}/growth-history/{month}-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'month'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/lists/{list_id}/growth-history-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'sort_field'
            },
            {
                name: 'sort_dir'
            },
        ]
    },
    '/lists/{list_id}/interest-categories/{interest_category_id}-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'interest_category_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'interest_category_id'
            },
            {
                name: 'interest_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/lists/{list_id}-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'include_total_contacts'
            },
        ]
    },
    '/lists/{list_id}/locations-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/lists/{list_id}/members/{subscriber_hash}/events-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'subscriber_hash'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/lists/{list_id}/members/{subscriber_hash}/goals-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'subscriber_hash'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/lists/{list_id}/members/{subscriber_hash}-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'subscriber_hash'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'subscriber_hash'
            },
            {
                name: 'note_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/lists/{list_id}/members/{subscriber_hash}/notes-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'subscriber_hash'
            },
            {
                name: 'sort_field'
            },
            {
                name: 'sort_dir'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/lists/{list_id}/members/{subscriber_hash}/tags-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'subscriber_hash'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/lists/{list_id}/members-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'email_type'
            },
            {
                name: 'status'
            },
            {
                name: 'since_timestamp_opt'
            },
            {
                name: 'before_timestamp_opt'
            },
            {
                name: 'since_last_changed'
            },
            {
                name: 'before_last_changed'
            },
            {
                name: 'unique_email_id'
            },
            {
                name: 'vip_only'
            },
            {
                name: 'interest_category_id'
            },
            {
                name: 'interest_ids'
            },
            {
                name: 'interest_match'
            },
            {
                name: 'sort_field'
            },
            {
                name: 'sort_dir'
            },
            {
                name: 'since_last_campaign'
            },
            {
                name: 'unsubscribed_since'
            },
        ]
    },
    '/lists/{list_id}/merge-fields/{merge_id}-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'merge_id'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'fields'
            },
        ]
    },
    '/lists/{list_id}/activity-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/lists/{list_id}/segments/{segment_id}-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'segment_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'include_cleaned'
            },
            {
                name: 'include_transactional'
            },
            {
                name: 'include_unsubscribed'
            },
        ]
    },
    '/lists/{list_id}/segments/{segment_id}/members-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'segment_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'include_cleaned'
            },
            {
                name: 'include_transactional'
            },
            {
                name: 'include_unsubscribed'
            },
        ]
    },
    '/lists/{list_id}/segments-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'type'
            },
            {
                name: 'since_created_at'
            },
            {
                name: 'before_created_at'
            },
            {
                name: 'include_cleaned'
            },
            {
                name: 'include_transactional'
            },
            {
                name: 'include_unsubscribed'
            },
            {
                name: 'since_updated_at'
            },
            {
                name: 'before_updated_at'
            },
        ]
    },
    '/lists/{list_id}/signup-forms-GET': {
        parameters: [
            {
                name: 'list_id'
            },
        ]
    },
    '/lists/{list_id}/surveys/{survey_id}-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'survey_id'
            },
        ]
    },
    '/lists/{list_id}/surveys-GET': {
        parameters: [
            {
                name: 'list_id'
            },
        ]
    },
    '/lists/{list_id}/webhooks/{webhook_id}-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'webhook_id'
            },
        ]
    },
    '/lists/{list_id}/webhooks-GET': {
        parameters: [
            {
                name: 'list_id'
            },
        ]
    },
    '/lists/{list_id}/interest-categories/{interest_category_id}/interests-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'interest_category_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/lists/{list_id}/interest-categories-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'type'
            },
        ]
    },
    '/lists/{list_id}/merge-fields-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'type'
            },
            {
                name: 'required'
            },
        ]
    },
    '/lists/{list_id}/clients-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/lists/{list_id}/segments/{segment_id}/members/{subscriber_hash}-DELETE': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'segment_id'
            },
            {
                name: 'subscriber_hash'
            },
        ]
    },
    '/lists/{list_id}/members/{subscriber_hash}/actions/delete-permanent-POST': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'subscriber_hash'
            },
        ]
    },
    '/lists/{list_id}/tag-search-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'name'
            },
        ]
    },
    '/lists/{list_id}/interest-categories/{interest_category_id}-PATCH': {
        parameters: [
            {
                name: 'title'
            },
            {
                name: 'type'
            },
            {
                name: 'list_id'
            },
            {
                name: 'interest_category_id'
            },
            {
                name: 'display_order'
            },
        ]
    },
    '/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}-PATCH': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'list_id'
            },
            {
                name: 'interest_category_id'
            },
            {
                name: 'interest_id'
            },
            {
                name: 'display_order'
            },
        ]
    },
    '/lists/{list_id}/members/{subscriber_hash}-PATCH': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'subscriber_hash'
            },
            {
                name: 'email_address'
            },
            {
                name: 'email_type'
            },
            {
                name: 'status'
            },
            {
                name: 'merge_fields'
            },
            {
                name: 'interests'
            },
            {
                name: 'language'
            },
            {
                name: 'vip'
            },
            {
                name: 'location'
            },
            {
                name: 'marketing_permissions'
            },
            {
                name: 'ip_signup'
            },
            {
                name: 'timestamp_signup'
            },
            {
                name: 'ip_opt'
            },
            {
                name: 'timestamp_opt'
            },
            {
                name: 'skip_merge_validation'
            },
        ]
    },
    '/lists/{list_id}/merge-fields/{merge_id}-PATCH': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'list_id'
            },
            {
                name: 'merge_id'
            },
            {
                name: 'tag'
            },
            {
                name: 'required'
            },
            {
                name: 'default_value'
            },
            {
                name: 'public'
            },
            {
                name: 'display_order'
            },
            {
                name: 'options'
            },
            {
                name: 'help_text'
            },
        ]
    },
    '/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}-PATCH': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'subscriber_hash'
            },
            {
                name: 'note_id'
            },
            {
                name: 'note'
            },
        ]
    },
    '/lists/{list_id}/segments/{segment_id}-PATCH': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'list_id'
            },
            {
                name: 'segment_id'
            },
            {
                name: 'static_segment'
            },
            {
                name: 'options'
            },
        ]
    },
    '/lists/{list_id}-PATCH': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'contact'
            },
            {
                name: 'permission_reminder'
            },
            {
                name: 'campaign_defaults'
            },
            {
                name: 'email_type_option'
            },
            {
                name: 'list_id'
            },
            {
                name: 'use_archive_bar'
            },
            {
                name: 'notify_on_subscribe'
            },
            {
                name: 'notify_on_unsubscribe'
            },
            {
                name: 'double_optin'
            },
            {
                name: 'marketing_permissions'
            },
        ]
    },
    '/lists/{list_id}/webhooks/{webhook_id}-PATCH': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'webhook_id'
            },
            {
                name: 'url'
            },
            {
                name: 'events'
            },
            {
                name: 'sources'
            },
        ]
    },
    '/lists/{list_id}/members/{subscriber_hash}/activity-feed-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'subscriber_hash'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'activity_filters'
            },
        ]
    },
    '/lists/{list_id}/members/{subscriber_hash}/activity-GET': {
        parameters: [
            {
                name: 'list_id'
            },
            {
                name: 'subscriber_hash'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'action'
            },
        ]
    },
    '/ping-GET': {
        parameters: [
        ]
    },
    '/reporting/facebook-ads/{outreach_id}-GET': {
        parameters: [
            {
                name: 'outreach_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/reporting/landing-pages/{outreach_id}-GET': {
        parameters: [
            {
                name: 'outreach_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/reporting/surveys/{survey_id}-GET': {
        parameters: [
            {
                name: 'survey_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/reporting/facebook-ads-GET': {
        parameters: [
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'sort_field'
            },
            {
                name: 'sort_dir'
            },
        ]
    },
    '/reporting/facebook-ads/{outreach_id}/ecommerce-product-activity-GET': {
        parameters: [
            {
                name: 'outreach_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'sort_field'
            },
        ]
    },
    '/reporting/landing-pages-GET': {
        parameters: [
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/reporting/surveys/{survey_id}/questions-GET': {
        parameters: [
            {
                name: 'survey_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/reporting/surveys-GET': {
        parameters: [
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/reporting/surveys/{survey_id}/responses/{response_id}-GET': {
        parameters: [
            {
                name: 'survey_id'
            },
            {
                name: 'response_id'
            },
        ]
    },
    '/reporting/surveys/{survey_id}/questions/{question_id}/answers-GET': {
        parameters: [
            {
                name: 'survey_id'
            },
            {
                name: 'question_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'respondent_familiarity_is'
            },
        ]
    },
    '/reporting/surveys/{survey_id}/questions/{question_id}-GET': {
        parameters: [
            {
                name: 'survey_id'
            },
            {
                name: 'question_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/reporting/surveys/{survey_id}/responses-GET': {
        parameters: [
            {
                name: 'survey_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'answered_question'
            },
            {
                name: 'chose_answer'
            },
            {
                name: 'respondent_familiarity_is'
            },
        ]
    },
    '/reports/{campaign_id}/sent-to/{subscriber_hash}-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'subscriber_hash'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/reports/{campaign_id}/abuse-reports/{report_id}-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'report_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/reports/{campaign_id}/click-details-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'sort_field'
            },
            {
                name: 'sort_dir'
            },
        ]
    },
    '/reports/{campaign_id}/ecommerce-product-activity-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'sort_field'
            },
        ]
    },
    '/reports/{campaign_id}/email-activity/{subscriber_hash}-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'subscriber_hash'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'since'
            },
        ]
    },
    '/reports/{campaign_id}/unsubscribed/{subscriber_hash}-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'subscriber_hash'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/reports/{campaign_id}/abuse-reports-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/reports/{campaign_id}/advice-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/reports/{campaign_id}/open-details-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'since'
            },
            {
                name: 'sort_field'
            },
            {
                name: 'sort_dir'
            },
        ]
    },
    '/reports/{campaign_id}/sent-to-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/reports-GET': {
        parameters: [
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'type'
            },
            {
                name: 'before_send_time'
            },
            {
                name: 'since_send_time'
            },
        ]
    },
    '/reports/{campaign_id}/sub-reports-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/reports/{campaign_id}/click-details/{link_id}/members-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'link_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/reports/{campaign_id}/domain-performance-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/reports/{campaign_id}/eepurl-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/reports/{campaign_id}/email-activity-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'since'
            },
        ]
    },
    '/reports/{campaign_id}/locations-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/reports/{campaign_id}/unsubscribed-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/reports/{campaign_id}/open-details/{subscriber_hash}-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'subscriber_hash'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/reports/{campaign_id}-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/reports/{campaign_id}/click-details/{link_id}-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'link_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/reports/{campaign_id}/click-details/{link_id}/members/{subscriber_hash}-GET': {
        parameters: [
            {
                name: 'campaign_id'
            },
            {
                name: 'link_id'
            },
            {
                name: 'subscriber_hash'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/-GET': {
        parameters: [
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/search-campaigns-GET': {
        parameters: [
            {
                name: 'query'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/search-members-GET': {
        parameters: [
            {
                name: 'query'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'list_id'
            },
        ]
    },
    '/template-folders-POST': {
        parameters: [
            {
                name: 'name'
            },
        ]
    },
    '/template-folders/{folder_id}-DELETE': {
        parameters: [
            {
                name: 'folder_id'
            },
        ]
    },
    '/template-folders/{folder_id}-GET': {
        parameters: [
            {
                name: 'folder_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/template-folders-GET': {
        parameters: [
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
        ]
    },
    '/template-folders/{folder_id}-PATCH': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'folder_id'
            },
        ]
    },
    '/templates-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'html'
            },
            {
                name: 'folder_id'
            },
        ]
    },
    '/templates/{template_id}-DELETE': {
        parameters: [
            {
                name: 'template_id'
            },
        ]
    },
    '/templates/{template_id}-GET': {
        parameters: [
            {
                name: 'template_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/templates-GET': {
        parameters: [
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
            {
                name: 'count'
            },
            {
                name: 'offset'
            },
            {
                name: 'created_by'
            },
            {
                name: 'since_date_created'
            },
            {
                name: 'before_date_created'
            },
            {
                name: 'type'
            },
            {
                name: 'category'
            },
            {
                name: 'folder_id'
            },
            {
                name: 'sort_field'
            },
            {
                name: 'content_type'
            },
            {
                name: 'sort_dir'
            },
        ]
    },
    '/templates/{template_id}-PATCH': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'html'
            },
            {
                name: 'template_id'
            },
            {
                name: 'folder_id'
            },
        ]
    },
    '/templates/{template_id}/default-content-GET': {
        parameters: [
            {
                name: 'template_id'
            },
            {
                name: 'fields'
            },
            {
                name: 'exclude_fields'
            },
        ]
    },
    '/verified-domains-POST': {
        parameters: [
            {
                name: 'verification_email'
            },
        ]
    },
    '/verified-domains/{domain_name}-DELETE': {
        parameters: [
            {
                name: 'domain_name'
            },
        ]
    },
    '/verified-domains/{domain_name}-GET': {
        parameters: [
            {
                name: 'domain_name'
            },
        ]
    },
    '/verified-domains-GET': {
        parameters: [
        ]
    },
    '/verified-domains/{domain_name}/actions/verify-POST': {
        parameters: [
            {
                name: 'code'
            },
            {
                name: 'domain_name'
            },
        ]
    },
}