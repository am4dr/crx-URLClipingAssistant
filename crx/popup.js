chrome.tabs.query({"active": true, "currentWindow": true}, function(tabs) {
    var tab = {
        "title": tabs[0].title,
        "url": tabs[0].url
    };
    // TODO 設定ファイルから読む
    var list = [
        {
            "label": "Markdown",
            "text": "[" + tab.title + "](" + tab.url + ")"
        },
        {
            "label": "Todoist",
            "text": "@read " + tab.url + " (" + tab.title + ")"
        }
    ];
    console.log('current tab title: ' + tab.title);
    // TODO 自動的に生成して挿入する
    for (var i = 1; i <= 2; i++) {
        document.getElementById('text' + i).value = list[i-1].text;
        document.getElementById('button' + i).onclick = function() {
            document.getElementById('text' + i).select();
            document.execCommand('copy');
            // TODO 必要に応じてポップアップを閉じる。
        };
    }
});
console.log('opened'+ Date());

