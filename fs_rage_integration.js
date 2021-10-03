/*
 Credit: Local storage with expiry functions adopted from Soham Kamani
 https://www.sohamkamani.com/blog/javascript-localstorage-with-ttl-expiry/
*/

function setWithExpiry(key, value, ttl) {
	const now = new Date();

	//ttl is in days; convert to milliseconds
	const ttlms = ttl * 86400000;

	// 'item' is an object which contains the original value
	// as well as the time when it's supposed to expire
	const item = {
		value: value,
		expiry: now.getTime() + ttlms,
	}
	localStorage.setItem(key, JSON.stringify(item));
}

function getWithExpiry(key) {
	const itemStr = localStorage.getItem(key)
	// if the item doesn't exist, return null
	if (!itemStr) {
		return null
	}
	const item = JSON.parse(itemStr);
	const now = new Date();
	// compare the expiry time of the item with the current time
	if (now.getTime() > item.expiry) {
		// If the item is expired, delete the item from storage
		// and return null
		localStorage.removeItem(key)
		return null
	}
	return item.value;
}

window.addEventListener('fullstory/rageclick', function(e) {

	//check for storage item
	let fsrcValue = getWithExpiry("fsrc");
	if (fsrcValue == null){
		setWithExpiry("fsrc","true",30)	//set expiration at 30 days
		let tsformurlbase = "https://xxxxxxx.typeform.com/to/XXXXXXX#fsurl="; // replace this the URL to your feedback form
		let fsrurl = e.detail.eventReplayUrlAtCurrentTime;
		let tsformurl = tsformurlbase + fsrurl; //add replay URL as parameter to form URL
		//log customer FS event
		FS.event("Rage Feedback", {"pageurl_str":window.location.href});
		//open Feedback form
		window.open(tsformurl);
	}

});
