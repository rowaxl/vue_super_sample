export default {
    setState: function({ commit }, input) {
        commit('setState', input);
    },
    toggleState: function ({ commit }) {
        commit('toggleState');
    }
}