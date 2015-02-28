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
            "label": "Markdown ref",
            "text": "[" + tab.title + "]: " + tab.url
        },
        {
            "label": "Todoist",
            "text": "@read " + tab.url + " (" + tab.title + ")"
        }
    ];
    console.log('current tab title: ' + tab.title);
    var entries = document.getElementById('entries');
    for (var i = 0; i < list.length; ++i) {
        var textId = 'text' + i;
        var buttonId = 'button' + i;

        var label = document.createElement('label');
        label.setAttribute('for', textId);
        label.appendChild(document.createTextNode(list[i].label + ':'));

        var text = document.createElement('input');
        text.setAttribute('id', textId);
        text.setAttribute('type', 'text');
        text.setAttribute('size', '40');
        text.setAttribute('value', list[i].text);

        var button = document.createElement('input');
        button.setAttribute('id', buttonId);
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'コピー');
        button.onclick = (function(targetId) {
            return function() {
                document.getElementById(targetId).select();
                document.execCommand('copy');
                if (document.getElementById('closeOnCopy').checked) {
                    window.close();
                }
            }
        })(textId);

        var tr = document.createElement('tr');
        tr.appendChild(document.createElement('td')).appendChild(label);
        tr.appendChild(document.createElement('td')).appendChild(text);
        tr.appendChild(document.createElement('td')).appendChild(button);
        entries.appendChild(tr);
    }
});
console.log('opened'+ Date());

