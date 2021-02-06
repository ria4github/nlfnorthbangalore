import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

import * as AWS from "aws-sdk";
var serviceAccount = require("./nlfyelahanka-service-account.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://nlfyelahanka.firebaseio.com",
});

const SES = new AWS.SES({
	accessKeyId: "AKIAY5EJJTVSY63BFX7L",
	secretAccessKey: "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",
	region: "ap-south-1",
});

const send_email = async (to, subject, text) => {
	const params = {
		Destination: {
			ToAddresses: [to],
		},
		Message: {
			Body: {
				Html: {
					Charset: "UTF-8",
					Data: text,
				},
			},
			Subject: { Data: subject },
		},
		Source: "akhilvc10@gmail.com",
	};

	try {
		const response = await SES.sendEmail(params).promise();
		console.log(response);
		return Promise.resolve(response);
	} catch (error) {
		console.log("mail_error =>", error);
		return Promise.reject(error);
	}
};

const sendEmail = async (doc) => {
	console.log(doc.data());
	let subject, html;
	if (doc.data().userName) {
		subject = `You have new message from ${doc.data().userName}`;
	} else if (doc.data().giveName) {
		subject = `You have new Offerning request from ${doc.data().giveName}`;
	}

	if (doc.data().userName) {
		html = `<style type="text/css"> body{margin: 0; padding: 0;}table, td, tr{vertical-align: top; border-collapse: collapse;}*{line-height: inherit;}a[x-apple-data-detectors=true]{color: inherit !important; text-decoration: none !important;}</style><style type="text/css" id="media-query"> @media (max-width: 660px){.block-grid, .col{min-width: 320px !important; max-width: 100% !important; display: block !important;}.block-grid{width: 100% !important;}.col{width: 100% !important;}.col>div{margin: 0 auto;}img.fullwidth, img.fullwidthOnMobile{max-width: 100% !important;}.no-stack .col{min-width: 0 !important; display: table-cell !important;}.no-stack.two-up .col{width: 50% !important;}.no-stack .col.num4{width: 33% !important;}.no-stack .col.num8{width: 66% !important;}.no-stack .col.num4{width: 33% !important;}.no-stack .col.num3{width: 25% !important;}.no-stack .col.num6{width: 50% !important;}.no-stack .col.num9{width: 75% !important;}.video-block{max-width: none !important;}.mobile_hide{min-height: 0px; max-height: 0px; max-width: 0px; display: none; overflow: hidden; font-size: 0px;}.desktop_hide{display: block !important; max-height: none !important;}}</style></head><div class="clean-body" style="margin: 0; padding: 50px; -webkit-text-size-adjust: 100%; background-color: #f5f6f7;"> <table class="nl-container" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5f6f7; width: 100%;" cellpadding="0" cellspacing="0" role="presentation" width="100%" bgcolor="#f5f6f7" valign="top"> <tbody> <tr style="vertical-align: top;" valign="top"> <td style="word-break: break-word; vertical-align: top;" valign="top"> <div style="background-color:transparent;"> <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;"> <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;"> <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;"> <div style="width:100% !important;"> <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:10px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"> <div class="img-container center fixedwidth" align="center" style="padding-right: 0px;padding-left: 0px;"> <img class="center fixedwidth" align="center" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/BeeFree/beefree-2ulr1hoqun9/logo.png" alt="Image" title="Image" style="text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; width: 100%; max-width: 128px; display: block;" width="128"> </div></div></div></div></div></div></div><div style="background-color:transparent;"> <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;"> <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;"> <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;"> <div style="width:100% !important;"> <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;"> <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top"> <tbody> <tr style="vertical-align: top;" valign="top"> <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 15px; padding-right: 0px; padding-bottom: 15px; padding-left: 0px;" valign="top"> <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #E3E5E9; height: 0px; width: 100%;" align="center" role="presentation" height="0" valign="top"> <tbody> <tr style="vertical-align: top;" valign="top"> <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="0" valign="top"><span></span></td></tr></tbody> </table> </td></tr></tbody> </table> <div style="color:#555555;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;line-height:1.2;padding-top:20px;padding-right:40px;padding-bottom:10px;padding-left:40px;"> <div style="font-size: 16px; line-height: 1.2; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #555555; mso-line-height-alt: 19px;"> <p style="line-height: 1.2; word-break: break-word; text-align: left; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: NaNpx; margin: 0;"><span style="color: #1b264f;"><span style="font-size: 42px;"><strong>Say Hello to ${
			doc.data().userName
		}</strong></span></span></p></div></div><div style="color:#555555;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;line-height:1.5;padding-top:10px;padding-right:40px;padding-bottom:10px;padding-left:40px;"> <div style="font-size: 14px; line-height: 1.5; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #555555; mso-line-height-alt: 21px;"> <p style="font-size: 16px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 16px; color: #1b264f;">Hi Team, We have a message from <strong>${
			doc.data().userName
		}</strong>. Check the details below and connect with him/her.</span></p></div></div><div style="color:#555555;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;line-height:1.5;padding-top:10px;padding-right:40px;padding-bottom:10px;padding-left:40px;"> <div style="line-height: 1.5; font-size: 12px; color: #555555; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; mso-line-height-alt: 18px;"> <p style="line-height: 1.5; word-break: break-word; mso-line-height-alt: NaNpx; margin: 0;"><strong><span style="font-size: 16px;">Name : ${
			doc.data().userName
		}</span></strong></p><p style="line-height: 1.5; word-break: break-word; mso-line-height-alt: NaNpx; margin: 0;"><strong><span style="font-size: 16px;">E-Mail : ${
			doc.data().userMail
		}</span></strong></p><p style="line-height: 1.5; word-break: break-word; mso-line-height-alt: NaNpx; margin: 0;"><strong><span style="font-size: 16px;">Phone : ${
			doc.data().userPhone
		}</span></strong></p><p style="line-height: 1.5; word-break: break-word; mso-line-height-alt: NaNpx; margin: 0;"><strong><span style="font-size: 16px;">Life Group : ${
			doc.data().userLifeGroup
		}</span></strong></p><p style="line-height: 1.5; word-break: break-word; mso-line-height-alt: NaNpx; margin: 0;"><strong><span style="font-size: 16px;">Message : ${
			doc.data().userMessage
		}</span></strong></p></div></div><table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top"> <tbody> <tr style="vertical-align: top;" valign="top"> <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top"> <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 15px; width: 100%;" align="center" role="presentation" height="15" valign="top"> <tbody> <tr style="vertical-align: top;" valign="top"> <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="15" valign="top"><span></span></td></tr></tbody> </table> </td></tr></tbody> </table> <table class="social_icons" cellpadding="0" cellspacing="0" width="100%" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top"> <tbody> <tr style="vertical-align: top;" valign="top"> <td style="word-break: break-word; vertical-align: top; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top"> <table class="social_table" align="center" cellpadding="0" cellspacing="0" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;" valign="top"> <tbody> <tr style="vertical-align: top; display: inline-block; text-align: center;" align="center" valign="top"> <td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 5px; padding-left: 5px;" valign="top"><a href="https://www.facebook.com/" target="_blank"><img width="32" height="32" src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/circle-dark-gray/facebook@2x.png" alt="Facebook" title="Facebook" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;"></a></td><td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 5px; padding-left: 5px;" valign="top"><a href="https://twitter.com/" target="_blank"><img width="32" height="32" src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/circle-dark-gray/twitter@2x.png" alt="Twitter" title="Twitter" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;"></a></td><td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 5px; padding-left: 5px;" valign="top"><a href="https://instagram.com/" target="_blank"><img width="32" height="32" src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/circle-dark-gray/instagram@2x.png" alt="Instagram" title="Instagram" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;"></a></td><td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 5px; padding-left: 5px;" valign="top"><a href="https://www.linkedin.com/" target="_blank"><img width="32" height="32" src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/circle-dark-gray/linkedin@2x.png" alt="LinkedIn" title="LinkedIn" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;"></a></td></tr></tbody> </table> </td></tr></tbody> </table> </div></div></div></div></div></div><div style="background-color:transparent;"> <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;"> <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;"> <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;"> <div style="width:100% !important;"> <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"> <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top"> <tbody> <tr style="vertical-align: top;" valign="top"> <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px;" valign="top"> <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 5px; width: 100%;" align="center" role="presentation" height="5" valign="top"> <tbody> <tr style="vertical-align: top;" valign="top"> <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="5" valign="top"><span></span></td></tr></tbody> </table> </td></tr></tbody> </table> </div></div></div></div></div></div></td></tr></tbody> </table></div>`;
	} else if (doc.data().giveName) {
		html = `<style type="text/css"> body{margin: 0; padding: 0;}table, td, tr{vertical-align: top; border-collapse: collapse;}*{line-height: inherit;}a[x-apple-data-detectors=true]{color: inherit !important; text-decoration: none !important;}</style><style type="text/css" id="media-query"> @media (max-width: 660px){.block-grid, .col{min-width: 320px !important; max-width: 100% !important; display: block !important;}.block-grid{width: 100% !important;}.col{width: 100% !important;}.col>div{margin: 0 auto;}img.fullwidth, img.fullwidthOnMobile{max-width: 100% !important;}.no-stack .col{min-width: 0 !important; display: table-cell !important;}.no-stack.two-up .col{width: 50% !important;}.no-stack .col.num4{width: 33% !important;}.no-stack .col.num8{width: 66% !important;}.no-stack .col.num4{width: 33% !important;}.no-stack .col.num3{width: 25% !important;}.no-stack .col.num6{width: 50% !important;}.no-stack .col.num9{width: 75% !important;}.video-block{max-width: none !important;}.mobile_hide{min-height: 0px; max-height: 0px; max-width: 0px; display: none; overflow: hidden; font-size: 0px;}.desktop_hide{display: block !important; max-height: none !important;}}</style></head><div class="clean-body" style="margin: 0; padding: 50px; -webkit-text-size-adjust: 100%; background-color: #f5f6f7;"> <table class="nl-container" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5f6f7; width: 100%;" cellpadding="0" cellspacing="0" role="presentation" width="100%" bgcolor="#f5f6f7" valign="top"> <tbody> <tr style="vertical-align: top;" valign="top"> <td style="word-break: break-word; vertical-align: top;" valign="top"> <div style="background-color:transparent;"> <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;"> <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;"> <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;"> <div style="width:100% !important;"> <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:10px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"> <div class="img-container center fixedwidth" align="center" style="padding-right: 0px;padding-left: 0px;"> <img class="center fixedwidth" align="center" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/BeeFree/beefree-2ulr1hoqun9/logo.png" alt="Image" title="Image" style="text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; width: 100%; max-width: 128px; display: block;" width="128"> </div></div></div></div></div></div></div><div style="background-color:transparent;"> <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;"> <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;"> <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;"> <div style="width:100% !important;"> <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;"> <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top"> <tbody> <tr style="vertical-align: top;" valign="top"> <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 15px; padding-right: 0px; padding-bottom: 15px; padding-left: 0px;" valign="top"> <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #E3E5E9; height: 0px; width: 100%;" align="center" role="presentation" height="0" valign="top"> <tbody> <tr style="vertical-align: top;" valign="top"> <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="0" valign="top"><span></span></td></tr></tbody> </table> </td></tr></tbody> </table> <div style="color:#555555;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;line-height:1.2;padding-top:20px;padding-right:40px;padding-bottom:10px;padding-left:40px;"> <div style="font-size: 16px; line-height: 1.2; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #555555; mso-line-height-alt: 19px;"> <p style="line-height: 1.2; word-break: break-word; text-align: left; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: NaNpx; margin: 0;"><span style="color: #1b264f;"><span style="font-size: 42px;"><strong>Say Hello to ${
			doc.data().giveName
		}</strong></span></span></p></div></div><div style="color:#555555;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;line-height:1.5;padding-top:10px;padding-right:40px;padding-bottom:10px;padding-left:40px;"> <div style="font-size: 14px; line-height: 1.5; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #555555; mso-line-height-alt: 21px;"> <p style="font-size: 16px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 16px; color: #1b264f;">Hi Team, We have a offerening request from <strong>${
			doc.data().giveName
		}</strong>. Check the details below and connect with him/her.</span></p></div></div><div style="color:#555555;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;line-height:1.5;padding-top:10px;padding-right:40px;padding-bottom:10px;padding-left:40px;"> <div style="line-height: 1.5; font-size: 12px; color: #555555; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; mso-line-height-alt: 18px;"> <p style="line-height: 1.5; word-break: break-word; mso-line-height-alt: NaNpx; margin: 0;"><strong><span style="font-size: 16px;">Name : ${
			doc.data().giveName
		}</span></strong></p><p style="line-height: 1.5; word-break: break-word; mso-line-height-alt: NaNpx; margin: 0;"><strong><span style="font-size: 16px;">E-Mail : ${
			doc.data().giveEmail
		}</span></strong></p><p style="line-height: 1.5; word-break: break-word; mso-line-height-alt: NaNpx; margin: 0;"><strong><span style="font-size: 16px;">Phone : ${
			doc.data().givePhone
		}</span></strong></p><p style="line-height: 1.5; word-break: break-word; mso-line-height-alt: NaNpx; margin: 0;"><strong><span style="font-size: 16px;">Like to pay Through : ${
			doc.data().giveType
		}</span></strong></p></div></div><table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top"> <tbody> <tr style="vertical-align: top;" valign="top"> <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top"> <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 15px; width: 100%;" align="center" role="presentation" height="15" valign="top"> <tbody> <tr style="vertical-align: top;" valign="top"> <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="15" valign="top"><span></span></td></tr></tbody> </table> </td></tr></tbody> </table> <table class="social_icons" cellpadding="0" cellspacing="0" width="100%" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top"> <tbody> <tr style="vertical-align: top;" valign="top"> <td style="word-break: break-word; vertical-align: top; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top"> <table class="social_table" align="center" cellpadding="0" cellspacing="0" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;" valign="top"> <tbody> <tr style="vertical-align: top; display: inline-block; text-align: center;" align="center" valign="top"> <td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 5px; padding-left: 5px;" valign="top"><a href="https://www.facebook.com/" target="_blank"><img width="32" height="32" src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/circle-dark-gray/facebook@2x.png" alt="Facebook" title="Facebook" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;"></a></td><td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 5px; padding-left: 5px;" valign="top"><a href="https://twitter.com/" target="_blank"><img width="32" height="32" src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/circle-dark-gray/twitter@2x.png" alt="Twitter" title="Twitter" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;"></a></td><td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 5px; padding-left: 5px;" valign="top"><a href="https://instagram.com/" target="_blank"><img width="32" height="32" src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/circle-dark-gray/instagram@2x.png" alt="Instagram" title="Instagram" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;"></a></td><td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 5px; padding-left: 5px;" valign="top"><a href="https://www.linkedin.com/" target="_blank"><img width="32" height="32" src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/circle-dark-gray/linkedin@2x.png" alt="LinkedIn" title="LinkedIn" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;"></a></td></tr></tbody> </table> </td></tr></tbody> </table> </div></div></div></div></div></div><div style="background-color:transparent;"> <div class="block-grid " style="Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;"> <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;"> <div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;"> <div style="width:100% !important;"> <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"> <table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top"> <tbody> <tr style="vertical-align: top;" valign="top"> <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px;" valign="top"> <table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 5px; width: 100%;" align="center" role="presentation" height="5" valign="top"> <tbody> <tr style="vertical-align: top;" valign="top"> <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="5" valign="top"><span></span></td></tr></tbody> </table> </td></tr></tbody> </table> </div></div></div></div></div></div></td></tr></tbody> </table></div>`;
	}

	const msg = {
		to: "akhilvc10@gmail.com",
		from: "akhilvc10@gmail.com",
		subject: subject,
		html: html,
	};
	//ES6
	try {
		// let res = await sgMail.send(msg);
		await send_email(msg.to, msg.subject, msg.html);
	} catch (error) {
		console.log("🚀 ~ file: index.ts ~ line 76 ~ sendEmail ~ error", error);
	}
};

