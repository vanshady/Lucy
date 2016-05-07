Firebase.enableLogging(true);
var f = new Firebase('https://amber-torch-1365.firebaseio.com/web/data');

f.on('child_added', function (s) {
  document.getElementById('contents').innerHTML = s.val();
  chrome.runtime.sendMessage({data:s.val()}, function(response) {
    console.log('Bazinga!');
  });
});
 