import { compose, bindActionCreators } from 'redux'
import { reduxPage } from '../../utils/store'

import * as actions from './action'

export default (preload) => (Page) => {
    class Main extends PureComponent {
        render() {
            return (
                <div>
                    跟组件
                    <Page {...this.props} router={Router}/>
                </div>
            )
        }
    }
    
    const { getAppState} = actions
    
    function mapStateToProps (state) {
        return getAppState(state)
    }
    
    function mapDispatchToProps (dispatch) {
        return {
            // app: bindActionCreators(_actions, dispatch),
            dispatch
        }
    }
    return compose(
        reduxPage,
        connect(mapStateToProps, mapDispatchToProps)
    )(Main)
}