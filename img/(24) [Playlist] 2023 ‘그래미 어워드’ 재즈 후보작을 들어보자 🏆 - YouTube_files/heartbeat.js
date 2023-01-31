(function(g){var window=this;'use strict';var Rcb=function(a,b){if(!Number.isFinite(a))return String(a);a=String(a);var c=a.indexOf(".");-1===c&&(c=a.length);var d="-"===a[0]?"-":"";d&&(a=a.substring(1));return d+(0,g.n5a)("0",Math.max(0,b-c))+a},Scb=function(){return{G:"svg",
X:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},W:[{G:"path",X:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}}]}},Tcb=function(){return{G:"svg",
X:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},W:[{G:"path",X:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"}}]}},Vcb=function(a){"number"===typeof a?(this.date=Ucb(a,0,1),M5(this,1)):g.La(a)?(this.date=Ucb(a.getFullYear(),a.getMonth(),a.getDate()),M5(this,a.getDate())):(this.date=new Date(g.Ra()),a=this.date.getDate(),
this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),M5(this,a))},Ucb=function(a,b,c){b=new Date(a,b,c);
0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b},M5=function(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))},N5=function(a,b){g.vQ.call(this,a,{G:"div",
K:"ytp-reminder-menu",X:{role:"menu",tabindex:"-1"},W:[{G:"div",K:"ytp-reminder-menu-contents",W:[{G:"div",K:"ytp-reminder-menu-items"}]}]},100,!0);this.buttonElement=b;this.j=[];this.menuPopupRenderer=void 0;this.items=this.Ea("ytp-reminder-menu-items");this.hide()},Xcb=function(a){var b=Wcb(a),c=0,d={};
for(c=0;c<b.length;d={iH:d.iH},c++){var e=a.j[c];e||(e=new g.W({G:"div",K:"ytp-reminder-menu-item",X:{role:"menuitem",tabindex:"0"},W:[{G:"div",K:"ytp-reminder-menu-item-icon",qa:"{{icon}}"},{G:"div",K:"ytp-reminder-menu-item-label",qa:"{{text}}"}]}),d.iH=c,e.Pa("click",function(l){return function(){var m=l.iH;a.yb();m=Wcb(a)[m];a.ma("reminderMenuItemClicked",m.serviceEndpoint||m.command)}}(d)),e.Ca(a.items),a.j[c]=e);
var f=b[c],h=null;switch(f.icon&&f.icon.iconType){case "NOTIFICATIONS":h=Scb();break;case "NOTIFICATIONS_NONE":h=Tcb();break;case "NOTIFICATIONS_ACTIVE":h=g.wN()}f=f.text?g.XB(f.text):"";e.update({icon:h,text:f})}for(;c<a.j.length;)a.j.pop().dispose();0===c?a.yb():a.Pc(a.buttonElement)},Wcb=function(a){return(a.menuPopupRenderer&&a.menuPopupRenderer.items||[]).reduce(function(b,c){c&&c.menuServiceItemRenderer&&b.push(c.menuServiceItemRenderer);
return b},[])},O5=function(a){g.W.call(this,{G:"div",
W:[{G:"button",Ga:["ytp-offline-slate-button","ytp-button"],W:[{G:"div",K:"ytp-offline-slate-button-icon",qa:"{{icon}}"},{G:"div",K:"ytp-offline-slate-button-text",qa:"{{text}}"}]}]});this.F=a;this.upcomingEventReminderButtonRenderer=this.toggleButtonRenderer=null;this.u=void 0;this.C=this.j=null;(this.buttonElement=this.Ea("ytp-offline-slate-button"))&&this.S(this.buttonElement,"click",this.D);this.hide()},Zcb=function(a,b,c){!a.toggleButtonRenderer&&b&&b.toggleButtonRenderer?a.toggleButtonRenderer=
b.toggleButtonRenderer:b&&b.toggleButtonRenderer||(a.toggleButtonRenderer=null);
!a.upcomingEventReminderButtonRenderer&&c&&g.Q(c,Ycb)?a.upcomingEventReminderButtonRenderer=g.Q(c,Ycb):c&&g.Q(c,Ycb)||(a.upcomingEventReminderButtonRenderer=null);P5(a)},P5=function(a){if(a.toggleButtonRenderer){var b=a.toggleButtonRenderer;
if(b.isToggled){var c=b.toggledText?g.XB(b.toggledText):"";a.update({text:c,icon:$cb(b.toggledIcon)})}else c=b.defaultText?g.XB(b.defaultText):"",a.update({text:c,icon:$cb(b.defaultIcon)});a.show()}else a.upcomingEventReminderButtonRenderer?(b=adb(a))?(c=b.text?g.XB(b.text):"",a.update({text:c,icon:$cb(b.icon)}),a.show()):a.hide():a.hide()},cdb=function(a,b,c){a.C||(a.C=new g.$y(a.F.V().wj));
var d={context:g.my(a.C.config_||g.ly())};g.SA()&&(d.context.clientScreenNonce=g.SA());d.params=c;g.az(a.C,b,d,{timeout:5E3,onSuccess:function(){a.upcomingEventReminderButtonRenderer&&a.u&&(a.upcomingEventReminderButtonRenderer.currentState=a.u,a.u=void 0)},
onError:function(){bdb(a)},
onTimeout:function(){bdb(a)}})},bdb=function(a){a.toggleButtonRenderer?(a.toggleButtonRenderer.isToggled=!a.toggleButtonRenderer.isToggled,P5(a)):a.upcomingEventReminderButtonRenderer&&(a.u=void 0,P5(a))},$cb=function(a){if(!a)return null;
switch(a.iconType){case "NOTIFICATIONS":return Scb();case "NOTIFICATIONS_NONE":return Tcb();case "NOTIFICATIONS_ACTIVE":return g.wN();default:return null}},adb=function(a){if(!a.upcomingEventReminderButtonRenderer)return null;
var b=a.u||a.upcomingEventReminderButtonRenderer.currentState;a=g.t(a.upcomingEventReminderButtonRenderer.states||[]);for(var c=a.next();!c.done;c=a.next())if((c=g.Q(c.value,ddb))&&c.state===b&&c.button&&g.Q(c.button,g.PJ))return g.Q(c.button,g.PJ);return null},edb=function(a){g.W.call(this,{G:"div",
K:"ytp-offline-slate",W:[{G:"div",K:"ytp-offline-slate-background"},{G:"div",K:"ytp-offline-slate-bar",W:[{G:"span",K:"ytp-offline-slate-icon",W:[{G:"svg",X:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},W:[{G:"path",X:{d:"M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"}},
{G:"circle",X:{cx:"12",cy:"12",r:"3"}}]}]},{G:"span",K:"ytp-offline-slate-messages",W:[{G:"div",K:"ytp-offline-slate-main-text",X:{"aria-label":"{{label}}"},qa:"{{mainText}}"},{G:"div",K:"ytp-offline-slate-subtitle-text",qa:"{{subtitleText}}"}]},{G:"span",K:"ytp-offline-slate-buttons"}]},{G:"button",Ga:["ytp-offline-slate-close-button","ytp-button"],W:[g.rN()]},{G:"button",Ga:["ytp-offline-slate-open-button","ytp-button"],W:[g.qN()]}]});var b=this;this.api=a;this.j=this.u=null;this.background=this.Ea("ytp-offline-slate-background");
this.B=this.Ea("ytp-offline-slate-bar");this.D=new g.$n(function(){g.io(b.B,"ytp-offline-slate-bar-fade")},15E3);
this.I=!1;this.C=new g.$n(function(){g.io(b.element,"ytp-offline-slate-collapsed")},15E3);
g.H(this,this.C);g.H(this,this.D);this.countdownTimer=new g.$n(this.tW,1E3,this);this.S(a,"presentingplayerstatechange",this.xW);this.S(a,"livestatedata",this.La);var c=this.Ea("ytp-offline-slate-close-button");this.S(c,"click",function(){g.io(b.element,"ytp-offline-slate-collapsed")});
c=this.Ea("ytp-offline-slate-open-button");this.S(c,"click",function(){g.ko(b.element,"ytp-offline-slate-collapsed")});
this.hide();c=this.getVideoData();c.getPlayerResponse()&&(c=c.getPlayerResponse().playabilityStatus)&&this.La(c);c=8===this.api.getPresentingPlayerType()&&!this.getVideoData().Sk;var d=8===this.api.getPresentingPlayerType();g.mo(this.element,"ytp-offline-slate-premiere-trailer",c);g.mo(this.element,"ytp-offline-slate-hide-background",d);a.N("web_rounded_containers")&&g.io(this.B,"ytp-rounded-offline-slate")},fdb=function(a,b,c){if(b){var d=null!=b.subtitleText?g.XB(b.subtitleText):"";
c=c?c:null!=b.mainText?g.XB(b.mainText):"";var e,f,h,l;b=null!=(l=null==(e=b.mainText)?void 0:null==(f=e.accessibility)?void 0:null==(h=f.accessibilityData)?void 0:h.label)?l:c;a.update({mainText:c,subtitleText:d,label:b});g.mo(a.element,"ytp-offline-slate-single-text-line",!d);g.mo(a.B,"ytp-offline-slate-bar-hidden",!c&&!d)}},Q5=function(a,b){var c=(0,g.R)();
this.module="heartbeat";this.trigger=a;this.j=b;this.B=c},ndb=function(a){g.bR.call(this,a);
var b=this;this.J=!1;this.T=0;this.D=!1;this.u=new g.$n(function(){var e=b.player.V(),f=b.getVideoData();R5(b)&&(gdb(b)?hdb(b,e,f):(idb(b),jdb(b,e,f)))},0);
this.j=this.heartbeatParams=null;this.C=!1;this.I=new g.Lh(1E3,6E4,1);this.sequenceNumber=0;this.offlineSlate=null;this.ea=new g.$y(void 0);this.Z=this.attestationResponse=void 0;this.utcOffsetMinutes=-(new Vcb).getTimezoneOffset();this.B=new g.MF(this);g.H(this,this.u);g.H(this,this.B);idb(this);kdb(this);this.B.S(a,"heartbeatparams",this.NB);this.B.S(a,"presentingplayerstatechange",this.RX);this.B.S(a,"videoplayerreset",this.SX);this.B.S(a,g.PB("heartbeat"),this.onCueRangeEnter);this.C&&this.j&&
ldb(this,this.j);var c=new g.NB(1E3,0x7ffffffffffff,{priority:1,namespace:"heartbeat"}),d=new g.NB(0x8000000000000,0x8000000000000,{id:"stream_end",priority:1,namespace:"heartbeat"});a.He([c,d]);mdb(this)},mdb=function(a){var b=a.getVideoData();
b.Mk&&(b=b.botguardData)&&g.VP(b,a.player.V())},idb=function(a){var b=a.getVideoData();
if(b.Mk&&(b=new g.sJa(b),g.tP.isInitialized()||3<=a.sequenceNumber)){var c=null;if(b.videoData.Xj){var d=g.tJa(b);if(d){c={};var e={};d=d.split("&");d=g.t(d);for(var f=d.next();!f.done;f=d.next())f=f.value.split("="),2===f.length&&(e[f[0]]=f[1]);e.r1a&&(c.webResponse=e.r1a);e.r1c&&(c.error=odb[Number(e.r1c)]);c.challenge=b.videoData.Xj}}a.attestationResponse=c||void 0}},gdb=function(a){var b=a.getVideoData();
if(!g.aK(a.getVideoData())||b.xQ)return!1;if(b.useInnertubeDrmService()&&b.Z){a="playready"===b.Z.flavor&&b.N("html5_innertube_heartbeats_for_playready");var c="widevine"===b.Z.flavor&&b.N("html5_innertube_heartbeats_for_widevine");b=g.LG(b.Z)&&b.N("html5_innertube_heartbeats_for_fairplay");return!(a||c||b)}return!0},pdb=function(a){if(gdb(a))return!!a.heartbeatParams;
var b=a.getVideoData();return g.aK(a.getVideoData())&&b.useInnertubeDrmService()&&!b.Pl&&!b.EH?!1:!!b.heartbeatToken},S5=function(a,b){if(!a.u.isActive()&&a.J){var c=a.getVideoData();
if(pdb(a)||c.isLivePlayback){if(void 0===b)if(a.D)if(a.C)b=7500;else{var d;b=(null==(d=a.heartbeatParams)?0:d.interval)?1E3*a.heartbeatParams.interval:a.getVideoData().pQ||6E4}else b=1E3;a.u.start(b)}}},tdb=function(a,b,c){b.vn&&(c=g.ci(c,{internalipoverride:b.vn}));
var d={cpn:b.clientPlaybackNonce};b.contextParams&&(d.context_params=b.contextParams);b.Ac&&(d.kpt=b.Ac);c=g.ci(c,d);g.cw(c,{format:"RAW",method:"GET",timeout:3E4,onSuccess:function(e){if(!a.u.isActive()&&R5(a)){a.I.reset();a.sequenceNumber++;e=e.responseText;var f=qdb(e);if(f){a.player.Oa("onHeartbeat",f);var h="ok"===f.status?f.stop_heartbeat?2:0:"stop"===f.status?1:"live_stream_offline"===f.status?0:-1}else h=(h=e.match(rdb))?"0"===h[1]?0:1:-1;sdb(a,f,e,h)}},
onError:function(e){R5(a)&&T5(a,!0,"net-"+e.status)},
onTimeout:function(){R5(a)&&T5(a,!0,"timeout")},
withCredentials:!0})},hdb=function(a,b,c){var d;
if(null!=(d=a.heartbeatParams)&&d.url){var e=g.ci(a.heartbeatParams.url,{request_id:g.fra()});c.Ka&&(e=g.ci(e,{vvt:c.Ka}),c.mdxEnvironment&&(e=g.ci(e,{mdx_environment:c.mdxEnvironment})));g.qI(b,c.oauthToken).then(function(f){f&&(e=g.ci(e,{access_token:f}));tdb(a,c,e)})}},R5=function(a){var b=a.getVideoData();
return 3===a.player.getPresentingPlayerType()||g.T(a.player.Eb(a.getPlayerType()),4)?!1:pdb(a)||b.isLivePlayback?!0:(U5(a),!1)},jdb=function(a,b,c){var d,e={videoId:c.videoId,
sequenceNumber:a.sequenceNumber,heartbeatServerData:null!=(d=a.oa)?d:c.heartbeatServerData};a.Z=a.attestationResponse;c.Mk&&(e.attestationResponse=a.Z);var f=g.XP(c),h;d=null!=(h=f.client)?h:{};d.utcOffsetMinutes=a.utcOffsetMinutes;e.context=f;e.cpn=c.clientPlaybackNonce;if(h="undefined"!==typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)d.timeZone=h;h={heartbeatChecks:[]};if(d=c.getPlayerResponse())c.heartbeatToken&&(e.heartbeatToken=c.heartbeatToken),(d=d.playabilityStatus)&&
(d=d.liveStreamability)&&d.liveStreamabilityRenderer&&h.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_LIVE_STREAM_STATUS");c.heartbeatToken&&h.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_YPC");if(g.jI(b)){h.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_UNPLUGGED");f=udb(a);d={};null!==f&&(d.clientPlayerPositionUtcMillis=f);var l,m;f=(null==(m=null==(l=a.player.vb())?void 0:g.rR(l))?void 0:m.freePreviewWatchedDuration)||0;0<f&&(d.freePreviewWatchedDuration={seconds:""+f});h.unpluggedParams=d}e.heartbeatRequestParams=
h;c.isLivePlayback&&(l=udb(a),null!==l&&(e.playbackState||(e.playbackState={}),e.playbackState.playbackPosition={utcTimeMillis:l}));a.player.ma("heartbeatRequest",e);var n={timeout:3E4,onSuccess:function(p){if(!a.u.isActive()&&R5(a)){var q=a.getVideoData(),r=q.Mk&&null==a.Z,w;q.Mk=!(null==(w=p.heartbeatAttestationConfig)||!w.requiresAttestation)||r;r=p.playabilityStatus;w=JSON.stringify(r)||"{}";p.authenticationMismatch&&a.player.xa("authshear",{});var x=-1;var z=p.playabilityStatus;z&&(a.player.Oa("onHeartbeat",
z),"OK"===z.status?x=p.stopHeartbeat?2:0:"UNPLAYABLE"===z.status?x=1:"LIVE_STREAM_OFFLINE"===z.status&&(x=0));a.sequenceNumber&&-1===x||a.I.reset();a.sequenceNumber++;p.heartbeatServerData&&(a.oa=p.heartbeatServerData);p.playerCueRanges&&0<p.playerCueRanges.length&&(q.cueRanges=p.playerCueRanges,q.ma("dataupdated"));sdb(a,r,w,x)}},
onError:function(p){R5(a)&&T5(a,!0,"net-"+p.status)},
onTimeout:function(){R5(a)&&T5(a,!0,"timeout")}};
g.qI(b,g.sK(c)).then(function(p){p&&(n.KQ="Bearer "+p);g.az(a.ea,"player/heartbeat",e,n)})},sdb=function(a,b,c,d){-1===d?(b="decode "+g.Ef(c,3),T5(a,!1,b)):2===d?(U5(a),a.D=!0):(a.T=0,a.u.stop(),1===d?(a.D=!1,a.player.Lg("heartbeat.stop",2,a.Ef(c)),g.nx("heartbeatActionPlayerHalted",vdb(b))):(a.D=!0,c=0,a.C&&b&&(c=ldb(a,b),a.player.ma("livestatedata",b)),c?S5(a,c):S5(a)))},ldb=function(a,b){var c=b.liveStreamability&&b.liveStreamability.liveStreamabilityRenderer,d=!(!c||!(c.switchStreamsImmediately||
c.transitionTiming&&"STREAM_TRANSITION_TIMING_IMMEDIATELY"===c.transitionTiming)),e=wdb(c),f=a.getVideoData(),h=a.player.Eb(a.getPlayerType()),l=h.Xc()&&!g.gK(f)&&!a.player.isAtLiveHead(a.getPlayerType());
if(f.V().C){var m,n=(null==(m=a.player.xe())?void 0:m.jc())||{};n.status=b.status||"";n.dvr=""+ +l;n["switch"]=""+ +d;n.ended=""+ +!(!c||!c.displayEndscreen);a.player.xa("heartbeat",n)}if(l&&!d)return e;d=c&&c.streamTransitionEndpoint&&g.Q(c.streamTransitionEndpoint,g.NI);if("STREAM_TRANSITION_TIMING_AT_STREAM_END"===(c&&c.transitionTiming))a.getVideoData().transitionEndpointAtEndOfStream=d;else{if(l=d)(l=d&&d.videoId)?(a.player.Wm(l,{autonav:"1"},void 0,!0,!0,d,g.sK(a.getVideoData())),a.uF("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE",
"HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT",b),l=!0):l=!1;if(l)return e}if("OK"===b.status.toUpperCase()){d=c&&c.broadcastId;l=a.j&&a.j.liveStreamability&&a.j.liveStreamability.liveStreamabilityRenderer&&a.j.liveStreamability.liveStreamabilityRenderer.broadcastId;m=d!==l&&null!=d;if(!f.hlsvp&&!f.tb||m){var p={video_id:f.videoId};f.vI&&(p.is_live_destination="1");a.player.N("web_player_heartbeat_request_watch_next")||(p.disable_watch_next=!0,p.raw_watch_next_response=f.watchNextResponse);
p.autonav_state=f.autonavState;p.oauth_token=f.oauthToken;p.force_gvi=f.un;p.wl=f.wl;f.J&&(p.vss_credentials_token=f.J,p.vss_credentials_token_type=f.Rj);f.Ka&&(p.vvt=f.Ka);c=void 0;f.hlsvp||f.tb?m&&(c=new Q5("broadcastIdChanged",l+","+d),a.uF("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_BROADCAST_ID_CHANGED",b)):(d&&(c=new Q5("formatsReceived",""+d)),a.uF("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_LIVE_STREAM_WENT_ONLINE",b));a.player.loadVideoByPlayerVars(p,
void 0,void 0,void 0,c);return e}a.player.gg("heartbeat",a.getPlayerType())}c&&c.displayEndscreen&&(a.offlineSlate?(a=a.offlineSlate,a.I=!0,a.sb&&a.api.Ly()):g.kM(h)&&(f=(null==(p=a.player.xe())?void 0:p.jc())||{},a.player.xa("hbse",f,!0),a.player.Ly(),a.player.Oa("onLiveMediaEnded",b)));return e},wdb=function(a){var b=0;
a&&a.pollDelayMs&&(a=Number(a.pollDelayMs))&&(b=a);return b},T5=function(a,b,c){var d=a.player.V();
if(!a.u.isActive()){a.u.stop();a.T++;var e=b?"heartbeat.net":"heartbeat.servererror";var f=a.getVideoData();if(f.vQ||b&&!g.aK(a.getVideoData())&&!pdb(a)&&f.isLivePlayback)f=!1;else{var h,l;(null==(l=a.heartbeatParams)?0:l.Fy)?h=a.heartbeatParams.Fy:h=f.tQ||5;f=a.T>=h}f?(g.nx("heartbeatActionPlayerHalted",b?{enforcedPolicyToHaltOnNetworkFailure:!0}:vdb()),(b=a.getVideoData())&&b.isLivePlayback?a.player.Lg(e,1,"\ub3d9\uc601\uc0c1 \uc7ac\uc0dd\uc774 \uc911\ub2e8\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
c):a.player.Lg(e,1,"\ub3d9\uc601\uc0c1\uc5d0 \ub77c\uc774\uc120\uc2a4\ub97c \ubd80\uc5ec\ud558\ub294 \uc911\uc5d0 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",c)):(d.N("html5_report_non_fatal_heartbeat_error")&&a.player.wq(e,{msg:c}),S5(a,a.I.getValue()),g.Mh(a.I))}},vdb=function(a){var b={enforcedPolicyToHaltOnNetworkFailure:!1};
a&&(b.serializedServerContext=a.additionalLoggingData);return b},U5=function(a){a.T=0;
a.u.stop();a.D=!1;a.sequenceNumber=0},kdb=function(a){var b=a.getVideoData(),c=a.player.V();
if(b.isLivePlayback)if(g.WG(c.B)){a.C=!0;a.J=!0;if(!g.YH(c)||g.jI(c))a.offlineSlate=new edb(a.player),g.H(a,a.offlineSlate),g.tQ(a.player,a.offlineSlate.element,4);(b=b.getPlayerResponse())&&b.playabilityStatus&&(a.j=b.playabilityStatus);var d;if("UNPLAYABLE"!==(null==(d=a.j)?void 0:d.status)||a.player.N("stop_heartbeat_on_unplayable_live_videos_killswitch"))a.j?(d=wdb(a.j.liveStreamability&&a.j.liveStreamability.liveStreamabilityRenderer))?S5(a,d):S5(a,7500):S5(a,1E3)}else a.player.Lg("html5.unsupportedlive",
2,"HTML5_NO_AVAILABLE_FORMATS_FALLBACK","nolive.1");else g.nb(b.Ba,"heartbeat")&&a.player.gg("heartbeat",a.getPlayerType())},udb=function(a){return(a=a.player.getProgressState(a.getPlayerType()).ingestionTime)&&isFinite(a)?""+Math.floor(1E3*a):null},qdb=function(a){try{var b=JSON.parse(a);
return null!=b?b:void 0}catch(c){}},odb=["ATTESTATION_ERROR_UNKNOWN",
"ATTESTATION_ERROR_VM_NOT_INITIALIZED","ATTESTATION_ERROR_VM_NO_RESPONSE","ATTESTATION_ERROR_VM_TIMEOUT","ATTESTATION_ERROR_VM_INTERNAL_ERROR"],xdb={oX:["BC","AD"],nX:["Before Christ","Anno Domini"],RZ:"JFMAMJJASOND".split(""),j_:"JFMAMJJASOND".split(""),NZ:"January February March April May June July August September October November December".split(" "),i_:"January February March April May June July August September October November December".split(" "),d_:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
l_:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),y_:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),n_:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),f_:"Sun Mon Tue Wed Thu Fri Sat".split(" "),m_:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SZ:"SMTWTFS".split(""),k_:"SMTWTFS".split(""),e_:["Q1","Q2","Q3","Q4"],ZZ:["1st quarter","2nd quarter","3rd quarter","4th quarter"],VW:["AM","PM"],jX:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],r_:["h:mm:ss a zzzz",
"h:mm:ss a z","h:mm:ss a","h:mm a"],kX:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],KO:6,z_:[5,6],LO:5};
xdb={oX:["BC","AD"],nX:["\uae30\uc6d0\uc804","\uc11c\uae30"],RZ:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),j_:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),NZ:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),i_:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),
d_:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),l_:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),y_:"\uc77c\uc694\uc77c \uc6d4\uc694\uc77c \ud654\uc694\uc77c \uc218\uc694\uc77c \ubaa9\uc694\uc77c \uae08\uc694\uc77c \ud1a0\uc694\uc77c".split(" "),n_:"\uc77c\uc694\uc77c \uc6d4\uc694\uc77c \ud654\uc694\uc77c \uc218\uc694\uc77c \ubaa9\uc694\uc77c \uae08\uc694\uc77c \ud1a0\uc694\uc77c".split(" "),
f_:"\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),m_:"\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),SZ:"\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),k_:"\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),e_:["1\ubd84\uae30","2\ubd84\uae30","3\ubd84\uae30","4\ubd84\uae30"],ZZ:["\uc81c 1/4\ubd84\uae30","\uc81c 2/4\ubd84\uae30","\uc81c 3/4\ubd84\uae30","\uc81c 4/4\ubd84\uae30"],VW:["\uc624\uc804","\uc624\ud6c4"],jX:["y\ub144 M\uc6d4 d\uc77c EEEE","y\ub144 M\uc6d4 d\uc77c",
"y. M. d.","yy. M. d."],r_:["a h\uc2dc m\ubd84 s\ucd08 zzzz","a h\uc2dc m\ubd84 s\ucd08 z","a h:mm:ss","a h:mm"],kX:["{1} {0}","{1} {0}","{1} {0}","{1} {0}"],KO:6,z_:[5,6],LO:5};g.k=Vcb.prototype;g.k.GR=xdb.KO;g.k.HR=xdb.LO;g.k.clone=function(){var a=new Vcb(this.date);a.GR=this.GR;a.HR=this.HR;return a};
g.k.getFullYear=function(){return this.date.getFullYear()};
g.k.getYear=function(){return this.getFullYear()};
g.k.getMonth=function(){return this.date.getMonth()};
g.k.getDate=function(){return this.date.getDate()};
g.k.getTime=function(){return this.date.getTime()};
g.k.getDay=function(){return this.date.getDay()};
g.k.getUTCFullYear=function(){return this.date.getUTCFullYear()};
g.k.getUTCMonth=function(){return this.date.getUTCMonth()};
g.k.getUTCDate=function(){return this.date.getUTCDate()};
g.k.getUTCDay=function(){return this.date.getDay()};
g.k.getUTCHours=function(){return this.date.getUTCHours()};
g.k.getUTCMinutes=function(){return this.date.getUTCMinutes()};
g.k.getTimezoneOffset=function(){return this.date.getTimezoneOffset()};
g.k.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
g.k.setFullYear=function(a){this.date.setFullYear(a)};
g.k.setYear=function(a){this.setFullYear(a)};
g.k.setMonth=function(a){this.date.setMonth(a)};
g.k.setDate=function(a){this.date.setDate(a)};
g.k.setTime=function(a){this.date.setTime(a)};
g.k.setUTCFullYear=function(a){this.date.setUTCFullYear(a)};
g.k.setUTCMonth=function(a){this.date.setUTCMonth(a)};
g.k.setUTCDate=function(a){this.date.setUTCDate(a)};
g.k.add=function(a){if(a.u||a.j){var b=this.getMonth()+a.j+12*a.u,c=this.getYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);a:{switch(b){case 1:var d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.days&&(c=this.getYear(),b=0<=c&&99>=c?-1900:0,a=new Date((new Date(c,this.getMonth(),this.getDate(),12)).getTime()+864E5*a.days),this.setDate(1),this.setFullYear(a.getFullYear()+
b),this.setMonth(a.getMonth()),this.setDate(a.getDate()),M5(this,a.getDate()))};
g.k.equals=function(a){return!(!a||this.getYear()!=a.getYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
g.k.toString=function(){var a=this.getFullYear(),b=0>a?"-":1E4<=a?"+":"";return[b+Rcb(Math.abs(a),b?6:4),Rcb(this.getMonth()+1,2),Rcb(this.getDate(),2)].join("")+""};
g.k.valueOf=function(){return this.date.valueOf()};var ydb=new g.Pp("addUpcomingEventReminderEndpoint");var zdb=new g.Pp("removeUpcomingEventReminderEndpoint");var Adb=new g.Pp("updateUpcomingEventReminderButtonStateCommand");var Ycb=new g.Pp("upcomingEventReminderButtonRenderer"),ddb=new g.Pp("upcomingEventReminderButtonStateRenderer");g.v(N5,g.vQ);N5.prototype.hide=function(){this.buttonElement&&this.buttonElement.removeAttribute("aria-haspopup");g.vQ.prototype.hide.call(this)};
N5.prototype.show=function(){this.buttonElement&&this.buttonElement.setAttribute("aria-haspopup","true");g.vQ.prototype.show.call(this)};
N5.prototype.ra=function(){g.bb(this.j);g.vQ.prototype.ra.call(this)};g.v(O5,g.W);
O5.prototype.D=function(){if(this.toggleButtonRenderer){var a=this.toggleButtonRenderer;a.isToggled?this.B(a.toggledServiceEndpoint):this.B(a.defaultServiceEndpoint);a.isToggled=!a.isToggled;P5(this)}else if(this.upcomingEventReminderButtonRenderer)if(this.j&&this.j.sb)this.j.yb();else{var b=adb(this);b&&this.B(b.serviceEndpoint||b.command);b=(null==(a=g.Q(null==b?void 0:b.command,g.gO))?void 0:a.commands)||[];a:{a=g.t(b);for(var c=a.next();!c.done;c=a.next()){var d=b=void 0;if(c=null==(b=g.Q(c.value,
g.B6a))?void 0:null==(d=b.popup)?void 0:d.menuPopupRenderer){a=c;break a}}a=void 0}this.j||(this.j=new N5(this.F,this.buttonElement),this.j.Ca(this.element),g.H(this,this.j),this.j.subscribe("reminderMenuItemClicked",this.B,this));b=this.j;b.menuPopupRenderer=a;Xcb(b)}};
O5.prototype.B=function(a){var b=g.Q(a,ydb),c=g.Q(a,zdb);if(a&&(b||c)){if(b){var d=b;var e="notification/add_upcoming_event_reminder"}else c&&(d=c,e="notification/remove_upcoming_event_reminder");if(e&&d&&d.params)for(cdb(this,e,d.params),a=g.t(d.commands||[]),b=a.next();!b.done;b=a.next())if((b=b.value)&&g.Q(b,Adb)){this.u=g.Q(b,Adb).state;P5(this);break}}};g.v(edb,g.W);g.k=edb.prototype;g.k.getPlayerType=function(){if(8===this.api.getPresentingPlayerType())return 1};
g.k.getVideoData=function(){return this.api.getVideoData(this.getPlayerType())};
g.k.La=function(a){var b,c,d=null==a?void 0:null==(b=a.liveStreamability)?void 0:null==(c=b.liveStreamabilityRenderer)?void 0:c.offlineSlate;if(d){this.u=a;b=d.liveStreamOfflineSlateRenderer;b.canShowCountdown?this.tW():fdb(this,b);var e,f,h,l;if(c=null==a?void 0:null==(e=a.liveStreamability)?void 0:null==(f=e.liveStreamabilityRenderer)?void 0:null==(h=f.offlineSlate)?void 0:null==(l=h.liveStreamOfflineSlateRenderer)?void 0:l.thumbnail){e=0;f=null;h=c.thumbnails;for(l=0;l<h.length;l++)h[l].width>
e&&(e=h[l].width||0,f=h[l].url);f&&(this.background.style.backgroundImage="url("+f+")")}else this.background.style.backgroundImage="";b.actionButtons||b.reminderButton?(this.j||(this.j=new O5(this.api),this.j.Ca(this.Ea("ytp-offline-slate-buttons")),g.H(this,this.j)),Zcb(this.j,b.actionButtons&&b.actionButtons[0],b.reminderButton)):this.j&&Zcb(this.j,null,null);this.u=a}else this.u=null;this.xW()};
g.k.xW=function(a){if(8===this.api.getPresentingPlayerType())var b=!0;else{var c=this.api.Eb(),d=this.getVideoData();b=d.isLivePlayback&&(g.kM(c)||g.T(c,2)||g.T(c,64));var e=2===d.autonavState&&g.T(c,2);c=c.Xc()&&!g.gK(d)&&!this.api.isAtLiveHead(void 0,!0);b=b&&!c&&!e}b&&this.u?this.sb?(null==a?0:g.wL(a,2))&&!this.getVideoData().Sk&&(g.ko(this.element,"ytp-offline-slate-collapsed"),this.C.stop(),g.ko(this.B,"ytp-offline-slate-bar-fade"),this.D.start()):(this.show(),this.C.start(),this.api.ma("offlineslatestatechange"),
this.I&&this.api.Ly()):this.sb&&(this.hide(),this.api.ma("offlineslatestatechange"))};
g.k.tW=function(){var a,b,c,d,e=null==(a=this.u)?void 0:null==(b=a.liveStreamability)?void 0:null==(c=b.liveStreamabilityRenderer)?void 0:null==(d=c.offlineSlate)?void 0:d.liveStreamOfflineSlateRenderer;e&&(a=Math.floor(g.Ra()/1E3),b=e.canShowCountdown&&Number(e.scheduledStartTime),!b||b<=a?(fdb(this,e),this.countdownTimer.stop()):(fdb(this,e,g.nO(b-a)),g.ao(this.countdownTimer)))};
g.k.ra=function(){this.countdownTimer.dispose();this.countdownTimer=null;g.W.prototype.ra.call(this)};Q5.prototype.u=function(a){return this.trigger&&a.trigger?this.module===a.module&&this.trigger===a.trigger&&this.j===a.j:!1};
Q5.prototype.isExpired=function(){return 6E4<(0,g.R)()-this.B};
Q5.prototype.toString=function(){return this.module+":"+this.trigger+":"+this.j};g.v(ndb,g.bR);g.k=ndb.prototype;g.k.ra=function(){U5(this);this.player.Qf("heartbeat");g.bR.prototype.ra.call(this)};
g.k.onCueRangeEnter=function(){this.J=!0;S5(this,2E3)};
g.k.NB=function(a){this.heartbeatParams=a;S5(this,2E3)};
g.k.RX=function(a){var b;8===this.player.getPresentingPlayerType()||"UNPLAYABLE"===(null==(b=this.j)?void 0:b.status)&&!this.player.N("stop_heartbeat_on_unplayable_live_videos_killswitch")||(g.T(a.state,2)||g.T(a.state,64)?(U5(this),this.C&&(this.J=!0,S5(this,1E3))):(g.T(a.state,1)||g.T(a.state,8))&&S5(this,2E3))};
g.k.SX=function(){3!==this.player.getPresentingPlayerType()&&S5(this,2E3)};
g.k.getPlayerType=function(){if(8===this.player.getPresentingPlayerType())return 1};
g.k.getVideoData=function(){return this.player.getVideoData(this.getPlayerType())};
g.k.Ck=function(a){switch(a){case 4:case 3:return!1}return!0};
g.k.uF=function(a,b,c){a={trigger:a,reason:b};c&&(a.serializedServerContext=c.additionalLoggingData);g.nx("heartbeatActionPlayerTransitioned",a)};
g.k.Ef=function(a){var b="LICENSE",c=qdb(a);if(c)return c.reason||g.JR[b]||"";(a=a.match(rdb))&&(a=Number(a[1]))&&(b=g.hDa(a));return g.JR[b]||""};
g.k.nB=function(){return!!this.offlineSlate&&this.offlineSlate.sb};
var rdb=/^GLS\/1.0 (\d+) (\w+).*?\r\n\r\n([\S\s]*)$/;g.aR("heartbeat",ndb);})(_yt_player);
