import * as React from 'react'
import Quill from 'quill'

import '../../../node_modules/quill/dist/quill.snow.css'
import './index.less'

interface Props {

}
interface State {

}

export default class Options extends React.Component<Props, State> {
  componentDidMount() {
    new Quill('#editor', {
      theme: 'snow'
    });
  }
  render() {
    return (
      <div className="options-page">
        <div className="options-container">
          <div className="sidebar">
            <div className="sidebar-ul">
              <div className="sidebar-li">智能辅助写作</div>
              <div className="sidebar-li">知识搜索导入</div>
              <div className="sidebar-li">内容创作机器人</div>
              <div className="sidebar-li">企业数据接入</div>
            </div>
          </div>
          <div className="container">
            <div id="editor">

            </div>
          </div>
          <div className="correct-board">
            <div className="correct-title-wrap">所有错误</div>
            <div className="correct-contents">
              <div className="scroll-wrap">
                <div className="correct-ul">
                  <div className="li-wrap">
                    <div className="li">
                      <div className="text-wrap">错误小面板</div>
                      <div className="icon">展开</div>
                    </div>
                  </div>
                  <div className="li-wrap">
                    <div className="li">
                      <div className="text-wrap">错误小面板</div>
                      <div className="icon">展开</div>
                    </div>
                  </div>
                  <div className="li-wrap">
                    <div className="li">
                      <div className="text-wrap">错误小面板</div>
                      <div className="icon">展开</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


