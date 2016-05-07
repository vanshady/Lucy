chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("RECEIVED");
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });
  
  
  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //         chrome.tabs.sendMessage(tabs[0].id, {data:data}, function(response) {
  //           if(response.type == "test"){
  //             console.log('test received');
  //           }
  //         });
  //       });