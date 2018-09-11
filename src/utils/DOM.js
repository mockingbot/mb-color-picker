export const stopReactEventPropagation = e => {
  e.stopPropagation()
  e.nativeEvent.stopImmediatePropagation()
}
