(function(g){var window=this;'use strict';var Kdb=function(a){g.W.call(this,{G:"div",K:"ytp-miniplayer-ui"});this.Mf=!1;this.player=a;this.S(a,"minimized",this.Jh);this.S(a,"onStateChange",this.KN)},Ldb=function(a){g.bR.call(this,a);
this.u=new g.MF(this);this.j=new Kdb(this.player);this.j.hide();g.tQ(this.player,this.j.element,4);a.cg()&&(this.load(),g.mo(a.getRootNode(),"ytp-player-minimized",!0));this.player.N("web_rounded_containers")&&g.mo(a.getRootNode(),"ytp-rounded-miniplayer",!0)};
g.v(Kdb,g.W);g.k=Kdb.prototype;
g.k.TK=function(){this.tooltip=new g.hV(this.player,this);g.H(this,this.tooltip);g.tQ(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Nc=new g.VR(this.player);g.H(this,this.Nc);this.Wi=new g.W({G:"div",K:"ytp-miniplayer-scrim"});g.H(this,this.Wi);this.Wi.Ca(this.element);this.S(this.Wi.element,"click",this.RF);var a=new g.W({G:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"\ub2eb\uae30"},W:[g.sN()]});g.H(this,a);a.Ca(this.Wi.element);this.S(a.element,"click",
this.Bo);a=new g.x2(this.player,this);g.H(this,a);a.Ca(this.Wi.element);this.Ut=new g.W({G:"div",K:"ytp-miniplayer-controls"});g.H(this,this.Ut);this.Ut.Ca(this.Wi.element);this.S(this.Ut.element,"click",this.RF);var b=new g.W({G:"div",K:"ytp-miniplayer-button-container"});g.H(this,b);b.Ca(this.Ut.element);a=new g.W({G:"div",K:"ytp-miniplayer-play-button-container"});g.H(this,a);a.Ca(this.Ut.element);var c=new g.W({G:"div",K:"ytp-miniplayer-button-container"});g.H(this,c);c.Ca(this.Ut.element);this.SU=
new g.BT(this.player,this,!1);g.H(this,this.SU);this.SU.Ca(b.element);b=new g.zT(this.player,this);g.H(this,b);b.Ca(a.element);this.nextButton=new g.BT(this.player,this,!0);g.H(this,this.nextButton);this.nextButton.Ca(c.element);this.Zi=new g.VU(this.player,this);g.H(this,this.Zi);this.Zi.Ca(this.Wi.element);this.Hc=new g.MT(this.player,this);g.H(this,this.Hc);g.tQ(this.player,this.Hc.element,4);this.HF=new g.W({G:"div",K:"ytp-miniplayer-buttons"});g.H(this,this.HF);g.tQ(this.player,this.HF.element,
4);a=new g.W({G:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"\ub2eb\uae30"},W:[g.sN()]});g.H(this,a);a.Ca(this.HF.element);this.S(a.element,"click",this.Bo);a=new g.W({G:"button",Ga:["ytp-miniplayer-replay-button","ytp-button"],X:{"aria-label":"\ub2eb\uae30"},W:[g.zN()]});g.H(this,a);a.Ca(this.HF.element);this.S(a.element,"click",this.W4);this.S(this.player,"presentingplayerstatechange",this.qd);this.S(this.player,"appresize",this.Bb);this.S(this.player,"fullscreentoggled",
this.Bb);this.Bb()};
g.k.show=function(){this.Ye=new g.Yn(this.Uu,null,this);this.Ye.start();this.Mf||(this.TK(),this.Mf=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Hc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Ye&&(this.Ye.dispose(),this.Ye=void 0);g.W.prototype.hide.call(this);this.player.cg()||(this.Mf&&this.Hc.hide(),this.player.loadModule("annotations_module"))};
g.k.ra=function(){this.Ye&&(this.Ye.dispose(),this.Ye=void 0);g.W.prototype.ra.call(this)};
g.k.Bo=function(){this.player.stopVideo();this.player.Oa("onCloseMiniplayer")};
g.k.W4=function(){this.player.playVideo()};
g.k.RF=function(a){if(a.target===this.Wi.element||a.target===this.Ut.element)g.iM(this.player.Eb())?this.player.pauseVideo():this.player.playVideo()};
g.k.Jh=function(){g.mo(this.player.getRootNode(),"ytp-player-minimized",this.player.cg())};
g.k.Ee=function(){this.Hc.uc();this.Zi.uc()};
g.k.Uu=function(){this.Ee();this.Ye&&this.Ye.start()};
g.k.qd=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.Bb=function(){g.fU(this.Hc,0,this.player.fb().getPlayerSize().width,!1);g.PT(this.Hc)};
g.k.KN=function(a){this.player.cg()&&(0===a?this.hide():this.show())};
g.k.Bc=function(){return this.tooltip};
g.k.ag=function(){return!1};
g.k.Sg=function(){return!1};
g.k.jk=function(){return!1};
g.k.ul=function(){return!1};
g.k.Ne=function(){return!1};
g.k.wC=function(){};
g.k.wp=function(){};
g.k.ox=function(){};
g.k.nm=function(){return null};
g.k.zE=function(){return null};
g.k.UA=function(){return null};
g.k.ek=function(){return new g.yl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.ov=function(a,b,c,d,e){var f=0,h=d=0,l=g.Ml(a);if(b){c=g.ho(b,"ytp-prev-button")||g.ho(b,"ytp-next-button");var m=g.ho(b,"ytp-play-button"),n=g.ho(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Kl(b,this.element),h=b.x,f=b.y-12):n&&(h=g.ho(b,"ytp-miniplayer-button-top-left"),f=g.Kl(b,this.element),b=g.Ml(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.fb().getPlayerSize().width;e=f+(e||0);l=g.de(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Mo=function(){};
g.k.il=function(){return!1};
g.k.xC=function(){};
g.k.Jy=function(){};
g.k.uq=function(){};
g.k.tq=function(){};
g.k.FD=function(){};
g.k.lr=function(){};g.v(Ldb,g.bR);g.k=Ldb.prototype;g.k.onVideoDataChange=function(){if(this.player.N("web_rounded_containers")&&this.player.getVideoData()){var a=16/9;a=this.player.getVideoAspectRatio()>a+.1;g.mo(this.player.getRootNode(),"ytp-rounded-miniplayer-extra-wide-video",a)}};
g.k.create=function(){g.bR.prototype.create.call(this);this.u.S(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.Ck=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.aR("miniplayer",Ldb);})(_yt_player);
