// ====== Demo Setup Information ====== //

var yourClientId = "";
var yourRedirectURI = "";
var yourUserName = "";
var yourPassword = "";
var yourMerchantPermaLink = "";

var customerVoucherCode = "";

// ====== End Demo Setup Information ====== //







// ====== No need to edit below this line ====== //
//NodeJS Setup
var Seq = require('seq');
var Shred = require("shred");
var shred = new Shred({logCurl: true});
var OAuthToken = ""; //Just setting up the variable here, so it has global scope, thus making the script easier to follow

Seq() //Seq helps with sequential flow control in NodeJS

	.seq(function() {
		var seqCallback = this; //Caching 'this' context for callback in shred.post object... IE, this is a very NodeJS thing, which you don't need to worry about
		var req = shred.post({
			url: "https://api.groupon.com/v2/oauth/authorize?ajax=true&client_id=" + yourClientId,
			headers: {
				Accept: "application/json"
			},
			content: {
				username: yourUserName,
				redirect_uri: yourRedirectURI,
				response_type: "token",
				password: yourPassword
			},
			on: {
				200: function(response) {
					console.log("200 Response!");
					
					//On a 200 HTTP Response, we need to check to see if the necessary data is present on the response
					//If auth.accessToken exists, save it and proceed forward. Else, display error to the console
					if(response.content.data.auth && response.content.data.auth.accessToken) {
						OAuthToken = response.content.data.auth.accessToken; //Save accessToken

						seqCallback(false); //Signal that we want to go to the next Seq function
					} else {
						var binaryResponse = new Buffer(response.content.data); //Errors are streamed in a binary buffer stream, so we need to decipher it before displaying it
						var errorMessage = binaryResponse.toString();
						console.log(errorMessage);
					}
				},
				response: function(response) { //All HTTP responeses other than 200 responses come here
					console.log("Oh no, something went wrong!");
					console.log(response.content.body);
				}
			}
		});
	})

	.seq(function(callback) {
		var req = shred.get({
			url: "https://merchants.groupon.com/v2/merchants/" + yourMerchantPermaLink + "/redemptions/" + customerVoucherCode + "?include_deal=true&oauth_token=" + OAuthToken,
			headers: {
				Accept: "application/json"
			},
			on: {
				200: function(response) {
					console.log("200 Response!");
					console.log(response.content.data);
				},
				response: function(response) {
					console.log("Oh no, something went wrong!");
					console.log(response.content.body);
				}
			}
		});
	});