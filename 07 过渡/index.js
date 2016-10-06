Vue.transition('expand', {

  beforeEnter: function (el) {
    el.textContent = 'beforeEnter'
  },
  enter: function (el) {
    el.textContent = 'enter'
  },
  afterEnter: function (el) {
    el.textContent = 'afterEnter'
  },
  enterCancelled: function (el) {
    // handle cancellation
  },

  beforeLeave: function (el) {
    el.textContent = 'beforeLeave'
  },
  leave: function (el) {
    el.textContent = 'leave'
  },
  afterLeave: function (el) {
    el.textContent = 'afterLeave'
  },
  leaveCancelled: function (el) {
    // handle cancellation
  }
})

// Vue.transition('bounce', {
//   enterClass: 'bounceInLeft',
//   leaveClass: 'bounceOutRight'
// })
Vue.transition('slide', {
  enterClass: 'slideInRight',
  leaveClass: 'slideOutLeft'
})
// Vue.transition('bounce', {
//   // 该过渡效果将只侦听 `animationend` 事件
//   type: 'animation'
// })
new Vue({
	el:"#transition1",
	data:{
		show:true
	},
	methods:{
		set_btn:function(){
			this.show = !this.show
		}
	}
})

new Vue({
	el:"#transition2",
	data:{
		show:true,
		transitionName: 'fade'
	},
	methods:{
		btn:function(){
			this.show = !this.show
		}
	}

})


new Vue({
	el:"#transition3",
	data:{
		show:true
	},
	methods:{
		btn:function(){
			this.show = !this.show
		}
	}

})


new Vue({
	el:"#transition4",
	data:{
		show:true
	},
	methods:{
		btn:function(){
			this.show = !this.show
		}
	}

})

new Vue({
	el:"#transition5",
	data:{
		show:true
	},
	methods:{
		btn:function(){
			this.show = !this.show
		}
	}

})

Vue.transition('ts6', {
  css: false,
  enter: function (el, done) {
    // 元素已被插入 DOM
    // 在动画结束后调用 done
    $(el)
      .css('opacity', 0)
      .animate({ opacity: 1 }, 1000, done)
  },
  enterCancelled: function (el) {
    $(el).stop()
  },
  leave: function (el, done) {
    // 与 enter 相同
    $(el).animate({ opacity: 0 }, 1000, done)
  },
  leaveCancelled: function (el) {
    $(el).stop()
  }
})

new Vue({
	el:"#transition6",
	data:{
		show:true
	},
	methods:{
		btn:function(){
			this.show = !this.show
		}
	}

})

new Vue({
	el:"#transition7",
	data:{
		show:true,
		items:[
			{text:1},
			{text:2},
			{text:3},
			{text:4},
			{text:5},
			{text:6}
		]
	},
	methods:{
		btn:function(){
			this.show = !this.show
			
			if(this.show){
				this.items=[
			{text:1},
			{text:2},
			{text:3},
			{text:4},
			{text:5},
			{text:6}
		]
			}else{
				this.items=[]	
			}
			
		}
	}

})

