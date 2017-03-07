$(function(){
	var goods=[
		{id:'1',name:"牛仔裤",realprize:'38',sourceprize:'42',img:'img/1.jpg'},
		{id:'2',name:"耳坠",realprize:'38',sourceprize:'42',img:'img/2.jpg'},
		{id:'3',name:"电磁炉",realprize:'38',sourceprize:'42',img:'img/3.jpg'},
		{id:'4',name:"吸尘器",realprize:'38',sourceprize:'42',img:'img/4.jpg'},
	];
	
	var shopCar={};
	
	var html='<div class="col-xs-6 col-sm-4">'+
		    	'<div class="thumbnail">'+
		      	'<img src="${img}" alt="牛仔裤">'+
		      		'<div class="caption">'+
		        		'<h4>${name}</h4>'+
		        		'<p><strong class="spc">￥${realprize}</strong><del>￥${sourceprize}</del></p>'+
		        		'<p><a href="#" class="btn btn-primary btn-block" data-id="${id}" role="button">购买</a></p>'+
		      		'</div>'+
		    	'</div>'+
		  	'</div>';

	var tmp=[];
	for(var i=0; i<goods.length; i++){
		tmp.push($( html.replace('${id}', goods[i].id)
			.replace('${img}', goods[i].img)
			.replace('${name}', goods[i].name)
			.replace('${realprize}', goods[i].realprize)
			.replace('${sourceprize}', goods[i].sourceprize)))
	}
	$("#goodsList").html(tmp);



	$(".thumbnail .btn").click(function(){
		var id=$(this).data('id');		
        var dataId=getObj(goods,id);
	})
	
	$(".shop").on("click",".add", function(){
		
	})
	
	$(".shop").on("click",".minus", function(){
		
	})
	
	function getObj(data,id){
		for(var i=0; i<data.length; i++){
			if(data[i].id==id){
				return data[i];
			}
		}
	}
	
	function addtoShopCar(shopCar, id){
		if(shapCar[id]){
			shapCar[id].count +=1;
		}}
	
	function minustoShopCar(shopCar, id){
		if(shapCar[id]){
			shapCar[id].count -=1;
			if(shopCar[id].count<0){
				delete shopCar[id];
			}
		}}


	function show(dataId, shopCar){
		for(i in shopCar){
		var temp =temp+'<li class="list-group-item my-item">'+
					      			'<input type="checkbox" />'+
					      			'<img src=' + shopCar[i].img + '/>'+
					      			'<span>$25</span>'+
					      			'<br />'+
					      			'<div class="btn-group my-btn-group" role="group" aria-label="...">'+
						      			'<button class="btn btn-default">'+
						      				'<span class="glyphicon glyphicon-plus add"></span>'+
						      			'</button>'+
						      			'<button class="btn btn-default">'+
						      				'<span class="glyphicon glyphicon-minus minus"></span>'+
						      			'</button>'+
						      			'<button class="btn btn-default">'+
						      				'<span class="glyphicon glyphicon-trash"></span>'+
						      			'</button>'+
						      		'</div>'+
						      		'<span class="badge" data-id="'+shopCar[i].id +'">'+shopCar[i].count +'</span>'+
					      		'</li>'	
		}		
		$(".list-group").html(temp);
	}
})
