new Vue({
    el: '#exercise',
    data: {
        name: 'RowAxl',
        age: 28,
        pic: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1635&q=80',
        initValue: 'placeholder'
    },
    methods: {
        getRandomValue: function () {
            return Math.random();
        }
    }
});