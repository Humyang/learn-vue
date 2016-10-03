new Vue({
	el:"#vfor",
	data:{
		items:[{
			message:"m1"
		},{
			message:"m2"
		},{
			message:"m3"
		},{
			message:"m4"
		}]
	}
})

new Vue({
	el:"#vfor_parent",
	data:{
		parentMessage:"message",
		items:[{
			message:"m1"
		},{
			message:"m2"
		},{
			message:"m3"
		},{
			message:"m4"
		}]
	}
})
new Vue({
	el:"#trackby",
	data:{
		parentMessage:"message",
		items:[{
			_id:000,
			message:"m1"
		},{
			_id:001,
			message:"m2"
		},{
			_id:002,
			message:"m3"
		},{
			_id:003,
			message:"m4"
		}]
	},
	methods:{
		alter_data:function(){
			this.items = [
			{_id:000,message:'message_a_1'},
			{_id:005,message:'message_a_2'}]
		}
	},
	ready:function(){
		document.querySelector("#trackby > div > ul > li:nth-child(1)"). classList.add("111");
	}
})
