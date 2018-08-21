import { namespaceConfig } from 'fast-redux'
import * as reducers from './reducer'

const { actionCreator, getState: getAppState } = namespaceConfig(
    'app', reducers.DEFAULT_STATE
  )
export { getAppState }