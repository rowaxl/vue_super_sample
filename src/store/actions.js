export default {
    setState: function({ commit }) {
        commit('setState');
    },
    toggleState: function ({ commit }) {
        commit('toggleState');
    },
    setText: function ({ commit }, input) {
        commit('setText', input);
    }
}