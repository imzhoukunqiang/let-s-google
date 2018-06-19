$(function () {

     var switch_mode = function () {
        chrome.storage.local.get("lg_agree", function (data) {
            if (data.lg_agree) {
                $("#pop-tips").html("");
            } else {
                $("#pop-tips").html("请打开设置，并同意自动打开主页。")
            }
        });
    };


    $("#setting").click(function () {
        chrome.runtime.openOptionsPage();
    });

    $("#start").click(function () {
        chrome.runtime.sendMessage({func: "start"}, function (response) {
            console.log(response);
        });
    });
    $("#stop").click(function () {
        chrome.runtime.sendMessage({func: "stop"}, function (response) {
            console.log(response);
        });
    });

    switch_mode();
});