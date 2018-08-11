// OnClick for "Save" button
function save_options() {
  var apikey = document.getElementById('apikey').value;
  var storage = chrome.storage.local;
  var key = 'k1';
  var obj = {};
  obj[key] = apikey;
  storage.set(obj);
  chrome.storage.sync.set({ // Put user-entered API key to local storage
    apikey: apikey
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Populates "API Key" input with previous input
function restore_options() {
  var storage = chrome.storage.local;
  var key = 'k1';

  storage.get(key, function(result){
    document.getElementById('apikey').value = result[key];
  });
}

// Don't have a key/want to find a key? Use this one, I guess. 
function pop_key() {
  document.getElementById('apikey').value = '06e944b3ddabd9087281af55d6f9b5b36f536cc5';
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('populate').addEventListener('click', pop_key);