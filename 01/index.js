new Vue({
    el:'#vued',
    data:{
        data:"this data is from Vue instance"
    }
})
// 双向绑定
new Vue({
    el:'#two_bind',
    data:{
        input_value:"init value"
    }
})
// 渲染列表
new Vue({
    el:'#render_list',
    data:{
        items:[
            {text:"1"},
            {text:"2"},
            {text:"3"},
            {text:"4"},
            {text:"5"},
        ]
    }
})
// 处理用户输入
new Vue({
    el:'#reverse',
    data:{
        message:"whosyourdaddy abc"
    },
    methods:{
        reverse:function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})
// 综合
new Vue({
    el:'#todo',
    data:{
        current_item:'',
        items:[
            {text:"first item"}
        ]
    },
    methods:{
        add_item:function(){
            this.items.push({text:this.current_item})
            this.current_item = ''
        },
        remove_item:function(index){
            this.items.splice(index,1)
        }
    }
})