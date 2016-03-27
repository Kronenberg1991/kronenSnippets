// Here is i am just execute code from my Content Scripts!
// very dirty

function typeMessage() {
    chrome.tabs.executeScript( null, {code: "START_TYPING()"},
   function(results){ console.log(results); } );
}

function twitterFillow() {
    chrome.tabs.executeScript( null, {code: "startTwitterFollow()"},
   function(results){ console.log(results); } );
}

function instaFollow() {
    chrome.tabs.executeScript( null, {code: "startInstaFollow()"},
   function(results){ console.log(results); } );
}

function stop() {
    chrome.tabs.executeScript( null, {code: "stop()"},
   function(results){ console.log(results); } );
}

function tumblrTodo() {
    chrome.tabs.executeScript( null, {code: "tumblr.runScripts()"},
   function(results){ console.log(results); } );
}

function runJquery() {
    chrome.tabs.executeScript( null, {code: "runJquery()"},
   function(results){ console.log(results); } );
}

function checkUnfollow() {
    chrome.tabs.executeScript( null, {code: "checkNextOne()"},
   function(results){ console.log(results); } );
}

function instaLikes() {
    chrome.tabs.executeScript( null, {code: "startInstaLikes()"},
   function(results){ console.log(results); } );
}

function tumblrFollow() {
    chrome.tabs.executeScript( null, {code: "runFollowOnTumblr()"},
   function(results){ console.log(results); } );
}


function tumblrUfollow() {
    chrome.tabs.executeScript( null, {code: "runUnFollowTumblr()"},
   function(results){ console.log(results); } );
}

function addMessageToTheTwitter() {
    chrome.tabs.executeScript( null, {code: "addMessageToTheTwitter()"},
   function(results){ console.log(results); } );
}

document.getElementById('add-message').addEventListener('click', addMessageToTheTwitter);

document.getElementById('tumblr-follow').addEventListener('click', tumblrFollow);

document.getElementById('tumblr-unfollow').addEventListener('click', tumblrUfollow);

document.getElementById('instagram-likes').addEventListener('click', instaLikes);

document.getElementById('unfollow').addEventListener('click', checkUnfollow);

document.getElementById('clickme').addEventListener('click', typeMessage);

document.getElementById('twitter-follow').addEventListener('click', twitterFillow);

document.getElementById('instagram-follow').addEventListener('click', instaFollow);

document.getElementById('tumblr').addEventListener('click', tumblrTodo);

document.getElementById('runjquery').addEventListener('click', runJquery);

document.getElementById('stop').addEventListener('click', stop);

var audio = $("#mySoundClip")[0];
        $("button").mouseenter(function() {
        audio.play();
      });

var audio2 = $("#secondSound")[0];
        $("button").click(function() {
        audio2.play();
      });

