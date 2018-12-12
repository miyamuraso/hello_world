// document.getElementById("text-button").onclick = function() {
//     document.getElementById("text").innerHTML = "クリックされた！";
//   };

// document.getElementById("square-button").onclick = function() {
//     this.classList.toggle("blue");
//   };

// document.getElementById("form-button").onclick = function() {
//     document.getElementById("form-text").innerHTML = "こんにちは " + document.getElementById("name").value + " さん！";

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})
// データオブジェクト
var data = { a: 1 }

// Vue インスタンスにオブジェクトを追加する
var vm = new Vue({
  data: data
})

const app8 = new Vue({
  el: '#app8',
  data: {
    message: 'あほ'
  },
  methods: {
    changeMsg: function () {
      this.message = "ばか"
    }
  }
})
new Vue({
  el: '#app-9',
  data: {
    counter: 0,
    list: ['Apple', 'Banana', 'Strawberry']
  },
  computed: {
    length: function() {
      return this.list.length
    }
  },
  methods: {
    addItem: function() {
      this.list.push('Orange' + (++this.counter).toString())
    }
  }
})
new Vue({
  el: '#app-10',
  data: {
    current: 1,
    list: [{
      id: 1,
      label: 'menu1',
      content: 'content1'
    }, {
      id: 2,
      label: 'menu2',
      content: 'content2'
    }, {
      id: 3,
      label: 'menu3',
      content: 'content3'
    }]
  },
  methods: {
    active: function(id) {
      return this.current == id
    },
    changeTab: function(id) {
      this.current = id
    }
  }
})