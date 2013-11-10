chrome.browserAction.onClicked.addListener(function(tab){
	console.log("executing script");
	chrome.tabs.executeScript(null, {
		file: "substitute.js"
	});
});