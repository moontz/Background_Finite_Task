

LockBackgroundTime = function(seconds, callback) {
    cordova.exec(callback, null, "BackgroundJS", "lockBackgroundTime", []);
};

UnlockBackgroundTime = function(seconds, callback) {
    cordova.exec(callback, null, "BackgroundJS", "unlockBackgroundTime", []);
};

SetBackgroundSeconds = function(seconds, callback) {
    cordova.exec(callback, null, "BackgroundJS", "setBackgroundSeconds", [seconds]);
};