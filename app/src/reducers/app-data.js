function getAppState() {
  return {
    appName: 'Vet Resource'
  }
}

export default (state = getAppState(), action) => {
  switch (action.type) {
    default:
      return state
  }
}
