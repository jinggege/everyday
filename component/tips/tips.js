var Tips = function() {}
Tips.prototype = {
  /**
  *param options{ele,msg,direction,off}
  * ele:目标element
  * msg:显示内容
  * direction:出现位置(t:上方 r:右边 b:下方   l:左边  )
  * off:上,右,下,左方向上的偏移量 单位:px  [0,0,0,0]
  */
  show:function(options){
    var _this = this;
    var ele = options.ele;

    ele.on("mouseover",function(){
      if(ele.attr("hasTips")=="1"){
        return;
      }
      var tipId = "TIP_"+new Date().getTime();
      options.tipId = tipId;
      $("#"+tipId).remove();
      ele.append($(_this.createDom(tipId,options.msg)));
      ele.attr("hasTips",1);
      _this.setTipsDir(options);

      var tOut = setTimeout(function(){
        clearTimeout(tOut);
        $("#"+tipId).remove();
        ele.attr("hasTips",0);
      },500);

    });

  },

  setTipsDir:function(options){
    var tip = $("#"+options.tipId);
    var tW = Number(options.ele.css('width').replace("px",""));
    var tH = Number(options.ele.css('height').replace("px",""))-30;
    console.log(tH);

    switch(options.direction){
      case "t":
        tip.attr("style","top:-"+tH+"px;");
        break
      case "r":
        //tip.attr("style","top:-"+tH+"px;");
        break
      case "b":
        break
      case "l":
        break
    }
  },

  createDom:function(tipId,msg) {
    var html = "";
    html += '<div id="'+tipId+'" class="MJ-TIP-panel">';
      html +='<p class="MJ-TIP-label">'+msg+'</div>';
    html += '</div>';
    return html;
  },

  getEleWidth:function(ele){
      return Number(ele.css("width").replace("px",""));
  },

  getEleHeight:function(ele){
      return Number(ele.css("height").replace("px",""));
  },

  getEleLeft:function(ele){
    return Number(ele.css("left").replace("px",""));
  },
  getEleTop:function(ele){
    return Number(ele.css("top").replace("px",""));
  }


}
