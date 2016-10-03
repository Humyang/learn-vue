new Vue({
    el:"#ifshow",
    data:{
        show:true
    },
    methods:{
        ifshow:function(){
            this.show = !this.show
        }
    }
})