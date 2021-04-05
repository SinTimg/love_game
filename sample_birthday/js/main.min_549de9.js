var __reflect=this&&this.__reflect||function(e,t,n){e.__class__=t,n?n.push(t):n=[t],e.__types__=e.__types__?n.concat(e.__types__):n},__extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);n.prototype=t.prototype,e.prototype=new n},__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,s){function a(e){try{h(r.next(e))}catch(t){s(t)}}function o(e){try{h(r["throw"](e))}catch(t){s(t)}}function h(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,o)}h((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(i)throw new TypeError("Generator is already executing.");for(;h;)try{if(i=1,s&&(a=s[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(s,n[1])).done)return a;switch(s=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return h.label++,{value:n[1],done:!1};case 5:h.label++,s=n[1],n=[0];continue;case 7:n=h.ops.pop(),h.trys.pop();continue;default:if(a=h.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){h=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){h.label=n[1];break}if(6===n[0]&&h.label<a[1]){h.label=a[1],a=n;break}if(a&&h.label<a[2]){h.label=a[2],h.ops.push(n);break}a[2]&&h.ops.pop(),h.trys.pop();continue}n=t.call(e,h)}catch(r){n=[6,r],s=0}finally{i=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,s,a,o,h={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,n){function r(r){t.call(n,r,e)}if(RES.hasRes(e)){var i=RES.getRes(e);i?r(i):RES.getResAsync(e,r,this)}else RES.getResByUrl(e,r,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.shp=new egret.Shape,t.color=[4286143923,4294088989,4279749648,16711680],t.count=0,t.textTip=new egret.TextField,t.textContext=new egret.TextField,t.createView(),t}return __extends(t,e),t.prototype.createView=function(){var e=this;this.textField=new egret.TextField,this.addChild(this.textField),this.textField.x=80,this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center",this.addChild(this.textTip),this.textTip.x=50,this.textTip.y=350,this.textTip.width=550,this.textTip.height=200,this.textTip.textAlign="center",this.textTip.textFlow=[{text:"当你在等待第五个资源加载的时候，请不要着急关掉，然后调高你的手机媒体音量。接着阅读以下文字。",style:{size:30,strokeColor:6724044,stroke:2}}],this.addChild(this.textContext),this.textContext.x=50,this.textContext.y=500,this.textContext.width=550,this.textContext.height=300,this.textContext.textAlign="center",this.textContext.textFlow=[{text:"我妹翻我书包，挺认真看我笔记，我一脸老成的说：是不是看不懂?等你过几年就能接触了，妹妹似懂非懂点了点头。\n",style:{textColor:65535}},{text:"然后乖巧问我：哥，你这笔记能不能借我半天?\n",style:{textColor:65535}},{text:"我正疑问时，妹妹又说：我老师说我找不到比我写字还丑的人，明天给我老师瞧瞧看她服不服\n",style:{textColor:65535}},{text:"我猜你读完这段文字的时候，应该也差不多加载完了叭!\n",style:{textColor:65535}}],this.shp.graphics.beginFill(16711680,1),this.shp.graphics.drawRect(0,0,50,50),this.shp.graphics.endFill(),this.shp.anchorOffsetX=25,this.shp.anchorOffsetY=25,this.shp.x=50,this.shp.y=230,this.addChild(this.shp),this.addEventListener(egret.Event.ENTER_FRAME,function(t){e.shp.rotation+=3,e.shp.x<600?e.shp.x+=2:(e.shp.x=50,e.count>3&&(e.count=0),e.shp.graphics.clear(),e.shp.graphics.beginFill(e.color[e.count++],1),e.shp.graphics.drawRect(0,0,50,50),e.shp.graphics.endFill())},this)},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._nScaleBase=0,t.stars=new Array,t.starIndex=0,t.texts=[["白色","橙色","粉红","粉蓝"],["春天","夏天","秋天","冬天"],["大海","森林","草原","雪山"]],t.answers=new Array,t.starTextTopArray=["你问我有没有大男子主义？","你第一次加我的时候问我是在哪遇见了你","你5月26号的时候说过，你想去锦绣中华","你说你经常迷路","你知道你第一次主动找我是什么时候吗？","6月12号发生的事情还挺多的","有一天，你说杭姐哭得梨花带雨，你却在笑她","6月29号是你第一次来珠海","有一次，你2天没回复我了，我很担心","你说你想听那些很冒险的梦","还记得我第一次约你的那天吗"],t.starTextTop=new egret.TextField,t.starTextBelowArray=["我想对你的胃就应该霸道一点","是2018年5月1号的深圳北D7444列车B2入口的队伍里","我一直记得，幸运的是陪你去的是我，哈哈","我想以后可以一直做你的人肉导航","是2018年6月12号，那天珠海刮起了龙卷风","因为那天你和你姐吵架了，我很担心","因为那天是6月22号，是你毕业的日子","也是我第一次和你吃饭，第一次和你说上了话","那天是8月9号，温州刮起了台风，好像受灾很严重，我怕你是不是断网了，又没东西吃，胃又受不了了","从8月10号练了几天，还烦了杭姐听了一遍又一遍","是教师节的前俩天9月8号，那天你问我，是逛街还是看电影？我最后选择静静的看着你"],t.starTextBelow=new egret.TextField,t.nices=new Array,t.isShowComplete=!1,t.sound=new egret.Sound,t}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return e=t.sent(),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),RES.loadGroup("cake",0),[4,this.loadTheme()];case 2:return n.sent(),[4,RES.loadGroup("preload",0,e)];case 3:return n.sent(),this.stage.removeChild(e),[3,5];case 4:return t=n.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,n){var r=new eui.Theme("resource/default.thm.json",e.stage);r.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createGameScene=function(){this.sound=RES.getRes("Beautiful Life_mp3"),this.soundChannel=this.sound.play(),this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.startMusic,this),this.bg=this.createBitmapByName("bg_jpg"),this.addChild(this.bg),this.bg.x=this.stage.stageWidth/2-this.bg.width/2-50,this.bg.y=this.stage.$stageHeight/2-this.bg.height/2-200,this.bg.scaleX=this.bg.scaleY=1,this.showCake()},t.prototype.startMusic=function(){var e=this.soundChannel.position?this.soundChannel.position:0;this.soundChannel&&this.soundChannel.stop(),this.soundChannel=this.sound.play(e),this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.startMusic,this)},t.prototype.showCake=function(){var e=this,t=this.createBitmapByName("cake_png");this.addChild(t),t.x=500,t.y=500,t.scaleX=t.scaleY=.3;var n=egret.Tween.get(t);n.to({x:0},1e3),n.call(function(){var t=new egret.TextField;t.text="今天是你的生日，特意为你准备了一个小蛋糕，来吹个蜡烛叭",t.alpha=0,t.width=420,t.x=100,t.y=200,e.addChild(t);var n=egret.Tween.get(t);n.to({alpha:1},1e3),n.wait(1e3),n.call(function(){e.showTip();var t=RES.getRes("ballParticle_png"),n=RES.getRes("ballParticle_json");e.system=new particle.GravityParticleSystem(t,n),e.addChild(e.system),e.system.start(),e.system.x=e.stage.stageWidth/2,e.system.y=e.stage.$stageHeight/2-70,e.system.emitterX=0,e.system.emitterY=0,e.system.scaleX=e.system.scaleY=1.5,e.addEventListener(egret.TouchEvent.TOUCH_END,e.blowTheCandle,e)},e)},this)},t.prototype.showTip=function(){var e=this.createBitmapByName("finger_png");e.x=480,e.y=400,e.alpha=0,e.scaleX=e.scaleY=.3,this.addChild(e);var t=egret.Tween.get(e);t.to({alpha:.5},1e3),t.wait(1e3),t.to({alpha:0},1e3)},t.prototype.blowTheCandle=function(){var e=this;this.removeEventListener(egret.TouchEvent.TOUCH_END,this.blowTheCandle,this);var t=this.createBitmapByName("monkey_png");this.addChild(t),t.x=-200,t.y=350,t.scaleX=t.scaleY=.2;var n=egret.Tween.get(t);n.to({x:0},2e3);var r=new egret.Timer(3e3,1);r.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.stopFire,this),r.start(),n.wait(3e3),n.to({alpha:0},2e3),r=new egret.Timer(8e3,1),r.addEventListener(egret.TimerEvent.TIMER_COMPLETE,function(){var t=e.createBitmapByName("bg10_jpg");e.addChild(t),t.x=e.stage.stageWidth/2-t.width/2-50,t.y=e.stage.$stageHeight/2-t.height/2-200,t.scaleX=t.scaleY=1,t.alpha=0,e.changeStage(e.bg,t)},this),r.start()},t.prototype.stopFire=function(){var e=this.createBitmapByName("cloud_png");this.addChild(e),e.x=0,e.y=350,this.system.stop();var t=egret.Tween.get(e);t.to({alpha:0},2e3)},t.prototype.changeStage=function(e,t){var n=this,r=egret.Tween.get(e);r.to({alpha:0},2e3);var i=egret.Tween.get(t);i.to({alpha:1},2e3);var s=new egret.Timer(3e3,1);s.addEventListener(egret.TimerEvent.TIMER_COMPLETE,function(){n.showText()},this),s.start()},t.prototype.showText=function(){for(var e=this,t=this.starIndex-1,n=(egret.Tween.get(this.nices[t]),new Array),r=[[{text:"生日快乐，杉阿姨",style:{size:50,strokeColor:6724044,stroke:2}}]],i=[5e3,4e3,1e3,1e3],s=[450,550,650,750],a=-1,o=0;o<r.length;o++){var h=new egret.TextField;h.textFlow=r[o],h.width=420,h.alpha=0,h.x=50,h.y=50+s[o],n.push(h),this.addChild(h)}var l=function(){if(a++,a<r.length){var t=egret.Tween.get(n[a]);t.to({alpha:1},1500),0==a&&(t.wait(3e3),t.call(function(t){e.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){if(console.log(a),a<r.length-1){var e=egret.Tween.get(n[++a]);e.to({alpha:1},1500)}},e)},e)),t.wait(i[a]),t.call(l,e)}};l()},t.prototype.createBitmapByName=function(e){var t=new egret.Bitmap,n=RES.getRes(e);return t.texture=n,t},t.SCALE_BASE=.5,t.SCALE_RANGE=.5,t.NUM=11,t}(eui.UILayer);__reflect(Main.prototype,"Main");var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,n,r){function i(e){t.call(r,e)}function s(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,s,null),n.call(r))}var a=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){t.call(r,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(e,n){window.JSONParseClass.setData(e),egret.callLater(function(){t.call(r,generateEUI2)},a)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(e.indexOf(".exml")>-1){var o=e.split("/");o.pop();var h=o.join("/")+"_EUI.json";generateJSON.paths[e]?egret.callLater(function(){t.call(r,generateJSON.paths[e])},this):RES.getResByUrl(h,function(n){window.JSONParseClass.setData(n),egret.callLater(function(){t.call(r,generateJSON.paths[e])},a)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){t.call(r,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,s,null),RES.getResByUrl(e,i,this,RES.ResourceItem.TYPE_TEXT)},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);