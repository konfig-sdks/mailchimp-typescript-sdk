<div align="left">

[![Visit Mailchimp](./header.png)](https://mailchimp.com&#x2F;)

# [Mailchimp](https://mailchimp.com&#x2F;)<a id="mailchimp"></a>

Mailchimp is a marketing platform for small businesses. It offers an all-in-one marketing solution that includes email marketing, ads, landing pages, and automation. With Mailchimp, businesses can design and send targeted campaigns, analyze their performance, and grow their audience.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`mailchimp.surveys.generateCampaign`](#mailchimpsurveysgeneratecampaign)
  * [`mailchimp.surveys.publishSurveyAction`](#mailchimpsurveyspublishsurveyaction)
  * [`mailchimp.surveys.unpublishSurveyAction`](#mailchimpsurveysunpublishsurveyaction)
  * [`mailchimp.accountExport.info`](#mailchimpaccountexportinfo)
  * [`mailchimp.accountExports.createNewExport`](#mailchimpaccountexportscreatenewexport)
  * [`mailchimp.accountExports.listForGivenAccount`](#mailchimpaccountexportslistforgivenaccount)
  * [`mailchimp.activityFeed.getLatestChimpChatter`](#mailchimpactivityfeedgetlatestchimpchatter)
  * [`mailchimp.authorizedApps.getInfo`](#mailchimpauthorizedappsgetinfo)
  * [`mailchimp.authorizedApps.listConnectedApplications`](#mailchimpauthorizedappslistconnectedapplications)
  * [`mailchimp.automations.addSubscriberToWorkflowEmail`](#mailchimpautomationsaddsubscribertoworkflowemail)
  * [`mailchimp.automations.archiveAction`](#mailchimpautomationsarchiveaction)
  * [`mailchimp.automations.classicAutomationSubscriberInfo`](#mailchimpautomationsclassicautomationsubscriberinfo)
  * [`mailchimp.automations.createClassic`](#mailchimpautomationscreateclassic)
  * [`mailchimp.automations.deleteWorkflowEmail`](#mailchimpautomationsdeleteworkflowemail)
  * [`mailchimp.automations.getClassicWorkflowEmails`](#mailchimpautomationsgetclassicworkflowemails)
  * [`mailchimp.automations.getClassicWorkflowInfo`](#mailchimpautomationsgetclassicworkflowinfo)
  * [`mailchimp.automations.getEmailInfo`](#mailchimpautomationsgetemailinfo)
  * [`mailchimp.automations.getRemovedSubscriberInfo`](#mailchimpautomationsgetremovedsubscriberinfo)
  * [`mailchimp.automations.getRemovedSubscribers`](#mailchimpautomationsgetremovedsubscribers)
  * [`mailchimp.automations.listQueueEmails`](#mailchimpautomationslistqueueemails)
  * [`mailchimp.automations.listSummary`](#mailchimpautomationslistsummary)
  * [`mailchimp.automations.pauseAutomatedEmail`](#mailchimpautomationspauseautomatedemail)
  * [`mailchimp.automations.pauseWorkflowEmails`](#mailchimpautomationspauseworkflowemails)
  * [`mailchimp.automations.removeSubscriberFromWorkflow`](#mailchimpautomationsremovesubscriberfromworkflow)
  * [`mailchimp.automations.startAllEmails`](#mailchimpautomationsstartallemails)
  * [`mailchimp.automations.startAutomatedEmail`](#mailchimpautomationsstartautomatedemail)
  * [`mailchimp.automations.updateWorkflowEmail`](#mailchimpautomationsupdateworkflowemail)
  * [`mailchimp.batchWebhooks.addWebhook`](#mailchimpbatchwebhooksaddwebhook)
  * [`mailchimp.batchWebhooks.getInfo`](#mailchimpbatchwebhooksgetinfo)
  * [`mailchimp.batchWebhooks.listWebhooks`](#mailchimpbatchwebhookslistwebhooks)
  * [`mailchimp.batchWebhooks.removeWebhook`](#mailchimpbatchwebhooksremovewebhook)
  * [`mailchimp.batchWebhooks.updateWebhook`](#mailchimpbatchwebhooksupdatewebhook)
  * [`mailchimp.batches.getOperationStatus`](#mailchimpbatchesgetoperationstatus)
  * [`mailchimp.batches.listRequestsSummary`](#mailchimpbatcheslistrequestssummary)
  * [`mailchimp.batches.startOperationProcess`](#mailchimpbatchesstartoperationprocess)
  * [`mailchimp.batches.stopRequest`](#mailchimpbatchesstoprequest)
  * [`mailchimp.campaignFolders.addNewFolder`](#mailchimpcampaignfoldersaddnewfolder)
  * [`mailchimp.campaignFolders.deleteFolder`](#mailchimpcampaignfoldersdeletefolder)
  * [`mailchimp.campaignFolders.getFolderInfo`](#mailchimpcampaignfoldersgetfolderinfo)
  * [`mailchimp.campaignFolders.listCampaignFolders`](#mailchimpcampaignfolderslistcampaignfolders)
  * [`mailchimp.campaignFolders.updateSpecificFolder`](#mailchimpcampaignfoldersupdatespecificfolder)
  * [`mailchimp.campaigns.addFeedback`](#mailchimpcampaignsaddfeedback)
  * [`mailchimp.campaigns.cancelSendAction`](#mailchimpcampaignscancelsendaction)
  * [`mailchimp.campaigns.createNewMailchimpCampaign`](#mailchimpcampaignscreatenewmailchimpcampaign)
  * [`mailchimp.campaigns.getAll`](#mailchimpcampaignsgetall)
  * [`mailchimp.campaigns.getContent`](#mailchimpcampaignsgetcontent)
  * [`mailchimp.campaigns.getFeedbackMessage`](#mailchimpcampaignsgetfeedbackmessage)
  * [`mailchimp.campaigns.getInfo`](#mailchimpcampaignsgetinfo)
  * [`mailchimp.campaigns.getSendChecklist`](#mailchimpcampaignsgetsendchecklist)
  * [`mailchimp.campaigns.listFeedback`](#mailchimpcampaignslistfeedback)
  * [`mailchimp.campaigns.pauseRssCampaign`](#mailchimpcampaignspausersscampaign)
  * [`mailchimp.campaigns.removeCampaign`](#mailchimpcampaignsremovecampaign)
  * [`mailchimp.campaigns.removeFeedbackMessage`](#mailchimpcampaignsremovefeedbackmessage)
  * [`mailchimp.campaigns.replicateAction`](#mailchimpcampaignsreplicateaction)
  * [`mailchimp.campaigns.resendAction`](#mailchimpcampaignsresendaction)
  * [`mailchimp.campaigns.resumeRssCampaign`](#mailchimpcampaignsresumersscampaign)
  * [`mailchimp.campaigns.scheduleDelivery`](#mailchimpcampaignsscheduledelivery)
  * [`mailchimp.campaigns.sendAction`](#mailchimpcampaignssendaction)
  * [`mailchimp.campaigns.sendTestEmail`](#mailchimpcampaignssendtestemail)
  * [`mailchimp.campaigns.setContent`](#mailchimpcampaignssetcontent)
  * [`mailchimp.campaigns.unscheduleAction`](#mailchimpcampaignsunscheduleaction)
  * [`mailchimp.campaigns.updateFeedbackMessage`](#mailchimpcampaignsupdatefeedbackmessage)
  * [`mailchimp.campaigns.updateSettings`](#mailchimpcampaignsupdatesettings)
  * [`mailchimp.connectedSites.createNewMailchimpSite`](#mailchimpconnectedsitescreatenewmailchimpsite)
  * [`mailchimp.connectedSites.getInfo`](#mailchimpconnectedsitesgetinfo)
  * [`mailchimp.connectedSites.listAll`](#mailchimpconnectedsiteslistall)
  * [`mailchimp.connectedSites.removeSite`](#mailchimpconnectedsitesremovesite)
  * [`mailchimp.connectedSites.verifyScriptInstallation`](#mailchimpconnectedsitesverifyscriptinstallation)
  * [`mailchimp.conversations.getAllConversations`](#mailchimpconversationsgetallconversations)
  * [`mailchimp.conversations.getById`](#mailchimpconversationsgetbyid)
  * [`mailchimp.conversations.getMessageById`](#mailchimpconversationsgetmessagebyid)
  * [`mailchimp.conversations.listMessagesFromConversation`](#mailchimpconversationslistmessagesfromconversation)
  * [`mailchimp.customerJourneys.triggerStepAction`](#mailchimpcustomerjourneystriggerstepaction)
  * [`mailchimp.ecommerce.addCartLineItem`](#mailchimpecommerceaddcartlineitem)
  * [`mailchimp.ecommerce.addCartToStore`](#mailchimpecommerceaddcarttostore)
  * [`mailchimp.ecommerce.addCustomerToStore`](#mailchimpecommerceaddcustomertostore)
  * [`mailchimp.ecommerce.addOrUpdateCustomer`](#mailchimpecommerceaddorupdatecustomer)
  * [`mailchimp.ecommerce.addOrUpdateProductVariant`](#mailchimpecommerceaddorupdateproductvariant)
  * [`mailchimp.ecommerce.addOrderLineItem`](#mailchimpecommerceaddorderlineitem)
  * [`mailchimp.ecommerce.addOrderToStore`](#mailchimpecommerceaddordertostore)
  * [`mailchimp.ecommerce.addProductImage`](#mailchimpecommerceaddproductimage)
  * [`mailchimp.ecommerce.addProductToStore`](#mailchimpecommerceaddproducttostore)
  * [`mailchimp.ecommerce.addProductVariant`](#mailchimpecommerceaddproductvariant)
  * [`mailchimp.ecommerce.addPromoCode`](#mailchimpecommerceaddpromocode)
  * [`mailchimp.ecommerce.addPromoRule`](#mailchimpecommerceaddpromorule)
  * [`mailchimp.ecommerce.addStoreToMailchimpAccount`](#mailchimpecommerceaddstoretomailchimpaccount)
  * [`mailchimp.ecommerce.deleteCartLineItem`](#mailchimpecommercedeletecartlineitem)
  * [`mailchimp.ecommerce.deleteOrder`](#mailchimpecommercedeleteorder)
  * [`mailchimp.ecommerce.deleteOrderLine`](#mailchimpecommercedeleteorderline)
  * [`mailchimp.ecommerce.deleteProduct`](#mailchimpecommercedeleteproduct)
  * [`mailchimp.ecommerce.deleteProductImage`](#mailchimpecommercedeleteproductimage)
  * [`mailchimp.ecommerce.deleteProductVariant`](#mailchimpecommercedeleteproductvariant)
  * [`mailchimp.ecommerce.deletePromoCode`](#mailchimpecommercedeletepromocode)
  * [`mailchimp.ecommerce.deletePromoRule`](#mailchimpecommercedeletepromorule)
  * [`mailchimp.ecommerce.deleteStore`](#mailchimpecommercedeletestore)
  * [`mailchimp.ecommerce.getCartInfo`](#mailchimpecommercegetcartinfo)
  * [`mailchimp.ecommerce.getCartLineItem`](#mailchimpecommercegetcartlineitem)
  * [`mailchimp.ecommerce.getCustomerInfo`](#mailchimpecommercegetcustomerinfo)
  * [`mailchimp.ecommerce.getOrderLineItem`](#mailchimpecommercegetorderlineitem)
  * [`mailchimp.ecommerce.getProductImageInfo`](#mailchimpecommercegetproductimageinfo)
  * [`mailchimp.ecommerce.getProductImages`](#mailchimpecommercegetproductimages)
  * [`mailchimp.ecommerce.getProductVariantInfo`](#mailchimpecommercegetproductvariantinfo)
  * [`mailchimp.ecommerce.getPromoCode`](#mailchimpecommercegetpromocode)
  * [`mailchimp.ecommerce.getStoreCarts`](#mailchimpecommercegetstorecarts)
  * [`mailchimp.ecommerce.getStoreCustomers`](#mailchimpecommercegetstorecustomers)
  * [`mailchimp.ecommerce.getStoreInfo`](#mailchimpecommercegetstoreinfo)
  * [`mailchimp.ecommerce.getStoreOrderInfo`](#mailchimpecommercegetstoreorderinfo)
  * [`mailchimp.ecommerce.getStoreOrderLines`](#mailchimpecommercegetstoreorderlines)
  * [`mailchimp.ecommerce.getStoreProductInfo`](#mailchimpecommercegetstoreproductinfo)
  * [`mailchimp.ecommerce.getStoreProducts`](#mailchimpecommercegetstoreproducts)
  * [`mailchimp.ecommerce.getStorePromoCodes`](#mailchimpecommercegetstorepromocodes)
  * [`mailchimp.ecommerce.getStorePromoRule`](#mailchimpecommercegetstorepromorule)
  * [`mailchimp.ecommerce.getStorePromoRules`](#mailchimpecommercegetstorepromorules)
  * [`mailchimp.ecommerce.listAccountOrders`](#mailchimpecommercelistaccountorders)
  * [`mailchimp.ecommerce.listCartLines`](#mailchimpecommercelistcartlines)
  * [`mailchimp.ecommerce.listProductVariants`](#mailchimpecommercelistproductvariants)
  * [`mailchimp.ecommerce.listStoreOrders`](#mailchimpecommerceliststoreorders)
  * [`mailchimp.ecommerce.listStores`](#mailchimpecommerceliststores)
  * [`mailchimp.ecommerce.removeCart`](#mailchimpecommerceremovecart)
  * [`mailchimp.ecommerce.removeCustomer`](#mailchimpecommerceremovecustomer)
  * [`mailchimp.ecommerce.updateCartById`](#mailchimpecommerceupdatecartbyid)
  * [`mailchimp.ecommerce.updateCartLineItem`](#mailchimpecommerceupdatecartlineitem)
  * [`mailchimp.ecommerce.updateCustomer`](#mailchimpecommerceupdatecustomer)
  * [`mailchimp.ecommerce.updateOrderLine`](#mailchimpecommerceupdateorderline)
  * [`mailchimp.ecommerce.updateProduct`](#mailchimpecommerceupdateproduct)
  * [`mailchimp.ecommerce.updateProductImage`](#mailchimpecommerceupdateproductimage)
  * [`mailchimp.ecommerce.updateProductVariant`](#mailchimpecommerceupdateproductvariant)
  * [`mailchimp.ecommerce.updatePromoCode`](#mailchimpecommerceupdatepromocode)
  * [`mailchimp.ecommerce.updatePromoRule`](#mailchimpecommerceupdatepromorule)
  * [`mailchimp.ecommerce.updateSpecificOrder`](#mailchimpecommerceupdatespecificorder)
  * [`mailchimp.ecommerce.updateStore`](#mailchimpecommerceupdatestore)
  * [`mailchimp.facebookAds.getInfo`](#mailchimpfacebookadsgetinfo)
  * [`mailchimp.facebookAds.listAds`](#mailchimpfacebookadslistads)
  * [`mailchimp.fileManager.addNewFolder`](#mailchimpfilemanageraddnewfolder)
  * [`mailchimp.fileManager.deleteFolderById`](#mailchimpfilemanagerdeletefolderbyid)
  * [`mailchimp.fileManager.getFile`](#mailchimpfilemanagergetfile)
  * [`mailchimp.fileManager.getFolderInfo`](#mailchimpfilemanagergetfolderinfo)
  * [`mailchimp.fileManager.getFolderList`](#mailchimpfilemanagergetfolderlist)
  * [`mailchimp.fileManager.listStoredFiles`](#mailchimpfilemanagerliststoredfiles)
  * [`mailchimp.fileManager.listStoredFiles_0`](#mailchimpfilemanagerliststoredfiles_0)
  * [`mailchimp.fileManager.removeFileById`](#mailchimpfilemanagerremovefilebyid)
  * [`mailchimp.fileManager.updateFile`](#mailchimpfilemanagerupdatefile)
  * [`mailchimp.fileManager.updateSpecificFolder`](#mailchimpfilemanagerupdatespecificfolder)
  * [`mailchimp.fileManager.uploadFile`](#mailchimpfilemanageruploadfile)
  * [`mailchimp.landingPages.createNewMailchimpLandingPage`](#mailchimplandingpagescreatenewmailchimplandingpage)
  * [`mailchimp.landingPages.deletePage`](#mailchimplandingpagesdeletepage)
  * [`mailchimp.landingPages.getContent`](#mailchimplandingpagesgetcontent)
  * [`mailchimp.landingPages.getPageInfo`](#mailchimplandingpagesgetpageinfo)
  * [`mailchimp.landingPages.list`](#mailchimplandingpageslist)
  * [`mailchimp.landingPages.publishAction`](#mailchimplandingpagespublishaction)
  * [`mailchimp.landingPages.unpublishAction`](#mailchimplandingpagesunpublishaction)
  * [`mailchimp.landingPages.updatePageById`](#mailchimplandingpagesupdatepagebyid)
  * [`mailchimp.lists.addInterestCategory`](#mailchimplistsaddinterestcategory)
  * [`mailchimp.lists.addInterestInCategory`](#mailchimplistsaddinterestincategory)
  * [`mailchimp.lists.addMemberEvent`](#mailchimplistsaddmemberevent)
  * [`mailchimp.lists.addMemberNote`](#mailchimplistsaddmembernote)
  * [`mailchimp.lists.addMemberTags`](#mailchimplistsaddmembertags)
  * [`mailchimp.lists.addMemberToList`](#mailchimplistsaddmembertolist)
  * [`mailchimp.lists.addMemberToSegment`](#mailchimplistsaddmembertosegment)
  * [`mailchimp.lists.addMergeField`](#mailchimplistsaddmergefield)
  * [`mailchimp.lists.addNewSegment`](#mailchimplistsaddnewsegment)
  * [`mailchimp.lists.addOrUpdateMember`](#mailchimplistsaddorupdatemember)
  * [`mailchimp.lists.archiveMember`](#mailchimplistsarchivemember)
  * [`mailchimp.lists.batchAddRemoveMembers`](#mailchimplistsbatchaddremovemembers)
  * [`mailchimp.lists.batchSubscribeOrUnsubscribe`](#mailchimplistsbatchsubscribeorunsubscribe)
  * [`mailchimp.lists.createNewList`](#mailchimplistscreatenewlist)
  * [`mailchimp.lists.createWebhook`](#mailchimplistscreatewebhook)
  * [`mailchimp.lists.customizeSignupForm`](#mailchimplistscustomizesignupform)
  * [`mailchimp.lists.deleteInterestCategory`](#mailchimplistsdeleteinterestcategory)
  * [`mailchimp.lists.deleteInterestInCategory`](#mailchimplistsdeleteinterestincategory)
  * [`mailchimp.lists.deleteList`](#mailchimplistsdeletelist)
  * [`mailchimp.lists.deleteMergeField`](#mailchimplistsdeletemergefield)
  * [`mailchimp.lists.deleteNote`](#mailchimplistsdeletenote)
  * [`mailchimp.lists.deleteSegment`](#mailchimplistsdeletesegment)
  * [`mailchimp.lists.deleteWebhook`](#mailchimplistsdeletewebhook)
  * [`mailchimp.lists.getAbuseReport`](#mailchimplistsgetabusereport)
  * [`mailchimp.lists.getAllAbuseReports`](#mailchimplistsgetallabusereports)
  * [`mailchimp.lists.getAllInfo`](#mailchimplistsgetallinfo)
  * [`mailchimp.lists.getGrowthHistoryByMonth`](#mailchimplistsgetgrowthhistorybymonth)
  * [`mailchimp.lists.getGrowthHistoryData`](#mailchimplistsgetgrowthhistorydata)
  * [`mailchimp.lists.getInterestCategoryInfo`](#mailchimplistsgetinterestcategoryinfo)
  * [`mailchimp.lists.getInterestInCategory`](#mailchimplistsgetinterestincategory)
  * [`mailchimp.lists.getListInfo`](#mailchimplistsgetlistinfo)
  * [`mailchimp.lists.getLocations`](#mailchimplistsgetlocations)
  * [`mailchimp.lists.getMemberEvents`](#mailchimplistsgetmemberevents)
  * [`mailchimp.lists.getMemberGoals`](#mailchimplistsgetmembergoals)
  * [`mailchimp.lists.getMemberInfo`](#mailchimplistsgetmemberinfo)
  * [`mailchimp.lists.getMemberNote`](#mailchimplistsgetmembernote)
  * [`mailchimp.lists.getMemberNotes`](#mailchimplistsgetmembernotes)
  * [`mailchimp.lists.getMemberTags`](#mailchimplistsgetmembertags)
  * [`mailchimp.lists.getMembersInfo`](#mailchimplistsgetmembersinfo)
  * [`mailchimp.lists.getMergeFieldInfo`](#mailchimplistsgetmergefieldinfo)
  * [`mailchimp.lists.getRecentActivityStats`](#mailchimplistsgetrecentactivitystats)
  * [`mailchimp.lists.getSegmentInfo`](#mailchimplistsgetsegmentinfo)
  * [`mailchimp.lists.getSegmentMembers`](#mailchimplistsgetsegmentmembers)
  * [`mailchimp.lists.getSegmentsInfo`](#mailchimplistsgetsegmentsinfo)
  * [`mailchimp.lists.getSignupForms`](#mailchimplistsgetsignupforms)
  * [`mailchimp.lists.getSurveyDetails`](#mailchimplistsgetsurveydetails)
  * [`mailchimp.lists.getSurveysInfo`](#mailchimplistsgetsurveysinfo)
  * [`mailchimp.lists.getWebhookInfo`](#mailchimplistsgetwebhookinfo)
  * [`mailchimp.lists.getWebhooksInfo`](#mailchimplistsgetwebhooksinfo)
  * [`mailchimp.lists.listCategoryInterests`](#mailchimplistslistcategoryinterests)
  * [`mailchimp.lists.listInterestCategories`](#mailchimplistslistinterestcategories)
  * [`mailchimp.lists.listMergeFields`](#mailchimplistslistmergefields)
  * [`mailchimp.lists.listTopEmailClients`](#mailchimplistslisttopemailclients)
  * [`mailchimp.lists.removeMemberFromSegment`](#mailchimplistsremovememberfromsegment)
  * [`mailchimp.lists.removeMemberPermanent`](#mailchimplistsremovememberpermanent)
  * [`mailchimp.lists.searchTagsByName`](#mailchimplistssearchtagsbyname)
  * [`mailchimp.lists.updateInterestCategory`](#mailchimplistsupdateinterestcategory)
  * [`mailchimp.lists.updateInterestCategoryInterest`](#mailchimplistsupdateinterestcategoryinterest)
  * [`mailchimp.lists.updateMember`](#mailchimplistsupdatemember)
  * [`mailchimp.lists.updateMergeField`](#mailchimplistsupdatemergefield)
  * [`mailchimp.lists.updateNoteSpecificListMember`](#mailchimplistsupdatenotespecificlistmember)
  * [`mailchimp.lists.updateSegmentById`](#mailchimplistsupdatesegmentbyid)
  * [`mailchimp.lists.updateSettings`](#mailchimplistsupdatesettings)
  * [`mailchimp.lists.updateWebhookSettings`](#mailchimplistsupdatewebhooksettings)
  * [`mailchimp.lists.viewRecentActivity`](#mailchimplistsviewrecentactivity)
  * [`mailchimp.lists.viewRecentActivityEvents`](#mailchimplistsviewrecentactivityevents)
  * [`mailchimp.ping.healthCheck`](#mailchimppinghealthcheck)
  * [`mailchimp.reporting.facebookAdReport`](#mailchimpreportingfacebookadreport)
  * [`mailchimp.reporting.getLandingPageReport`](#mailchimpreportinggetlandingpagereport)
  * [`mailchimp.reporting.getSurveyReport`](#mailchimpreportinggetsurveyreport)
  * [`mailchimp.reporting.listFacebookAdsReports`](#mailchimpreportinglistfacebookadsreports)
  * [`mailchimp.reporting.listFacebookEcommerceReport`](#mailchimpreportinglistfacebookecommercereport)
  * [`mailchimp.reporting.listLandingPagesReports`](#mailchimpreportinglistlandingpagesreports)
  * [`mailchimp.reporting.listSurveyQuestionsReports`](#mailchimpreportinglistsurveyquestionsreports)
  * [`mailchimp.reporting.listSurveyReports`](#mailchimpreportinglistsurveyreports)
  * [`mailchimp.reporting.singleSurveyResponse`](#mailchimpreportingsinglesurveyresponse)
  * [`mailchimp.reporting.surveyQuestionAnswersList`](#mailchimpreportingsurveyquestionanswerslist)
  * [`mailchimp.reporting.surveyQuestionReport`](#mailchimpreportingsurveyquestionreport)
  * [`mailchimp.reporting.surveyResponsesList`](#mailchimpreportingsurveyresponseslist)
  * [`mailchimp.reports.campaignRecipientInfo`](#mailchimpreportscampaignrecipientinfo)
  * [`mailchimp.reports.getAbuseReport`](#mailchimpreportsgetabusereport)
  * [`mailchimp.reports.getCampaignClickDetails`](#mailchimpreportsgetcampaignclickdetails)
  * [`mailchimp.reports.getCampaignProductActivity`](#mailchimpreportsgetcampaignproductactivity)
  * [`mailchimp.reports.getSubscriberActivity`](#mailchimpreportsgetsubscriberactivity)
  * [`mailchimp.reports.getUnsubscribedMemberInfo`](#mailchimpreportsgetunsubscribedmemberinfo)
  * [`mailchimp.reports.listAbuseReports`](#mailchimpreportslistabusereports)
  * [`mailchimp.reports.listCampaignFeedback`](#mailchimpreportslistcampaignfeedback)
  * [`mailchimp.reports.listCampaignOpenDetails`](#mailchimpreportslistcampaignopendetails)
  * [`mailchimp.reports.listCampaignRecipients`](#mailchimpreportslistcampaignrecipients)
  * [`mailchimp.reports.listCampaignReports`](#mailchimpreportslistcampaignreports)
  * [`mailchimp.reports.listChildCampaignReports`](#mailchimpreportslistchildcampaignreports)
  * [`mailchimp.reports.listClickedLinkSubscribers`](#mailchimpreportslistclickedlinksubscribers)
  * [`mailchimp.reports.listDomainPerformanceStats`](#mailchimpreportslistdomainperformancestats)
  * [`mailchimp.reports.listEepurlActivity`](#mailchimpreportslisteepurlactivity)
  * [`mailchimp.reports.listEmailActivity`](#mailchimpreportslistemailactivity)
  * [`mailchimp.reports.listTopOpenLocations`](#mailchimpreportslisttopopenlocations)
  * [`mailchimp.reports.listUnsubscribedMembers`](#mailchimpreportslistunsubscribedmembers)
  * [`mailchimp.reports.openSubscriberDetails`](#mailchimpreportsopensubscriberdetails)
  * [`mailchimp.reports.specificCampaignReport`](#mailchimpreportsspecificcampaignreport)
  * [`mailchimp.reports.specificLinkDetails`](#mailchimpreportsspecificlinkdetails)
  * [`mailchimp.reports.specificLinkSubscriber`](#mailchimpreportsspecificlinksubscriber)
  * [`mailchimp.root.listResources`](#mailchimprootlistresources)
  * [`mailchimp.searchCampaigns.byQueryTerms`](#mailchimpsearchcampaignsbyqueryterms)
  * [`mailchimp.searchMembers.listMembers`](#mailchimpsearchmemberslistmembers)
  * [`mailchimp.templateFolders.addNewFolder`](#mailchimptemplatefoldersaddnewfolder)
  * [`mailchimp.templateFolders.deleteSpecificFolder`](#mailchimptemplatefoldersdeletespecificfolder)
  * [`mailchimp.templateFolders.getInfo`](#mailchimptemplatefoldersgetinfo)
  * [`mailchimp.templateFolders.listFolders`](#mailchimptemplatefolderslistfolders)
  * [`mailchimp.templateFolders.updateSpecificFolder`](#mailchimptemplatefoldersupdatespecificfolder)
  * [`mailchimp.templates.createNewTemplate`](#mailchimptemplatescreatenewtemplate)
  * [`mailchimp.templates.deleteSpecificTemplate`](#mailchimptemplatesdeletespecifictemplate)
  * [`mailchimp.templates.getInfo`](#mailchimptemplatesgetinfo)
  * [`mailchimp.templates.listAvailableTemplates`](#mailchimptemplateslistavailabletemplates)
  * [`mailchimp.templates.updateTemplateById`](#mailchimptemplatesupdatetemplatebyid)
  * [`mailchimp.templates.viewDefaultContent`](#mailchimptemplatesviewdefaultcontent)
  * [`mailchimp.verifiedDomains.addDomainToAccount`](#mailchimpverifieddomainsadddomaintoaccount)
  * [`mailchimp.verifiedDomains.deleteDomain`](#mailchimpverifieddomainsdeletedomain)
  * [`mailchimp.verifiedDomains.getInfo`](#mailchimpverifieddomainsgetinfo)
  * [`mailchimp.verifiedDomains.listSendingDomains`](#mailchimpverifieddomainslistsendingdomains)
  * [`mailchimp.verifiedDomains.verifyDomainForSending`](#mailchimpverifieddomainsverifydomainforsending)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Mailchimp&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Mailchimp } from "mailchimp-typescript-sdk";

const mailchimp = new Mailchimp({
  // Defining the base path is optional and defaults to https://server.api.mailchimp.com/3.0
  // basePath: "https://server.api.mailchimp.com/3.0",
});

const generateCampaignResponse = await mailchimp.surveys.generateCampaign({
  listId: "listId_example",
  surveyId: "surveyId_example",
});

console.log(generateCampaignResponse);
```

## Reference<a id="reference"></a>


### `mailchimp.surveys.generateCampaign`<a id="mailchimpsurveysgeneratecampaign"></a>

Utilize the List ID and Survey ID to generate a Campaign that links to your survey.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateCampaignResponse = await mailchimp.surveys.generateCampaign({
  listId: "listId_example",
  surveyId: "surveyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### surveyId: `string`<a id="surveyid-string"></a>

The ID of the survey.

#### 🔄 Return<a id="🔄-return"></a>

[SurveysGenerateCampaignResponse](./models/surveys-generate-campaign-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/surveys/{survey_id}/actions/create-email` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.surveys.publishSurveyAction`<a id="mailchimpsurveyspublishsurveyaction"></a>

Publish a survey that is in draft, unpublished, or has been previously published and edited.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const publishSurveyActionResponse = await mailchimp.surveys.publishSurveyAction(
  {
    listId: "listId_example",
    surveyId: "surveyId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### surveyId: `string`<a id="surveyid-string"></a>

The ID of the survey.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/surveys/{survey_id}/actions/publish` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.surveys.unpublishSurveyAction`<a id="mailchimpsurveysunpublishsurveyaction"></a>

Unpublish a survey that has been published.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unpublishSurveyActionResponse =
  await mailchimp.surveys.unpublishSurveyAction({
    listId: "listId_example",
    surveyId: "surveyId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### surveyId: `string`<a id="surveyid-string"></a>

The ID of the survey.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/surveys/{survey_id}/actions/unpublish` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.accountExport.info`<a id="mailchimpaccountexportinfo"></a>

Get information about a specific account export.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const infoResponse = await mailchimp.accountExport.info({
  exportId: "exportId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### exportId: `string`<a id="exportid-string"></a>

The unique id for the account export.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[AccountExportInfoResponse](./models/account-export-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account-exports/{export_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.accountExports.createNewExport`<a id="mailchimpaccountexportscreatenewexport"></a>

Create a new account export in your Mailchimp account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewExportResponse = await mailchimp.accountExports.createNewExport({
  include_stages: ['["audiences", "gallery_files"]'],
  since_timestamp: "2021-08-23T14:15:09Z",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### include_stages: `string`[]<a id="include_stages-string"></a>

The stages of an account export to include.

##### since_timestamp: `string`<a id="since_timestamp-string"></a>

An ISO 8601 date that will limit the export to only records created after a given time. For instance, the reports stage will contain any campaign sent after the given timestamp. Audiences, however, are excluded from this limit.

#### 🔄 Return<a id="🔄-return"></a>

[AccountExportsCreateNewExportResponse](./models/account-exports-create-new-export-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account-exports` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.accountExports.listForGivenAccount`<a id="mailchimpaccountexportslistforgivenaccount"></a>

Get a list of account exports for a given account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listForGivenAccountResponse =
  await mailchimp.accountExports.listForGivenAccount({
    count: 10,
    offset: 0,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[AccountExportsListForGivenAccountResponse](./models/account-exports-list-for-given-account-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account-exports` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.activityFeed.getLatestChimpChatter`<a id="mailchimpactivityfeedgetlatestchimpchatter"></a>

Return the Chimp Chatter for this account ordered by most recent.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLatestChimpChatterResponse =
  await mailchimp.activityFeed.getLatestChimpChatter({
    count: 10,
    offset: 0,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[ActivityFeedGetLatestChimpChatterResponse](./models/activity-feed-get-latest-chimp-chatter-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/activity-feed/chimp-chatter` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.authorizedApps.getInfo`<a id="mailchimpauthorizedappsgetinfo"></a>

Get information about a specific authorized application.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInfoResponse = await mailchimp.authorizedApps.getInfo({
  appId: "appId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### appId: `string`<a id="appid-string"></a>

The unique id for the connected authorized application.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[AuthorizedAppsGetInfoResponse](./models/authorized-apps-get-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/authorized-apps/{app_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.authorizedApps.listConnectedApplications`<a id="mailchimpauthorizedappslistconnectedapplications"></a>

Get a list of an account's registered, connected applications.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listConnectedApplicationsResponse =
  await mailchimp.authorizedApps.listConnectedApplications({
    count: 10,
    offset: 0,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[AuthorizedAppsListConnectedApplicationsResponse](./models/authorized-apps-list-connected-applications-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/authorized-apps` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.automations.addSubscriberToWorkflowEmail`<a id="mailchimpautomationsaddsubscribertoworkflowemail"></a>

Manually add a subscriber to a workflow, bypassing the default trigger settings. You can also use this endpoint to trigger a series of automated emails in an API 3.0 workflow type.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addSubscriberToWorkflowEmailResponse =
  await mailchimp.automations.addSubscriberToWorkflowEmail({
    workflowId: "workflowId_example",
    workflowEmailId: "workflowEmailId_example",
    email_address: "email_address_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email_address: `string`<a id="email_address-string"></a>

The list member\\\'s email address.

##### workflowId: `string`<a id="workflowid-string"></a>

The unique id for the Automation workflow.

##### workflowEmailId: `string`<a id="workflowemailid-string"></a>

The unique id for the Automation workflow email.

#### 🔄 Return<a id="🔄-return"></a>

[AutomationsAddSubscriberToWorkflowEmailResponse](./models/automations-add-subscriber-to-workflow-email-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/automations/{workflow_id}/emails/{workflow_email_id}/queue` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.automations.archiveAction`<a id="mailchimpautomationsarchiveaction"></a>

Archiving will permanently end your automation and keep the report data. You’ll be able to replicate your archived automation, but you can’t restart it.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const archiveActionResponse = await mailchimp.automations.archiveAction({
  workflowId: "workflowId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workflowId: `string`<a id="workflowid-string"></a>

The unique id for the Automation workflow.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/automations/{workflow_id}/actions/archive` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.automations.classicAutomationSubscriberInfo`<a id="mailchimpautomationsclassicautomationsubscriberinfo"></a>

Get information about a specific subscriber in a classic automation email queue.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const classicAutomationSubscriberInfoResponse =
  await mailchimp.automations.classicAutomationSubscriberInfo({
    workflowId: "workflowId_example",
    workflowEmailId: "workflowEmailId_example",
    subscriberHash: "subscriberHash_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workflowId: `string`<a id="workflowid-string"></a>

The unique id for the Automation workflow.

##### workflowEmailId: `string`<a id="workflowemailid-string"></a>

The unique id for the Automation workflow email.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address.

#### 🔄 Return<a id="🔄-return"></a>

[AutomationsClassicAutomationSubscriberInfoResponse](./models/automations-classic-automation-subscriber-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/automations/{workflow_id}/emails/{workflow_email_id}/queue/{subscriber_hash}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.automations.createClassic`<a id="mailchimpautomationscreateclassic"></a>

Create a new classic automation in your Mailchimp account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createClassicResponse = await mailchimp.automations.createClassic({
  recipients: {
    list_id: "1a2df69xxx",
    store_id: "1a2df69xxx",
  },
  trigger_settings: {
    workflow_type: "workflow_type_example",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### recipients: [`ListProperty`](./models/list-property.ts)<a id="recipients-listpropertymodelslist-propertyts"></a>

##### trigger_settings: [`AutomationTriggerProperty`](./models/automation-trigger-property.ts)<a id="trigger_settings-automationtriggerpropertymodelsautomation-trigger-propertyts"></a>

##### settings: [`AutomationCampaignSettingsProperty`](./models/automation-campaign-settings-property.ts)<a id="settings-automationcampaignsettingspropertymodelsautomation-campaign-settings-propertyts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AutomationsCreateClassicResponse](./models/automations-create-classic-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/automations` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.automations.deleteWorkflowEmail`<a id="mailchimpautomationsdeleteworkflowemail"></a>

Removes an individual classic automation workflow email. Emails from certain workflow types, including the Abandoned Cart Email (abandonedCart) and Product Retargeting Email (abandonedBrowse) Workflows, cannot be deleted.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteWorkflowEmailResponse =
  await mailchimp.automations.deleteWorkflowEmail({
    workflowId: "workflowId_example",
    workflowEmailId: "workflowEmailId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workflowId: `string`<a id="workflowid-string"></a>

The unique id for the Automation workflow.

##### workflowEmailId: `string`<a id="workflowemailid-string"></a>

The unique id for the Automation workflow email.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/automations/{workflow_id}/emails/{workflow_email_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.automations.getClassicWorkflowEmails`<a id="mailchimpautomationsgetclassicworkflowemails"></a>

Get a summary of the emails in a classic automation workflow.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getClassicWorkflowEmailsResponse =
  await mailchimp.automations.getClassicWorkflowEmails({
    workflowId: "workflowId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workflowId: `string`<a id="workflowid-string"></a>

The unique id for the Automation workflow.

#### 🔄 Return<a id="🔄-return"></a>

[AutomationsGetClassicWorkflowEmailsResponse](./models/automations-get-classic-workflow-emails-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/automations/{workflow_id}/emails` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.automations.getClassicWorkflowInfo`<a id="mailchimpautomationsgetclassicworkflowinfo"></a>

Get a summary of an individual classic automation workflow's settings and content. The `trigger_settings` object returns information for the first email in the workflow.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getClassicWorkflowInfoResponse =
  await mailchimp.automations.getClassicWorkflowInfo({
    workflowId: "workflowId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workflowId: `string`<a id="workflowid-string"></a>

The unique id for the Automation workflow.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[AutomationsGetClassicWorkflowInfoResponse](./models/automations-get-classic-workflow-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/automations/{workflow_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.automations.getEmailInfo`<a id="mailchimpautomationsgetemailinfo"></a>

Get information about an individual classic automation workflow email.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmailInfoResponse = await mailchimp.automations.getEmailInfo({
  workflowId: "workflowId_example",
  workflowEmailId: "workflowEmailId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workflowId: `string`<a id="workflowid-string"></a>

The unique id for the Automation workflow.

##### workflowEmailId: `string`<a id="workflowemailid-string"></a>

The unique id for the Automation workflow email.

#### 🔄 Return<a id="🔄-return"></a>

[AutomationsGetEmailInfoResponse](./models/automations-get-email-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/automations/{workflow_id}/emails/{workflow_email_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.automations.getRemovedSubscriberInfo`<a id="mailchimpautomationsgetremovedsubscriberinfo"></a>

Get information about a specific subscriber who was removed from a classic automation workflow.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRemovedSubscriberInfoResponse =
  await mailchimp.automations.getRemovedSubscriberInfo({
    workflowId: "workflowId_example",
    subscriberHash: "subscriberHash_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workflowId: `string`<a id="workflowid-string"></a>

The unique id for the Automation workflow.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address.

#### 🔄 Return<a id="🔄-return"></a>

[AutomationsGetRemovedSubscriberInfoResponse](./models/automations-get-removed-subscriber-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/automations/{workflow_id}/removed-subscribers/{subscriber_hash}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.automations.getRemovedSubscribers`<a id="mailchimpautomationsgetremovedsubscribers"></a>

Get information about subscribers who were removed from a classic automation workflow.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRemovedSubscribersResponse =
  await mailchimp.automations.getRemovedSubscribers({
    workflowId: "workflowId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workflowId: `string`<a id="workflowid-string"></a>

The unique id for the Automation workflow.

#### 🔄 Return<a id="🔄-return"></a>

[AutomationsGetRemovedSubscribersResponse](./models/automations-get-removed-subscribers-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/automations/{workflow_id}/removed-subscribers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.automations.listQueueEmails`<a id="mailchimpautomationslistqueueemails"></a>

Get information about a classic automation email queue.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listQueueEmailsResponse = await mailchimp.automations.listQueueEmails({
  workflowId: "workflowId_example",
  workflowEmailId: "workflowEmailId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workflowId: `string`<a id="workflowid-string"></a>

The unique id for the Automation workflow.

##### workflowEmailId: `string`<a id="workflowemailid-string"></a>

The unique id for the Automation workflow email.

#### 🔄 Return<a id="🔄-return"></a>

[AutomationsListQueueEmailsResponse](./models/automations-list-queue-emails-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/automations/{workflow_id}/emails/{workflow_email_id}/queue` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.automations.listSummary`<a id="mailchimpautomationslistsummary"></a>

Get a summary of an account's classic automations.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSummaryResponse = await mailchimp.automations.listSummary({
  count: 10,
  offset: 0,
  status: "save",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### beforeCreateTime: `string`<a id="beforecreatetime-string"></a>

Restrict the response to automations created before this time. Uses the ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### sinceCreateTime: `string`<a id="sincecreatetime-string"></a>

Restrict the response to automations created after this time. Uses the ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### beforeStartTime: `string`<a id="beforestarttime-string"></a>

Restrict the response to automations started before this time. Uses the ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### sinceStartTime: `string`<a id="sincestarttime-string"></a>

Restrict the response to automations started after this time. Uses the ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### status: `'save' | 'paused' | 'sending'`<a id="status-save--paused--sending"></a>

Restrict the results to automations with the specified status.

#### 🔄 Return<a id="🔄-return"></a>

[AutomationsListSummaryResponse](./models/automations-list-summary-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/automations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.automations.pauseAutomatedEmail`<a id="mailchimpautomationspauseautomatedemail"></a>

Pause an automated email.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const pauseAutomatedEmailResponse =
  await mailchimp.automations.pauseAutomatedEmail({
    workflowId: "workflowId_example",
    workflowEmailId: "workflowEmailId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workflowId: `string`<a id="workflowid-string"></a>

The unique id for the Automation workflow.

##### workflowEmailId: `string`<a id="workflowemailid-string"></a>

The unique id for the Automation workflow email.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/automations/{workflow_id}/emails/{workflow_email_id}/actions/pause` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.automations.pauseWorkflowEmails`<a id="mailchimpautomationspauseworkflowemails"></a>

Pause all emails in a specific classic automation workflow.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const pauseWorkflowEmailsResponse =
  await mailchimp.automations.pauseWorkflowEmails({
    workflowId: "workflowId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workflowId: `string`<a id="workflowid-string"></a>

The unique id for the Automation workflow.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/automations/{workflow_id}/actions/pause-all-emails` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.automations.removeSubscriberFromWorkflow`<a id="mailchimpautomationsremovesubscriberfromworkflow"></a>

Remove a subscriber from a specific classic automation workflow. You can remove a subscriber at any point in an automation workflow, regardless of how many emails they've been sent from that workflow. Once they're removed, they can never be added back to the same workflow.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeSubscriberFromWorkflowResponse =
  await mailchimp.automations.removeSubscriberFromWorkflow({
    workflowId: "workflowId_example",
    email_address: "email_address_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email_address: `string`<a id="email_address-string"></a>

The list member\\\'s email address.

##### workflowId: `string`<a id="workflowid-string"></a>

The unique id for the Automation workflow.

#### 🔄 Return<a id="🔄-return"></a>

[AutomationsRemoveSubscriberFromWorkflowResponse](./models/automations-remove-subscriber-from-workflow-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/automations/{workflow_id}/removed-subscribers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.automations.startAllEmails`<a id="mailchimpautomationsstartallemails"></a>

Start all emails in a classic automation workflow.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const startAllEmailsResponse = await mailchimp.automations.startAllEmails({
  workflowId: "workflowId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workflowId: `string`<a id="workflowid-string"></a>

The unique id for the Automation workflow.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/automations/{workflow_id}/actions/start-all-emails` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.automations.startAutomatedEmail`<a id="mailchimpautomationsstartautomatedemail"></a>

Start an automated email.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const startAutomatedEmailResponse =
  await mailchimp.automations.startAutomatedEmail({
    workflowId: "workflowId_example",
    workflowEmailId: "workflowEmailId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workflowId: `string`<a id="workflowid-string"></a>

The unique id for the Automation workflow.

##### workflowEmailId: `string`<a id="workflowemailid-string"></a>

The unique id for the Automation workflow email.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/automations/{workflow_id}/emails/{workflow_email_id}/actions/start` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.automations.updateWorkflowEmail`<a id="mailchimpautomationsupdateworkflowemail"></a>

Update settings for a classic automation workflow email.  Only works with workflows of type: abandonedBrowse, abandonedCart, emailFollowup, or singleWelcome.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateWorkflowEmailResponse =
  await mailchimp.automations.updateWorkflowEmail({
    workflowId: "workflowId_example",
    workflowEmailId: "workflowEmailId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workflowId: `string`<a id="workflowid-string"></a>

The unique id for the Automation workflow.

##### workflowEmailId: `string`<a id="workflowemailid-string"></a>

The unique id for the Automation workflow email.

##### settings: [`CampaignSettingsProperty`](./models/campaign-settings-property.ts)<a id="settings-campaignsettingspropertymodelscampaign-settings-propertyts"></a>

##### delay: [`AutomationDelayProperty`](./models/automation-delay-property.ts)<a id="delay-automationdelaypropertymodelsautomation-delay-propertyts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AutomationsUpdateWorkflowEmailResponse](./models/automations-update-workflow-email-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/automations/{workflow_id}/emails/{workflow_email_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.batchWebhooks.addWebhook`<a id="mailchimpbatchwebhooksaddwebhook"></a>

Configure a webhook that will fire whenever any batch request completes processing.  You may only have a maximum of 20 batch webhooks.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addWebhookResponse = await mailchimp.batchWebhooks.addWebhook({
  url: "http://yourdomain.com/webhook",
  enabled: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

A valid URL for the Webhook.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Whether the webhook receives requests or not.

#### 🔄 Return<a id="🔄-return"></a>

[BatchWebhooksAddWebhookResponse](./models/batch-webhooks-add-webhook-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/batch-webhooks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.batchWebhooks.getInfo`<a id="mailchimpbatchwebhooksgetinfo"></a>

Get information about a specific batch webhook.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInfoResponse = await mailchimp.batchWebhooks.getInfo({
  batchWebhookId: "batchWebhookId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### batchWebhookId: `string`<a id="batchwebhookid-string"></a>

The unique id for the batch webhook.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[BatchWebhooksGetInfoResponse](./models/batch-webhooks-get-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/batch-webhooks/{batch_webhook_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.batchWebhooks.listWebhooks`<a id="mailchimpbatchwebhookslistwebhooks"></a>

Get all webhooks that have been configured for batches.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listWebhooksResponse = await mailchimp.batchWebhooks.listWebhooks({
  count: 10,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[BatchWebhooksListWebhooksResponse](./models/batch-webhooks-list-webhooks-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/batch-webhooks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.batchWebhooks.removeWebhook`<a id="mailchimpbatchwebhooksremovewebhook"></a>

Remove a batch webhook. Webhooks will no longer be sent to the given URL.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeWebhookResponse = await mailchimp.batchWebhooks.removeWebhook({
  batchWebhookId: "batchWebhookId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### batchWebhookId: `string`<a id="batchwebhookid-string"></a>

The unique id for the batch webhook.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/batch-webhooks/{batch_webhook_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.batchWebhooks.updateWebhook`<a id="mailchimpbatchwebhooksupdatewebhook"></a>

Update a webhook that will fire whenever any batch request completes processing.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateWebhookResponse = await mailchimp.batchWebhooks.updateWebhook({
  batchWebhookId: "batchWebhookId_example",
  url: "http://yourdomain.com/webhook",
  enabled: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### batchWebhookId: `string`<a id="batchwebhookid-string"></a>

The unique id for the batch webhook.

##### url: `string`<a id="url-string"></a>

A valid URL for the Webhook.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Whether the webhook receives requests or not.

#### 🔄 Return<a id="🔄-return"></a>

[BatchWebhooksUpdateWebhookResponse](./models/batch-webhooks-update-webhook-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/batch-webhooks/{batch_webhook_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.batches.getOperationStatus`<a id="mailchimpbatchesgetoperationstatus"></a>

Get the status of a batch request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOperationStatusResponse = await mailchimp.batches.getOperationStatus({
  batchId: "batchId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### batchId: `string`<a id="batchid-string"></a>

The unique id for the batch operation.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[BatchesGetOperationStatusResponse](./models/batches-get-operation-status-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/batches/{batch_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.batches.listRequestsSummary`<a id="mailchimpbatcheslistrequestssummary"></a>

Get a summary of batch requests that have been made.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRequestsSummaryResponse = await mailchimp.batches.listRequestsSummary(
  {
    count: 10,
    offset: 0,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[BatchesListRequestsSummaryResponse](./models/batches-list-requests-summary-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/batches` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.batches.startOperationProcess`<a id="mailchimpbatchesstartoperationprocess"></a>

Begin processing a batch operations request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const startOperationProcessResponse =
  await mailchimp.batches.startOperationProcess({
    operations: [
      {
        method: "POST",
        path: "/lists",
        body: '{"title":"Test"}',
        operation_id: "my-id-123",
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### operations: [`Operations`](./models/operations.ts)[]<a id="operations-operationsmodelsoperationsts"></a>

An array of objects that describes operations to perform.

#### 🔄 Return<a id="🔄-return"></a>

[BatchesStartOperationProcessResponse](./models/batches-start-operation-process-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/batches` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.batches.stopRequest`<a id="mailchimpbatchesstoprequest"></a>

Stops a batch request from running. Since only one batch request is run at a time, this can be used to cancel a long running request. The results of any completed operations will not be available after this call.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const stopRequestResponse = await mailchimp.batches.stopRequest({
  batchId: "batchId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### batchId: `string`<a id="batchid-string"></a>

The unique id for the batch operation.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/batches/{batch_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaignFolders.addNewFolder`<a id="mailchimpcampaignfoldersaddnewfolder"></a>

Create a new campaign folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addNewFolderResponse = await mailchimp.campaignFolders.addNewFolder({
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name to associate with the folder.

#### 🔄 Return<a id="🔄-return"></a>

[CampaignFoldersAddNewFolderResponse](./models/campaign-folders-add-new-folder-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaign-folders` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaignFolders.deleteFolder`<a id="mailchimpcampaignfoldersdeletefolder"></a>

Delete a specific campaign folder, and mark all the campaigns in the folder as 'unfiled'.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteFolderResponse = await mailchimp.campaignFolders.deleteFolder({
  folderId: "folderId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique id for the campaign folder.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaign-folders/{folder_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaignFolders.getFolderInfo`<a id="mailchimpcampaignfoldersgetfolderinfo"></a>

Get information about a specific folder used to organize campaigns.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFolderInfoResponse = await mailchimp.campaignFolders.getFolderInfo({
  folderId: "folderId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique id for the campaign folder.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[CampaignFoldersGetFolderInfoResponse](./models/campaign-folders-get-folder-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaign-folders/{folder_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaignFolders.listCampaignFolders`<a id="mailchimpcampaignfolderslistcampaignfolders"></a>

Get all folders used to organize campaigns.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCampaignFoldersResponse =
  await mailchimp.campaignFolders.listCampaignFolders({
    count: 10,
    offset: 0,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[CampaignFoldersListCampaignFoldersResponse](./models/campaign-folders-list-campaign-folders-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaign-folders` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaignFolders.updateSpecificFolder`<a id="mailchimpcampaignfoldersupdatespecificfolder"></a>

Update a specific folder used to organize campaigns.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSpecificFolderResponse =
  await mailchimp.campaignFolders.updateSpecificFolder({
    folderId: "folderId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name to associate with the folder.

##### folderId: `string`<a id="folderid-string"></a>

The unique id for the campaign folder.

#### 🔄 Return<a id="🔄-return"></a>

[CampaignFoldersUpdateSpecificFolderResponse](./models/campaign-folders-update-specific-folder-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaign-folders/{folder_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaigns.addFeedback`<a id="mailchimpcampaignsaddfeedback"></a>

Add feedback on a specific campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addFeedbackResponse = await mailchimp.campaigns.addFeedback({
  campaignId: "campaignId_example",
  message: "message_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### message: `string`<a id="message-string"></a>

The content of the feedback.

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### block_id: `number`<a id="block_id-number"></a>

The block id for the editable block that the feedback addresses.

##### is_complete: `boolean`<a id="is_complete-boolean"></a>

The status of feedback.

#### 🔄 Return<a id="🔄-return"></a>

[CampaignsAddFeedbackResponse](./models/campaigns-add-feedback-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaigns/{campaign_id}/feedback` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaigns.cancelSendAction`<a id="mailchimpcampaignscancelsendaction"></a>

Cancel a Regular or Plain-Text Campaign after you send, before all of your recipients receive it. This feature is included with Mailchimp Pro.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelSendActionResponse = await mailchimp.campaigns.cancelSendAction({
  campaignId: "campaignId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaigns/{campaign_id}/actions/cancel-send` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaigns.createNewMailchimpCampaign`<a id="mailchimpcampaignscreatenewmailchimpcampaign"></a>

Create a new Mailchimp campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewMailchimpCampaignResponse =
  await mailchimp.campaigns.createNewMailchimpCampaign({
    type: "regular",
    content_type: "template",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: `string`<a id="type-string"></a>

There are four types of [campaigns](https://mailchimp.com/help/getting-started-with-campaigns/) you can create in Mailchimp. A/B Split campaigns have been deprecated and variate campaigns should be used instead.

##### recipients: [`ListProperty1`](./models/list-property1.ts)<a id="recipients-listproperty1modelslist-property1ts"></a>

##### settings: [`CampaignSettingsProperty1`](./models/campaign-settings-property1.ts)<a id="settings-campaignsettingsproperty1modelscampaign-settings-property1ts"></a>

##### variate_settings: [`ABTestOptionsProperty`](./models/abtest-options-property.ts)<a id="variate_settings-abtestoptionspropertymodelsabtest-options-propertyts"></a>

##### tracking: [`CampaignTrackingOptionsProperty`](./models/campaign-tracking-options-property.ts)<a id="tracking-campaigntrackingoptionspropertymodelscampaign-tracking-options-propertyts"></a>

##### rss_opts: [`RSSOptionsProperty`](./models/rssoptions-property.ts)<a id="rss_opts-rssoptionspropertymodelsrssoptions-propertyts"></a>

##### social_card: [`CampaignSocialCardProperty`](./models/campaign-social-card-property.ts)<a id="social_card-campaignsocialcardpropertymodelscampaign-social-card-propertyts"></a>

##### content_type: `string`<a id="content_type-string"></a>

How the campaign\\\'s content is put together. The old drag and drop editor uses \\\'template\\\' while the new editor uses \\\'multichannel\\\'. Defaults to template.

#### 🔄 Return<a id="🔄-return"></a>

[CampaignsCreateNewMailchimpCampaignResponse](./models/campaigns-create-new-mailchimp-campaign-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaigns` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaigns.getAll`<a id="mailchimpcampaignsgetall"></a>

Get all campaigns in an account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await mailchimp.campaigns.getAll({
  count: 10,
  offset: 0,
  type: "regular",
  status: "save",
  sortField: "create_time",
  sortDir: "ASC",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### type: `'regular' | 'plaintext' | 'absplit' | 'rss' | 'variate'`<a id="type-regular--plaintext--absplit--rss--variate"></a>

The campaign type.

##### status: `'save' | 'paused' | 'schedule' | 'sending' | 'sent'`<a id="status-save--paused--schedule--sending--sent"></a>

The status of the campaign.

##### beforeSendTime: `string`<a id="beforesendtime-string"></a>

Restrict the response to campaigns sent before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### sinceSendTime: `string`<a id="sincesendtime-string"></a>

Restrict the response to campaigns sent after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### beforeCreateTime: `string`<a id="beforecreatetime-string"></a>

Restrict the response to campaigns created before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### sinceCreateTime: `string`<a id="sincecreatetime-string"></a>

Restrict the response to campaigns created after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### listId: `string`<a id="listid-string"></a>

The unique id for the list.

##### folderId: `string`<a id="folderid-string"></a>

The unique folder id.

##### memberId: `string`<a id="memberid-string"></a>

Retrieve campaigns sent to a particular list member. Member ID is The MD5 hash of the lowercase version of the list member’s email address.

##### sortField: `'create_time' | 'send_time'`<a id="sortfield-create_time--send_time"></a>

Returns files sorted by the specified field.

##### sortDir: `'ASC' | 'DESC'`<a id="sortdir-asc--desc"></a>

Determines the order direction for sorted results.

##### includeResendShortcutEligibility: `boolean`<a id="includeresendshortcuteligibility-boolean"></a>

Return the `resend_shortcut_eligibility` field in the response, which tells you if the campaign is eligible for the various Campaign Resend Shortcuts offered.

#### 🔄 Return<a id="🔄-return"></a>

[CampaignsGetAllResponse](./models/campaigns-get-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaigns` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaigns.getContent`<a id="mailchimpcampaignsgetcontent"></a>

Get the the HTML and plain-text content for a campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getContentResponse = await mailchimp.campaigns.getContent({
  campaignId: "campaignId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[CampaignsGetContentResponse](./models/campaigns-get-content-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaigns/{campaign_id}/content` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaigns.getFeedbackMessage`<a id="mailchimpcampaignsgetfeedbackmessage"></a>

Get a specific feedback message from a campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFeedbackMessageResponse = await mailchimp.campaigns.getFeedbackMessage(
  {
    campaignId: "campaignId_example",
    feedbackId: "feedbackId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### feedbackId: `string`<a id="feedbackid-string"></a>

The unique id for the feedback message.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[CampaignsGetFeedbackMessageResponse](./models/campaigns-get-feedback-message-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaigns/{campaign_id}/feedback/{feedback_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaigns.getInfo`<a id="mailchimpcampaignsgetinfo"></a>

Get information about a specific campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInfoResponse = await mailchimp.campaigns.getInfo({
  campaignId: "campaignId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### includeResendShortcutEligibility: `boolean`<a id="includeresendshortcuteligibility-boolean"></a>

Return the `resend_shortcut_eligibility` field in the response, which tells you if the campaign is eligible for the various Campaign Resend Shortcuts offered.

#### 🔄 Return<a id="🔄-return"></a>

[CampaignsGetInfoResponse](./models/campaigns-get-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaigns/{campaign_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaigns.getSendChecklist`<a id="mailchimpcampaignsgetsendchecklist"></a>

Review the send checklist for a campaign, and resolve any issues before sending.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSendChecklistResponse = await mailchimp.campaigns.getSendChecklist({
  campaignId: "campaignId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[CampaignsGetSendChecklistResponse](./models/campaigns-get-send-checklist-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaigns/{campaign_id}/send-checklist` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaigns.listFeedback`<a id="mailchimpcampaignslistfeedback"></a>

Get team feedback while you're working together on a Mailchimp campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFeedbackResponse = await mailchimp.campaigns.listFeedback({
  campaignId: "campaignId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[CampaignsListFeedbackResponse](./models/campaigns-list-feedback-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaigns/{campaign_id}/feedback` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaigns.pauseRssCampaign`<a id="mailchimpcampaignspausersscampaign"></a>

Pause an RSS-Driven campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const pauseRssCampaignResponse = await mailchimp.campaigns.pauseRssCampaign({
  campaignId: "campaignId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaigns/{campaign_id}/actions/pause` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaigns.removeCampaign`<a id="mailchimpcampaignsremovecampaign"></a>

Remove a campaign from your Mailchimp account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeCampaignResponse = await mailchimp.campaigns.removeCampaign({
  campaignId: "campaignId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaigns/{campaign_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaigns.removeFeedbackMessage`<a id="mailchimpcampaignsremovefeedbackmessage"></a>

Remove a specific feedback message for a campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFeedbackMessageResponse =
  await mailchimp.campaigns.removeFeedbackMessage({
    campaignId: "campaignId_example",
    feedbackId: "feedbackId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### feedbackId: `string`<a id="feedbackid-string"></a>

The unique id for the feedback message.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaigns/{campaign_id}/feedback/{feedback_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaigns.replicateAction`<a id="mailchimpcampaignsreplicateaction"></a>

Replicate a campaign in saved or send status.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const replicateActionResponse = await mailchimp.campaigns.replicateAction({
  campaignId: "campaignId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

#### 🔄 Return<a id="🔄-return"></a>

[CampaignsReplicateActionResponse](./models/campaigns-replicate-action-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaigns/{campaign_id}/actions/replicate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaigns.resendAction`<a id="mailchimpcampaignsresendaction"></a>

Remove the guesswork for resending a campaign to certain segments. You can use this endpoint as a shortcut to replicate a campaign and resend it to common segments, such as those who didn't open the campaign, or any new subscribers since it was sent.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const resendActionResponse = await mailchimp.campaigns.resendAction({
  campaignId: "campaignId_example",
  shortcut_type: "to_non_openers",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### shortcut_type: `string`<a id="shortcut_type-string"></a>

Which campaign resend shortcut to use. Default is `to_non_openers`.

#### 🔄 Return<a id="🔄-return"></a>

[CampaignsResendActionResponse](./models/campaigns-resend-action-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaigns/{campaign_id}/actions/create-resend` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaigns.resumeRssCampaign`<a id="mailchimpcampaignsresumersscampaign"></a>

Resume an RSS-Driven campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const resumeRssCampaignResponse = await mailchimp.campaigns.resumeRssCampaign({
  campaignId: "campaignId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaigns/{campaign_id}/actions/resume` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaigns.scheduleDelivery`<a id="mailchimpcampaignsscheduledelivery"></a>

Schedule a campaign for delivery. If you're using Multivariate Campaigns to test send times or sending RSS Campaigns, use the send action instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const scheduleDeliveryResponse = await mailchimp.campaigns.scheduleDelivery({
  campaignId: "campaignId_example",
  schedule_time: "1970-01-01T00:00:00.00Z",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### schedule_time: `string`<a id="schedule_time-string"></a>

The UTC date and time to schedule the campaign for delivery in ISO 8601 format. Campaigns may only be scheduled to send on the quarter-hour (:00, :15, :30, :45).

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### timewarp: `boolean`<a id="timewarp-boolean"></a>

Choose whether the campaign should use [Timewarp](https://mailchimp.com/help/use-timewarp/) when sending. Campaigns scheduled with Timewarp are localized based on the recipients\\\' time zones. For example, a Timewarp campaign with a `schedule_time` of 13:00 will be sent to each recipient at 1:00pm in their local time. Cannot be set to `true` for campaigns using [Batch Delivery](https://mailchimp.com/help/schedule-batch-delivery/).

##### batch_delivery: [`BatchDeliveryProperty`](./models/batch-delivery-property.ts)<a id="batch_delivery-batchdeliverypropertymodelsbatch-delivery-propertyts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaigns/{campaign_id}/actions/schedule` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaigns.sendAction`<a id="mailchimpcampaignssendaction"></a>

Send a Mailchimp campaign. For RSS Campaigns, the campaign will send according to its schedule. All other campaigns will send immediately.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sendActionResponse = await mailchimp.campaigns.sendAction({
  campaignId: "campaignId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaigns/{campaign_id}/actions/send` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaigns.sendTestEmail`<a id="mailchimpcampaignssendtestemail"></a>

Send a test email.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sendTestEmailResponse = await mailchimp.campaigns.sendTestEmail({
  campaignId: "campaignId_example",
  test_emails: ["test_emails_example"],
  send_type: "html",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### test_emails: `string`[]<a id="test_emails-string"></a>

An array of email addresses to send the test email to.

##### send_type: `string`<a id="send_type-string"></a>

Choose the type of test email to send.

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaigns/{campaign_id}/actions/test` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaigns.setContent`<a id="mailchimpcampaignssetcontent"></a>

Set the content for a campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setContentResponse = await mailchimp.campaigns.setContent({
  campaignId: "campaignId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### plain_text: `string`<a id="plain_text-string"></a>

The plain-text portion of the campaign. If left unspecified, we\\\'ll generate this automatically.

##### html: `string`<a id="html-string"></a>

The raw HTML for the campaign.

##### url: `string`<a id="url-string"></a>

When importing a campaign, the URL where the HTML lives.

##### template: [`TemplateContentProperty`](./models/template-content-property.ts)<a id="template-templatecontentpropertymodelstemplate-content-propertyts"></a>

##### archive: [`UploadArchiveProperty`](./models/upload-archive-property.ts)<a id="archive-uploadarchivepropertymodelsupload-archive-propertyts"></a>

##### variate_contents: [`VariateContentsPropertyInner`](./models/variate-contents-property-inner.ts)[]<a id="variate_contents-variatecontentspropertyinnermodelsvariate-contents-property-innerts"></a>

Content options for [Multivariate Campaigns](https://mailchimp.com/help/about-multivariate-campaigns/). Each content option must provide HTML content and may optionally provide plain text. For campaigns not testing content, only one object should be provided.

#### 🔄 Return<a id="🔄-return"></a>

[CampaignsSetContentResponse](./models/campaigns-set-content-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaigns/{campaign_id}/content` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaigns.unscheduleAction`<a id="mailchimpcampaignsunscheduleaction"></a>

Unschedule a scheduled campaign that hasn't started sending.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unscheduleActionResponse = await mailchimp.campaigns.unscheduleAction({
  campaignId: "campaignId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaigns/{campaign_id}/actions/unschedule` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaigns.updateFeedbackMessage`<a id="mailchimpcampaignsupdatefeedbackmessage"></a>

Update a specific feedback message for a campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFeedbackMessageResponse =
  await mailchimp.campaigns.updateFeedbackMessage({
    campaignId: "campaignId_example",
    feedbackId: "feedbackId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### feedbackId: `string`<a id="feedbackid-string"></a>

The unique id for the feedback message.

##### block_id: `number`<a id="block_id-number"></a>

The block id for the editable block that the feedback addresses.

##### message: `string`<a id="message-string"></a>

The content of the feedback.

##### is_complete: `boolean`<a id="is_complete-boolean"></a>

The status of feedback.

#### 🔄 Return<a id="🔄-return"></a>

[CampaignsUpdateFeedbackMessageResponse](./models/campaigns-update-feedback-message-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaigns/{campaign_id}/feedback/{feedback_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.campaigns.updateSettings`<a id="mailchimpcampaignsupdatesettings"></a>

Update some or all of the settings for a specific campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSettingsResponse = await mailchimp.campaigns.updateSettings({
  campaignId: "campaignId_example",
  settings: {
    subject_line: "subject_line_example",
    from_name: "from_name_example",
    reply_to: "reply_to_example",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### settings: [`CampaignSettingsProperty2`](./models/campaign-settings-property2.ts)<a id="settings-campaignsettingsproperty2modelscampaign-settings-property2ts"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### recipients: [`ListProperty2`](./models/list-property2.ts)<a id="recipients-listproperty2modelslist-property2ts"></a>

##### variate_settings: [`ABTestOptionsProperty`](./models/abtest-options-property.ts)<a id="variate_settings-abtestoptionspropertymodelsabtest-options-propertyts"></a>

##### tracking: [`CampaignTrackingOptionsProperty`](./models/campaign-tracking-options-property.ts)<a id="tracking-campaigntrackingoptionspropertymodelscampaign-tracking-options-propertyts"></a>

##### rss_opts: [`RSSOptionsProperty1`](./models/rssoptions-property1.ts)<a id="rss_opts-rssoptionsproperty1modelsrssoptions-property1ts"></a>

##### social_card: [`CampaignSocialCardProperty`](./models/campaign-social-card-property.ts)<a id="social_card-campaignsocialcardpropertymodelscampaign-social-card-propertyts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CampaignsUpdateSettingsResponse](./models/campaigns-update-settings-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/campaigns/{campaign_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.connectedSites.createNewMailchimpSite`<a id="mailchimpconnectedsitescreatenewmailchimpsite"></a>

Create a new Mailchimp connected site.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewMailchimpSiteResponse =
  await mailchimp.connectedSites.createNewMailchimpSite({
    foreign_id: "MC001",
    domain: "example.com",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### foreign_id: `string`<a id="foreign_id-string"></a>

The unique identifier for the site.

##### domain: `string`<a id="domain-string"></a>

The connected site domain.

#### 🔄 Return<a id="🔄-return"></a>

[ConnectedSitesCreateNewMailchimpSiteResponse](./models/connected-sites-create-new-mailchimp-site-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/connected-sites` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.connectedSites.getInfo`<a id="mailchimpconnectedsitesgetinfo"></a>

Get information about a specific connected site.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInfoResponse = await mailchimp.connectedSites.getInfo({
  connectedSiteId: "connectedSiteId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### connectedSiteId: `string`<a id="connectedsiteid-string"></a>

The unique identifier for the site.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ConnectedSitesGetInfoResponse](./models/connected-sites-get-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/connected-sites/{connected_site_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.connectedSites.listAll`<a id="mailchimpconnectedsiteslistall"></a>

Get all connected sites in an account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await mailchimp.connectedSites.listAll({
  count: 10,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[ConnectedSitesListAllResponse](./models/connected-sites-list-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/connected-sites` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.connectedSites.removeSite`<a id="mailchimpconnectedsitesremovesite"></a>

Remove a connected site from your Mailchimp account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeSiteResponse = await mailchimp.connectedSites.removeSite({
  connectedSiteId: "connectedSiteId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### connectedSiteId: `string`<a id="connectedsiteid-string"></a>

The unique identifier for the site.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/connected-sites/{connected_site_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.connectedSites.verifyScriptInstallation`<a id="mailchimpconnectedsitesverifyscriptinstallation"></a>

Verify that the connected sites script has been installed, either via the script URL or fragment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyScriptInstallationResponse =
  await mailchimp.connectedSites.verifyScriptInstallation({
    connectedSiteId: "connectedSiteId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### connectedSiteId: `string`<a id="connectedsiteid-string"></a>

The unique identifier for the site.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/connected-sites/{connected_site_id}/actions/verify-script-installation` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.conversations.getAllConversations`<a id="mailchimpconversationsgetallconversations"></a>

Get a list of conversations for the account. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren’t available using this endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllConversationsResponse =
  await mailchimp.conversations.getAllConversations({
    count: 10,
    offset: 0,
    hasUnreadMessages: "true",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### hasUnreadMessages: `'true' | 'false'`<a id="hasunreadmessages-true--false"></a>

Whether the conversation has any unread messages.

##### listId: `string`<a id="listid-string"></a>

The unique id for the list.

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsGetAllConversationsResponse](./models/conversations-get-all-conversations-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.conversations.getById`<a id="mailchimpconversationsgetbyid"></a>

Get details about an individual conversation. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren’t available using this endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await mailchimp.conversations.getById({
  conversationId: "conversationId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### conversationId: `string`<a id="conversationid-string"></a>

The unique id for the conversation.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsGetByIdResponse](./models/conversations-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations/{conversation_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.conversations.getMessageById`<a id="mailchimpconversationsgetmessagebyid"></a>

Get an individual message in a conversation. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren’t available using this endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMessageByIdResponse = await mailchimp.conversations.getMessageById({
  conversationId: "conversationId_example",
  messageId: "messageId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### conversationId: `string`<a id="conversationid-string"></a>

The unique id for the conversation.

##### messageId: `string`<a id="messageid-string"></a>

The unique id for the conversation message.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsGetMessageByIdResponse](./models/conversations-get-message-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations/{conversation_id}/messages/{message_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.conversations.listMessagesFromConversation`<a id="mailchimpconversationslistmessagesfromconversation"></a>

Get messages from a specific conversation. Conversations has been deprecated in favor of Inbox and these endpoints don't include Inbox data. Past Conversations are still available via this endpoint, but new campaign replies and other Inbox messages aren’t available using this endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMessagesFromConversationResponse =
  await mailchimp.conversations.listMessagesFromConversation({
    conversationId: "conversationId_example",
    isRead: "true",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### conversationId: `string`<a id="conversationid-string"></a>

The unique id for the conversation.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### isRead: `'true' | 'false'`<a id="isread-true--false"></a>

Whether a conversation message has been marked as read.

##### beforeTimestamp: `string`<a id="beforetimestamp-string"></a>

Restrict the response to messages created before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### sinceTimestamp: `string`<a id="sincetimestamp-string"></a>

Restrict the response to messages created after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsListMessagesFromConversationResponse](./models/conversations-list-messages-from-conversation-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations/{conversation_id}/messages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.customerJourneys.triggerStepAction`<a id="mailchimpcustomerjourneystriggerstepaction"></a>

A step trigger in a Customer Journey. To use it, create a starting point or step from the Customer Journey builder in the app using the Customer Journeys API condition. We’ll provide a url during the process that includes the {journey_id} and {step_id}. You’ll then be able to use this endpoint to trigger the condition for the posted contact.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const triggerStepActionResponse =
  await mailchimp.customerJourneys.triggerStepAction({
    journeyId: 1,
    stepId: 1,
    email_address: "email_address_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email_address: `string`<a id="email_address-string"></a>

The list member\\\'s email address.

##### journeyId: `number`<a id="journeyid-number"></a>

The id for the Journey.

##### stepId: `number`<a id="stepid-number"></a>

The id for the Step.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/customer-journeys/journeys/{journey_id}/steps/{step_id}/actions/trigger` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.addCartLineItem`<a id="mailchimpecommerceaddcartlineitem"></a>

Add a new line item to an existing cart.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addCartLineItemResponse = await mailchimp.ecommerce.addCartLineItem({
  storeId: "storeId_example",
  cartId: "cartId_example",
  id: "id_example",
  product_id: "product_id_example",
  product_variant_id: "product_variant_id_example",
  quantity: 1,
  price: 3.14,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

A unique identifier for the cart line item.

##### product_id: `string`<a id="product_id-string"></a>

A unique identifier for the product associated with the cart line item.

##### product_variant_id: `string`<a id="product_variant_id-string"></a>

A unique identifier for the product variant associated with the cart line item.

##### quantity: `number`<a id="quantity-number"></a>

The quantity of a cart line item.

##### price: `number`<a id="price-number"></a>

The price of a cart line item.

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### cartId: `string`<a id="cartid-string"></a>

The id for the cart.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceAddCartLineItemResponse](./models/ecommerce-add-cart-line-item-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/carts/{cart_id}/lines` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.addCartToStore`<a id="mailchimpecommerceaddcarttostore"></a>

Add a new cart to a store.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addCartToStoreResponse = await mailchimp.ecommerce.addCartToStore({
  storeId: "storeId_example",
  id: "id_example",
  customer: {
    id: "id_example",
  },
  campaign_id: "839488a60b",
  currency_code: "currency_code_example",
  order_total: 3.14,
  lines: [
    {
      id: "id_example",
      product_id: "product_id_example",
      product_variant_id: "product_variant_id_example",
      quantity: 1,
      price: 3.14,
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

A unique identifier for the cart.

##### customer: [`ECommerceCustomerProperty`](./models/ecommerce-customer-property.ts)<a id="customer-ecommercecustomerpropertymodelsecommerce-customer-propertyts"></a>

##### currency_code: `string`<a id="currency_code-string"></a>

The three-letter ISO 4217 code for the currency that the cart uses.

##### order_total: `number`<a id="order_total-number"></a>

The order total for the cart.

##### lines: [`ECommerceCartLineItem`](./models/ecommerce-cart-line-item.ts)[]<a id="lines-ecommercecartlineitemmodelsecommerce-cart-line-itemts"></a>

An array of the cart\\\'s line items.

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### campaign_id: `string`<a id="campaign_id-string"></a>

A string that uniquely identifies the campaign for a cart.

##### checkout_url: `string`<a id="checkout_url-string"></a>

The URL for the cart. This parameter is required for [Abandoned Cart](https://mailchimp.com/help/create-an-abandoned-cart-email/) automations.

##### tax_total: `number`<a id="tax_total-number"></a>

The total tax for the cart.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceAddCartToStoreResponse](./models/ecommerce-add-cart-to-store-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/carts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.addCustomerToStore`<a id="mailchimpecommerceaddcustomertostore"></a>

Add a new customer to a store.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addCustomerToStoreResponse = await mailchimp.ecommerce.addCustomerToStore(
  {
    storeId: "storeId_example",
    id: "id_example",
    email_address: "email_address_example",
    opt_in_status: true,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

A unique identifier for the customer. Limited to 50 characters.

##### email_address: `string`<a id="email_address-string"></a>

The customer\\\'s email address.

##### opt_in_status: `boolean`<a id="opt_in_status-boolean"></a>

The customer\\\'s opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don\\\'t opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### company: `string`<a id="company-string"></a>

The customer\\\'s company.

##### first_name: `string`<a id="first_name-string"></a>

The customer\\\'s first name.

##### last_name: `string`<a id="last_name-string"></a>

The customer\\\'s last name.

##### address: [`AddressProperty4`](./models/address-property4.ts)<a id="address-addressproperty4modelsaddress-property4ts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceAddCustomerToStoreResponse](./models/ecommerce-add-customer-to-store-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/customers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.addOrUpdateCustomer`<a id="mailchimpecommerceaddorupdatecustomer"></a>

Add or update a customer.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addOrUpdateCustomerResponse =
  await mailchimp.ecommerce.addOrUpdateCustomer({
    storeId: "storeId_example",
    customerId: "customerId_example",
    id: "id_example",
    email_address: "email_address_example",
    opt_in_status: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

A unique identifier for the customer. Limited to 50 characters.

##### email_address: `string`<a id="email_address-string"></a>

The customer\\\'s email address.

##### opt_in_status: `boolean`<a id="opt_in_status-boolean"></a>

The customer\\\'s opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don\\\'t opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### customerId: `string`<a id="customerid-string"></a>

The id for the customer of a store.

##### company: `string`<a id="company-string"></a>

The customer\\\'s company.

##### first_name: `string`<a id="first_name-string"></a>

The customer\\\'s first name.

##### last_name: `string`<a id="last_name-string"></a>

The customer\\\'s last name.

##### address: [`AddressProperty6`](./models/address-property6.ts)<a id="address-addressproperty6modelsaddress-property6ts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceAddOrUpdateCustomerResponse](./models/ecommerce-add-or-update-customer-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/customers/{customer_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.addOrUpdateProductVariant`<a id="mailchimpecommerceaddorupdateproductvariant"></a>

Add or update a product variant.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addOrUpdateProductVariantResponse =
  await mailchimp.ecommerce.addOrUpdateProductVariant({
    storeId: "storeId_example",
    productId: "productId_example",
    variantId: "variantId_example",
    title: "Cat Hat",
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

The title of a product variant.

##### id: `string`<a id="id-string"></a>

A unique identifier for the product variant.

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### productId: `string`<a id="productid-string"></a>

The id for the product of a store.

##### variantId: `string`<a id="variantid-string"></a>

The id for the product variant.

##### url: `string`<a id="url-string"></a>

The URL for a product variant.

##### sku: `string`<a id="sku-string"></a>

The stock keeping unit (SKU) of a product variant.

##### price: `number`<a id="price-number"></a>

The price of a product variant.

##### inventory_quantity: `number`<a id="inventory_quantity-number"></a>

The inventory quantity of a product variant.

##### image_url: `string`<a id="image_url-string"></a>

The image URL for a product variant.

##### backorders: `string`<a id="backorders-string"></a>

The backorders of a product variant.

##### visibility: `string`<a id="visibility-string"></a>

The visibility of a product variant.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceAddOrUpdateProductVariantResponse](./models/ecommerce-add-or-update-product-variant-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.addOrderLineItem`<a id="mailchimpecommerceaddorderlineitem"></a>

Add a new line item to an existing order.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addOrderLineItemResponse = await mailchimp.ecommerce.addOrderLineItem({
  storeId: "storeId_example",
  orderId: "orderId_example",
  id: "id_example",
  product_id: "product_id_example",
  product_variant_id: "product_variant_id_example",
  quantity: 1,
  price: 3.14,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

A unique identifier for the order line item.

##### product_id: `string`<a id="product_id-string"></a>

A unique identifier for the product associated with the order line item.

##### product_variant_id: `string`<a id="product_variant_id-string"></a>

A unique identifier for the product variant associated with the order line item.

##### quantity: `number`<a id="quantity-number"></a>

The quantity of an order line item.

##### price: `number`<a id="price-number"></a>

The price of an order line item.

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### orderId: `string`<a id="orderid-string"></a>

The id for the order in a store.

##### discount: `number`<a id="discount-number"></a>

The total discount amount applied to this line item.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceAddOrderLineItemResponse](./models/ecommerce-add-order-line-item-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/orders/{order_id}/lines` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.addOrderToStore`<a id="mailchimpecommerceaddordertostore"></a>

Add a new order to a store.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addOrderToStoreResponse = await mailchimp.ecommerce.addOrderToStore({
  storeId: "storeId_example",
  id: "id_example",
  customer: {
    id: "id_example",
  },
  campaign_id: "839488a60b",
  landing_site: "http://www.example.com?source=abc",
  currency_code: "currency_code_example",
  order_total: 3.14,
  tracking_code: "prec",
  processed_at_foreign: "2015-07-15T19:28:00+00:00",
  cancelled_at_foreign: "2015-07-15T19:28:00+00:00",
  updated_at_foreign: "2015-07-15T19:28:00+00:00",
  lines: [
    {
      id: "id_example",
      product_id: "product_id_example",
      product_variant_id: "product_variant_id_example",
      quantity: 1,
      price: 3.14,
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

A unique identifier for the order.

##### customer: [`ECommerceCustomerProperty2`](./models/ecommerce-customer-property2.ts)<a id="customer-ecommercecustomerproperty2modelsecommerce-customer-property2ts"></a>

##### currency_code: `string`<a id="currency_code-string"></a>

The three-letter ISO 4217 code for the currency that the store accepts.

##### order_total: `number`<a id="order_total-number"></a>

The total for the order.

##### lines: [`ECommerceOrderLineItem`](./models/ecommerce-order-line-item.ts)[]<a id="lines-ecommerceorderlineitemmodelsecommerce-order-line-itemts"></a>

An array of the order\\\'s line items.

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### campaign_id: `string`<a id="campaign_id-string"></a>

A string that uniquely identifies the campaign for an order.

##### landing_site: `string`<a id="landing_site-string"></a>

The URL for the page where the buyer landed when entering the shop.

##### financial_status: `string`<a id="financial_status-string"></a>

The order status. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).

##### fulfillment_status: `string`<a id="fulfillment_status-string"></a>

The fulfillment status for the order. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).

##### order_url: `string`<a id="order_url-string"></a>

The URL for the order.

##### discount_total: `number`<a id="discount_total-number"></a>

The total amount of the discounts to be applied to the price of the order.

##### tax_total: `number`<a id="tax_total-number"></a>

The tax total for the order.

##### shipping_total: `number`<a id="shipping_total-number"></a>

The shipping total for the order.

##### tracking_code: `string`<a id="tracking_code-string"></a>

The Mailchimp tracking code for the order. Uses the \\\'mc_tc\\\' parameter in E-Commerce tracking URLs.

##### processed_at_foreign: `string`<a id="processed_at_foreign-string"></a>

The date and time the order was processed in ISO 8601 format.

##### cancelled_at_foreign: `string`<a id="cancelled_at_foreign-string"></a>

The date and time the order was cancelled in ISO 8601 format. Note: passing a value for this parameter will cancel the order being created.

##### updated_at_foreign: `string`<a id="updated_at_foreign-string"></a>

The date and time the order was updated in ISO 8601 format.

##### shipping_address: [`ShippingAddressProperty`](./models/shipping-address-property.ts)<a id="shipping_address-shippingaddresspropertymodelsshipping-address-propertyts"></a>

##### billing_address: [`BillingAddressProperty`](./models/billing-address-property.ts)<a id="billing_address-billingaddresspropertymodelsbilling-address-propertyts"></a>

##### promos: [`PromosPropertyInner`](./models/promos-property-inner.ts)[]<a id="promos-promospropertyinnermodelspromos-property-innerts"></a>

The promo codes applied on the order

##### outreach: [`OutreachProperty`](./models/outreach-property.ts)<a id="outreach-outreachpropertymodelsoutreach-propertyts"></a>

##### tracking_number: `string`<a id="tracking_number-string"></a>

The tracking number associated with the order.

##### tracking_carrier: `string`<a id="tracking_carrier-string"></a>

The tracking carrier associated with the order.

##### tracking_url: `string`<a id="tracking_url-string"></a>

The tracking URL associated with the order.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceAddOrderToStoreResponse](./models/ecommerce-add-order-to-store-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/orders` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.addProductImage`<a id="mailchimpecommerceaddproductimage"></a>

Add a new image to the product.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addProductImageResponse = await mailchimp.ecommerce.addProductImage({
  storeId: "storeId_example",
  productId: "productId_example",
  id: "id_example",
  url: "url_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

A unique identifier for the product image.

##### url: `string`<a id="url-string"></a>

The URL for a product image.

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### productId: `string`<a id="productid-string"></a>

The id for the product of a store.

##### variant_ids: `string`[]<a id="variant_ids-string"></a>

The list of product variants using the image.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceAddProductImageResponse](./models/ecommerce-add-product-image-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/products/{product_id}/images` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.addProductToStore`<a id="mailchimpecommerceaddproducttostore"></a>

Add a new product to a store.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addProductToStoreResponse = await mailchimp.ecommerce.addProductToStore({
  storeId: "storeId_example",
  title: "Cat Hat",
  description: "This is a cat hat.",
  id: "id_example",
  handle: "cat-hat",
  type: "Accessories",
  variants: [
    {
      title: "Cat Hat",
      id: "id_example",
    },
  ],
  published_at_foreign: "2015-07-15T19:28:00+00:00",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

The title of a product.

##### id: `string`<a id="id-string"></a>

A unique identifier for the product.

##### variants: [`ECommerceProductVariant`](./models/ecommerce-product-variant.ts)[]<a id="variants-ecommerceproductvariantmodelsecommerce-product-variantts"></a>

An array of the product\\\'s variants. At least one variant is required for each product. A variant can use the same `id` and `title` as the parent product.

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### description: `string`<a id="description-string"></a>

The description of a product.

##### handle: `string`<a id="handle-string"></a>

The handle of a product.

##### url: `string`<a id="url-string"></a>

The URL for a product.

##### type: `string`<a id="type-string"></a>

The type of product.

##### vendor: `string`<a id="vendor-string"></a>

The vendor for a product.

##### image_url: `string`<a id="image_url-string"></a>

The image URL for a product.

##### images: [`ECommerceProductImage`](./models/ecommerce-product-image.ts)[]<a id="images-ecommerceproductimagemodelsecommerce-product-imagets"></a>

An array of the product\\\'s images.

##### published_at_foreign: `string`<a id="published_at_foreign-string"></a>

The date and time the product was published.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceAddProductToStoreResponse](./models/ecommerce-add-product-to-store-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/products` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.addProductVariant`<a id="mailchimpecommerceaddproductvariant"></a>

Add a new variant to the product.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addProductVariantResponse = await mailchimp.ecommerce.addProductVariant({
  storeId: "storeId_example",
  productId: "productId_example",
  title: "Cat Hat",
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

The title of a product variant.

##### id: `string`<a id="id-string"></a>

A unique identifier for the product variant.

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### productId: `string`<a id="productid-string"></a>

The id for the product of a store.

##### url: `string`<a id="url-string"></a>

The URL for a product variant.

##### sku: `string`<a id="sku-string"></a>

The stock keeping unit (SKU) of a product variant.

##### price: `number`<a id="price-number"></a>

The price of a product variant.

##### inventory_quantity: `number`<a id="inventory_quantity-number"></a>

The inventory quantity of a product variant.

##### image_url: `string`<a id="image_url-string"></a>

The image URL for a product variant.

##### backorders: `string`<a id="backorders-string"></a>

The backorders of a product variant.

##### visibility: `string`<a id="visibility-string"></a>

The visibility of a product variant.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceAddProductVariantResponse](./models/ecommerce-add-product-variant-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/products/{product_id}/variants` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.addPromoCode`<a id="mailchimpecommerceaddpromocode"></a>

Add a new promo code to a store.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addPromoCodeResponse = await mailchimp.ecommerce.addPromoCode({
  storeId: "storeId_example",
  promoRuleId: "promoRuleId_example",
  id: "id_example",
  code: "summersale",
  redemption_url:
    "A url that applies promo code directly at checkout or a url that points to sale page or store url",
  enabled: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

A unique identifier for the promo code. Restricted to UTF-8 characters with max length 50.

##### code: `string`<a id="code-string"></a>

The discount code. Restricted to UTF-8 characters with max length 50.

##### redemption_url: `string`<a id="redemption_url-string"></a>

The url that should be used in the promotion campaign restricted to UTF-8 characters with max length 2000.

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### promoRuleId: `string`<a id="promoruleid-string"></a>

The id for the promo rule of a store.

##### usage_count: `number`<a id="usage_count-number"></a>

Number of times promo code has been used.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Whether the promo code is currently enabled.

##### created_at_foreign: `string`<a id="created_at_foreign-string"></a>

The date and time the promotion was created in ISO 8601 format.

##### updated_at_foreign: `string`<a id="updated_at_foreign-string"></a>

The date and time the promotion was updated in ISO 8601 format.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceAddPromoCodeResponse](./models/ecommerce-add-promo-code-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.addPromoRule`<a id="mailchimpecommerceaddpromorule"></a>

Add a new promo rule to a store.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addPromoRuleResponse = await mailchimp.ecommerce.addPromoRule({
  storeId: "storeId_example",
  title: "50% off Total Order",
  description: "Save BIG during our summer sale!",
  id: "id_example",
  amount: 0.5,
  type: "fixed",
  target: "per_item",
  enabled: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### description: `string`<a id="description-string"></a>

The description of a promotion restricted to UTF-8 characters with max length 255.

##### id: `string`<a id="id-string"></a>

A unique identifier for the promo rule. If Ecommerce platform does not support promo rule, use promo code id as promo rule id. Restricted to UTF-8 characters with max length 50.

##### amount: `number`<a id="amount-number"></a>

The amount of the promo code discount. If \\\'type\\\' is \\\'fixed\\\', the amount is treated as a monetary value. If \\\'type\\\' is \\\'percentage\\\', amount must be a decimal value between 0.0 and 1.0, inclusive.

##### type: `string`<a id="type-string"></a>

Type of discount. For free shipping set type to fixed.

##### target: `string`<a id="target-string"></a>

The target that the discount applies to.

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### title: `string`<a id="title-string"></a>

The title that will show up in promotion campaign. Restricted to UTF-8 characters with max length of 100 bytes.

##### starts_at: `string`<a id="starts_at-string"></a>

The date and time when the promotion is in effect in ISO 8601 format.

##### ends_at: `string`<a id="ends_at-string"></a>

The date and time when the promotion ends. Must be after starts_at and in ISO 8601 format.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Whether the promo rule is currently enabled.

##### created_at_foreign: `string`<a id="created_at_foreign-string"></a>

The date and time the promotion was created in ISO 8601 format.

##### updated_at_foreign: `string`<a id="updated_at_foreign-string"></a>

The date and time the promotion was updated in ISO 8601 format.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceAddPromoRuleResponse](./models/ecommerce-add-promo-rule-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/promo-rules` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.addStoreToMailchimpAccount`<a id="mailchimpecommerceaddstoretomailchimpaccount"></a>

Add a new store to your Mailchimp account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addStoreToMailchimpAccountResponse =
  await mailchimp.ecommerce.addStoreToMailchimpAccount({
    id: "example_store",
    list_id: "1a2df69511",
    name: "Freddie's Cat Hat Emporium",
    domain: "example.com",
    email_address: "freddie@mailchimp.com",
    currency_code: "USD",
    money_format: "$",
    primary_locale: "fr",
    timezone: "Eastern",
    phone: "404-444-4444",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The unique identifier for the store.

##### list_id: `string`<a id="list_id-string"></a>

The unique identifier for the list associated with the store. The `list_id` for a specific store cannot change.

##### name: `string`<a id="name-string"></a>

The name of the store.

##### currency_code: `string`<a id="currency_code-string"></a>

The three-letter ISO 4217 code for the currency that the store accepts.

##### platform: `string`<a id="platform-string"></a>

The e-commerce platform of the store.

##### domain: `string`<a id="domain-string"></a>

The store domain. This parameter is required for Connected Sites and Google Ads.

##### is_syncing: `boolean`<a id="is_syncing-boolean"></a>

Whether to disable automations because the store is currently [syncing](https://mailchimp.com/developer/marketing/docs/e-commerce/#pausing-store-automations).

##### email_address: `string`<a id="email_address-string"></a>

The email address for the store.

##### money_format: `string`<a id="money_format-string"></a>

The currency format for the store. For example: `$`, `£`, etc.

##### primary_locale: `string`<a id="primary_locale-string"></a>

The primary locale for the store. For example: `en`, `de`, etc.

##### timezone: `string`<a id="timezone-string"></a>

The timezone for the store.

##### phone: `string`<a id="phone-string"></a>

The store phone number.

##### address: [`AddressProperty`](./models/address-property.ts)<a id="address-addresspropertymodelsaddress-propertyts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceAddStoreToMailchimpAccountResponse](./models/ecommerce-add-store-to-mailchimp-account-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.deleteCartLineItem`<a id="mailchimpecommercedeletecartlineitem"></a>

Delete a specific cart line item.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCartLineItemResponse = await mailchimp.ecommerce.deleteCartLineItem(
  {
    storeId: "storeId_example",
    cartId: "cartId_example",
    lineId: "lineId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### cartId: `string`<a id="cartid-string"></a>

The id for the cart.

##### lineId: `string`<a id="lineid-string"></a>

The id for the line item of a cart.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.deleteOrder`<a id="mailchimpecommercedeleteorder"></a>

Delete an order.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteOrderResponse = await mailchimp.ecommerce.deleteOrder({
  storeId: "storeId_example",
  orderId: "orderId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### orderId: `string`<a id="orderid-string"></a>

The id for the order in a store.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/orders/{order_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.deleteOrderLine`<a id="mailchimpecommercedeleteorderline"></a>

Delete a specific order line item.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteOrderLineResponse = await mailchimp.ecommerce.deleteOrderLine({
  storeId: "storeId_example",
  orderId: "orderId_example",
  lineId: "lineId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### orderId: `string`<a id="orderid-string"></a>

The id for the order in a store.

##### lineId: `string`<a id="lineid-string"></a>

The id for the line item of an order.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.deleteProduct`<a id="mailchimpecommercedeleteproduct"></a>

Delete a product.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteProductResponse = await mailchimp.ecommerce.deleteProduct({
  storeId: "storeId_example",
  productId: "productId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### productId: `string`<a id="productid-string"></a>

The id for the product of a store.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/products/{product_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.deleteProductImage`<a id="mailchimpecommercedeleteproductimage"></a>

Delete a product image.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteProductImageResponse = await mailchimp.ecommerce.deleteProductImage(
  {
    storeId: "storeId_example",
    productId: "productId_example",
    imageId: "imageId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### productId: `string`<a id="productid-string"></a>

The id for the product of a store.

##### imageId: `string`<a id="imageid-string"></a>

The id for the product image.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.deleteProductVariant`<a id="mailchimpecommercedeleteproductvariant"></a>

Delete a product variant.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteProductVariantResponse =
  await mailchimp.ecommerce.deleteProductVariant({
    storeId: "storeId_example",
    productId: "productId_example",
    variantId: "variantId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### productId: `string`<a id="productid-string"></a>

The id for the product of a store.

##### variantId: `string`<a id="variantid-string"></a>

The id for the product variant.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.deletePromoCode`<a id="mailchimpecommercedeletepromocode"></a>

Delete a promo code from a store.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deletePromoCodeResponse = await mailchimp.ecommerce.deletePromoCode({
  storeId: "storeId_example",
  promoRuleId: "promoRuleId_example",
  promoCodeId: "promoCodeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### promoRuleId: `string`<a id="promoruleid-string"></a>

The id for the promo rule of a store.

##### promoCodeId: `string`<a id="promocodeid-string"></a>

The id for the promo code of a store.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes/{promo_code_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.deletePromoRule`<a id="mailchimpecommercedeletepromorule"></a>

Delete a promo rule from a store.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deletePromoRuleResponse = await mailchimp.ecommerce.deletePromoRule({
  storeId: "storeId_example",
  promoRuleId: "promoRuleId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### promoRuleId: `string`<a id="promoruleid-string"></a>

The id for the promo rule of a store.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.deleteStore`<a id="mailchimpecommercedeletestore"></a>

Delete a store. Deleting a store will also delete any associated subresources, including Customers, Orders, Products, and Carts.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteStoreResponse = await mailchimp.ecommerce.deleteStore({
  storeId: "storeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.getCartInfo`<a id="mailchimpecommercegetcartinfo"></a>

Get information about a specific cart.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCartInfoResponse = await mailchimp.ecommerce.getCartInfo({
  storeId: "storeId_example",
  cartId: "cartId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### cartId: `string`<a id="cartid-string"></a>

The id for the cart.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceGetCartInfoResponse](./models/ecommerce-get-cart-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/carts/{cart_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.getCartLineItem`<a id="mailchimpecommercegetcartlineitem"></a>

Get information about a specific cart line item.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCartLineItemResponse = await mailchimp.ecommerce.getCartLineItem({
  storeId: "storeId_example",
  cartId: "cartId_example",
  lineId: "lineId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### cartId: `string`<a id="cartid-string"></a>

The id for the cart.

##### lineId: `string`<a id="lineid-string"></a>

The id for the line item of a cart.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceGetCartLineItemResponse](./models/ecommerce-get-cart-line-item-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.getCustomerInfo`<a id="mailchimpecommercegetcustomerinfo"></a>

Get information about a specific customer.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomerInfoResponse = await mailchimp.ecommerce.getCustomerInfo({
  storeId: "storeId_example",
  customerId: "customerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### customerId: `string`<a id="customerid-string"></a>

The id for the customer of a store.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceGetCustomerInfoResponse](./models/ecommerce-get-customer-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/customers/{customer_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.getOrderLineItem`<a id="mailchimpecommercegetorderlineitem"></a>

Get information about a specific order line item.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOrderLineItemResponse = await mailchimp.ecommerce.getOrderLineItem({
  storeId: "storeId_example",
  orderId: "orderId_example",
  lineId: "lineId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### orderId: `string`<a id="orderid-string"></a>

The id for the order in a store.

##### lineId: `string`<a id="lineid-string"></a>

The id for the line item of an order.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceGetOrderLineItemResponse](./models/ecommerce-get-order-line-item-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.getProductImageInfo`<a id="mailchimpecommercegetproductimageinfo"></a>

Get information about a specific product image.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProductImageInfoResponse =
  await mailchimp.ecommerce.getProductImageInfo({
    storeId: "storeId_example",
    productId: "productId_example",
    imageId: "imageId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### productId: `string`<a id="productid-string"></a>

The id for the product of a store.

##### imageId: `string`<a id="imageid-string"></a>

The id for the product image.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceGetProductImageInfoResponse](./models/ecommerce-get-product-image-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.getProductImages`<a id="mailchimpecommercegetproductimages"></a>

Get information about a product's images.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProductImagesResponse = await mailchimp.ecommerce.getProductImages({
  count: 10,
  offset: 0,
  storeId: "storeId_example",
  productId: "productId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### productId: `string`<a id="productid-string"></a>

The id for the product of a store.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceGetProductImagesResponse](./models/ecommerce-get-product-images-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/products/{product_id}/images` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.getProductVariantInfo`<a id="mailchimpecommercegetproductvariantinfo"></a>

Get information about a specific product variant.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProductVariantInfoResponse =
  await mailchimp.ecommerce.getProductVariantInfo({
    storeId: "storeId_example",
    productId: "productId_example",
    variantId: "variantId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### productId: `string`<a id="productid-string"></a>

The id for the product of a store.

##### variantId: `string`<a id="variantid-string"></a>

The id for the product variant.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceGetProductVariantInfoResponse](./models/ecommerce-get-product-variant-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.getPromoCode`<a id="mailchimpecommercegetpromocode"></a>

Get information about a specific promo code.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPromoCodeResponse = await mailchimp.ecommerce.getPromoCode({
  storeId: "storeId_example",
  promoRuleId: "promoRuleId_example",
  promoCodeId: "promoCodeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### promoRuleId: `string`<a id="promoruleid-string"></a>

The id for the promo rule of a store.

##### promoCodeId: `string`<a id="promocodeid-string"></a>

The id for the promo code of a store.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceGetPromoCodeResponse](./models/ecommerce-get-promo-code-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes/{promo_code_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.getStoreCarts`<a id="mailchimpecommercegetstorecarts"></a>

Get information about a store's carts.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStoreCartsResponse = await mailchimp.ecommerce.getStoreCarts({
  count: 10,
  offset: 0,
  storeId: "storeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceGetStoreCartsResponse](./models/ecommerce-get-store-carts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/carts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.getStoreCustomers`<a id="mailchimpecommercegetstorecustomers"></a>

Get information about a store's customers.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStoreCustomersResponse = await mailchimp.ecommerce.getStoreCustomers({
  count: 10,
  offset: 0,
  storeId: "storeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### emailAddress: `string`<a id="emailaddress-string"></a>

Restrict the response to customers with the email address.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceGetStoreCustomersResponse](./models/ecommerce-get-store-customers-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/customers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.getStoreInfo`<a id="mailchimpecommercegetstoreinfo"></a>

Get information about a specific store.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStoreInfoResponse = await mailchimp.ecommerce.getStoreInfo({
  storeId: "storeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceGetStoreInfoResponse](./models/ecommerce-get-store-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.getStoreOrderInfo`<a id="mailchimpecommercegetstoreorderinfo"></a>

Get information about a specific order.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStoreOrderInfoResponse = await mailchimp.ecommerce.getStoreOrderInfo({
  storeId: "storeId_example",
  orderId: "orderId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### orderId: `string`<a id="orderid-string"></a>

The id for the order in a store.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceGetStoreOrderInfoResponse](./models/ecommerce-get-store-order-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/orders/{order_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.getStoreOrderLines`<a id="mailchimpecommercegetstoreorderlines"></a>

Get information about an order's line items.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStoreOrderLinesResponse = await mailchimp.ecommerce.getStoreOrderLines(
  {
    count: 10,
    offset: 0,
    storeId: "storeId_example",
    orderId: "orderId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### orderId: `string`<a id="orderid-string"></a>

The id for the order in a store.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceGetStoreOrderLinesResponse](./models/ecommerce-get-store-order-lines-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/orders/{order_id}/lines` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.getStoreProductInfo`<a id="mailchimpecommercegetstoreproductinfo"></a>

Get information about a specific product.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStoreProductInfoResponse =
  await mailchimp.ecommerce.getStoreProductInfo({
    storeId: "storeId_example",
    productId: "productId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### productId: `string`<a id="productid-string"></a>

The id for the product of a store.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceGetStoreProductInfoResponse](./models/ecommerce-get-store-product-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/products/{product_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.getStoreProducts`<a id="mailchimpecommercegetstoreproducts"></a>

Get information about a store's products.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStoreProductsResponse = await mailchimp.ecommerce.getStoreProducts({
  count: 10,
  offset: 0,
  storeId: "storeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceGetStoreProductsResponse](./models/ecommerce-get-store-products-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/products` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.getStorePromoCodes`<a id="mailchimpecommercegetstorepromocodes"></a>

Get information about a store's promo codes.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStorePromoCodesResponse = await mailchimp.ecommerce.getStorePromoCodes(
  {
    count: 10,
    offset: 0,
    promoRuleId: "promoRuleId_example",
    storeId: "storeId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### promoRuleId: `string`<a id="promoruleid-string"></a>

The id for the promo rule of a store.

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceGetStorePromoCodesResponse](./models/ecommerce-get-store-promo-codes-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.getStorePromoRule`<a id="mailchimpecommercegetstorepromorule"></a>

Get information about a specific promo rule.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStorePromoRuleResponse = await mailchimp.ecommerce.getStorePromoRule({
  storeId: "storeId_example",
  promoRuleId: "promoRuleId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### promoRuleId: `string`<a id="promoruleid-string"></a>

The id for the promo rule of a store.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceGetStorePromoRuleResponse](./models/ecommerce-get-store-promo-rule-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.getStorePromoRules`<a id="mailchimpecommercegetstorepromorules"></a>

Get information about a store's promo rules.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStorePromoRulesResponse = await mailchimp.ecommerce.getStorePromoRules(
  {
    count: 10,
    offset: 0,
    storeId: "storeId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceGetStorePromoRulesResponse](./models/ecommerce-get-store-promo-rules-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/promo-rules` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.listAccountOrders`<a id="mailchimpecommercelistaccountorders"></a>

Get information about an account's orders.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAccountOrdersResponse = await mailchimp.ecommerce.listAccountOrders({
  count: 10,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### campaignId: `string`<a id="campaignid-string"></a>

Restrict results to orders with a specific `campaign_id` value.

##### outreachId: `string`<a id="outreachid-string"></a>

Restrict results to orders with a specific `outreach_id` value.

##### customerId: `string`<a id="customerid-string"></a>

Restrict results to orders made by a specific customer.

##### hasOutreach: `boolean`<a id="hasoutreach-boolean"></a>

Restrict results to orders that have an outreach attached. For example, an email campaign or Facebook ad.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceListAccountOrdersResponse](./models/ecommerce-list-account-orders-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/orders` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.listCartLines`<a id="mailchimpecommercelistcartlines"></a>

Get information about a cart's line items.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCartLinesResponse = await mailchimp.ecommerce.listCartLines({
  count: 10,
  offset: 0,
  storeId: "storeId_example",
  cartId: "cartId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### cartId: `string`<a id="cartid-string"></a>

The id for the cart.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceListCartLinesResponse](./models/ecommerce-list-cart-lines-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/carts/{cart_id}/lines` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.listProductVariants`<a id="mailchimpecommercelistproductvariants"></a>

Get information about a product's variants.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listProductVariantsResponse =
  await mailchimp.ecommerce.listProductVariants({
    count: 10,
    offset: 0,
    storeId: "storeId_example",
    productId: "productId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### productId: `string`<a id="productid-string"></a>

The id for the product of a store.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceListProductVariantsResponse](./models/ecommerce-list-product-variants-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/products/{product_id}/variants` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.listStoreOrders`<a id="mailchimpecommerceliststoreorders"></a>

Get information about a store's orders.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listStoreOrdersResponse = await mailchimp.ecommerce.listStoreOrders({
  count: 10,
  offset: 0,
  storeId: "storeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### customerId: `string`<a id="customerid-string"></a>

Restrict results to orders made by a specific customer.

##### hasOutreach: `boolean`<a id="hasoutreach-boolean"></a>

Restrict results to orders that have an outreach attached. For example, an email campaign or Facebook ad.

##### campaignId: `string`<a id="campaignid-string"></a>

Restrict results to orders with a specific `campaign_id` value.

##### outreachId: `string`<a id="outreachid-string"></a>

Restrict results to orders with a specific `outreach_id` value.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceListStoreOrdersResponse](./models/ecommerce-list-store-orders-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/orders` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.listStores`<a id="mailchimpecommerceliststores"></a>

Get information about all stores in the account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listStoresResponse = await mailchimp.ecommerce.listStores({
  count: 10,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceListStoresResponse](./models/ecommerce-list-stores-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.removeCart`<a id="mailchimpecommerceremovecart"></a>

Delete a cart.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeCartResponse = await mailchimp.ecommerce.removeCart({
  storeId: "storeId_example",
  cartId: "cartId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### cartId: `string`<a id="cartid-string"></a>

The id for the cart.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/carts/{cart_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.removeCustomer`<a id="mailchimpecommerceremovecustomer"></a>

Delete a customer from a store.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeCustomerResponse = await mailchimp.ecommerce.removeCustomer({
  storeId: "storeId_example",
  customerId: "customerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### customerId: `string`<a id="customerid-string"></a>

The id for the customer of a store.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/customers/{customer_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.updateCartById`<a id="mailchimpecommerceupdatecartbyid"></a>

Update a specific cart.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCartByIdResponse = await mailchimp.ecommerce.updateCartById({
  storeId: "storeId_example",
  cartId: "cartId_example",
  campaign_id: "839488a60b",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### cartId: `string`<a id="cartid-string"></a>

The id for the cart.

##### customer: [`ECommerceCustomerProperty1`](./models/ecommerce-customer-property1.ts)<a id="customer-ecommercecustomerproperty1modelsecommerce-customer-property1ts"></a>

##### campaign_id: `string`<a id="campaign_id-string"></a>

A string that uniquely identifies the campaign associated with a cart.

##### checkout_url: `string`<a id="checkout_url-string"></a>

The URL for the cart. This parameter is required for [Abandoned Cart](https://mailchimp.com/help/create-an-abandoned-cart-email/) automations.

##### currency_code: `string`<a id="currency_code-string"></a>

The three-letter ISO 4217 code for the currency that the cart uses.

##### order_total: `number`<a id="order_total-number"></a>

The order total for the cart.

##### tax_total: `number`<a id="tax_total-number"></a>

The total tax for the cart.

##### lines: [`ECommerceCartLineItem1`](./models/ecommerce-cart-line-item1.ts)[]<a id="lines-ecommercecartlineitem1modelsecommerce-cart-line-item1ts"></a>

An array of the cart\\\'s line items.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceUpdateCartByIdResponse](./models/ecommerce-update-cart-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/carts/{cart_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.updateCartLineItem`<a id="mailchimpecommerceupdatecartlineitem"></a>

Update a specific cart line item.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCartLineItemResponse = await mailchimp.ecommerce.updateCartLineItem(
  {
    storeId: "storeId_example",
    cartId: "cartId_example",
    lineId: "lineId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### cartId: `string`<a id="cartid-string"></a>

The id for the cart.

##### lineId: `string`<a id="lineid-string"></a>

The id for the line item of a cart.

##### product_id: `string`<a id="product_id-string"></a>

A unique identifier for the product associated with the cart line item.

##### product_variant_id: `string`<a id="product_variant_id-string"></a>

A unique identifier for the product variant associated with the cart line item.

##### quantity: `number`<a id="quantity-number"></a>

The quantity of a cart line item.

##### price: `number`<a id="price-number"></a>

The price of a cart line item.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceUpdateCartLineItemResponse](./models/ecommerce-update-cart-line-item-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/carts/{cart_id}/lines/{line_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.updateCustomer`<a id="mailchimpecommerceupdatecustomer"></a>

Update a customer.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCustomerResponse = await mailchimp.ecommerce.updateCustomer({
  storeId: "storeId_example",
  customerId: "customerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### customerId: `string`<a id="customerid-string"></a>

The id for the customer of a store.

##### opt_in_status: `boolean`<a id="opt_in_status-boolean"></a>

The customer\\\'s opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don\\\'t opt in to your Mailchimp list [will be added as `Transactional` members](https://mailchimp.com/developer/marketing/docs/e-commerce/#customers).

##### company: `string`<a id="company-string"></a>

The customer\\\'s company.

##### first_name: `string`<a id="first_name-string"></a>

The customer\\\'s first name.

##### last_name: `string`<a id="last_name-string"></a>

The customer\\\'s last name.

##### address: [`AddressProperty5`](./models/address-property5.ts)<a id="address-addressproperty5modelsaddress-property5ts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceUpdateCustomerResponse](./models/ecommerce-update-customer-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/customers/{customer_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.updateOrderLine`<a id="mailchimpecommerceupdateorderline"></a>

Update a specific order line item.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOrderLineResponse = await mailchimp.ecommerce.updateOrderLine({
  storeId: "storeId_example",
  orderId: "orderId_example",
  lineId: "lineId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### orderId: `string`<a id="orderid-string"></a>

The id for the order in a store.

##### lineId: `string`<a id="lineid-string"></a>

The id for the line item of an order.

##### product_id: `string`<a id="product_id-string"></a>

A unique identifier for the product associated with the order line item.

##### product_variant_id: `string`<a id="product_variant_id-string"></a>

A unique identifier for the product variant associated with the order line item.

##### quantity: `number`<a id="quantity-number"></a>

The quantity of an order line item.

##### price: `number`<a id="price-number"></a>

The price of an order line item.

##### discount: `number`<a id="discount-number"></a>

The total discount amount applied to this line item.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceUpdateOrderLineResponse](./models/ecommerce-update-order-line-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/orders/{order_id}/lines/{line_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.updateProduct`<a id="mailchimpecommerceupdateproduct"></a>

Update a specific product.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateProductResponse = await mailchimp.ecommerce.updateProduct({
  storeId: "storeId_example",
  productId: "productId_example",
  title: "Cat Hat",
  description: "This is a cat hat.",
  handle: "cat-hat",
  type: "Accessories",
  published_at_foreign: "2015-07-15T19:28:00+00:00",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### productId: `string`<a id="productid-string"></a>

The id for the product of a store.

##### title: `string`<a id="title-string"></a>

The title of a product.

##### description: `string`<a id="description-string"></a>

The description of a product.

##### handle: `string`<a id="handle-string"></a>

The handle of a product.

##### url: `string`<a id="url-string"></a>

The URL for a product.

##### type: `string`<a id="type-string"></a>

The type of product.

##### vendor: `string`<a id="vendor-string"></a>

The vendor for a product.

##### image_url: `string`<a id="image_url-string"></a>

The image URL for a product.

##### variants: [`ECommerceProductVariant1`](./models/ecommerce-product-variant1.ts)[]<a id="variants-ecommerceproductvariant1modelsecommerce-product-variant1ts"></a>

An array of the product\\\'s variants. At least one variant is required for each product. A variant can use the same `id` and `title` as the parent product.

##### images: [`ECommerceProductImage1`](./models/ecommerce-product-image1.ts)[]<a id="images-ecommerceproductimage1modelsecommerce-product-image1ts"></a>

An array of the product\\\'s images.

##### published_at_foreign: `string`<a id="published_at_foreign-string"></a>

The date and time the product was published in ISO 8601 format.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceUpdateProductResponse](./models/ecommerce-update-product-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/products/{product_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.updateProductImage`<a id="mailchimpecommerceupdateproductimage"></a>

Update a product image.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateProductImageResponse = await mailchimp.ecommerce.updateProductImage(
  {
    storeId: "storeId_example",
    productId: "productId_example",
    imageId: "imageId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### productId: `string`<a id="productid-string"></a>

The id for the product of a store.

##### imageId: `string`<a id="imageid-string"></a>

The id for the product image.

##### id: `string`<a id="id-string"></a>

A unique identifier for the product image.

##### url: `string`<a id="url-string"></a>

The URL for a product image.

##### variant_ids: `string`[]<a id="variant_ids-string"></a>

The list of product variants using the image.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceUpdateProductImageResponse](./models/ecommerce-update-product-image-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/products/{product_id}/images/{image_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.updateProductVariant`<a id="mailchimpecommerceupdateproductvariant"></a>

Update a product variant.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateProductVariantResponse =
  await mailchimp.ecommerce.updateProductVariant({
    storeId: "storeId_example",
    productId: "productId_example",
    variantId: "variantId_example",
    title: "Cat Hat",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### productId: `string`<a id="productid-string"></a>

The id for the product of a store.

##### variantId: `string`<a id="variantid-string"></a>

The id for the product variant.

##### title: `string`<a id="title-string"></a>

The title of a product variant.

##### url: `string`<a id="url-string"></a>

The URL for a product variant.

##### sku: `string`<a id="sku-string"></a>

The stock keeping unit (SKU) of a product variant.

##### price: `number`<a id="price-number"></a>

The price of a product variant.

##### inventory_quantity: `number`<a id="inventory_quantity-number"></a>

The inventory quantity of a product variant.

##### image_url: `string`<a id="image_url-string"></a>

The image URL for a product variant.

##### backorders: `string`<a id="backorders-string"></a>

The backorders of a product variant.

##### visibility: `string`<a id="visibility-string"></a>

The visibility of a product variant.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceUpdateProductVariantResponse](./models/ecommerce-update-product-variant-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/products/{product_id}/variants/{variant_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.updatePromoCode`<a id="mailchimpecommerceupdatepromocode"></a>

Update a promo code.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePromoCodeResponse = await mailchimp.ecommerce.updatePromoCode({
  storeId: "storeId_example",
  promoRuleId: "promoRuleId_example",
  promoCodeId: "promoCodeId_example",
  code: "summersale",
  redemption_url:
    "A url that applies promo code directly at checkout or a url that points to sale page or store url",
  enabled: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### promoRuleId: `string`<a id="promoruleid-string"></a>

The id for the promo rule of a store.

##### promoCodeId: `string`<a id="promocodeid-string"></a>

The id for the promo code of a store.

##### code: `string`<a id="code-string"></a>

The discount code. Restricted to UTF-8 characters with max length 50.

##### redemption_url: `string`<a id="redemption_url-string"></a>

The url that should be used in the promotion campaign restricted to UTF-8 characters with max length 2000.

##### usage_count: `number`<a id="usage_count-number"></a>

Number of times promo code has been used.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Whether the promo code is currently enabled.

##### created_at_foreign: `string`<a id="created_at_foreign-string"></a>

The date and time the promotion was created in ISO 8601 format.

##### updated_at_foreign: `string`<a id="updated_at_foreign-string"></a>

The date and time the promotion was updated in ISO 8601 format.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceUpdatePromoCodeResponse](./models/ecommerce-update-promo-code-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}/promo-codes/{promo_code_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.updatePromoRule`<a id="mailchimpecommerceupdatepromorule"></a>

Update a promo rule.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePromoRuleResponse = await mailchimp.ecommerce.updatePromoRule({
  storeId: "storeId_example",
  promoRuleId: "promoRuleId_example",
  title: "50% off Total Order",
  description: "Save BIG during our summer sale!",
  amount: 0.5,
  type: "fixed",
  target: "per_item",
  enabled: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### promoRuleId: `string`<a id="promoruleid-string"></a>

The id for the promo rule of a store.

##### title: `string`<a id="title-string"></a>

The title that will show up in promotion campaign. Restricted to UTF-8 characters with max length of 100 bytes.

##### description: `string`<a id="description-string"></a>

The description of a promotion restricted to UTF-8 characters with max length 255.

##### starts_at: `string`<a id="starts_at-string"></a>

The date and time when the promotion is in effect in ISO 8601 format.

##### ends_at: `string`<a id="ends_at-string"></a>

The date and time when the promotion ends. Must be after starts_at and in ISO 8601 format.

##### amount: `number`<a id="amount-number"></a>

The amount of the promo code discount. If \\\'type\\\' is \\\'fixed\\\', the amount is treated as a monetary value. If \\\'type\\\' is \\\'percentage\\\', amount must be a decimal value between 0.0 and 1.0, inclusive.

##### type: `string`<a id="type-string"></a>

Type of discount. For free shipping set type to fixed.

##### target: `string`<a id="target-string"></a>

The target that the discount applies to.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Whether the promo rule is currently enabled.

##### created_at_foreign: `string`<a id="created_at_foreign-string"></a>

The date and time the promotion was created in ISO 8601 format.

##### updated_at_foreign: `string`<a id="updated_at_foreign-string"></a>

The date and time the promotion was updated in ISO 8601 format.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceUpdatePromoRuleResponse](./models/ecommerce-update-promo-rule-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/promo-rules/{promo_rule_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.updateSpecificOrder`<a id="mailchimpecommerceupdatespecificorder"></a>

Update a specific order.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSpecificOrderResponse =
  await mailchimp.ecommerce.updateSpecificOrder({
    storeId: "storeId_example",
    orderId: "orderId_example",
    campaign_id: "839488a60b",
    landing_site: "http://www.example.com?source=abc",
    tracking_code: "prec",
    processed_at_foreign: "2015-07-15T19:28:00+00:00",
    cancelled_at_foreign: "2015-07-15T19:28:00+00:00",
    updated_at_foreign: "2015-07-15T19:28:00+00:00",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### orderId: `string`<a id="orderid-string"></a>

The id for the order in a store.

##### customer: [`ECommerceCustomerProperty3`](./models/ecommerce-customer-property3.ts)<a id="customer-ecommercecustomerproperty3modelsecommerce-customer-property3ts"></a>

##### campaign_id: `string`<a id="campaign_id-string"></a>

A string that uniquely identifies the campaign associated with an order.

##### landing_site: `string`<a id="landing_site-string"></a>

The URL for the page where the buyer landed when entering the shop.

##### financial_status: `string`<a id="financial_status-string"></a>

The order status. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).

##### fulfillment_status: `string`<a id="fulfillment_status-string"></a>

The fulfillment status for the order. Use this parameter to trigger [Order Notifications](https://mailchimp.com/developer/marketing/docs/e-commerce/#order-notifications).

##### currency_code: `string`<a id="currency_code-string"></a>

The three-letter ISO 4217 code for the currency that the store accepts.

##### order_total: `number`<a id="order_total-number"></a>

The order total associated with an order.

##### order_url: `string`<a id="order_url-string"></a>

The URL for the order.

##### discount_total: `number`<a id="discount_total-number"></a>

The total amount of the discounts to be applied to the price of the order.

##### tax_total: `number`<a id="tax_total-number"></a>

The tax total associated with an order.

##### shipping_total: `number`<a id="shipping_total-number"></a>

The shipping total for the order.

##### tracking_code: `string`<a id="tracking_code-string"></a>

The Mailchimp tracking code for the order. Uses the \\\'mc_tc\\\' parameter in E-Commerce tracking URLs.

##### processed_at_foreign: `string`<a id="processed_at_foreign-string"></a>

The date and time the order was processed in ISO 8601 format.

##### cancelled_at_foreign: `string`<a id="cancelled_at_foreign-string"></a>

The date and time the order was cancelled in ISO 8601 format. Note: passing a value for this parameter will cancel the order being edited.

##### updated_at_foreign: `string`<a id="updated_at_foreign-string"></a>

The date and time the order was updated in ISO 8601 format.

##### shipping_address: [`ShippingAddressProperty1`](./models/shipping-address-property1.ts)<a id="shipping_address-shippingaddressproperty1modelsshipping-address-property1ts"></a>

##### billing_address: [`BillingAddressProperty1`](./models/billing-address-property1.ts)<a id="billing_address-billingaddressproperty1modelsbilling-address-property1ts"></a>

##### promos: [`PromosPropertyInner`](./models/promos-property-inner.ts)[]<a id="promos-promospropertyinnermodelspromos-property-innerts"></a>

The promo codes applied on the order. Note: Patch will completely replace the value of promos with the new one provided.

##### lines: [`ECommerceOrderLineItem1`](./models/ecommerce-order-line-item1.ts)[]<a id="lines-ecommerceorderlineitem1modelsecommerce-order-line-item1ts"></a>

An array of the order\\\'s line items.

##### outreach: [`OutreachProperty1`](./models/outreach-property1.ts)<a id="outreach-outreachproperty1modelsoutreach-property1ts"></a>

##### tracking_number: `string`<a id="tracking_number-string"></a>

The tracking number associated with the order.

##### tracking_carrier: `string`<a id="tracking_carrier-string"></a>

The tracking carrier associated with the order.

##### tracking_url: `string`<a id="tracking_url-string"></a>

The tracking URL associated with the order.

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceUpdateSpecificOrderResponse](./models/ecommerce-update-specific-order-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}/orders/{order_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ecommerce.updateStore`<a id="mailchimpecommerceupdatestore"></a>

Update a store.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateStoreResponse = await mailchimp.ecommerce.updateStore({
  storeId: "storeId_example",
  name: "Freddie's Cat Hat Emporium",
  domain: "example.com",
  email_address: "freddie@mailchimp.com",
  currency_code: "USD",
  money_format: "$",
  primary_locale: "fr",
  timezone: "Eastern",
  phone: "404-444-4444",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storeId: `string`<a id="storeid-string"></a>

The store id.

##### name: `string`<a id="name-string"></a>

The name of the store.

##### platform: `string`<a id="platform-string"></a>

The e-commerce platform of the store.

##### domain: `string`<a id="domain-string"></a>

The store domain.

##### is_syncing: `boolean`<a id="is_syncing-boolean"></a>

Whether to disable automations because the store is currently [syncing](https://mailchimp.com/developer/marketing/docs/e-commerce/#pausing-store-automations).

##### email_address: `string`<a id="email_address-string"></a>

The email address for the store.

##### currency_code: `string`<a id="currency_code-string"></a>

The three-letter ISO 4217 code for the currency that the store accepts.

##### money_format: `string`<a id="money_format-string"></a>

The currency format for the store. For example: `$`, `£`, etc.

##### primary_locale: `string`<a id="primary_locale-string"></a>

The primary locale for the store. For example: `en`, `de`, etc.

##### timezone: `string`<a id="timezone-string"></a>

The timezone for the store.

##### phone: `string`<a id="phone-string"></a>

The store phone number.

##### address: [`AddressProperty1`](./models/address-property1.ts)<a id="address-addressproperty1modelsaddress-property1ts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EcommerceUpdateStoreResponse](./models/ecommerce-update-store-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ecommerce/stores/{store_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.facebookAds.getInfo`<a id="mailchimpfacebookadsgetinfo"></a>

Get details of a Facebook ad.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInfoResponse = await mailchimp.facebookAds.getInfo({
  outreachId: "outreachId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### outreachId: `string`<a id="outreachid-string"></a>

The outreach id.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[FacebookAdsGetInfoResponse](./models/facebook-ads-get-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/facebook-ads/{outreach_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.facebookAds.listAds`<a id="mailchimpfacebookadslistads"></a>

Get list of Facebook ads.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAdsResponse = await mailchimp.facebookAds.listAds({
  count: 10,
  offset: 0,
  sortField: "created_at",
  sortDir: "ASC",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### sortField: `'created_at' | 'updated_at' | 'end_time'`<a id="sortfield-created_at--updated_at--end_time"></a>

Returns files sorted by the specified field.

##### sortDir: `'ASC' | 'DESC'`<a id="sortdir-asc--desc"></a>

Determines the order direction for sorted results.

#### 🔄 Return<a id="🔄-return"></a>

[FacebookAdsListAdsResponse](./models/facebook-ads-list-ads-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/facebook-ads` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.fileManager.addNewFolder`<a id="mailchimpfilemanageraddnewfolder"></a>

Create a new folder in the File Manager.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addNewFolderResponse = await mailchimp.fileManager.addNewFolder({
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the folder.

#### 🔄 Return<a id="🔄-return"></a>

[FileManagerAddNewFolderResponse](./models/file-manager-add-new-folder-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/file-manager/folders` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.fileManager.deleteFolderById`<a id="mailchimpfilemanagerdeletefolderbyid"></a>

Delete a specific folder in the File Manager.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteFolderByIdResponse = await mailchimp.fileManager.deleteFolderById({
  folderId: "folderId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique id for the File Manager folder.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/file-manager/folders/{folder_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.fileManager.getFile`<a id="mailchimpfilemanagergetfile"></a>

Get information about a specific file in the File Manager.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFileResponse = await mailchimp.fileManager.getFile({
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique id for the File Manager file.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[FileManagerGetFileResponse](./models/file-manager-get-file-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/file-manager/files/{file_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.fileManager.getFolderInfo`<a id="mailchimpfilemanagergetfolderinfo"></a>

Get information about a specific folder in the File Manager.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFolderInfoResponse = await mailchimp.fileManager.getFolderInfo({
  folderId: "folderId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique id for the File Manager folder.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[FileManagerGetFolderInfoResponse](./models/file-manager-get-folder-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/file-manager/folders/{folder_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.fileManager.getFolderList`<a id="mailchimpfilemanagergetfolderlist"></a>

Get a list of all folders in the File Manager.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFolderListResponse = await mailchimp.fileManager.getFolderList({
  count: 10,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### createdBy: `string`<a id="createdby-string"></a>

The Mailchimp account user who created the File Manager file.

##### beforeCreatedAt: `string`<a id="beforecreatedat-string"></a>

Restrict the response to files created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### sinceCreatedAt: `string`<a id="sincecreatedat-string"></a>

Restrict the response to files created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

#### 🔄 Return<a id="🔄-return"></a>

[FileManagerGetFolderListResponse](./models/file-manager-get-folder-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/file-manager/folders` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.fileManager.listStoredFiles`<a id="mailchimpfilemanagerliststoredfiles"></a>

Get a list of available images and files stored in the File Manager for the account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listStoredFilesResponse = await mailchimp.fileManager.listStoredFiles({
  count: 10,
  offset: 0,
  sortField: "added_date",
  sortDir: "ASC",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### type: `string`<a id="type-string"></a>

The file type for the File Manager file.

##### createdBy: `string`<a id="createdby-string"></a>

The Mailchimp account user who created the File Manager file.

##### beforeCreatedAt: `string`<a id="beforecreatedat-string"></a>

Restrict the response to files created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### sinceCreatedAt: `string`<a id="sincecreatedat-string"></a>

Restrict the response to files created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### sortField: `'added_date' | 'name' | 'size'`<a id="sortfield-added_date--name--size"></a>

Returns files sorted by the specified field.

##### sortDir: `'ASC' | 'DESC'`<a id="sortdir-asc--desc"></a>

Determines the order direction for sorted results.

#### 🔄 Return<a id="🔄-return"></a>

[FileManagerListStoredFilesResponse](./models/file-manager-list-stored-files-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/file-manager/files` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.fileManager.listStoredFiles_0`<a id="mailchimpfilemanagerliststoredfiles_0"></a>

Get a list of available images and files stored in this folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listStoredFiles_0Response = await mailchimp.fileManager.listStoredFiles_0(
  {
    folderId: "folderId_example",
    count: 10,
    offset: 0,
    sortField: "added_date",
    sortDir: "ASC",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique id for the File Manager folder.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### type: `string`<a id="type-string"></a>

The file type for the File Manager file.

##### createdBy: `string`<a id="createdby-string"></a>

The Mailchimp account user who created the File Manager file.

##### beforeCreatedAt: `string`<a id="beforecreatedat-string"></a>

Restrict the response to files created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### sinceCreatedAt: `string`<a id="sincecreatedat-string"></a>

Restrict the response to files created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### sortField: `'added_date' | 'name' | 'size'`<a id="sortfield-added_date--name--size"></a>

Returns files sorted by the specified field.

##### sortDir: `'ASC' | 'DESC'`<a id="sortdir-asc--desc"></a>

Determines the order direction for sorted results.

#### 🔄 Return<a id="🔄-return"></a>

[FileManagerListStoredFiles200Response](./models/file-manager-list-stored-files200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/file-manager/folders/{folder_id}/files` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.fileManager.removeFileById`<a id="mailchimpfilemanagerremovefilebyid"></a>

Remove a specific file from the File Manager.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFileByIdResponse = await mailchimp.fileManager.removeFileById({
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique id for the File Manager file.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/file-manager/files/{file_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.fileManager.updateFile`<a id="mailchimpfilemanagerupdatefile"></a>

Update a file in the File Manager.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFileResponse = await mailchimp.fileManager.updateFile({
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique id for the File Manager file.

##### folder_id: `number`<a id="folder_id-number"></a>

The id of the folder. Setting `folder_id` to `0` will remove a file from its current folder.

##### name: `string`<a id="name-string"></a>

The name of the file.

#### 🔄 Return<a id="🔄-return"></a>

[FileManagerUpdateFileResponse](./models/file-manager-update-file-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/file-manager/files/{file_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.fileManager.updateSpecificFolder`<a id="mailchimpfilemanagerupdatespecificfolder"></a>

Update a specific File Manager folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSpecificFolderResponse =
  await mailchimp.fileManager.updateSpecificFolder({
    folderId: "folderId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the folder.

##### folderId: `string`<a id="folderid-string"></a>

The unique id for the File Manager folder.

#### 🔄 Return<a id="🔄-return"></a>

[FileManagerUpdateSpecificFolderResponse](./models/file-manager-update-specific-folder-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/file-manager/folders/{folder_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.fileManager.uploadFile`<a id="mailchimpfilemanageruploadfile"></a>

Upload a new image or file to the File Manager.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadFileResponse = await mailchimp.fileManager.uploadFile({
  name: "name_example",
  file_data: "file_data_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the file.

##### file_data: `string`<a id="file_data-string"></a>

The base64-encoded contents of the file.

##### folder_id: `number`<a id="folder_id-number"></a>

The id of the folder.

#### 🔄 Return<a id="🔄-return"></a>

[FileManagerUploadFileResponse](./models/file-manager-upload-file-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/file-manager/files` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.landingPages.createNewMailchimpLandingPage`<a id="mailchimplandingpagescreatenewmailchimplandingpage"></a>

Create a new Mailchimp landing page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewMailchimpLandingPageResponse =
  await mailchimp.landingPages.createNewMailchimpLandingPage({
    type: "signup",
    template_id: 1001,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

The title of this landing page seen in the browser\\\'s title bar.

##### description: `string`<a id="description-string"></a>

The description of this landing page.

##### name: `string`<a id="name-string"></a>

The name of this landing page.

##### store_id: `string`<a id="store_id-string"></a>

The ID of the store associated with this landing page.

##### list_id: `string`<a id="list_id-string"></a>

The list\\\'s ID associated with this landing page.

##### type: `string`<a id="type-string"></a>

The type of template the landing page has.

##### template_id: `number`<a id="template_id-number"></a>

The template_id of this landing page.

##### tracking: [`TrackingSettingsProperty`](./models/tracking-settings-property.ts)<a id="tracking-trackingsettingspropertymodelstracking-settings-propertyts"></a>

##### useDefaultList: `boolean`<a id="usedefaultlist-boolean"></a>

Will create the Landing Page using the account\'s Default List instead of requiring a list_id.

#### 🔄 Return<a id="🔄-return"></a>

[LandingPagesCreateNewMailchimpLandingPageResponse](./models/landing-pages-create-new-mailchimp-landing-page-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/landing-pages` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.landingPages.deletePage`<a id="mailchimplandingpagesdeletepage"></a>

Delete a landing page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deletePageResponse = await mailchimp.landingPages.deletePage({
  pageId: "pageId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pageId: `string`<a id="pageid-string"></a>

The unique id for the page.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/landing-pages/{page_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.landingPages.getContent`<a id="mailchimplandingpagesgetcontent"></a>

Get the the HTML for your landing page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getContentResponse = await mailchimp.landingPages.getContent({
  pageId: "pageId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pageId: `string`<a id="pageid-string"></a>

The unique id for the page.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[LandingPagesGetContentResponse](./models/landing-pages-get-content-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/landing-pages/{page_id}/content` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.landingPages.getPageInfo`<a id="mailchimplandingpagesgetpageinfo"></a>

Get information about a specific page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPageInfoResponse = await mailchimp.landingPages.getPageInfo({
  pageId: "pageId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pageId: `string`<a id="pageid-string"></a>

The unique id for the page.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[LandingPagesGetPageInfoResponse](./models/landing-pages-get-page-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/landing-pages/{page_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.landingPages.list`<a id="mailchimplandingpageslist"></a>

Get all landing pages.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await mailchimp.landingPages.list({
  sortDir: "ASC",
  sortField: "created_at",
  count: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sortDir: `'ASC' | 'DESC'`<a id="sortdir-asc--desc"></a>

Determines the order direction for sorted results.

##### sortField: `'created_at' | 'updated_at'`<a id="sortfield-created_at--updated_at"></a>

Returns files sorted by the specified field.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

#### 🔄 Return<a id="🔄-return"></a>

[LandingPagesListResponse](./models/landing-pages-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/landing-pages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.landingPages.publishAction`<a id="mailchimplandingpagespublishaction"></a>

Publish a landing page that is in draft, unpublished, or has been previously published and edited.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const publishActionResponse = await mailchimp.landingPages.publishAction({
  pageId: "pageId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pageId: `string`<a id="pageid-string"></a>

The unique id for the page.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/landing-pages/{page_id}/actions/publish` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.landingPages.unpublishAction`<a id="mailchimplandingpagesunpublishaction"></a>

Unpublish a landing page that is in draft or has been published.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unpublishActionResponse = await mailchimp.landingPages.unpublishAction({
  pageId: "pageId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pageId: `string`<a id="pageid-string"></a>

The unique id for the page.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/landing-pages/{page_id}/actions/unpublish` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.landingPages.updatePageById`<a id="mailchimplandingpagesupdatepagebyid"></a>

Update a landing page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePageByIdResponse = await mailchimp.landingPages.updatePageById({
  pageId: "pageId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pageId: `string`<a id="pageid-string"></a>

The unique id for the page.

##### title: `string`<a id="title-string"></a>

The title of this landing page seen in the browser\\\'s title bar.

##### description: `string`<a id="description-string"></a>

The description of this landing page.

##### name: `string`<a id="name-string"></a>

The name of this landing page.

##### store_id: `string`<a id="store_id-string"></a>

The ID of the store associated with this landing page.

##### list_id: `string`<a id="list_id-string"></a>

The list\\\'s ID associated with this landing page.

##### tracking: [`TrackingSettingsProperty`](./models/tracking-settings-property.ts)<a id="tracking-trackingsettingspropertymodelstracking-settings-propertyts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[LandingPagesUpdatePageByIdResponse](./models/landing-pages-update-page-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/landing-pages/{page_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.addInterestCategory`<a id="mailchimplistsaddinterestcategory"></a>

Create a new interest category.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addInterestCategoryResponse = await mailchimp.lists.addInterestCategory({
  listId: "listId_example",
  title: "title_example",
  type: "checkboxes",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

The text description of this category. This field appears on signup forms and is often phrased as a question.

##### type: `string`<a id="type-string"></a>

Determines how this category’s interests appear on signup forms.

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### display_order: `number`<a id="display_order-number"></a>

The order that the categories are displayed in the list. Lower numbers display first.

#### 🔄 Return<a id="🔄-return"></a>

[ListsAddInterestCategoryResponse](./models/lists-add-interest-category-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/interest-categories` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.addInterestInCategory`<a id="mailchimplistsaddinterestincategory"></a>

Create a new interest or 'group name' for a specific category.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addInterestInCategoryResponse =
  await mailchimp.lists.addInterestInCategory({
    listId: "listId_example",
    interestCategoryId: "interestCategoryId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the interest. This can be shown publicly on a subscription form.

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### interestCategoryId: `string`<a id="interestcategoryid-string"></a>

The unique ID for the interest category.

##### display_order: `number`<a id="display_order-number"></a>

The display order for interests.

#### 🔄 Return<a id="🔄-return"></a>

[ListsAddInterestInCategoryResponse](./models/lists-add-interest-in-category-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/interest-categories/{interest_category_id}/interests` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.addMemberEvent`<a id="mailchimplistsaddmemberevent"></a>

Add an event for a list member.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addMemberEventResponse = await mailchimp.lists.addMemberEvent({
  listId: "listId_example",
  subscriberHash: "subscriberHash_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name for this type of event (\\\'purchased\\\', \\\'visited\\\', etc). Must be 2-30 characters in length

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address. This endpoint also accepts a list member\'s email address or contact_id.

##### properties: Record<string, `string`><a id="properties-record"></a>

An optional list of properties

##### is_syncing: `boolean`<a id="is_syncing-boolean"></a>

Events created with the is_syncing value set to `true` will not trigger automations.

##### occurred_at: `string`<a id="occurred_at-string"></a>

The date and time the event occurred in ISO 8601 format.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/members/{subscriber_hash}/events` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.addMemberNote`<a id="mailchimplistsaddmembernote"></a>

Add a new note for a specific subscriber.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addMemberNoteResponse = await mailchimp.lists.addMemberNote({
  listId: "listId_example",
  subscriberHash: "subscriberHash_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address.

##### note: `string`<a id="note-string"></a>

The content of the note. Note length is limited to 1,000 characters.

#### 🔄 Return<a id="🔄-return"></a>

[ListsAddMemberNoteResponse](./models/lists-add-member-note-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/members/{subscriber_hash}/notes` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.addMemberTags`<a id="mailchimplistsaddmembertags"></a>

Add or remove tags from a list member. If a tag that does not exist is passed in and set as 'active', a new tag will be created.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addMemberTagsResponse = await mailchimp.lists.addMemberTags({
  listId: "listId_example",
  subscriberHash: "subscriberHash_example",
  tags: [
    {
      name: "name_example",
      status: "inactive",
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tags: [`MemberTag`](./models/member-tag.ts)[]<a id="tags-membertagmodelsmember-tagts"></a>

A list of tags assigned to the list member.

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address.

##### is_syncing: `boolean`<a id="is_syncing-boolean"></a>

When is_syncing is true, automations based on the tags in the request will not fire

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/members/{subscriber_hash}/tags` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.addMemberToList`<a id="mailchimplistsaddmembertolist"></a>

Add a new member to the list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addMemberToListResponse = await mailchimp.lists.addMemberToList({
  listId: "listId_example",
  email_address: "email_address_example",
  status: "subscribed",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email_address: `string`<a id="email_address-string"></a>

Email address for a subscriber.

##### status: `string`<a id="status-string"></a>

Subscriber\\\'s current status.

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### tags: `string`[]<a id="tags-string"></a>

The tags that are associated with a member.

##### email_type: `string`<a id="email_type-string"></a>

Type of email this member asked to get (\\\'html\\\' or \\\'text\\\').

##### merge_fields: `{ [key: string]: any; }`<a id="merge_fields--key-string-any-"></a>

A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.

##### interests: Record<string, `boolean`><a id="interests-record"></a>

The key of this object\\\'s properties is the ID of the interest in question.

##### language: `string`<a id="language-string"></a>

If set/detected, the [subscriber\\\'s language](https://mailchimp.com/help/view-and-edit-contact-languages/).

##### vip: `boolean`<a id="vip-boolean"></a>

[VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.

##### location: [`LocationProperty`](./models/location-property.ts)<a id="location-locationpropertymodelslocation-propertyts"></a>

##### marketing_permissions: [`MarketingPermission`](./models/marketing-permission.ts)[]<a id="marketing_permissions-marketingpermissionmodelsmarketing-permissionts"></a>

The marketing permissions for the subscriber.

##### ip_signup: `string`<a id="ip_signup-string"></a>

IP address the subscriber signed up from.

##### timestamp_signup: `string`<a id="timestamp_signup-string"></a>

The date and time the subscriber signed up for the list in ISO 8601 format.

##### ip_opt: `string`<a id="ip_opt-string"></a>

The IP address the subscriber used to confirm their opt-in status.

##### timestamp_opt: `string`<a id="timestamp_opt-string"></a>

The date and time the subscriber confirmed their opt-in status in ISO 8601 format.

##### skipMergeValidation: `boolean`<a id="skipmergevalidation-boolean"></a>

If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.

#### 🔄 Return<a id="🔄-return"></a>

[ListsAddMemberToListResponse](./models/lists-add-member-to-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/members` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.addMemberToSegment`<a id="mailchimplistsaddmembertosegment"></a>

Add a member to a static segment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addMemberToSegmentResponse = await mailchimp.lists.addMemberToSegment({
  listId: "listId_example",
  segmentId: "segmentId_example",
  email_address: "email_address_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email_address: `string`<a id="email_address-string"></a>

Email address for a subscriber.

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### segmentId: `string`<a id="segmentid-string"></a>

The unique id for the segment.

#### 🔄 Return<a id="🔄-return"></a>

[ListsAddMemberToSegmentResponse](./models/lists-add-member-to-segment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/segments/{segment_id}/members` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.addMergeField`<a id="mailchimplistsaddmergefield"></a>

Add a new merge field for a specific audience.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addMergeFieldResponse = await mailchimp.lists.addMergeField({
  listId: "listId_example",
  name: "name_example",
  type: "text",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the merge field (audience field).

##### type: `string`<a id="type-string"></a>

The [type](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for the merge field.

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### tag: `string`<a id="tag-string"></a>

The merge tag used for Mailchimp campaigns and [adding contact information](https://mailchimp.com/developer/marketing/docs/merge-fields/#add-merge-data-to-contacts).

##### required: `boolean`<a id="required-boolean"></a>

Whether the merge field is required to import a contact.

##### default_value: `string`<a id="default_value-string"></a>

The default value for the merge field if `null`.

##### public: `boolean`<a id="public-boolean"></a>

Whether the merge field is displayed on the signup form.

##### display_order: `number`<a id="display_order-number"></a>

The order that the merge field displays on the list signup form.

##### options: [`MergeFieldOptionsProperty`](./models/merge-field-options-property.ts)<a id="options-mergefieldoptionspropertymodelsmerge-field-options-propertyts"></a>

##### help_text: `string`<a id="help_text-string"></a>

Extra text to help the subscriber fill out the form.

#### 🔄 Return<a id="🔄-return"></a>

[ListsAddMergeFieldResponse](./models/lists-add-merge-field-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/merge-fields` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.addNewSegment`<a id="mailchimplistsaddnewsegment"></a>

Create a new segment in a specific list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addNewSegmentResponse = await mailchimp.lists.addNewSegment({
  listId: "listId_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the segment.

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### static_segment: `string`[]<a id="static_segment-string"></a>

An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored. Passing an empty array will create a static segment without any subscribers. This field cannot be provided with the options field.

##### options: [`ConditionsProperty`](./models/conditions-property.ts)<a id="options-conditionspropertymodelsconditions-propertyts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ListsAddNewSegmentResponse](./models/lists-add-new-segment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/segments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.addOrUpdateMember`<a id="mailchimplistsaddorupdatemember"></a>

Add or update a list member.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addOrUpdateMemberResponse = await mailchimp.lists.addOrUpdateMember({
  listId: "listId_example",
  subscriberHash: "subscriberHash_example",
  email_address: "email_address_example",
  status_if_new: "subscribed",
  status: "subscribed",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email_address: `string`<a id="email_address-string"></a>

Email address for a subscriber. This value is required only if the email address is not already present on the list.

##### status_if_new: `string`<a id="status_if_new-string"></a>

Subscriber\\\'s status. This value is required only if the email address is not already present on the list.

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address. This endpoint also accepts a list member\'s email address or contact_id.

##### email_type: `string`<a id="email_type-string"></a>

Type of email this member asked to get (\\\'html\\\' or \\\'text\\\').

##### status: `string`<a id="status-string"></a>

Subscriber\\\'s current status.

##### merge_fields: `{ [key: string]: any; }`<a id="merge_fields--key-string-any-"></a>

A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.

##### interests: Record<string, `boolean`><a id="interests-record"></a>

The key of this object\\\'s properties is the ID of the interest in question.

##### language: `string`<a id="language-string"></a>

If set/detected, the [subscriber\\\'s language](https://mailchimp.com/help/view-and-edit-contact-languages/).

##### vip: `boolean`<a id="vip-boolean"></a>

[VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.

##### location: [`LocationProperty`](./models/location-property.ts)<a id="location-locationpropertymodelslocation-propertyts"></a>

##### marketing_permissions: [`MarketingPermission`](./models/marketing-permission.ts)[]<a id="marketing_permissions-marketingpermissionmodelsmarketing-permissionts"></a>

The marketing permissions for the subscriber.

##### ip_signup: `string`<a id="ip_signup-string"></a>

IP address the subscriber signed up from.

##### timestamp_signup: `string`<a id="timestamp_signup-string"></a>

The date and time the subscriber signed up for the list in ISO 8601 format.

##### ip_opt: `string`<a id="ip_opt-string"></a>

The IP address the subscriber used to confirm their opt-in status.

##### timestamp_opt: `string`<a id="timestamp_opt-string"></a>

The date and time the subscriber confirmed their opt-in status in ISO 8601 format.

##### skipMergeValidation: `boolean`<a id="skipmergevalidation-boolean"></a>

If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.

#### 🔄 Return<a id="🔄-return"></a>

[ListsAddOrUpdateMemberResponse](./models/lists-add-or-update-member-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/members/{subscriber_hash}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.archiveMember`<a id="mailchimplistsarchivemember"></a>

Archive a list member. To permanently delete, use the delete-permanent action.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const archiveMemberResponse = await mailchimp.lists.archiveMember({
  listId: "listId_example",
  subscriberHash: "subscriberHash_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address. This endpoint also accepts a list member\'s email address or contact_id.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/members/{subscriber_hash}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.batchAddRemoveMembers`<a id="mailchimplistsbatchaddremovemembers"></a>

Batch add/remove list members to static segment

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const batchAddRemoveMembersResponse =
  await mailchimp.lists.batchAddRemoveMembers({
    listId: "listId_example",
    segmentId: "segmentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### segmentId: `string`<a id="segmentid-string"></a>

The unique id for the segment.

##### members_to_add: `string`[]<a id="members_to_add-string"></a>

An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored. A maximum of 500 members can be sent.

##### members_to_remove: `string`[]<a id="members_to_remove-string"></a>

An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored. A maximum of 500 members can be sent.

#### 🔄 Return<a id="🔄-return"></a>

[ListsBatchAddRemoveMembersResponse](./models/lists-batch-add-remove-members-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/segments/{segment_id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.batchSubscribeOrUnsubscribe`<a id="mailchimplistsbatchsubscribeorunsubscribe"></a>

Batch subscribe or unsubscribe list members.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const batchSubscribeOrUnsubscribeResponse =
  await mailchimp.lists.batchSubscribeOrUnsubscribe({
    listId: "listId_example",
    members: [
      {
        status: "subscribed",
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### members: [`AddListMembers`](./models/add-list-members.ts)[]<a id="members-addlistmembersmodelsadd-list-membersts"></a>

An array of objects, each representing an email address and the subscription status for a specific list. Up to 500 members may be added or updated with each API call.

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### sync_tags: `boolean`<a id="sync_tags-boolean"></a>

Whether this batch operation will replace all existing tags with tags in request.

##### update_existing: `boolean`<a id="update_existing-boolean"></a>

Whether this batch operation will change existing members\\\' subscription status.

##### skipMergeValidation: `boolean`<a id="skipmergevalidation-boolean"></a>

If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.

##### skipDuplicateCheck: `boolean`<a id="skipduplicatecheck-boolean"></a>

If skip_duplicate_check is true, we will ignore duplicates sent in the request when using the batch sub/unsub on the lists endpoint. The status of the first appearance in the request will be saved. This defaults to false.

#### 🔄 Return<a id="🔄-return"></a>

[ListsBatchSubscribeOrUnsubscribeResponse](./models/lists-batch-subscribe-or-unsubscribe-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.createNewList`<a id="mailchimplistscreatenewlist"></a>

Create a new list in your Mailchimp account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewListResponse = await mailchimp.lists.createNewList({
  name: "name_example",
  contact: {
    company: "company_example",
    address1: "address1_example",
    city: "city_example",
    country: "country_example",
  },
  permission_reminder: "permission_reminder_example",
  use_archive_bar: false,
  campaign_defaults: {
    from_name: "from_name_example",
    from_email: "from_email_example",
    subject: "subject_example",
    language: "language_example",
  },
  notify_on_subscribe: "false",
  notify_on_unsubscribe: "false",
  email_type_option: true,
  double_optin: false,
  marketing_permissions: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the list.

##### contact: [`ListContactProperty`](./models/list-contact-property.ts)<a id="contact-listcontactpropertymodelslist-contact-propertyts"></a>

##### permission_reminder: `string`<a id="permission_reminder-string"></a>

The [permission reminder](https://mailchimp.com/help/edit-the-permission-reminder/) for the list.

##### campaign_defaults: [`CampaignDefaultsProperty`](./models/campaign-defaults-property.ts)<a id="campaign_defaults-campaigndefaultspropertymodelscampaign-defaults-propertyts"></a>

##### email_type_option: `boolean`<a id="email_type_option-boolean"></a>

Whether the list supports [multiple formats for emails](https://mailchimp.com/help/change-audience-name-defaults/). When set to `true`, subscribers can choose whether they want to receive HTML or plain-text emails. When set to `false`, subscribers will receive HTML emails, with a plain-text alternative backup.

##### use_archive_bar: `boolean`<a id="use_archive_bar-boolean"></a>

Whether campaigns for this list use the [Archive Bar](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) in archives by default.

##### notify_on_subscribe: `string`<a id="notify_on_subscribe-string"></a>

The email address to send [subscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.

##### notify_on_unsubscribe: `string`<a id="notify_on_unsubscribe-string"></a>

The email address to send [unsubscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.

##### double_optin: `boolean`<a id="double_optin-boolean"></a>

Whether or not to require the subscriber to confirm subscription via email.

##### marketing_permissions: `boolean`<a id="marketing_permissions-boolean"></a>

Whether or not the list has marketing permissions (eg. GDPR) enabled.

#### 🔄 Return<a id="🔄-return"></a>

[ListsCreateNewListResponse](./models/lists-create-new-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.createWebhook`<a id="mailchimplistscreatewebhook"></a>

Create a new webhook for a specific list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createWebhookResponse = await mailchimp.lists.createWebhook({
  listId: "listId_example",
  url: "http://yourdomain.com/webhook",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### url: `string`<a id="url-string"></a>

A valid URL for the Webhook.

##### events: [`EventsProperty`](./models/events-property.ts)<a id="events-eventspropertymodelsevents-propertyts"></a>

##### sources: [`SourcesProperty`](./models/sources-property.ts)<a id="sources-sourcespropertymodelssources-propertyts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ListsCreateWebhookResponse](./models/lists-create-webhook-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/webhooks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.customizeSignupForm`<a id="mailchimplistscustomizesignupform"></a>

Customize a list's default signup form.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const customizeSignupFormResponse = await mailchimp.lists.customizeSignupForm({
  listId: "listId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### header: [`SignupFormHeaderOptionsProperty`](./models/signup-form-header-options-property.ts)<a id="header-signupformheaderoptionspropertymodelssignup-form-header-options-propertyts"></a>

##### contents: [`CollectionOfContentForListSignupForms`](./models/collection-of-content-for-list-signup-forms.ts)[]<a id="contents-collectionofcontentforlistsignupformsmodelscollection-of-content-for-list-signup-formsts"></a>

The signup form body content.

##### styles: [`CollectionOfElementStyleForListSignupForms`](./models/collection-of-element-style-for-list-signup-forms.ts)[]<a id="styles-collectionofelementstyleforlistsignupformsmodelscollection-of-element-style-for-list-signup-formsts"></a>

An array of objects, each representing an element style for the signup form.

#### 🔄 Return<a id="🔄-return"></a>

[ListsCustomizeSignupFormResponse](./models/lists-customize-signup-form-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/signup-forms` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.deleteInterestCategory`<a id="mailchimplistsdeleteinterestcategory"></a>

Delete a specific interest category.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteInterestCategoryResponse =
  await mailchimp.lists.deleteInterestCategory({
    listId: "listId_example",
    interestCategoryId: "interestCategoryId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### interestCategoryId: `string`<a id="interestcategoryid-string"></a>

The unique ID for the interest category.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/interest-categories/{interest_category_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.deleteInterestInCategory`<a id="mailchimplistsdeleteinterestincategory"></a>

Delete interests or group names in a specific category.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteInterestInCategoryResponse =
  await mailchimp.lists.deleteInterestInCategory({
    listId: "listId_example",
    interestCategoryId: "interestCategoryId_example",
    interestId: "interestId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### interestCategoryId: `string`<a id="interestcategoryid-string"></a>

The unique ID for the interest category.

##### interestId: `string`<a id="interestid-string"></a>

The specific interest or \'group name\'.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.deleteList`<a id="mailchimplistsdeletelist"></a>

Delete a list from your Mailchimp account. If you delete a list, you'll lose the list history—including subscriber activity, unsubscribes, complaints, and bounces. You’ll also lose subscribers’ email addresses, unless you exported and backed up your list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteListResponse = await mailchimp.lists.deleteList({
  listId: "listId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.deleteMergeField`<a id="mailchimplistsdeletemergefield"></a>

Delete a specific merge field.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteMergeFieldResponse = await mailchimp.lists.deleteMergeField({
  listId: "listId_example",
  mergeId: "mergeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### mergeId: `string`<a id="mergeid-string"></a>

The id for the merge field.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/merge-fields/{merge_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.deleteNote`<a id="mailchimplistsdeletenote"></a>

Delete a specific note for a specific list member.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteNoteResponse = await mailchimp.lists.deleteNote({
  listId: "listId_example",
  subscriberHash: "subscriberHash_example",
  noteId: "noteId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address. This endpoint also accepts a list member\'s email address or contact_id.

##### noteId: `string`<a id="noteid-string"></a>

The id for the note.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.deleteSegment`<a id="mailchimplistsdeletesegment"></a>

Delete a specific segment in a list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSegmentResponse = await mailchimp.lists.deleteSegment({
  listId: "listId_example",
  segmentId: "segmentId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### segmentId: `string`<a id="segmentid-string"></a>

The unique id for the segment.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/segments/{segment_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.deleteWebhook`<a id="mailchimplistsdeletewebhook"></a>

Delete a specific webhook in a list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteWebhookResponse = await mailchimp.lists.deleteWebhook({
  listId: "listId_example",
  webhookId: "webhookId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### webhookId: `string`<a id="webhookid-string"></a>

The webhook\'s id.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/webhooks/{webhook_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getAbuseReport`<a id="mailchimplistsgetabusereport"></a>

Get details about a specific abuse report.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAbuseReportResponse = await mailchimp.lists.getAbuseReport({
  count: 10,
  offset: 0,
  listId: "listId_example",
  reportId: "reportId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### reportId: `string`<a id="reportid-string"></a>

The id for the abuse report.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[ListsGetAbuseReportResponse](./models/lists-get-abuse-report-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/abuse-reports/{report_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getAllAbuseReports`<a id="mailchimplistsgetallabusereports"></a>

Get all abuse reports for a specific list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllAbuseReportsResponse = await mailchimp.lists.getAllAbuseReports({
  count: 10,
  offset: 0,
  listId: "listId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[ListsGetAllAbuseReportsResponse](./models/lists-get-all-abuse-reports-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/abuse-reports` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getAllInfo`<a id="mailchimplistsgetallinfo"></a>

Get information about all lists in the account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllInfoResponse = await mailchimp.lists.getAllInfo({
  count: 10,
  offset: 0,
  sortField: "date_created",
  sortDir: "ASC",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### beforeDateCreated: `string`<a id="beforedatecreated-string"></a>

Restrict response to lists created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### sinceDateCreated: `string`<a id="sincedatecreated-string"></a>

Restrict results to lists created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### beforeCampaignLastSent: `string`<a id="beforecampaignlastsent-string"></a>

Restrict results to lists created before the last campaign send date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### sinceCampaignLastSent: `string`<a id="sincecampaignlastsent-string"></a>

Restrict results to lists created after the last campaign send date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### email: `string`<a id="email-string"></a>

Restrict results to lists that include a specific subscriber\'s email address.

##### sortField: `'date_created'`<a id="sortfield-date_created"></a>

Returns files sorted by the specified field.

##### sortDir: `'ASC' | 'DESC'`<a id="sortdir-asc--desc"></a>

Determines the order direction for sorted results.

##### hasEcommerceStore: `boolean`<a id="hasecommercestore-boolean"></a>

Restrict results to lists that contain an active, connected, undeleted ecommerce store.

##### includeTotalContacts: `boolean`<a id="includetotalcontacts-boolean"></a>

Return the total_contacts field in the stats response, which contains an approximate count of all contacts in any state.

#### 🔄 Return<a id="🔄-return"></a>

[ListsGetAllInfoResponse](./models/lists-get-all-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getGrowthHistoryByMonth`<a id="mailchimplistsgetgrowthhistorybymonth"></a>

Get a summary of a specific list's growth activity for a specific month and year.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getGrowthHistoryByMonthResponse =
  await mailchimp.lists.getGrowthHistoryByMonth({
    listId: "listId_example",
    month: "month_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### month: `string`<a id="month-string"></a>

A specific month of list growth history.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ListsGetGrowthHistoryByMonthResponse](./models/lists-get-growth-history-by-month-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/growth-history/{month}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getGrowthHistoryData`<a id="mailchimplistsgetgrowthhistorydata"></a>

Get a month-by-month summary of a specific list's growth activity.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getGrowthHistoryDataResponse = await mailchimp.lists.getGrowthHistoryData(
  {
    count: 10,
    offset: 0,
    listId: "listId_example",
    sortField: "month",
    sortDir: "ASC",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### sortField: `'month'`<a id="sortfield-month"></a>

Returns files sorted by the specified field.

##### sortDir: `'ASC' | 'DESC'`<a id="sortdir-asc--desc"></a>

Determines the order direction for sorted results.

#### 🔄 Return<a id="🔄-return"></a>

[ListsGetGrowthHistoryDataResponse](./models/lists-get-growth-history-data-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/growth-history` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getInterestCategoryInfo`<a id="mailchimplistsgetinterestcategoryinfo"></a>

Get information about a specific interest category.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInterestCategoryInfoResponse =
  await mailchimp.lists.getInterestCategoryInfo({
    listId: "listId_example",
    interestCategoryId: "interestCategoryId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### interestCategoryId: `string`<a id="interestcategoryid-string"></a>

The unique ID for the interest category.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ListsGetInterestCategoryInfoResponse](./models/lists-get-interest-category-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/interest-categories/{interest_category_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getInterestInCategory`<a id="mailchimplistsgetinterestincategory"></a>

Get interests or 'group names' for a specific category.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInterestInCategoryResponse =
  await mailchimp.lists.getInterestInCategory({
    listId: "listId_example",
    interestCategoryId: "interestCategoryId_example",
    interestId: "interestId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### interestCategoryId: `string`<a id="interestcategoryid-string"></a>

The unique ID for the interest category.

##### interestId: `string`<a id="interestid-string"></a>

The specific interest or \'group name\'.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ListsGetInterestInCategoryResponse](./models/lists-get-interest-in-category-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getListInfo`<a id="mailchimplistsgetlistinfo"></a>

Get information about a specific list in your Mailchimp account. Results include list members who have signed up but haven't confirmed their subscription yet and unsubscribed or cleaned.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListInfoResponse = await mailchimp.lists.getListInfo({
  listId: "listId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### includeTotalContacts: `boolean`<a id="includetotalcontacts-boolean"></a>

Return the total_contacts field in the stats response, which contains an approximate count of all contacts in any state.

#### 🔄 Return<a id="🔄-return"></a>

[ListsGetListInfoResponse](./models/lists-get-list-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getLocations`<a id="mailchimplistsgetlocations"></a>

Get the locations (countries) that the list's subscribers have been tagged to based on geocoding their IP address.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLocationsResponse = await mailchimp.lists.getLocations({
  listId: "listId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ListsGetLocationsResponse](./models/lists-get-locations-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/locations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getMemberEvents`<a id="mailchimplistsgetmemberevents"></a>

Get events for a contact.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMemberEventsResponse = await mailchimp.lists.getMemberEvents({
  listId: "listId_example",
  subscriberHash: "subscriberHash_example",
  count: 10,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address. This endpoint also accepts a list member\'s email address or contact_id.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ListsGetMemberEventsResponse](./models/lists-get-member-events-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/members/{subscriber_hash}/events` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getMemberGoals`<a id="mailchimplistsgetmembergoals"></a>

Get the last 50 Goal events for a member on a specific list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMemberGoalsResponse = await mailchimp.lists.getMemberGoals({
  listId: "listId_example",
  subscriberHash: "subscriberHash_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address. This endpoint also accepts a list member\'s email address or contact_id.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ListsGetMemberGoalsResponse](./models/lists-get-member-goals-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/members/{subscriber_hash}/goals` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getMemberInfo`<a id="mailchimplistsgetmemberinfo"></a>

Get information about a specific list member, including a currently subscribed, unsubscribed, or bounced member.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMemberInfoResponse = await mailchimp.lists.getMemberInfo({
  listId: "listId_example",
  subscriberHash: "subscriberHash_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address. This endpoint also accepts a list member\'s email address or contact_id.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ListsGetMemberInfoResponse](./models/lists-get-member-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/members/{subscriber_hash}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getMemberNote`<a id="mailchimplistsgetmembernote"></a>

Get a specific note for a specific list member.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMemberNoteResponse = await mailchimp.lists.getMemberNote({
  listId: "listId_example",
  subscriberHash: "subscriberHash_example",
  noteId: "noteId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address. This endpoint also accepts a list member\'s email address or contact_id.

##### noteId: `string`<a id="noteid-string"></a>

The id for the note.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ListsGetMemberNoteResponse](./models/lists-get-member-note-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getMemberNotes`<a id="mailchimplistsgetmembernotes"></a>

Get recent notes for a specific list member.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMemberNotesResponse = await mailchimp.lists.getMemberNotes({
  listId: "listId_example",
  subscriberHash: "subscriberHash_example",
  sortField: "created_at",
  sortDir: "ASC",
  count: 10,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address.

##### sortField: `'created_at' | 'updated_at' | 'note_id'`<a id="sortfield-created_at--updated_at--note_id"></a>

Returns notes sorted by the specified field.

##### sortDir: `'ASC' | 'DESC'`<a id="sortdir-asc--desc"></a>

Determines the order direction for sorted results.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[ListsGetMemberNotesResponse](./models/lists-get-member-notes-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/members/{subscriber_hash}/notes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getMemberTags`<a id="mailchimplistsgetmembertags"></a>

Get the tags on a list member.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMemberTagsResponse = await mailchimp.lists.getMemberTags({
  listId: "listId_example",
  subscriberHash: "subscriberHash_example",
  count: 10,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address. This endpoint also accepts a list member\'s email address or contact_id.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[ListsGetMemberTagsResponse](./models/lists-get-member-tags-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/members/{subscriber_hash}/tags` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getMembersInfo`<a id="mailchimplistsgetmembersinfo"></a>

Get information about members in a specific Mailchimp list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMembersInfoResponse = await mailchimp.lists.getMembersInfo({
  count: 10,
  offset: 0,
  listId: "listId_example",
  status: "subscribed",
  interestMatch: "any",
  sortField: "timestamp_opt",
  sortDir: "ASC",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### emailType: `string`<a id="emailtype-string"></a>

The email type.

##### status: `'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional' | 'archived'`<a id="status-subscribed--unsubscribed--cleaned--pending--transactional--archived"></a>

The subscriber\'s status.

##### sinceTimestampOpt: `string`<a id="sincetimestampopt-string"></a>

Restrict results to subscribers who opted-in after the set timeframe. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### beforeTimestampOpt: `string`<a id="beforetimestampopt-string"></a>

Restrict results to subscribers who opted-in before the set timeframe. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### sinceLastChanged: `string`<a id="sincelastchanged-string"></a>

Restrict results to subscribers whose information changed after the set timeframe. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### beforeLastChanged: `string`<a id="beforelastchanged-string"></a>

Restrict results to subscribers whose information changed before the set timeframe. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### uniqueEmailId: `string`<a id="uniqueemailid-string"></a>

A unique identifier for the email address across all Mailchimp lists.

##### vipOnly: `boolean`<a id="viponly-boolean"></a>

A filter to return only the list\'s VIP members. Passing `true` will restrict results to VIP list members, passing `false` will return all list members.

##### interestCategoryId: `string`<a id="interestcategoryid-string"></a>

The unique id for the interest category.

##### interestIds: `string`<a id="interestids-string"></a>

Used to filter list members by interests. Must be accompanied by interest_category_id and interest_match. The value must be a comma separated list of interest ids present for any supplied interest categories.

##### interestMatch: `'any' | 'all' | 'none'`<a id="interestmatch-any--all--none"></a>

Used to filter list members by interests. Must be accompanied by interest_category_id and interest_ids. \"any\" will match a member with any of the interest supplied, \"all\" will only match members with every interest supplied, and \"none\" will match members without any of the interest supplied.

##### sortField: `'timestamp_opt' | 'timestamp_signup' | 'last_changed'`<a id="sortfield-timestamp_opt--timestamp_signup--last_changed"></a>

Returns files sorted by the specified field.

##### sortDir: `'ASC' | 'DESC'`<a id="sortdir-asc--desc"></a>

Determines the order direction for sorted results.

##### sinceLastCampaign: `boolean`<a id="sincelastcampaign-boolean"></a>

Filter subscribers by those subscribed/unsubscribed/pending/cleaned since last email campaign send. Member status is required to use this filter.

##### unsubscribedSince: `string`<a id="unsubscribedsince-string"></a>

Filter subscribers by those unsubscribed since a specific date. Using any status other than unsubscribed with this filter will result in an error.

#### 🔄 Return<a id="🔄-return"></a>

[ListsGetMembersInfoResponse](./models/lists-get-members-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/members` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getMergeFieldInfo`<a id="mailchimplistsgetmergefieldinfo"></a>

Get information about a specific merge field.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMergeFieldInfoResponse = await mailchimp.lists.getMergeFieldInfo({
  listId: "listId_example",
  mergeId: "mergeId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### mergeId: `string`<a id="mergeid-string"></a>

The id for the merge field.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ListsGetMergeFieldInfoResponse](./models/lists-get-merge-field-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/merge-fields/{merge_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getRecentActivityStats`<a id="mailchimplistsgetrecentactivitystats"></a>

Get up to the previous 180 days of daily detailed aggregated activity stats for a list, not including Automation activity.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecentActivityStatsResponse =
  await mailchimp.lists.getRecentActivityStats({
    count: 10,
    offset: 0,
    listId: "listId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ListsGetRecentActivityStatsResponse](./models/lists-get-recent-activity-stats-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/activity` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getSegmentInfo`<a id="mailchimplistsgetsegmentinfo"></a>

Get information about a specific segment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSegmentInfoResponse = await mailchimp.lists.getSegmentInfo({
  listId: "listId_example",
  segmentId: "segmentId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### segmentId: `string`<a id="segmentid-string"></a>

The unique id for the segment.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### includeCleaned: `boolean`<a id="includecleaned-boolean"></a>

Include cleaned members in response

##### includeTransactional: `boolean`<a id="includetransactional-boolean"></a>

Include transactional members in response

##### includeUnsubscribed: `boolean`<a id="includeunsubscribed-boolean"></a>

Include unsubscribed members in response

#### 🔄 Return<a id="🔄-return"></a>

[ListsGetSegmentInfoResponse](./models/lists-get-segment-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/segments/{segment_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getSegmentMembers`<a id="mailchimplistsgetsegmentmembers"></a>

Get information about members in a saved segment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSegmentMembersResponse = await mailchimp.lists.getSegmentMembers({
  count: 10,
  offset: 0,
  listId: "listId_example",
  segmentId: "segmentId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### segmentId: `string`<a id="segmentid-string"></a>

The unique id for the segment.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### includeCleaned: `boolean`<a id="includecleaned-boolean"></a>

Include cleaned members in response

##### includeTransactional: `boolean`<a id="includetransactional-boolean"></a>

Include transactional members in response

##### includeUnsubscribed: `boolean`<a id="includeunsubscribed-boolean"></a>

Include unsubscribed members in response

#### 🔄 Return<a id="🔄-return"></a>

[ListsGetSegmentMembersResponse](./models/lists-get-segment-members-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/segments/{segment_id}/members` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getSegmentsInfo`<a id="mailchimplistsgetsegmentsinfo"></a>

Get information about all available segments for a specific list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSegmentsInfoResponse = await mailchimp.lists.getSegmentsInfo({
  count: 10,
  offset: 0,
  listId: "listId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### type: `string`<a id="type-string"></a>

Limit results based on segment type.

##### sinceCreatedAt: `string`<a id="sincecreatedat-string"></a>

Restrict results to segments created after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### beforeCreatedAt: `string`<a id="beforecreatedat-string"></a>

Restrict results to segments created before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### includeCleaned: `boolean`<a id="includecleaned-boolean"></a>

Include cleaned members in response

##### includeTransactional: `boolean`<a id="includetransactional-boolean"></a>

Include transactional members in response

##### includeUnsubscribed: `boolean`<a id="includeunsubscribed-boolean"></a>

Include unsubscribed members in response

##### sinceUpdatedAt: `string`<a id="sinceupdatedat-string"></a>

Restrict results to segments update after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### beforeUpdatedAt: `string`<a id="beforeupdatedat-string"></a>

Restrict results to segments update before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

#### 🔄 Return<a id="🔄-return"></a>

[ListsGetSegmentsInfoResponse](./models/lists-get-segments-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/segments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getSignupForms`<a id="mailchimplistsgetsignupforms"></a>

Get signup forms for a specific list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSignupFormsResponse = await mailchimp.lists.getSignupForms({
  listId: "listId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

#### 🔄 Return<a id="🔄-return"></a>

[ListsGetSignupFormsResponse](./models/lists-get-signup-forms-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/signup-forms` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getSurveyDetails`<a id="mailchimplistsgetsurveydetails"></a>

Get details about a specific survey.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSurveyDetailsResponse = await mailchimp.lists.getSurveyDetails({
  listId: "listId_example",
  surveyId: "surveyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### surveyId: `string`<a id="surveyid-string"></a>

The ID of the survey.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/surveys/{survey_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getSurveysInfo`<a id="mailchimplistsgetsurveysinfo"></a>

Get information about all available surveys for a specific list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSurveysInfoResponse = await mailchimp.lists.getSurveysInfo({
  listId: "listId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/surveys` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getWebhookInfo`<a id="mailchimplistsgetwebhookinfo"></a>

Get information about a specific webhook.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWebhookInfoResponse = await mailchimp.lists.getWebhookInfo({
  listId: "listId_example",
  webhookId: "webhookId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### webhookId: `string`<a id="webhookid-string"></a>

The webhook\'s id.

#### 🔄 Return<a id="🔄-return"></a>

[ListsGetWebhookInfoResponse](./models/lists-get-webhook-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/webhooks/{webhook_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.getWebhooksInfo`<a id="mailchimplistsgetwebhooksinfo"></a>

Get information about all webhooks for a specific list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWebhooksInfoResponse = await mailchimp.lists.getWebhooksInfo({
  listId: "listId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

#### 🔄 Return<a id="🔄-return"></a>

[ListsGetWebhooksInfoResponse](./models/lists-get-webhooks-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/webhooks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.listCategoryInterests`<a id="mailchimplistslistcategoryinterests"></a>

Get a list of this category's interests.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCategoryInterestsResponse =
  await mailchimp.lists.listCategoryInterests({
    listId: "listId_example",
    interestCategoryId: "interestCategoryId_example",
    count: 10,
    offset: 0,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### interestCategoryId: `string`<a id="interestcategoryid-string"></a>

The unique ID for the interest category.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[ListsListCategoryInterestsResponse](./models/lists-list-category-interests-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/interest-categories/{interest_category_id}/interests` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.listInterestCategories`<a id="mailchimplistslistinterestcategories"></a>

Get information about a list's interest categories.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listInterestCategoriesResponse =
  await mailchimp.lists.listInterestCategories({
    listId: "listId_example",
    count: 10,
    offset: 0,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### type: `string`<a id="type-string"></a>

Restrict results a type of interest group

#### 🔄 Return<a id="🔄-return"></a>

[ListsListInterestCategoriesResponse](./models/lists-list-interest-categories-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/interest-categories` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.listMergeFields`<a id="mailchimplistslistmergefields"></a>

Get a list of all merge fields for an audience.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMergeFieldsResponse = await mailchimp.lists.listMergeFields({
  listId: "listId_example",
  count: 10,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### type: `string`<a id="type-string"></a>

The merge field type.

##### required: `boolean`<a id="required-boolean"></a>

Whether it\'s a required merge field.

#### 🔄 Return<a id="🔄-return"></a>

[ListsListMergeFieldsResponse](./models/lists-list-merge-fields-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/merge-fields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.listTopEmailClients`<a id="mailchimplistslisttopemailclients"></a>

Get a list of the top email clients based on user-agent strings.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTopEmailClientsResponse = await mailchimp.lists.listTopEmailClients({
  listId: "listId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ListsListTopEmailClientsResponse](./models/lists-list-top-email-clients-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/clients` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.removeMemberFromSegment`<a id="mailchimplistsremovememberfromsegment"></a>

Remove a member from the specified static segment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeMemberFromSegmentResponse =
  await mailchimp.lists.removeMemberFromSegment({
    listId: "listId_example",
    segmentId: "segmentId_example",
    subscriberHash: "subscriberHash_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### segmentId: `string`<a id="segmentid-string"></a>

The unique id for the segment.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/segments/{segment_id}/members/{subscriber_hash}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.removeMemberPermanent`<a id="mailchimplistsremovememberpermanent"></a>

Delete all personally identifiable information related to a list member, and remove them from a list. This will make it impossible to re-import the list member.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeMemberPermanentResponse =
  await mailchimp.lists.removeMemberPermanent({
    listId: "listId_example",
    subscriberHash: "subscriberHash_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/members/{subscriber_hash}/actions/delete-permanent` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.searchTagsByName`<a id="mailchimplistssearchtagsbyname"></a>

Search for tags on a list by name. If no name is provided, will return all tags on the list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchTagsByNameResponse = await mailchimp.lists.searchTagsByName({
  listId: "listId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### name: `string`<a id="name-string"></a>

The search query used to filter tags.  The search query will be compared to each tag as a prefix, so all tags that have a name starting with this field will be returned.

#### 🔄 Return<a id="🔄-return"></a>

[ListsSearchTagsByNameResponse](./models/lists-search-tags-by-name-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/tag-search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.updateInterestCategory`<a id="mailchimplistsupdateinterestcategory"></a>

Update a specific interest category.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateInterestCategoryResponse =
  await mailchimp.lists.updateInterestCategory({
    listId: "listId_example",
    interestCategoryId: "interestCategoryId_example",
    title: "title_example",
    type: "checkboxes",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

The text description of this category. This field appears on signup forms and is often phrased as a question.

##### type: `string`<a id="type-string"></a>

Determines how this category’s interests appear on signup forms.

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### interestCategoryId: `string`<a id="interestcategoryid-string"></a>

The unique ID for the interest category.

##### display_order: `number`<a id="display_order-number"></a>

The order that the categories are displayed in the list. Lower numbers display first.

#### 🔄 Return<a id="🔄-return"></a>

[ListsUpdateInterestCategoryResponse](./models/lists-update-interest-category-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/interest-categories/{interest_category_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.updateInterestCategoryInterest`<a id="mailchimplistsupdateinterestcategoryinterest"></a>

Update interests or 'group names' for a specific category.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateInterestCategoryInterestResponse =
  await mailchimp.lists.updateInterestCategoryInterest({
    listId: "listId_example",
    interestCategoryId: "interestCategoryId_example",
    interestId: "interestId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the interest. This can be shown publicly on a subscription form.

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### interestCategoryId: `string`<a id="interestcategoryid-string"></a>

The unique ID for the interest category.

##### interestId: `string`<a id="interestid-string"></a>

The specific interest or \'group name\'.

##### display_order: `number`<a id="display_order-number"></a>

The display order for interests.

#### 🔄 Return<a id="🔄-return"></a>

[ListsUpdateInterestCategoryInterestResponse](./models/lists-update-interest-category-interest-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/interest-categories/{interest_category_id}/interests/{interest_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.updateMember`<a id="mailchimplistsupdatemember"></a>

Update information for a specific list member.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMemberResponse = await mailchimp.lists.updateMember({
  listId: "listId_example",
  subscriberHash: "subscriberHash_example",
  status: "subscribed",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address. This endpoint also accepts a list member\'s email address or contact_id.

##### email_address: `string`<a id="email_address-string"></a>

Email address for a subscriber.

##### email_type: `string`<a id="email_type-string"></a>

Type of email this member asked to get (\\\'html\\\' or \\\'text\\\').

##### status: `string`<a id="status-string"></a>

Subscriber\\\'s current status.

##### merge_fields: `{ [key: string]: any; }`<a id="merge_fields--key-string-any-"></a>

A dictionary of merge fields where the keys are the merge tags. See the [Merge Fields documentation](https://mailchimp.com/developer/marketing/docs/merge-fields/#structure) for more about the structure.

##### interests: Record<string, `boolean`><a id="interests-record"></a>

The key of this object\\\'s properties is the ID of the interest in question.

##### language: `string`<a id="language-string"></a>

If set/detected, the [subscriber\\\'s language](https://mailchimp.com/help/view-and-edit-contact-languages/).

##### vip: `boolean`<a id="vip-boolean"></a>

[VIP status](https://mailchimp.com/help/designate-and-send-to-vip-contacts/) for subscriber.

##### location: [`LocationProperty`](./models/location-property.ts)<a id="location-locationpropertymodelslocation-propertyts"></a>

##### marketing_permissions: [`MarketingPermission`](./models/marketing-permission.ts)[]<a id="marketing_permissions-marketingpermissionmodelsmarketing-permissionts"></a>

The marketing permissions for the subscriber.

##### ip_signup: `string`<a id="ip_signup-string"></a>

IP address the subscriber signed up from.

##### timestamp_signup: `string`<a id="timestamp_signup-string"></a>

The date and time the subscriber signed up for the list in ISO 8601 format.

##### ip_opt: `string`<a id="ip_opt-string"></a>

The IP address the subscriber used to confirm their opt-in status.

##### timestamp_opt: `string`<a id="timestamp_opt-string"></a>

The date and time the subscriber confirmed their opt-in status in ISO 8601 format.

##### skipMergeValidation: `boolean`<a id="skipmergevalidation-boolean"></a>

If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.

#### 🔄 Return<a id="🔄-return"></a>

[ListsUpdateMemberResponse](./models/lists-update-member-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/members/{subscriber_hash}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.updateMergeField`<a id="mailchimplistsupdatemergefield"></a>

Update a specific merge field.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMergeFieldResponse = await mailchimp.lists.updateMergeField({
  listId: "listId_example",
  mergeId: "mergeId_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the merge field (audience field).

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### mergeId: `string`<a id="mergeid-string"></a>

The id for the merge field.

##### tag: `string`<a id="tag-string"></a>

The merge tag used for Mailchimp campaigns and [adding contact information](https://mailchimp.com/developer/marketing/docs/merge-fields/#add-merge-data-to-contacts).

##### required: `boolean`<a id="required-boolean"></a>

Whether the merge field is required to import a contact.

##### default_value: `string`<a id="default_value-string"></a>

The default value for the merge field if `null`.

##### public: `boolean`<a id="public-boolean"></a>

Whether the merge field is displayed on the signup form.

##### display_order: `number`<a id="display_order-number"></a>

The order that the merge field displays on the list signup form.

##### options: [`MergeFieldOptionsProperty1`](./models/merge-field-options-property1.ts)<a id="options-mergefieldoptionsproperty1modelsmerge-field-options-property1ts"></a>

##### help_text: `string`<a id="help_text-string"></a>

Extra text to help the subscriber fill out the form.

#### 🔄 Return<a id="🔄-return"></a>

[ListsUpdateMergeFieldResponse](./models/lists-update-merge-field-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/merge-fields/{merge_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.updateNoteSpecificListMember`<a id="mailchimplistsupdatenotespecificlistmember"></a>

Update a specific note for a specific list member.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateNoteSpecificListMemberResponse =
  await mailchimp.lists.updateNoteSpecificListMember({
    listId: "listId_example",
    subscriberHash: "subscriberHash_example",
    noteId: "noteId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address. This endpoint also accepts a list member\'s email address or contact_id.

##### noteId: `string`<a id="noteid-string"></a>

The id for the note.

##### note: `string`<a id="note-string"></a>

The content of the note. Note length is limited to 1,000 characters.

#### 🔄 Return<a id="🔄-return"></a>

[ListsUpdateNoteSpecificListMemberResponse](./models/lists-update-note-specific-list-member-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/members/{subscriber_hash}/notes/{note_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.updateSegmentById`<a id="mailchimplistsupdatesegmentbyid"></a>

Update a specific segment in a list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSegmentByIdResponse = await mailchimp.lists.updateSegmentById({
  listId: "listId_example",
  segmentId: "segmentId_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the segment.

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### segmentId: `string`<a id="segmentid-string"></a>

The unique id for the segment.

##### static_segment: `string`[]<a id="static_segment-string"></a>

An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored. Passing an empty array for an existing static segment will reset that segment and remove all members. This field cannot be provided with the `options` field.

##### options: [`ConditionsProperty1`](./models/conditions-property1.ts)<a id="options-conditionsproperty1modelsconditions-property1ts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ListsUpdateSegmentByIdResponse](./models/lists-update-segment-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/segments/{segment_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.updateSettings`<a id="mailchimplistsupdatesettings"></a>

Update the settings for a specific list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSettingsResponse = await mailchimp.lists.updateSettings({
  listId: "listId_example",
  name: "name_example",
  contact: {
    company: "company_example",
    address1: "address1_example",
    city: "city_example",
    state: "state_example",
    zip: "zip_example",
    country: "country_example",
  },
  permission_reminder: "permission_reminder_example",
  use_archive_bar: false,
  campaign_defaults: {
    from_name: "from_name_example",
    from_email: "from_email_example",
    subject: "subject_example",
    language: "language_example",
  },
  notify_on_subscribe: "false",
  notify_on_unsubscribe: "false",
  email_type_option: true,
  double_optin: false,
  marketing_permissions: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the list.

##### contact: [`ListContactProperty1`](./models/list-contact-property1.ts)<a id="contact-listcontactproperty1modelslist-contact-property1ts"></a>

##### permission_reminder: `string`<a id="permission_reminder-string"></a>

The [permission reminder](https://mailchimp.com/help/edit-the-permission-reminder/) for the list.

##### campaign_defaults: [`CampaignDefaultsProperty`](./models/campaign-defaults-property.ts)<a id="campaign_defaults-campaigndefaultspropertymodelscampaign-defaults-propertyts"></a>

##### email_type_option: `boolean`<a id="email_type_option-boolean"></a>

Whether the list supports [multiple formats for emails](https://mailchimp.com/help/change-audience-name-defaults/). When set to `true`, subscribers can choose whether they want to receive HTML or plain-text emails. When set to `false`, subscribers will receive HTML emails, with a plain-text alternative backup.

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### use_archive_bar: `boolean`<a id="use_archive_bar-boolean"></a>

Whether campaigns for this list use the [Archive Bar](https://mailchimp.com/help/about-email-campaign-archives-and-pages/) in archives by default.

##### notify_on_subscribe: `string`<a id="notify_on_subscribe-string"></a>

The email address to send [subscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.

##### notify_on_unsubscribe: `string`<a id="notify_on_unsubscribe-string"></a>

The email address to send [unsubscribe notifications](https://mailchimp.com/help/change-subscribe-and-unsubscribe-notifications/) to.

##### double_optin: `boolean`<a id="double_optin-boolean"></a>

Whether or not to require the subscriber to confirm subscription via email.

##### marketing_permissions: `boolean`<a id="marketing_permissions-boolean"></a>

Whether or not the list has marketing permissions (eg. GDPR) enabled.

#### 🔄 Return<a id="🔄-return"></a>

[ListsUpdateSettingsResponse](./models/lists-update-settings-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.updateWebhookSettings`<a id="mailchimplistsupdatewebhooksettings"></a>

Update the settings for an existing webhook.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateWebhookSettingsResponse =
  await mailchimp.lists.updateWebhookSettings({
    listId: "listId_example",
    webhookId: "webhookId_example",
    url: "http://yourdomain.com/webhook",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### webhookId: `string`<a id="webhookid-string"></a>

The webhook\'s id.

##### url: `string`<a id="url-string"></a>

A valid URL for the Webhook.

##### events: [`EventsProperty`](./models/events-property.ts)<a id="events-eventspropertymodelsevents-propertyts"></a>

##### sources: [`SourcesProperty`](./models/sources-property.ts)<a id="sources-sourcespropertymodelssources-propertyts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ListsUpdateWebhookSettingsResponse](./models/lists-update-webhook-settings-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/webhooks/{webhook_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.viewRecentActivity`<a id="mailchimplistsviewrecentactivity"></a>

Get a member's activity on a specific list, including opens, clicks, and unsubscribes.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const viewRecentActivityResponse = await mailchimp.lists.viewRecentActivity({
  listId: "listId_example",
  subscriberHash: "subscriberHash_example",
  count: 10,
  offset: 0,
  activityFilters: ["bounce"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address. This endpoint also accepts a list member\'s email address or contact_id.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### activityFilters: `string`[]<a id="activityfilters-string"></a>

A comma-separated list of activity filters that correspond to a set of activity types, e.g \"?activity_filters=open,bounce,click\".

#### 🔄 Return<a id="🔄-return"></a>

[ListsViewRecentActivityResponse](./models/lists-view-recent-activity-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/members/{subscriber_hash}/activity-feed` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.lists.viewRecentActivityEvents`<a id="mailchimplistsviewrecentactivityevents"></a>

Get the last 50 events of a member's activity on a specific list, including opens, clicks, and unsubscribes.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const viewRecentActivityEventsResponse =
  await mailchimp.lists.viewRecentActivityEvents({
    listId: "listId_example",
    subscriberHash: "subscriberHash_example",
    action: ["abuse"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### listId: `string`<a id="listid-string"></a>

The unique ID for the list.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address. This endpoint also accepts a list member\'s email address or contact_id.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### action: `string`[]<a id="action-string"></a>

A comma seperated list of actions to return.

#### 🔄 Return<a id="🔄-return"></a>

[ListsViewRecentActivityEventsResponse](./models/lists-view-recent-activity-events-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{list_id}/members/{subscriber_hash}/activity` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.ping.healthCheck`<a id="mailchimppinghealthcheck"></a>

A health check for the API that won't return any account-specific information.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const healthCheckResponse = await mailchimp.ping.healthCheck();
```

#### 🔄 Return<a id="🔄-return"></a>

[PingHealthCheckResponse](./models/ping-health-check-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ping` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reporting.facebookAdReport`<a id="mailchimpreportingfacebookadreport"></a>

Get report of a Facebook ad.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const facebookAdReportResponse = await mailchimp.reporting.facebookAdReport({
  outreachId: "outreachId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### outreachId: `string`<a id="outreachid-string"></a>

The outreach id.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ReportingFacebookAdReportResponse](./models/reporting-facebook-ad-report-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reporting/facebook-ads/{outreach_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reporting.getLandingPageReport`<a id="mailchimpreportinggetlandingpagereport"></a>

Get report of a landing page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLandingPageReportResponse =
  await mailchimp.reporting.getLandingPageReport({
    outreachId: "outreachId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### outreachId: `string`<a id="outreachid-string"></a>

The outreach id.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ReportingGetLandingPageReportResponse](./models/reporting-get-landing-page-report-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reporting/landing-pages/{outreach_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reporting.getSurveyReport`<a id="mailchimpreportinggetsurveyreport"></a>

Get report for a survey.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSurveyReportResponse = await mailchimp.reporting.getSurveyReport({
  surveyId: "surveyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### surveyId: `string`<a id="surveyid-string"></a>

The ID of the survey.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ReportingGetSurveyReportResponse](./models/reporting-get-survey-report-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reporting/surveys/{survey_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reporting.listFacebookAdsReports`<a id="mailchimpreportinglistfacebookadsreports"></a>

Get reports of Facebook ads.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFacebookAdsReportsResponse =
  await mailchimp.reporting.listFacebookAdsReports({
    count: 10,
    offset: 0,
    sortField: "created_at",
    sortDir: "ASC",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### sortField: `'created_at' | 'updated_at' | 'end_time'`<a id="sortfield-created_at--updated_at--end_time"></a>

Returns files sorted by the specified field.

##### sortDir: `'ASC' | 'DESC'`<a id="sortdir-asc--desc"></a>

Determines the order direction for sorted results.

#### 🔄 Return<a id="🔄-return"></a>

[ReportingListFacebookAdsReportsResponse](./models/reporting-list-facebook-ads-reports-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reporting/facebook-ads` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reporting.listFacebookEcommerceReport`<a id="mailchimpreportinglistfacebookecommercereport"></a>

Get breakdown of product activity for an outreach.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFacebookEcommerceReportResponse =
  await mailchimp.reporting.listFacebookEcommerceReport({
    count: 10,
    offset: 0,
    outreachId: "outreachId_example",
    sortField: "title",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### outreachId: `string`<a id="outreachid-string"></a>

The outreach id.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### sortField: `'title' | 'total_revenue' | 'total_purchased'`<a id="sortfield-title--total_revenue--total_purchased"></a>

Returns files sorted by the specified field.

#### 🔄 Return<a id="🔄-return"></a>

[ReportingListFacebookEcommerceReportResponse](./models/reporting-list-facebook-ecommerce-report-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reporting/facebook-ads/{outreach_id}/ecommerce-product-activity` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reporting.listLandingPagesReports`<a id="mailchimpreportinglistlandingpagesreports"></a>

Get reports of landing pages.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLandingPagesReportsResponse =
  await mailchimp.reporting.listLandingPagesReports({
    count: 10,
    offset: 0,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[ReportingListLandingPagesReportsResponse](./models/reporting-list-landing-pages-reports-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reporting/landing-pages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reporting.listSurveyQuestionsReports`<a id="mailchimpreportinglistsurveyquestionsreports"></a>

Get reports for survey questions.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSurveyQuestionsReportsResponse =
  await mailchimp.reporting.listSurveyQuestionsReports({
    surveyId: "surveyId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### surveyId: `string`<a id="surveyid-string"></a>

The ID of the survey.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ReportingListSurveyQuestionsReportsResponse](./models/reporting-list-survey-questions-reports-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reporting/surveys/{survey_id}/questions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reporting.listSurveyReports`<a id="mailchimpreportinglistsurveyreports"></a>

Get reports for surveys.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSurveyReportsResponse = await mailchimp.reporting.listSurveyReports({
  count: 10,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[ReportingListSurveyReportsResponse](./models/reporting-list-survey-reports-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reporting/surveys` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reporting.singleSurveyResponse`<a id="mailchimpreportingsinglesurveyresponse"></a>

Get a single survey response.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const singleSurveyResponseResponse =
  await mailchimp.reporting.singleSurveyResponse({
    surveyId: "surveyId_example",
    responseId: "responseId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### surveyId: `string`<a id="surveyid-string"></a>

The ID of the survey.

##### responseId: `string`<a id="responseid-string"></a>

The ID of the survey response.

#### 🔄 Return<a id="🔄-return"></a>

[ReportingSingleSurveyResponseResponse](./models/reporting-single-survey-response-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reporting/surveys/{survey_id}/responses/{response_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reporting.surveyQuestionAnswersList`<a id="mailchimpreportingsurveyquestionanswerslist"></a>

Get answers for a survey question.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const surveyQuestionAnswersListResponse =
  await mailchimp.reporting.surveyQuestionAnswersList({
    surveyId: "surveyId_example",
    questionId: "questionId_example",
    respondentFamiliarityIs: "new",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### surveyId: `string`<a id="surveyid-string"></a>

The ID of the survey.

##### questionId: `string`<a id="questionid-string"></a>

The ID of the survey question.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### respondentFamiliarityIs: `'new' | 'known' | 'unknown'`<a id="respondentfamiliarityis-new--known--unknown"></a>

Filter survey responses by familiarity of the respondents.

#### 🔄 Return<a id="🔄-return"></a>

[ReportingSurveyQuestionAnswersListResponse](./models/reporting-survey-question-answers-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reporting/surveys/{survey_id}/questions/{question_id}/answers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reporting.surveyQuestionReport`<a id="mailchimpreportingsurveyquestionreport"></a>

Get report for a survey question.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const surveyQuestionReportResponse =
  await mailchimp.reporting.surveyQuestionReport({
    surveyId: "surveyId_example",
    questionId: "questionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### surveyId: `string`<a id="surveyid-string"></a>

The ID of the survey.

##### questionId: `string`<a id="questionid-string"></a>

The ID of the survey question.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ReportingSurveyQuestionReportResponse](./models/reporting-survey-question-report-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reporting/surveys/{survey_id}/questions/{question_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reporting.surveyResponsesList`<a id="mailchimpreportingsurveyresponseslist"></a>

Get responses to a survey.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const surveyResponsesListResponse =
  await mailchimp.reporting.surveyResponsesList({
    surveyId: "surveyId_example",
    respondentFamiliarityIs: "new",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### surveyId: `string`<a id="surveyid-string"></a>

The ID of the survey.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### answeredQuestion: `number`<a id="answeredquestion-number"></a>

The ID of the question that was answered.

##### choseAnswer: `string`<a id="choseanswer-string"></a>

The ID of the option chosen to filter responses on.

##### respondentFamiliarityIs: `'new' | 'known' | 'unknown'`<a id="respondentfamiliarityis-new--known--unknown"></a>

Filter survey responses by familiarity of the respondents.

#### 🔄 Return<a id="🔄-return"></a>

[ReportingSurveyResponsesListResponse](./models/reporting-survey-responses-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reporting/surveys/{survey_id}/responses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reports.campaignRecipientInfo`<a id="mailchimpreportscampaignrecipientinfo"></a>

Get information about a specific campaign recipient.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const campaignRecipientInfoResponse =
  await mailchimp.reports.campaignRecipientInfo({
    campaignId: "campaignId_example",
    subscriberHash: "subscriberHash_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ReportsCampaignRecipientInfoResponse](./models/reports-campaign-recipient-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reports/{campaign_id}/sent-to/{subscriber_hash}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reports.getAbuseReport`<a id="mailchimpreportsgetabusereport"></a>

Get information about a specific abuse report for a campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAbuseReportResponse = await mailchimp.reports.getAbuseReport({
  campaignId: "campaignId_example",
  reportId: "reportId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### reportId: `string`<a id="reportid-string"></a>

The id for the abuse report.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ReportsGetAbuseReportResponse](./models/reports-get-abuse-report-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reports/{campaign_id}/abuse-reports/{report_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reports.getCampaignClickDetails`<a id="mailchimpreportsgetcampaignclickdetails"></a>

Get information about clicks on specific links in your Mailchimp campaigns.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCampaignClickDetailsResponse =
  await mailchimp.reports.getCampaignClickDetails({
    count: 10,
    offset: 0,
    campaignId: "campaignId_example",
    sortField: "total_clicks",
    sortDir: "ASC",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### sortField: `'total_clicks' | 'unique_clicks'`<a id="sortfield-total_clicks--unique_clicks"></a>

Returns click reports sorted by the specified field.

##### sortDir: `'ASC' | 'DESC'`<a id="sortdir-asc--desc"></a>

Determines the order direction for sorted results.

#### 🔄 Return<a id="🔄-return"></a>

[ReportsGetCampaignClickDetailsResponse](./models/reports-get-campaign-click-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reports/{campaign_id}/click-details` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reports.getCampaignProductActivity`<a id="mailchimpreportsgetcampaignproductactivity"></a>

Get breakdown of product activity for a campaign

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCampaignProductActivityResponse =
  await mailchimp.reports.getCampaignProductActivity({
    count: 10,
    offset: 0,
    campaignId: "campaignId_example",
    sortField: "title",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### sortField: `'title' | 'total_revenue' | 'total_purchased'`<a id="sortfield-title--total_revenue--total_purchased"></a>

Returns files sorted by the specified field.

#### 🔄 Return<a id="🔄-return"></a>

[ReportsGetCampaignProductActivityResponse](./models/reports-get-campaign-product-activity-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reports/{campaign_id}/ecommerce-product-activity` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reports.getSubscriberActivity`<a id="mailchimpreportsgetsubscriberactivity"></a>

Get a specific list member's activity in a campaign including opens, clicks, and bounces.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSubscriberActivityResponse =
  await mailchimp.reports.getSubscriberActivity({
    campaignId: "campaignId_example",
    subscriberHash: "subscriberHash_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### since: `string`<a id="since-string"></a>

Restrict results to email activity events that occur after a specific time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

#### 🔄 Return<a id="🔄-return"></a>

[ReportsGetSubscriberActivityResponse](./models/reports-get-subscriber-activity-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reports/{campaign_id}/email-activity/{subscriber_hash}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reports.getUnsubscribedMemberInfo`<a id="mailchimpreportsgetunsubscribedmemberinfo"></a>

Get information about a specific list member who unsubscribed from a campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUnsubscribedMemberInfoResponse =
  await mailchimp.reports.getUnsubscribedMemberInfo({
    campaignId: "campaignId_example",
    subscriberHash: "subscriberHash_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ReportsGetUnsubscribedMemberInfoResponse](./models/reports-get-unsubscribed-member-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reports/{campaign_id}/unsubscribed/{subscriber_hash}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reports.listAbuseReports`<a id="mailchimpreportslistabusereports"></a>

Get a list of abuse complaints for a specific campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAbuseReportsResponse = await mailchimp.reports.listAbuseReports({
  campaignId: "campaignId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ReportsListAbuseReportsResponse](./models/reports-list-abuse-reports-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reports/{campaign_id}/abuse-reports` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reports.listCampaignFeedback`<a id="mailchimpreportslistcampaignfeedback"></a>

Get feedback based on a campaign's statistics. Advice feedback is based on campaign stats like opens, clicks, unsubscribes, bounces, and more.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCampaignFeedbackResponse =
  await mailchimp.reports.listCampaignFeedback({
    campaignId: "campaignId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ReportsListCampaignFeedbackResponse](./models/reports-list-campaign-feedback-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reports/{campaign_id}/advice` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reports.listCampaignOpenDetails`<a id="mailchimpreportslistcampaignopendetails"></a>

Get detailed information about any campaign emails that were opened by a list member.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCampaignOpenDetailsResponse =
  await mailchimp.reports.listCampaignOpenDetails({
    count: 10,
    offset: 0,
    campaignId: "campaignId_example",
    sortField: "opens_count",
    sortDir: "ASC",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### since: `string`<a id="since-string"></a>

Restrict results to campaign open events that occur after a specific time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### sortField: `'opens_count'`<a id="sortfield-opens_count"></a>

Returns open reports sorted by the specified field.

##### sortDir: `'ASC' | 'DESC'`<a id="sortdir-asc--desc"></a>

Determines the order direction for sorted results.

#### 🔄 Return<a id="🔄-return"></a>

[ReportsListCampaignOpenDetailsResponse](./models/reports-list-campaign-open-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reports/{campaign_id}/open-details` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reports.listCampaignRecipients`<a id="mailchimpreportslistcampaignrecipients"></a>

Get information about campaign recipients.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCampaignRecipientsResponse =
  await mailchimp.reports.listCampaignRecipients({
    count: 10,
    offset: 0,
    campaignId: "campaignId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[ReportsListCampaignRecipientsResponse](./models/reports-list-campaign-recipients-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reports/{campaign_id}/sent-to` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reports.listCampaignReports`<a id="mailchimpreportslistcampaignreports"></a>

Get campaign reports.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCampaignReportsResponse = await mailchimp.reports.listCampaignReports(
  {
    count: 10,
    offset: 0,
    type: "regular",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### type: `'regular' | 'plaintext' | 'absplit' | 'rss' | 'variate'`<a id="type-regular--plaintext--absplit--rss--variate"></a>

The campaign type.

##### beforeSendTime: `string`<a id="beforesendtime-string"></a>

Restrict the response to campaigns sent before the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### sinceSendTime: `string`<a id="sincesendtime-string"></a>

Restrict the response to campaigns sent after the set time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

#### 🔄 Return<a id="🔄-return"></a>

[ReportsListCampaignReportsResponse](./models/reports-list-campaign-reports-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reports` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reports.listChildCampaignReports`<a id="mailchimpreportslistchildcampaignreports"></a>

Get a list of reports with child campaigns for a specific parent campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listChildCampaignReportsResponse =
  await mailchimp.reports.listChildCampaignReports({
    campaignId: "campaignId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ReportsListChildCampaignReportsResponse](./models/reports-list-child-campaign-reports-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reports/{campaign_id}/sub-reports` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reports.listClickedLinkSubscribers`<a id="mailchimpreportslistclickedlinksubscribers"></a>

Get information about list members who clicked on a specific link in a campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listClickedLinkSubscribersResponse =
  await mailchimp.reports.listClickedLinkSubscribers({
    count: 10,
    offset: 0,
    campaignId: "campaignId_example",
    linkId: "linkId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### linkId: `string`<a id="linkid-string"></a>

The id for the link.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[ReportsListClickedLinkSubscribersResponse](./models/reports-list-clicked-link-subscribers-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reports/{campaign_id}/click-details/{link_id}/members` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reports.listDomainPerformanceStats`<a id="mailchimpreportslistdomainperformancestats"></a>

Get statistics for the top-performing email domains in a campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listDomainPerformanceStatsResponse =
  await mailchimp.reports.listDomainPerformanceStats({
    campaignId: "campaignId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ReportsListDomainPerformanceStatsResponse](./models/reports-list-domain-performance-stats-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reports/{campaign_id}/domain-performance` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reports.listEepurlActivity`<a id="mailchimpreportslisteepurlactivity"></a>

Get a summary of social activity for the campaign, tracked by EepURL.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEepurlActivityResponse = await mailchimp.reports.listEepurlActivity({
  campaignId: "campaignId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ReportsListEepurlActivityResponse](./models/reports-list-eepurl-activity-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reports/{campaign_id}/eepurl` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reports.listEmailActivity`<a id="mailchimpreportslistemailactivity"></a>

Get a list of member's subscriber activity in a specific campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEmailActivityResponse = await mailchimp.reports.listEmailActivity({
  count: 10,
  offset: 0,
  campaignId: "campaignId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### since: `string`<a id="since-string"></a>

Restrict results to email activity events that occur after a specific time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

#### 🔄 Return<a id="🔄-return"></a>

[ReportsListEmailActivityResponse](./models/reports-list-email-activity-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reports/{campaign_id}/email-activity` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reports.listTopOpenLocations`<a id="mailchimpreportslisttopopenlocations"></a>

Get top open locations for a specific campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTopOpenLocationsResponse =
  await mailchimp.reports.listTopOpenLocations({
    campaignId: "campaignId_example",
    count: 10,
    offset: 0,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[ReportsListTopOpenLocationsResponse](./models/reports-list-top-open-locations-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reports/{campaign_id}/locations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reports.listUnsubscribedMembers`<a id="mailchimpreportslistunsubscribedmembers"></a>

Get information about members who have unsubscribed from a specific campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUnsubscribedMembersResponse =
  await mailchimp.reports.listUnsubscribedMembers({
    count: 10,
    offset: 0,
    campaignId: "campaignId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[ReportsListUnsubscribedMembersResponse](./models/reports-list-unsubscribed-members-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reports/{campaign_id}/unsubscribed` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reports.openSubscriberDetails`<a id="mailchimpreportsopensubscriberdetails"></a>

Get information about a specific subscriber who opened a campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const openSubscriberDetailsResponse =
  await mailchimp.reports.openSubscriberDetails({
    campaignId: "campaignId_example",
    subscriberHash: "subscriberHash_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ReportsOpenSubscriberDetailsResponse](./models/reports-open-subscriber-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reports/{campaign_id}/open-details/{subscriber_hash}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reports.specificCampaignReport`<a id="mailchimpreportsspecificcampaignreport"></a>

Get report details for a specific sent campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const specificCampaignReportResponse =
  await mailchimp.reports.specificCampaignReport({
    campaignId: "campaignId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ReportsSpecificCampaignReportResponse](./models/reports-specific-campaign-report-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reports/{campaign_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reports.specificLinkDetails`<a id="mailchimpreportsspecificlinkdetails"></a>

Get click details for a specific link in a campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const specificLinkDetailsResponse = await mailchimp.reports.specificLinkDetails(
  {
    campaignId: "campaignId_example",
    linkId: "linkId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### linkId: `string`<a id="linkid-string"></a>

The id for the link.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ReportsSpecificLinkDetailsResponse](./models/reports-specific-link-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reports/{campaign_id}/click-details/{link_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.reports.specificLinkSubscriber`<a id="mailchimpreportsspecificlinksubscriber"></a>

Get information about a specific subscriber who clicked a link in a specific campaign.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const specificLinkSubscriberResponse =
  await mailchimp.reports.specificLinkSubscriber({
    campaignId: "campaignId_example",
    linkId: "linkId_example",
    subscriberHash: "subscriberHash_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### campaignId: `string`<a id="campaignid-string"></a>

The unique id for the campaign.

##### linkId: `string`<a id="linkid-string"></a>

The id for the link.

##### subscriberHash: `string`<a id="subscriberhash-string"></a>

The MD5 hash of the lowercase version of the list member\'s email address.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[ReportsSpecificLinkSubscriberResponse](./models/reports-specific-link-subscriber-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reports/{campaign_id}/click-details/{link_id}/members/{subscriber_hash}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.root.listResources`<a id="mailchimprootlistresources"></a>

Get links to all other resources available in the API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResourcesResponse = await mailchimp.root.listResources({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[RootListResourcesResponse](./models/root-list-resources-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.searchCampaigns.byQueryTerms`<a id="mailchimpsearchcampaignsbyqueryterms"></a>

Search all campaigns for the specified query terms.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const byQueryTermsResponse = await mailchimp.searchCampaigns.byQueryTerms({
  query: "query_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: `string`<a id="query-string"></a>

The search query used to filter results.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[SearchCampaignsByQueryTermsResponse](./models/search-campaigns-by-query-terms-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/search-campaigns` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.searchMembers.listMembers`<a id="mailchimpsearchmemberslistmembers"></a>

Search for list members. This search can be restricted to a specific list, or can be used to search across all lists in an account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMembersResponse = await mailchimp.searchMembers.listMembers({
  query: "query_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: `string`<a id="query-string"></a>

The search query used to filter results. Query should be a valid email, or a string representing a contact\'s first or last name.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### listId: `string`<a id="listid-string"></a>

The unique id for the list.

#### 🔄 Return<a id="🔄-return"></a>

[SearchMembersListMembersResponse](./models/search-members-list-members-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/search-members` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.templateFolders.addNewFolder`<a id="mailchimptemplatefoldersaddnewfolder"></a>

Create a new template folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addNewFolderResponse = await mailchimp.templateFolders.addNewFolder({
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the folder.

#### 🔄 Return<a id="🔄-return"></a>

[TemplateFoldersAddNewFolderResponse](./models/template-folders-add-new-folder-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/template-folders` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.templateFolders.deleteSpecificFolder`<a id="mailchimptemplatefoldersdeletespecificfolder"></a>

Delete a specific template folder, and mark all the templates in the folder as 'unfiled'.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSpecificFolderResponse =
  await mailchimp.templateFolders.deleteSpecificFolder({
    folderId: "folderId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique id for the template folder.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/template-folders/{folder_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.templateFolders.getInfo`<a id="mailchimptemplatefoldersgetinfo"></a>

Get information about a specific folder used to organize templates.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInfoResponse = await mailchimp.templateFolders.getInfo({
  folderId: "folderId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique id for the template folder.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[TemplateFoldersGetInfoResponse](./models/template-folders-get-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/template-folders/{folder_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.templateFolders.listFolders`<a id="mailchimptemplatefolderslistfolders"></a>

Get all folders used to organize templates.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFoldersResponse = await mailchimp.templateFolders.listFolders({
  count: 10,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

#### 🔄 Return<a id="🔄-return"></a>

[TemplateFoldersListFoldersResponse](./models/template-folders-list-folders-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/template-folders` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.templateFolders.updateSpecificFolder`<a id="mailchimptemplatefoldersupdatespecificfolder"></a>

Update a specific folder used to organize templates.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSpecificFolderResponse =
  await mailchimp.templateFolders.updateSpecificFolder({
    folderId: "folderId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the folder.

##### folderId: `string`<a id="folderid-string"></a>

The unique id for the template folder.

#### 🔄 Return<a id="🔄-return"></a>

[TemplateFoldersUpdateSpecificFolderResponse](./models/template-folders-update-specific-folder-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/template-folders/{folder_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.templates.createNewTemplate`<a id="mailchimptemplatescreatenewtemplate"></a>

Create a new template for the account. Only Classic templates are supported.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewTemplateResponse = await mailchimp.templates.createNewTemplate({
  name: "Freddie's Jokes",
  folder_id: "a4b830b",
  html: "html_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the template.

##### html: `string`<a id="html-string"></a>

The raw HTML for the template. We  support the Mailchimp [Template Language](https://mailchimp.com/help/getting-started-with-mailchimps-template-language/) in any HTML code passed via the API.

##### folder_id: `string`<a id="folder_id-string"></a>

The id of the folder the template is currently in.

#### 🔄 Return<a id="🔄-return"></a>

[TemplatesCreateNewTemplateResponse](./models/templates-create-new-template-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/templates` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.templates.deleteSpecificTemplate`<a id="mailchimptemplatesdeletespecifictemplate"></a>

Delete a specific template.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSpecificTemplateResponse =
  await mailchimp.templates.deleteSpecificTemplate({
    templateId: "templateId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### templateId: `string`<a id="templateid-string"></a>

The unique id for the template.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/templates/{template_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.templates.getInfo`<a id="mailchimptemplatesgetinfo"></a>

Get information about a specific template.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInfoResponse = await mailchimp.templates.getInfo({
  templateId: "templateId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### templateId: `string`<a id="templateid-string"></a>

The unique id for the template.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[TemplatesGetInfoResponse](./models/templates-get-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/templates/{template_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.templates.listAvailableTemplates`<a id="mailchimptemplateslistavailabletemplates"></a>

Get a list of an account's available templates.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAvailableTemplatesResponse =
  await mailchimp.templates.listAvailableTemplates({
    count: 10,
    offset: 0,
    sortField: "date_created",
    contentType: "html",
    sortDir: "ASC",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

##### count: `number`<a id="count-number"></a>

The number of records to return. Default value is 10. Maximum value is 1000

##### offset: `number`<a id="offset-number"></a>

Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.

##### createdBy: `string`<a id="createdby-string"></a>

The Mailchimp account user who created the template.

##### sinceDateCreated: `string`<a id="sincedatecreated-string"></a>

Restrict the response to templates created after the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### beforeDateCreated: `string`<a id="beforedatecreated-string"></a>

Restrict the response to templates created before the set date. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.

##### type: `string`<a id="type-string"></a>

Limit results based on template type.

##### category: `string`<a id="category-string"></a>

Limit results based on category.

##### folderId: `string`<a id="folderid-string"></a>

The unique folder id.

##### sortField: `'date_created' | 'date_edited' | 'name'`<a id="sortfield-date_created--date_edited--name"></a>

Returns user templates sorted by the specified field.

##### contentType: `'html' | 'template' | 'multichannel'`<a id="contenttype-html--template--multichannel"></a>

Limit results based on how the template\'s content is put together. Only templates of type `user` can be filtered by `content_type`. If you want to retrieve saved templates created with the legacy email editor, then filter `content_type` to `template`. If you\'d rather pull your saved templates for the new editor, filter to `multichannel`. For code your own templates, filter to `html`.

##### sortDir: `'ASC' | 'DESC'`<a id="sortdir-asc--desc"></a>

Determines the order direction for sorted results.

#### 🔄 Return<a id="🔄-return"></a>

[TemplatesListAvailableTemplatesResponse](./models/templates-list-available-templates-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/templates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.templates.updateTemplateById`<a id="mailchimptemplatesupdatetemplatebyid"></a>

Update the name, HTML, or `folder_id` of an existing template.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTemplateByIdResponse = await mailchimp.templates.updateTemplateById(
  {
    templateId: "templateId_example",
    name: "Freddie's Jokes",
    folder_id: "a4b830b",
    html: "html_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the template.

##### html: `string`<a id="html-string"></a>

The raw HTML for the template. We  support the Mailchimp [Template Language](https://mailchimp.com/help/getting-started-with-mailchimps-template-language/) in any HTML code passed via the API.

##### templateId: `string`<a id="templateid-string"></a>

The unique id for the template.

##### folder_id: `string`<a id="folder_id-string"></a>

The id of the folder the template is currently in.

#### 🔄 Return<a id="🔄-return"></a>

[TemplatesUpdateTemplateByIdResponse](./models/templates-update-template-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/templates/{template_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.templates.viewDefaultContent`<a id="mailchimptemplatesviewdefaultcontent"></a>

Get the sections that you can edit in a template, including each section's default content.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const viewDefaultContentResponse = await mailchimp.templates.viewDefaultContent(
  {
    templateId: "templateId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### templateId: `string`<a id="templateid-string"></a>

The unique id for the template.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.

##### excludeFields: `string`[]<a id="excludefields-string"></a>

A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### 🔄 Return<a id="🔄-return"></a>

[TemplatesViewDefaultContentResponse](./models/templates-view-default-content-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/templates/{template_id}/default-content` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.verifiedDomains.addDomainToAccount`<a id="mailchimpverifieddomainsadddomaintoaccount"></a>

Add a domain to the account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addDomainToAccountResponse =
  await mailchimp.verifiedDomains.addDomainToAccount({
    verification_email: "verification_email_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### verification_email: `string`<a id="verification_email-string"></a>

The e-mail address at the domain you want to verify. This will receive a two-factor challenge to be used in the verify action.

#### 🔄 Return<a id="🔄-return"></a>

[VerifiedDomainsAddDomainToAccountResponse](./models/verified-domains-add-domain-to-account-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/verified-domains` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.verifiedDomains.deleteDomain`<a id="mailchimpverifieddomainsdeletedomain"></a>

Delete a verified domain from the account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteDomainResponse = await mailchimp.verifiedDomains.deleteDomain({
  domainName: "domainName_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domainName: `string`<a id="domainname-string"></a>

The domain name.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/verified-domains/{domain_name}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.verifiedDomains.getInfo`<a id="mailchimpverifieddomainsgetinfo"></a>

Get the details for a single domain on the account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInfoResponse = await mailchimp.verifiedDomains.getInfo({
  domainName: "domainName_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domainName: `string`<a id="domainname-string"></a>

The domain name.

#### 🔄 Return<a id="🔄-return"></a>

[VerifiedDomainsGetInfoResponse](./models/verified-domains-get-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/verified-domains/{domain_name}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.verifiedDomains.listSendingDomains`<a id="mailchimpverifieddomainslistsendingdomains"></a>

Get all of the sending domains on the account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSendingDomainsResponse =
  await mailchimp.verifiedDomains.listSendingDomains();
```

#### 🔄 Return<a id="🔄-return"></a>

[VerifiedDomainsListSendingDomainsResponse](./models/verified-domains-list-sending-domains-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/verified-domains` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mailchimp.verifiedDomains.verifyDomainForSending`<a id="mailchimpverifieddomainsverifydomainforsending"></a>

Verify a domain for sending.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyDomainForSendingResponse =
  await mailchimp.verifiedDomains.verifyDomainForSending({
    domainName: "domainName_example",
    code: "code_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### code: `string`<a id="code-string"></a>

The code that was sent to the email address provided when adding a new domain to verify.

##### domainName: `string`<a id="domainname-string"></a>

The domain name.

#### 🔄 Return<a id="🔄-return"></a>

[VerifiedDomainsVerifyDomainForSendingResponse](./models/verified-domains-verify-domain-for-sending-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/verified-domains/{domain_name}/actions/verify` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
