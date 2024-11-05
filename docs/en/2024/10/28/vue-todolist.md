---
title: Vue Practice Project - Todolist
date: 2024/10/28
tags: 
 - Vue
 - Capstone
---

# Vue Practice Project - Todolist

Referenced from [this](https://www.bilibili.com/video/BV1Zy4y1K7SH?p=70).

Links:

- [GitLab](https://gitlab.com/tangjan/vue-todolist)
- [Live Demo](https://vue-todolist-7490c6.gitlab.io/)

## Requirements

Screenshot:

![1-app-picture](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2024/10/28/vue-todolist/1-app-picture.png)

### Header

- Press Enter to add a task. Enter the task name and press Enter to add it to the task list.
- If the input is empty when pressing Enter, show the message "输入不能为空".

### Task List

- Tasks can be checked/unchecked.
- Delete button. When hovering over a task item, show the delete button; otherwise, hide it. Clicking the delete button prompts "Are you sure you want to delete this task?". If confirmed, delete the corresponding task item regardless of its checked status.

### Footer

- Check all tasks.
- Show completed count / total count.
- Hide footer when task count is 0.
- Clear completed tasks. When clicked, prompt "确定清除所有已完成任务吗？".

## Component Breakdown

The component breakdown is shown in the image below, where `MyItem` is a child component of `MyList`.

![2-components-separation](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2024/10/28/vue-todolist/2-components-separation.png)

In this article, the components are named as:

- `MyHeader.vue`: Header
- `MyList.vue`: Task List
- `MyItem.vue`: Task Item
- `MyFooter.vue`: Footer

Most of the logic is self-explanatory from the source code. Here are some noteworthy points.

## App.vue

::: details `<template>`

``` HTML
<div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :addTodo="addTodo"/>

      <MyList
        :todos="todos"
        :checkTodo="checkTodo"
        :deleteTodo="deleteTodo"
      />

      <MyFooter 
        :todos="todos"
        :checkAllTodo="checkAllTodo"
        :clearAllTodo="clearAllTodo"
      />
    </div>
  </div>
</div>
```

:::

::: details `<script>`

```js
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name:'App',
  components:{MyHeader,MyList,MyFooter},
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || 
      [
        {id:'001', title:'Task 1', done:true},
        {id:'002', title:'Task 2', done:true},
        {id:'003', title:'Task 3', done:false}
      ]
    }
  },
  methods: {
    // Add a task
    addTodo(todoObj){
      this.todos.unshift(todoObj)
    },
    // Check/uncheck a task
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id === id) todo.done = !todo.done
      })
    },
    // Delete a task
    deleteTodo(id){
      this.todos = this.todos.filter( todo => todo.id !== id )
    },
    // Check/uncheck all tasks
    checkAllTodo(doneStatus){
      this.todos.forEach((todo)=>{
        todo.done = doneStatus
      })
    },
    // Clear all completed tasks
    clearAllTodo(){
      this.todos = this.todos.filter((todo)=>{
        return !todo.done
      })
    }
  },
  watch: {
    todos: {
      handler(value) {
          localStorage.setItem('todos', JSON.stringify(value))
      },
      deep: true
    }
  },
}
```

:::

### Task List Definition

::: details Task List Code

```js
data() {
  return {
    todos: JSON.parse(localStorage.getItem('todos')) || 
    [
      {id:'001', title:'Task 1', done:true},
      {id:'002', title:'Task 2', done:true},
      {id:'003', title:'Task 3', done:false}
    ]
  }
},
```

:::

The task list is stored as an array of objects in `App.vue`.

Each task object has three properties: `id`, `title`, and `done`.

`id` serves as a unique identifier, generated using [nanoid](https://github.com/ai/nanoid). [uuid](https://github.com/uuidjs/uuid) could also be used, but it's unnecessarily long.

`title` is the task name. `title` cannot be used as a unique identifier because tasks may have the same name.

`done` is the task status (checked/unchecked). This property is used for counting completed tasks and clearing completed tasks in the footer.

The task list is stored in `App.vue` rather than `MyList.vue` because when `MyHeader` adds a task, it needs to be rendered in the `MyList` area. Since they are sibling components, it's not ideal to pass data using `props`. Instead, we use [state lifting](https://vuejs.org/guide/scaling-up/state-management) to store the data in their common parent component `App.vue`.

### Task Methods Definition

::: details Task Methods Code

```js
methods: {
  // Add a task
  addTodo(todoObj){
    this.todos.unshift(todoObj)
  },
  // Check/uncheck a task
  checkTodo(id){
    this.todos.forEach((todo)=>{
      if(todo.id === id) todo.done = !todo.done
    })
  },
  // Delete a task
  deleteTodo(id){
    this.todos = this.todos.filter( todo => todo.id !== id )
  },
  // Check/uncheck all tasks
  checkAllTodo(doneStatus){
    this.todos.forEach((todo)=>{
      todo.done = doneStatus
    })
  },
  // Clear all completed tasks
  clearAllTodo(){
    this.todos = this.todos.filter((todo)=>{
      return !todo.done
    })
  }
},
```

:::

Since the task data is stored in `App.vue`, methods for adding, checking/unchecking, deleting, and clearing completed tasks are also unified in `App.vue` to manage the data state centrally.

The implementation of these methods is self-explanatory.

### Browser Cache

::: details Browser Cache Related Code

```js
data() {
  return {
    todos: JSON.parse(localStorage.getItem('todos')) || 
    [
      {id:'001', title:'Task 1', done:true},
      {id:'002', title:'Task 2', done:true},
      {id:'003', title:'Task 3', done:false}
    ]
  }
},

watch: {
  todos: {
    deep: true,
    handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
    }
  }
},
```

:::

To implement browser caching so that data persists after page refresh, we need to consider two timing points:

1. Reading cache during initialization. Note that we need to add `||` and define an initial task list (which can be empty) separately, otherwise the browser cache will be null on first use and the console will report an error.
2. When the task object array changes (add/delete). This is implemented using the `watch` property.

Note that we need to use [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) and [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) to convert between objects and JSON strings.

![3-JSON](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2024/10/28/vue-todolist/3-JSON.png)

## Header MyHeader.vue

::: details `<template>`

```html
<div class="todo-header">
  <input
    type="text"
    placeholder="Enter task name, press Enter to confirm"
    v-model="title"
    @keyup.enter="add"
  />
</div>
```

:::

::: details `<script>`

```js
import {nanoid} from 'nanoid'
export default {
  name:'MyHeader',
  props:['addTodo'],
  data() {
    return {
      title: ''
    }
  },
  methods: {
    add(){
      if(!this.title.trim()) return alert('Input cannot be empty')

      // Capture user input and wrap it as an object
      const headerTodoObj = { id:nanoid(), title:this.title, done:false }
      this.addTodo(headerTodoObj)
      
      // Clear input box
      this.title = ''
    }
  },
}
```

:::

This is pretty straightforward.

Worth mentioning is that if there was a server, the `id` should be generated by the server. But since this is a standalone version, we'll use `nanoid()` instead.

We could also use [`Date.now()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now) as the id, as long as it's unique.

## Task List MyList.vue

::: details `<template>`

```html
<ul class="todo-main">
  <MyItem 
    v-for="todoObj in todos"
    :key="todoObj.id" 
    :todo="todoObj" 
    :checkTodo="checkTodo"
    :deleteTodo="deleteTodo"
  />
</ul>
```

:::

::: details `<script>`

```js
import MyItem from './MyItem.vue'

export default {
  name:'MyList',
  components:{MyItem},
  props:['todos','checkTodo','deleteTodo']
}
```

:::

It's important to note that when using `v-for` to render `<MyItem>`, we should use `id` as the `key` instead of `index`. This is because new tasks are added to the front of the task list, involving reverse order operations. Using `index` would prevent DOM rendering reuse and reduce efficiency.

See:
- [Key's Purpose and Principle - Bilibili](https://www.bilibili.com/video/BV1Zy4y1K7SH?p=30)
- [v-for index / person.id as key - CodePen](https://codepen.io/Jan-Tang/pen/BaXWbba)

## Task Item MyItem.vue

::: details `<template>`

```html
<li>
  <label>
    <input
      type="checkbox"
      :checked="todo.done"
      @change="handleCheck(todo.id)"
    />
    <span>{{todo.title}}</span>
  </label>
  <button class="btn btn-danger" @click="handleDelete(todo.id)">Delete</button>
</li>
```

:::

::: details `<script>`

```js
export default {
  name:'MyItem',
  props:['todo','checkTodo','deleteTodo'],
  methods: {
    handleCheck(id){
      this.checkTodo(id)
    },
    
    handleDelete(id){
      if(confirm('Are you sure you want to delete this task?')){
        this.deleteTodo(id)
      }
    }
  },
}
```

:::

### change Event Can Be Replaced with click Event

```html
<input
  type="checkbox"
  :checked="todo.done"
  @change="handleCheck(todo.id)"
/>
```

Here, the [change](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) event can be replaced with the [click](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) event, because for [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) elements, these two events have the same effect.

### Component Communication Issue

As mentioned earlier, we use [state lifting](https://vuejs.org/guide/scaling-up/state-management) to pass `todo`, `checkTodo()`, and `deleteTodo()` from `App.vue` to `MyItem.vue`.

Since `MyItem` is a child component of `MyList`, which is a child component of `App`, using `props` requires passing level by level, i.e., `App.vue` → `MyList.vue` → `MyItem.vue`.

There are two other methods to handle component communication:
- Global Event Bus
- Message Subscription and Publishing

But I haven't learned these yet, will supplement later.

### Inappropriate Data Communication Method: v-model

```html
<input
  type="checkbox"
  v-model="todo.done"
  @change="handleCheck(todo.id)"
/>
```

This can also achieve task item state synchronization, however, referring to [One-Way Data Flow](https://vuejs.org/guide/components/props#one-way-data-flow), in this way, the child component `MyItem` modifies the parent component `App`'s data, violating Vue's one-way binding principle for `props`, which is inappropriate.

## Footer MyFooter.vue

::: details `<template>`

```html
<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>Completed {{doneTotal}}</span> / Total {{total}}
    </span>
    <button class="btn btn-danger" @click="clearAll">Clear Completed Tasks</button>
  </div>
</template>
```

:::

::: details `<script>`

```js
<script>
  export default {
    name:'MyFooter',
    props:['todos','checkAllTodo','clearAllTodo'],
    computed: {
      // Total count
      total(){
        return this.todos.length
      },
      
      // Completed count
      doneTotal(){
        return this.todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0), 0)
      },
      
      // Check all
      isAll:{
        // Auto-check when all tasks are completed
        get(){
          return this.doneTotal === this.total && this.total > 0
        },
        // Manual check/uncheck all
        set(value){
          this.checkAllTodo(value)
        }
      }
    },
    methods: {
      // Clear all completed
      clearAll(){
        if(confirm('Are you sure you want to clear all completed tasks?')){
          this.clearAllTodo()
        }
      }
    },
  }
</script>
```

:::

### Hide Footer

Hide the footer when task count is 0, implemented through `v-show="total"`.

### Check/Uncheck All

Check/uncheck all is implemented through [computed properties](https://vuejs.org/guide/essentials/computed). Since `isAll` is not just for reading but can also be modified, we can't use the shorthand form and need to write the complete getter `get()` and setter `set()`.

```js
computed: {
  isAll:{
    // Auto-check when all tasks are completed
    get(){
      return this.doneTotal === this.total && this.total > 0
    },
    // Manual check/uncheck all
    set(value){
      this.checkAllTodo(value)
    }
  }
},
```

```js
checkAllTodo(doneStatus){
  this.todos.forEach((todo)=>{
    todo.done = doneStatus
  })
},
```

### Check/Uncheck All, Another Implementation Method

Actually, `v-model="isAll"` is a combination of `:checked="isAll"` and `@change="checkAll"`.

```html
<input type="checkbox" :checked="isAll" @change="checkAll"/>
```

```js
computed: {
  isAll:{
    return this.doneTotal === this.total && this.total > 0
  }
},
methods: {
  checkAll(e){
    this.checkAllTodo(e.target.checked)
  }
}
```

## Deploy to GitLab Pages

We could actually use [StackBlitz](https://stackblitz.com/) to deploy this Vue project, which would be more convenient.

But I chose to use [GitLab](https://gitlab.com/tangjan) as my personal practice project collection center, so I deployed it to GitLab Pages.

::: details `.gitlab-ci.yml`

```yml
image: node:latest

stages:
  - build
  - deploy

build:
  stage: build
  script:
    - npm install
    - npm run build

pages:
  stage: deploy
  script:
    - rm -rf public
    - mkdir public && cp -rf dist/* public
  artifacts:
    paths:
      - public
    expire_in: 30 days

cache:
  paths:
    - node_modules
    - dist
```

:::

### A Small Bug

In the GitLab repository's `Deploy` - `Pages` settings, `Use unique domain` is checked by default, and when opening the project address, everything works normally.

However, if `Use unique domain` is unchecked and https://tangjan.gitlab.io/vue-todolist/ is used as the project address, an error occurs:

![4-gitlab-use-unique-domain](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2024/10/28/vue-todolist/4-gitlab-use-unique-domain.png)

![5-console-browser-error](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2024/10/28/vue-todolist/5-console-browser-error.png)

I've looked up some related information but haven't studied it carefully yet. Will deal with it later, using unique domain for now.

- [Enable CORS for GitLab Pages on Gitlab.com (#66)](https://gitlab.com/gitlab-org/gitlab-pages/-/issues/66)
- [CORS when connecting to self-hosted gitlab](https://answers.netlify.com/t/cors-when-connecting-to-self-hosted-gitlab/18467)