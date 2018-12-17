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
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 算出 getter 関数
    reversedMessage: function () {
      // `this` は vm インスタンスを指します
      return this.message.split('').reverse().join('')
    }
  }
})
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: {
      // getter 関数
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter 関数
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
  })

  var example1 = new Vue({
    el: '#example-1',
    data: {
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  })
  Vue.component('todo-item', {
    template: '\
      <li>\
        {{ title }}\
        <button v-on:click="$emit(\'remove\')">Remove</button>\
      </li>\
    ',
    props: ['title']
  })
  
  new Vue({
    el: '#todo-list-example',
    data: {
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishes',
        },
        {
          id: 2,
          title: 'Take out the trash',
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
      nextTodoId: 4
    },
    methods: {
      addNewTodo: function () {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      }
    }
  })
  var app = new Vue({
    el: '#app-example',
    methods: {
      handleClick: function (event) {
        alert(event.target) // [object HTMLButtonElement]
      }
    }
  })  
  var app = new Vue({
    el: '#app',
    data: {
      show: true
    }
  })

  new Vue({
    el: '#app-13',
    data: {
      count: 0
    },
    methods: {
      // ボタンをクリックしたときのハンドラ
      increment: function () {
        this.count += 1 // 処理は再代入するだけでOK！
      }
    }
  })

  new Vue({
    el: '#app-14',
    data: {
      radius: 50
    }
  })
  new Vue({
    el: '#app-15',
    data: {
      order: false,
      // フォームの入力と紐付けるデータ
      budget: 300,
      // 表示件数
      limit: 2,
      // 元になるリスト
      list: [
        { id: 1, name: 'りんご', price: 100 },
        { id: 2, name: 'ばなな', price: 200 },
        { id: 3, name: 'いちご', price: 400 },
        { id: 4, name: 'おれんじ', price: 300 },
        { id: 5, name: 'めろん', price: 500 }
      ]
    },
    computed: {
      // budget以下のリストを返す算出プロパティ
      matched: function() {
        return this.list.filter(function(el) {
          return el.price <= this.budget
        }, this)
      },
      // sortedを新しく追加
      sorted: function() {
        return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc')
      },
      // limitedで使用するリストをsortedに変更
      limited: function() {
        return this.sorted.slice(0, this.limit)
      }
    }
  })