import types from "./types"

const startLoading = () => ({
  type: types.START,
})

const stopLoading = () => ({
  type: types.STOP,
})

export default {
  startLoading,
  stopLoading,
}
