Vue.component('task-list', {
    template: `
        <div>
            <task v-for='task in tasks' v-text='task.description'></task>
        </div>
    `,
    data() {
        return {
            tasks: [
                { description: 'Go to the store', completed: true},
                { description: 'Finish the project', completed: false},
                { description: 'Make a cake', completed: false},
                { description: 'Make a call', completed: true},
                { description: 'Visiting family', completed: false},
                { description: 'Clean room', completed: true}
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
})
