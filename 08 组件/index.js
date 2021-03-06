var MyComponent = Vue.extend({
	data:function(){
		return {
			item:"aaa"
		}
	},
	template:'<div>A custom component!</div>'
})
var NoReplace = Vue.extend({
	template:'<div>No Replace Node</div>',
	replace:false
})

Vue.component('my-component',MyComponent)
Vue.component('no-replace',NoReplace)

new Vue({
	el:"#component1",
	data:{

	}
})

// 局部注册
var Child = Vue.extend({
	template:'<div>Child Node</div>'
})
var Parent = Vue.extend({
	template:'<div>Parent Component <my-component></my-component></div>',
	components:{
		'my-component':Child
	}
})
Vue.component('parent-component',Parent)
new Vue({
	el:"#component2",
	data:{

	}
})

// 注册语法糖
Vue.component('my-componet3',{
	template:'<div>my component 3</div>'
})
new Vue({
	el:"#component3",
	data:{

	}
})

Vue.component("component4",{
	props:['msg'],
	template:"<span>from props {{msg}}</span>"
})
new Vue({
	el:"#component4",
	data:{

	}
})

Vue.component("component5",{
	props:['msg'],
	template:"<span>from props {{msg}}</span>"
})
new Vue({
	el:"#component5",
	data:{
		msg:"init value"
	}
})


Vue.component("component6",{
	props:['msg'],
	template:"<br><span>Child：<input type='text' v-model='msg'><br>from props {{msg}}</span>"
})
new Vue({
	el:"#component6",
	data:{
		single_msg:"init value",
		parentMsg:"init value",
		once_msg:"init value"
	}
})


Vue.component("component7",{
	props:{
		msg:String,
		propA:Number,
		propM:[String,Number],
		propB:{
			type:String,
			required:true
		},
		propC:{
			type:Number,
			default:100
		},
		propD:{
			type:Object,
			default:function(){
				return {msg:'hello'}
			}
		},
		propE:{
			twoWay:true
		},
		propF:{
			validator:function(value){
				return value > 10
			}
		},
		propG:{
			coerce:function(val){
				return val+''//将值转换为字符串
			}
		},
		propH:{
			coerce:function(val){
				return JSON.parse(val)
			}
		}
	},
	template:`<br>
	<span>Child：
	<input type='text' v-model='msg'>
	<br>from props {{msg}}</span>
	<br />
	propF:{{propF}}
	<br />
	propD:{{propD.msg}}
	`
})
new Vue({
	el:"#component7",
	data:{
		aaa:"aaa",
		msg:'init value',
		proph:'{"aa":123}'
	}
})

// // 自定义事件
// // 
// Vue.component("cmoponent8_child",{
// 	template:
// 	`<div>
// 		<input type="text" v-model="msg" />
// 		<input type="button" @click="notify" value="Dispatch Event" />
// 	</div>`,
// })
// Vue.component("component8_parent",{
// 	template:
// 	`
// 	<div>
// 		<p>Message:{{ message | json }}</p>
// 		<component8_child></component8_child>
// 	</div>
// 	`
// })
// new Vue({
// 	el:"#component8",
// 	{
// 		data
// 	}
// })

// 注册子组件
// 将当前消息派发出去
Vue.component("child",{
	template:"#child-template",
	data:function(){
		return {msg:'hello'}
	},
	methods:{
		notify:function(){
			if(this.msg.trim()){
				this.$dispatch('child-msg',this.msg)
				this.$dispatch('child-msg2',this.msg)
				this.msg = ''
			}
		}
	}
})

// 初始化父组件
// 将收到消息时将事件推入一个数组
var parent = new Vue({
	el:"#events-example",
	data:{
		message:[]
	},
	methods:{
		handleIt:function(msg){
			this.message.push(msg)
		}
	},
	events:{
		'child-msg' : function(msg){
			// 事件回调內的 this 自动绑定到注册它的实例上
			this.message.push(msg)
		}
	}
})


Vue.component("component9-child",{
	template:"#component9_child"
})

var cm9 = new Vue({
	el:"#component9",
	methods:{
		// show:function(){
		// }
	}
})

console.log(cm9.$refs.profile)


Vue.component("component10-child",{
	template:"#component10_child",
	data:function(){
		return {
		msg1:"msg1 of template",
		msg2:"msg2 of template"
		}
	}
})
new Vue({
	el:"#component10",
	data:{
		msg1:"msg1 of parent",
		msg2:"msg2 of parent"
	}
})

Vue.component("component11-child",{
	template:"#component11_child"
})
new Vue({
	el:"#component11",

})

Vue.transition('slide', {
  enterClass: 'slideInRight',
  leaveClass: 'slideOutLeft'
})

Vue.component("component12-child1",{
	template:"#component12_child1",
	data:function(){
		return {
			msg:"init value"
		}
	},
	activate:function(done){
		var self = this
		setTimeout(function() {
			self.msg = "2 seconds after"
			done()
		}, 2000);
	}
})
Vue.component("component12-child2",{
	template:"#component12_child2"
})
Vue.component("component12-child3",{
	template:"#component12_child3"
})

new Vue({
	el:"#component12",
	data:{
		currentView: 'component12-child2'
	},
})

Vue.component("component13-child",{
	props:{
		item:Object,
		index:Number
	},
	template:"#component13_child"
})

new Vue({
	el:"#component13",
	data:{
		items:[
		{text:"item 1"},
		{text:"item 2"},
		{text:"item 3"},
		{text:"item 4"},
		{text:"item 5"},
		]
	}
})
Vue.component("component14-child1",{
	template:"#component14_child1"
	
})
Vue.component("component14-child2",{
	template:"#component14_child2"
})
Vue.component("component14-child3", function(resolve,rejeact){
	setTimeout(function () {
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 1000)
})
new Vue({
	el:"#component14",
	data:{
		currentView:"component14-child1"
	}
})




