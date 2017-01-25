import { Component } from '@angular/core'

const todos = [
    {
        title: 'Изучить JavaScript',
        completed: true
    },
    {
        title:  'Изучить Angular 2',
        completed: false
    },
    {
        title: 'Написать приложение',
        completed: false
    }
]

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.components.html',
    styleUrls: ['app.components.css']
})
export class AppComponent {
    title: string = 'Angular 2Do'
    todos = todos
    
    toggle(todo: { title: string, completed: boolean }) {
        todo.completed = !todo.completed
    }

    delete(todo: any) {
        let index = this.todos.indexOf(todo)
        if (index > -1) {
            this.todos.splice(index, 1)
        }
    }
}