new Vue({
	el:"#vmodel1",
	data:{
		message:"init value"
	}
})

new Vue({
	el:"#vmodel2",
	data:{
		checked:false
	}
})

var vm3 = new Vue({
	el:"#vmodel3",
	data:{
		checkedNames:[]
	}
})

new Vue({
	el:"#vmodel4",
	data:{
		picked:""
	}
})

new Vue({
	el:"#vmodel5",
	data:{
		selected:"",
		multiple_selected:[]
	}
})

new Vue({
	el:"#vmodel6",
	data:{
		selected: 'B',
		options:[
			{value:"A",text:"OA"},
			{value:"B",text:"OB"},
			{value:"C",text:"OC"},
		]
	}
})

new Vue({
	el:"#vmodel7",
	data:{
		toggle:"false22",
		a:"true11",
		b:"false22",
		pick:"radio_b",
		r_a:"radio_a",
		r_b:"radio_b",
		s_selected:{number:456}
	}
})

var vm8 = new Vue({
	el:"#vmodel8",
	data:{
		msg:"init value",
		debounce_msg:"init value",
		number_msg:222
	}
})