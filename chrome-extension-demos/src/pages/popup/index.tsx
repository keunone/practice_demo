import * as React from 'react'
import './index.less'

interface Props {

}
interface State {

}

export default class Popup extends React.Component<Props, State> {
  goOptionPage = (link = 'write') => {
    let isActive = false
    const path = chrome.runtime.getURL(`options/options.html#link=${link}`)
    chrome.tabs.query({ windowId: chrome.windows.WINDOW_ID_CURRENT }, tabs => {
      tabs.forEach(tab => {
        if (tab.url === path) {
          isActive = true
          chrome.tabs.update(tab.id, { active: true })
        }
      })
      if (!isActive) {
        chrome.tabs.create({ url: path })
      }
    })
  }
  render() {
    return (
      <div className="popup-page">
        <div className="popup">
          <div className="title">assistant for chrome</div>
          <div className="setting-ul">
            <div className="li" onClick={this.goOptionPage}>写作助手</div>
            <div className="li" onClick={this.goOptionPage}>阅读助手</div>
            <div className="li" onClick={this.goOptionPage}>设置</div>
          </div>
        </div>
      </div>
    )
  }
}


