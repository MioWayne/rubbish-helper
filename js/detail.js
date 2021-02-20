mui.init()
mui.plusReady(function () {
  var title = decodeURI(plus.webview.currentWebview().title);
  mui.ajax('http://apis.juhe.cn/rubbish/search',{
    data:{
      key:'dfe7a5dc90a9be32d35d15d5a06eb619',
      q:title
    },
    success:function(data){
      var result = data.result;
      var flag = false;
      //判断是否存在垃圾
      if(!result){
        mui('.detail-title')[0].innerHTML=`
          <p>"${title}"貌似不是垃圾哦,再试试吧^^</p>
          <h3>Σ(っ °Д °;)っ</h3>
        `;
        mui('.result')[0].innerHTML=``;
        return false;
      }		
      mui.each(result,function(index,item){
        //找到垃圾，排出本身
        if(item.itemName == title){
          mui('.detail-title')[0].innerHTML = `
            <p>${item.itemName}为</p>
            <h3>${item.itemCategory}</h3>
          `;
          flag = true;
        }else{
          mui('#result-ul')[0].innerHTML += `
          <li class="mui-table-view-cell">
            <a class="mui-navigate-right">
               <p>${item.itemName}</p>
               <p>${item.itemCategory}</p>
            </a>
          </li>
          `;
        }
      });
      if(!flag){
        mui('.detail-title')[0].innerHTML = `
          <p>为您找到了与"${title}"相关的垃圾</p>
        `;
      }
      
    },
  })
})