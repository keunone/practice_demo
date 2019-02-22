import HotReload from './hot-reload'


chrome.browserAction.onClicked.addListener(
  () => {
    console.log("点击action");
    store.get(TOOL_STATUS).then(
      status => {
        const action = {
          type: TOOL_STATUS,
          status: status === ToolStatus.Show ? ToolStatus.Hide : ToolStatus.Show
        }

        chrome.tabs.getSelected(null, function (tab) {
          chrome.tabs.sendMessage(tab.id, action, function (response) {
          });
        });
      }
    )

  }
)

// 新开一个tab页面
chrome.runtime.onMessage.addListener(
  function (message, sender, sendResponse) {
    if (message.type === TOOL_STATUS) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message); // 中转消息
      });
      return
    }

    if (message.type === TOOL_STATUS) { // TAB_PAGE

      const newTabBaseUrl = chrome.runtime.getURL(`/newtab/newtab.html`) + '/#/'
      const route = 'relation'
      const params = '?' + stringfyQuery(message.params)
      const url = newTabBaseUrl + route + params
      chrome.tabs.create({
        url
      })
      return
    }

    const url = message => {
      if (message.id) {
        return chrome.runtime.getURL(`/newtab/newtab.html?id=${message.id}`)
      }
      if (message.text) {
        return chrome.runtime.getURL(`/newtab/newtab.html?text=${message.text}`)
      }
    }
    chrome.tabs.create({
      url: url(message)
    })
  });

HotReload()