const sendToUser = async (doc) => {
	console.log(doc.data());
	let toMail;
	let subject, html;
	if (doc.data().userName) {
		subject = `You have new message from ${doc.data().userName}`;
	} else if (doc.data().giveName) {
		subject = `You have new Offerning request from ${doc.data().giveName}`;
	}

	if (doc.data().userName) {
		toMail = doc.data().userMail;
	} else if (doc.data().giveName) {
		toMail = doc.data().giveEmail;
	}
	if (doc.data().userName) {
		html = ``;
	} else if (doc.data().giveName) {
		html = ``;
	}

	const msg = {
		from: "akhilvc10@gmail.com",
		to: "praveengorakala@gmail.com",
		subject: subject,
		html: html,
	};
	//ES6
	try {
		// let res = await sgMail.send(msg);
		// console.log("🚀 ~ file: index.ts ~ line 108 ~ sendToUser ~ res", res);
		await send_email(msg.to, msg.subject, msg.html);
	} catch (error) {
		console.log("🚀 ~ file: index.ts ~ line 110 ~ sendToUser ~ error", error);
	}
};

export const connectData = functions.firestore
	.document("/connect_data/{id}")
	.onCreate(async (doc, context) => {
		console.log("connect_data ", doc);
		console.log("connect_data ", context);
		sendEmail(doc);
		sendToUser(doc);
	});

export const givaData = functions.firestore
	.document("/give_data/{id}")
	.onCreate(async (doc, context) => {
		console.log("givaData ", doc);
		console.log("givaData ", context);
		sendEmail(doc);
		sendToUser(doc);
	});
