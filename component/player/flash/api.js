var Api = (function(){
  function Api(){

  }
  Api.prototype = {

    init:function(){
        this.initDom();
        this.bindEvent();
    },

    initDom:function(){
        var swfVersionStr = "10.2.0";
      	var xiSwfUrlStr   = "playerProductInstall.swf";
      	var flashvars = {callbackName:"playerCallBack"};  //播放状态回调JS函数名  *播放器由此将播放状态传于JS
      	var params = {};
      	params.quality = "high";
      	params.bgcolor = "#ffffff";
      	params.allowscriptaccess = "always";
      	params.allowfullscreen = "true";
      	var attributes = {};
      	attributes.id  = "P_PLAYER";
      	attributes.name  = "P_PLAYER";
      	attributes.align = "left";
      	swfobject.embedSWF(
      	"LFplayer.swf", "ELE_player",
      	"100%", "100%",
      	swfVersionStr, xiSwfUrlStr,
      	flashvars, params, attributes);
    },


    getPlayerEle:function() {
        return $("#P_PLAYER")[0];
    },

    //播放
    startLive:function(){
      var _this = this;

      var initOptions = {};
      initOptions["appId"] = 101;
      initOptions["roomId"] = "60809";
      initOptions["ex"] ={};
      initOptions["ex"]["roomType"] = 2;
      initOptions["ex"]["showPlugs"] = 1;
      initOptions["ex"]["showSwitchRoom"] = 1;


      var startOptions = {};
        startOptions.token = $("#IN_token");
        startOptions.alias = $("#IN_alias");

      var playerEle = _this.getPlayerEle();

      var st = setInterval(function(){
          if(playerEle== null || playerEle== undefined){
            playerEle = _this.getPlayerEle();
            _this.showPlayerInfo("player 对象未取到!");

          }else{
            clearInterval(st);
            try{
              playerEle['init'](initOptions);
              playerEle['startLive'](startOptions);
            }catch(err){
              _this.showPlayerInfo("调用 init 接口失败!");
            }
          }


      },500);

    },


    //停播
    stopLive:function(){
        var playerEle = _this.getPlayerEle();
        var st = setInterval(function(){
          if(playerEle== null || playerEle== undefined){
            playerEle = _this.getPlayerEle();
            _this.showPlayerInfo("player 对象未取到!");

          }else{
            clearInterval(st);
            try{
              playerEle['stop']();
            }catch(err){
              _this.showPlayerInfo("调用 init 接口失败!");
            }
          }

        },500);

    },


    //展示送礼
    showGiftInfo:function(){
      var ge ={}
      ge["smallicon"]="http://static.youku.com/ddshow/img/lfgift/xxxy5_24_24.png";
      var giftInfo = {};
      giftInfo["n"] = "爬爬爬爬爬爬爬爬爬爬爬爬爬爬";
      giftInfo["tn"] = "啵啵";
      giftInfo["f"] = "http://r1.ykimg.com/05100000555AD8400A48156AD2047BA8";
      giftInfo["giftInfo"] =ge;
      giftInfo["q"] = Math.random()*10000;
      this.getPlayerEle()["setGiftInfo"](giftInfo);
    },

    //展示弹幕
    showBarrage:function(){
      var _this = this;
      setInterval(function(){
					var chatInfo = {};
					chatInfo["info"] = {};
					chatInfo.type = $("input[name='rb']:checked").val();
					chatInfo["info"]["m"] = $("#lf-chat-input").val();
					chatInfo["info"]["n"] = "天下第一胖";
					_this.getPlayerEle["setChatInfo"](chatInfo);

			 },100);

    },


    bindEvent:function(){
      var _this = this;
      $(".btn-live-play").on("click",function(){
          _this.startLive();
      });

      $(".btn-live-stop").on("click",function(){
          _this.stopLive();
      });

      $(".btn-barrage-send").on("click",function(){
          _this.showBarrage();
      });

    },


    showPlayerInfo:function(msg){
        $("#P_msg").text("调用 init 接口失败!");
    }


  }


return Api;

  })()
