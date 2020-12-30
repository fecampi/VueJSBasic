export default {

    namespaced: true,
    state: {
        isMenuVisible: false,
        mode: "list"
    },
    mutations: {
        toggleMenu(state, isVisible) {
            if (isVisible === undefined) {
                state.isMenuVisible = !state.isMenuVisible
            } else {
                state.isMenuVisible = isVisible
            }
        },
        setMode(state, mode) {
            state.mode = mode;
        },
      
    }
}