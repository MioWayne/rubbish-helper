mui.init();
	mui.plusReady(function () {
	    mui.ajax('http://apis.juhe.cn/rubbish/category',{
			data:{
				key:'dfe7a5dc90a9be32d35d15d5a06eb619'
			},
			success:function(data){
				var result = data.result;
				mui.each(result,function(index,item){
					mui('.mui-slider-group')[0].innerHTML +=`
					<div class="mui-slider-item">
						<div id="class-title">
							<h3>${item.name}介绍</h3>
							<p>${item.explain}</p>
						</div>
						<div id="class-content-1">
							<h3>${item.name}处理方法</h3>
							<p>${item.require}</p>
						</div>
						<div id="class-content">
							<h3>常见${item.name}</h3>
							<p>${item.common}</p>
						</div>
					</div>
					`;
				});
				mui('.mui-slider').slider().gotoItem(0);
			}
		})
	});