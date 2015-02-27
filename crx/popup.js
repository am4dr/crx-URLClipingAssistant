// タブの切り替えで内容を変更する。
chrome.tabs.query({"active": true, "currentWindow": true}, function(tabs) {
    var tab = {
        "title": tabs[0].title,
        "url": tabs[0].url
    };
    console.log('current tab title: ' + tab.title);
    document.getElementById('text1').value =
        "[" + tab.title + "](" + tab.url + ")";
    document.getElementById('text2').value =
        "@read " + tab.url + " (" + tab.title + ")";
});
console.log('opened'+ Date());

//javascript:prompt("[title](url)", "["+document.title+"]" + "("+document.URL+")"); void(0)
