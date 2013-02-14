# Merchant Center API Sample Code

This repo presents sample code on how to use the Merchant Center APIs.

[Source Code](https://github.groupondev.com/shaheen/merchant-center-api-demo/blob/master/main.js "Source Code")

## To Run the code

#### 1 - Code Prerequisites 

To start you will need to setup your dev machine with the necessary prerequisites. The sample code is written in NodeJS. You can skip this section if you already have NodeJS and NPM installed on your machine. 

###### At this point, this repo only supports OS X machines.

First install homebrew. In OS X's terminal enter:

    ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"

Then install node

    brew install node

Then install git

    brew install git

Download the repo

    git clone git@github.groupondev.com:shaheen/merchant-center-api-demo.git

Enter into the repo directory

    cd merchant-center-api-demo

Install NPM Dependencies

    npm install

#### 2 - Information Prerequisites

Open the file main.js and edit the top 4 lines with your information

	var yourClientId = "";
	var yourRedirectURI = "";
	var yourUserName = "";
	var yourPassword = "";
	var yourMerchantPermaLink = "";

	var customerVoucherCode = "";

#### 3 - Run the code

In the directory, type the following into OS X's terminal

    node main.js

#### 4 - Success
If the information in step 2 was entered correctly, you will see a JSON response about the voucher. Here is a blank sample JSON response you can expect to see

	{ 
		redemption: {
			dealOptionId:
			expiresAt:
			dealId:
			status:
			notes:
			deviceId:
			user: {
				id:
			},
			clientUpdatedAt:
		deal: { 
			tippedAt:
			grid6ImageUrl:
			shortAnnouncementTitle:
			channels:
			placementPriority:
			type:
			sidebarImageUrl:
			isTravelBookableDeal:
			isAutoRefundEnabled:
			redemptionLocation:
			soldQuantity:
			status: STRING,
			placeholderUrl:
			finePrint:
			isSoldOut:
			tippingPoint:
			largeImageUrl:
			isMerchandisingDeal:
			merchant:
			locationNote:
			startAt:
			smallImageUrl:
			division:
			grouponRating:
			limitedQuantityRemaining:
			title:
			areas:
			says:
			soldQuantityMessage:
			grid4ImageUrl:
			dealTypes:
			highlightsHtml:
			uuid:
			mediumImageUrl:
			dealUrl:
			isNowDeal:
			shippingAddressRequired:
			vip:
			id:
			announcementTitle:
			isOptionListComplete:
			pitchHtml:
			tags:
			endAt:
			isTipped:
			options:
			textAd:
			amountSpent:
			location:
			code:
			redeemedAt:
		} 
	}
