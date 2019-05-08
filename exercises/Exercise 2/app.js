new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert: function() {
            alert('you clicked!');
        },
        updateValue: function (event) {
            this.value = event.target.value;
        }
    }
});