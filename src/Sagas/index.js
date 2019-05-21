import { fork } from 'redux-saga/effects'
import watchActionsInApplication from './watcher'

export default function* startForman() {
  yield fork(watchActionsInApplication)
}