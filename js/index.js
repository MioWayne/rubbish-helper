mui.init();
mui.plusReady(function () {
  //设置导航颜色
    plus.navigator.setStatusBarBackground('#F2F2F0');
  //语音识别
  mui('footer').on('tap','#speech',function(){
    var option = {
      engine:'iFly',
      lang:'zh-cn',
      punctuation:false
    }
    plus.speech.startRecognize(option,function(data){
      mui.openWindow({
        url:'detail.html' ,
        id:'detail', 	
        extras:{
          title:encodeURI(data)
        }
      })
    },function(){
      mui.toast('识别失败，再试试吧^^',{ duration:'2000', type:'div' });
    });
  });
  
  //跳转到垃圾百科
  mui('#class').on('tap','i',function(){
    mui.openWindow({
      url:'class.html',
      id:'class'
    });
  });
  
  //跳转到分类标识
  mui('#logo').on('tap','i',function(){
    mui.openWindow({
      url:'logo.html',
      id:'logo'
    });
  });
  
  //跳转到垃圾查找
  mui('#search').on('tap','i',function(){
    mui.openWindow({
      url:'search.html',
      id:'search'
    });
  });
})