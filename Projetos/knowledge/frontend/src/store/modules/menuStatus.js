export default {
    namespaced: true,
    state: {
        isMenuVisible: false,
        user: null,
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
        }
    }
    
}