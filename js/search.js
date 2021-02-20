mui.init();
mui.plusReady(function(){
	var storage = localStorage;
	var sHtmlLi = '';
	fGetStorage();
	mui.ajax('http://apis.juhe.cn/rubbish/hotSearch',{
		data:{
			key:'dfe7a5dc90a9be32d35d15d5a06eb619'
		},
		success:function(data){
			var result = data.result;
			mui.each(result,function(index,item){
				document.querySelector('#hostSearch').innerHTML += `
					<li data-title='${item.itemName}'>${item.itemName}</li>
				`
			})
		}
	})
	mui("#hostSearch").on("tap",'li',function(){
		var dataTitle = this.getAttribute('data-title');
		fOpenWindow(dataTitle);
		fSetStorage(dataTitle);
		fGetStorage();
	})
	//点击搜索
	mui('.search-input').on('keypress','#formSearch',function(e){
		var keyCode = e.keyCode;
		var inputVal = document.querySelector('#searchInput').value;
		if(  keyCode == 13 ){
			fOpenWindow(inputVal);
			fSetStorage(inputVal);
			fGetStorage();
			document.activeElement.blur();
		}
	})
	window.addEventListener('touchstart',function(){
		document.activeElement.blur();
	},false)
	function fOpenWindow(val){
		document.activeElement.blur();
		mui.openWindow({
			url:'detail.html',
			id:'detail',
			extras:{
				title:encodeURI(val)
			},
			show:{
			    autoShow:true
			},
			waiting:{
				autoShow:true,
				title:'正在加载...'
			}
		})
	};
	function fGetStorage(){
		sHtmlLi = '';
		if( !storage.getItem('historySearch') ){
			storage.setItem('historySearch','[]');
		}

		var arr = JSON.parse( storage.getItem('historySearch') );
		mui.each(arr,function(index,item){
			sHtmlLi+=`
				<li class="mui-table-view-cell" data-title='${item}'>
					<a class="mui-navigate-right">
						<p>
							<i class='iconfont icon-shijian-xianxing'></i>${item}
						</p>
					</a>
				</li>
			`;
		})
		document.querySelector('.mui-table-view').innerHTML = sHtmlLi;
	}

	function fSetStorage(val){

		var arr = JSON.parse( storage.getItem('historySearch') );
		var arrFilter = arr.filter(function(item){
			return item.indexOf(val) < 0;
		})
		arrFilter.unshift( val );
		storage.setItem('historySearch',JSON.stringify(arrFilter));
	};

	mui('#historyList').on('tap','li',function(){
		var dataTitle = this.getAttribute('data-title');
		fOpenWindow(dataTitle);
	})
})