var vm = new Vue({
    el:'#calc',
    data:{
        value:'init value',
        a:1
    },
    computed:{
        b:function(set_value){
            console.log(set_value);
            return this.a+1;
        },
        c:{
            get:function(){
                return this.a+2;
            },
            set:function(){
                this.a = this.a - 1;
            }

        }
    }
})