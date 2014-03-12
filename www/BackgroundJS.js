

SetBackgroundSeconds = function(seconds, callback) {
    cordova.exec(callback, null, "BackgroundJS", "setBackgroundSeconds", [seconds]);
};