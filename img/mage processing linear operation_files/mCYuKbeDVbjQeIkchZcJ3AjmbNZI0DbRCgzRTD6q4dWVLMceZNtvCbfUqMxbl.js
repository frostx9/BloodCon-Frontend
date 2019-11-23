try{
var s_KOa=function(a){s_Bn.set(a.state,a);a.DY&&s_nOa.set(a.DY,a);s_Dn==a.state&&s_Kh(function(){s_JOa(a.state)})};s_P("sy5e");
var s_Kn=function(a){var b=a.state,c=a.DY,d=a.$i,e=a.kj,f=a.Ol;a=a.zM;s_H.call(this);this.state=b;this.DY=c;this.$i=d;this.kj=e;this.Ol=f;this.zM=a;this.$=[];s_KOa(this)};s_k(s_Kn,s_H);s_Kn.prototype.Rd=function(a,b,c,d){a=a+"\n"+b;s_qOa[a]={iKa:c,moa:void 0===d?0:d};this.$.push(a)};s_Kn.prototype.Ya=function(){s_Bn["delete"](this.state);this.DY&&s_nOa["delete"](this.DY);for(var a=s_b(this.$),b=a.next();!b.done;b=a.next())delete s_qOa[b.value]};

s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("sy5p");
var s_Yn=function(a){this.Pe=s_Cb(a,s_sb);this.$=-1;this.mD=!1};s_k(s_Yn,s_Ln);var s_Zn=function(){return new s_0Oa};s_a=s_Yn.prototype;s_a.play=function(){var a=this,b=s_j(null);this.Pe.forEach(function(c,d){b=0==d?a.A2a(c)||b:b.then(s_d(a.A2a,a,c))},this);return b};s_a.A2a=function(a){if(!this.mD)return this.$++,a.play()};s_a.finish=function(){-1==this.$&&(this.$=0);for(var a=this.$;a<this.Pe.length;a++)this.Pe[a].finish();this.mD=!0};
s_a.Vd=function(){return this.Pe.reduce(function(a,b){return a+b.Vd()},0)};s_a.getChildren=function(){return this.Pe};var s_0Oa=function(){s_WOa.apply(this,arguments)};s_k(s_0Oa,s_WOa);s_0Oa.prototype.create=function(a){return new s_Yn(a)};

s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("sy5q");
var s_1Oa=function(a,b){return{duration:a,easing:"cubic-bezier(.4,0,.2,1)",delay:b||0}},s_2Oa=function(a,b){s_Tn.call(this);this.Ba=b;this.wa=a;this.Aa=s_df("DIV",{"class":"fp-f"});this.$=s_df("DIV",{"class":"fp-f"})};s_k(s_2Oa,s_Tn);s_a=s_2Oa.prototype;s_a.measure=function(){};
s_a.Cc=function(){var a=0==this.Ba;this.$.style.opacity=a?.001:.6;this.$.style.background="#000";this.$.style.pointerEvents="none";s_kf(this.$,this.wa);this.Aa.style.background="#fff";this.Aa.style.pointerEvents="none";s_kf(this.Aa,this.wa);this.wa.style.opacity=a?.001:1};
s_a.Be=function(){return 0==this.Ba?new s_Yn([new s_Wn([(new s_Mn(this.$,s_3Oa)).opacity(.001,.6),s_YOa(s_Nn(new s_Mn(this.Aa,s_4Oa),1),s_5Oa).scale(0,0,1,1,1,1)]),(new s_Mn(this.wa,s_6Oa)).opacity(.001,1)]):new s_Yn([(new s_Mn(this.wa,s_6Oa)).opacity(1,.001),new s_Wn([(new s_Mn(this.$,s_3Oa)).opacity(.6,.001),s_YOa((new s_Mn(this.Aa,s_4Oa)).opacity(1,.001),s_7Oa).scale(1,1,1,0,0,1)])])};s_a.Vd=function(){return 1500};s_a.Nd=function(){this.wa.style.opacity="";s_nf(this.Aa);s_nf(this.$)};
var s_3Oa=s_1Oa(333),s_6Oa=s_1Oa(166),s_4Oa=s_1Oa(333),s_5Oa=s_1Oa(166),s_7Oa=s_1Oa(166,167),s_8Oa=function(a,b){return(new s_2Oa(b,0)).play()},s_9Oa=function(a){return(new s_2Oa(a,1)).play()};

s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("sy5r");

s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("sy5u");

s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("sy5w");
var s_bPa=function(a){s_v(this,a,0,-1,s_aPa,null)};s_l(s_bPa,s_u);var s_2n=function(a){s_v(this,a,0,-1,null,null)};s_l(s_2n,s_u);var s_aPa=[5];s_2n.prototype.getName=function(){return s_(this,1)};s_2n.prototype.getValue=function(){return s_(this,2)};s_2n.prototype.setValue=function(a){return s_z(this,2,a)};s_2n.prototype.If=function(){return null!=s_(this,2)};s_bPa.prototype.Lm=function(){return s_(this,10)};s_bPa.prototype.sj=function(a){return s_z(this,10,a)};
s_bPa.prototype.qw=function(){s_z(this,10,void 0)};

s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("sy5x");

s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("sy6e");

s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("sy1ei");
var s_TUg=function(a,b,c){var d=this;this.wa=a;this.Ca=b;this.Fa=s_Wi(this.Ca,"placeholder")||"";this.Ba=c;this.Da=!1;this.Ea=0;this.Aa="";this.$=new webkitSpeechRecognition;this.$.interimResults=!0;this.$.onstart=function(){s_f(d.wa.el(),{data:{voice:"onstart"}});d.wa.setStyle("color","#1a73e8");d.Da=!0;s_Xi(d.Ca,"placeholder","Listening\u2026")};this.$.onend=function(){s_f(d.wa.el(),{data:{voice:"onend"}});d.wa.setStyle("color","#80868b");d.Da=!1;s_Xi(d.Ca,"placeholder",d.Fa);d.Ba&&d.Ba()};this.$.onresult=
function(e){var f="",g=e.results;for(e=e.resultIndex;e<g.length;++e){var h=g.item(e),k=h.item(0).transcript;if(!d.Aa&&!f||" "==k[0])h.isFinal?d.Aa+=s_SUg(k):f+=k}f=d.Aa+f;d.Ea=f.length;s_Vi(d.Ca,f);d.Ba&&d.Ba()};this.$.onspeechstart=function(){s_f(d.wa.el(),{data:{voice:"onspeechstart"}})}},s_SUg=function(a){return a.replace(/\S/,function(b){return b.toUpperCase()}).replace(/^\s/,"\n")},s_UUg=function(a){a.Da?(a.$.abort(),s_f(a.wa.el(),{data:{voice:"abort"}})):(a.Aa="",a.$.lang="en-IN",a.$.start(),
s_f(a.wa.el(),{data:{voice:"start",lang:"en-IN"}}))};

s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("sy1ek");
var s_$Ug=s_R("ai3dq");
var s_aVg=function(a){s_h.call(this,a.Pa);this.Ba=this.Ha("FKqQ4c");this.Aa=this.Ha("pvYAwd");this.Aa.toggle(!1);this.$=!1;this.wa=null};s_k(s_aVg,s_h);s_aVg.Ka=s_h.Ka;s_aVg.prototype.iT=function(){this.Ba.empty()};s_X(s_aVg.prototype,"onmCee",function(){return this.iT});s_Y(s_$Ug,s_aVg);

s_g().$();

}catch(e){_DumpException(e)}
try{
var s_bVg=function(a){return null==a.wa?!1:s_w(a.wa,1)},s_cVg=function(a){return null==a.wa?0:s_x(a.wa,2,0)},s_dVg=function(a){a.wa&&(s_Mh(a.wa),a.wa=null)},s_eVg=function(a,b){if(!a.$){a.iT();a.Aa.toggle(!0);a.$=!0;var c=new Map;c.set("question",b);c.set("q",s_Tg().get("q"));s_ra(s_dm(a.Ba.el(),c),function(){a.Aa.toggle(!1);a.$=!1})}},s_fVg=function(a,b){a.$||(16>b.length?(a.iT(),s_dVg(a)):(s_dVg(a),a.wa=s_N(function(){return s_eVg(a,b)},500)))};s_P("sy1el");
var s_gVg=function(a){s_v(this,a,0,-1,null,null)};s_l(s_gVg,s_u);s_gVg.prototype.Eb="Se4zwb";
var s_hVg=function(a){s_v(this,a,0,-1,null,null)};s_l(s_hVg,s_u);s_hVg.prototype.Eb="AvUond";s_hVg.prototype.getError=function(){return s_(this,1)};s_hVg.prototype.Jj=function(a){return s_z(this,1,a)};s_hVg.prototype.kv=function(){return null!=s_(this,1)};
var s_iVg={Bqa:s_TUg},s_76=function(a){s_h.call(this,a.Pa);this.Fa=null;this.Ea=!1;this.Ja=!0;this.Wa=a.service.yC;this.Ua=!1;this.Da=this.Oa=null;this.La=a.Jb.aH;this.Ca=null;this.Ia=!1;this.Xa=this.getData("qiie").Lc(!1)};s_k(s_76,s_h);s_76.Ka=function(){return{service:{yC:s_Ok},Jb:{aH:s_Lk}}};s_76.prototype.openDialog=function(){};s_76.prototype.kt=function(){var a=this;this.Oa||(this.Oa=s_dm(this.Ha("r7zSJd").el()));this.Oa.then(function(){a.openDialog()})};
var s_lVg=function(a){a.$=a.Ha("B7I4Od");a.$.show();a.Aa=a.Ha("tn5pM");a.Aa.hide();var b=a.Sa("sI3MNd");1==b.size()&&(window.webkitSpeechRecognition?a.Ca=new s_iVg.Bqa(b.zg(),a.$,function(){s_jVg(a);s_kVg(a)}):b.zg().hide());a.Ba=a.Ha("ZFcF4");a.wa=a.Ha("RhT9Jd").el();s_Vi(a.$,"");a.$.focus();a.Ia=!0;s_jVg(a);a.Ja=!0;a.Fa=null;a.Ua=!0;b=a.Sa("tM0tRc");b.size()&&(a.Da=s_i().yb(b.el()),a.Da.then(function(c){c.iT()}))};s_a=s_76.prototype;
s_a.IEa=function(){var a=this;!this.Ea&&this.Ua&&(this.Xa&&s_kVg(this),s_jVg(this),this.Da&&this.Da.then(function(b){s_fVg(b,s_Gl(a.$).trim())}))};
s_a.cSb=function(){var a=this,b=new Map;b.set("question",s_Gl(this.$).trim());b.set("q",s_Tg().get("q"));b.set("autocorrect",this.Ja);b.set("copia_triggered",s_bVg(this.La));b.set("copia_exp_id",s_cVg(this.La));b.set("client_config",s_Gd(unescape(encodeURIComponent(this.La.Ba.Ic())),2));b.set("voice_fraction",s_mVg(this));this.Fa&&b.set("suggested_text",this.Fa);this.Ea=!0;s_Xi(this.Ba,"disabled","disabled");this.Wa.fetch("ugc_ms_sq",b).then(function(c){c=new s_hVg(c);a.Ja=!1;a.Ea=!1;a.hb=c;s_Yi(a.Ba,
"disabled");if(c.kv())switch(c.getError()){case 1:s_nVg(a.Ha("F0Oo3b").el());break;case 2:s_nVg(a.Ha("u4Qk1d").el());break;case 3:s_nVg(a.Ha("ejdPae").el());break;case 4:s_oVg(a,c);break;default:s_nVg(a.Ha("e8A2Qc").el())}else a.zy()},function(){a.Ea=!1;s_Yi(a.Ba,"disabled");s_i().yb(a.Ha("e8A2Qc").el()).then(function(c){c.show()})});s_f(this.Ba.el())};s_a.closeDialog=function(){this.Pg().then(function(a){a.close()})};s_a.$T=function(){this.$.focus()};
s_a.p4b=function(a){var b=this;s_f(a.targetElement.el());s_e([new s_M(this.wa,"hide")]);s_i().yb(this.wa).then(function(c){c.close();b.Aa.hide();b.$.show()})};s_a.CVb=function(a){var b=this;s_f(a.targetElement.el());s_e([new s_M(this.wa,"hide")]);s_pVg(this).then(function(c){c.close();b.Aa.hide();s_Vi(b.$,s_(s_A(b.hb,s_gVg,2),1));b.$.show()})};s_a.Pg=function(){return s_i().yb(this.Ha("Sx9Kwc").el())};
var s_jVg=function(a){s_Xi(a.Ba,"disabled",!s_Gl(a.$).trim())},s_kVg=function(a){var b=s_Gl(a.$).trim(),c;if(c=a.Ia&&0!=b.length)c=b[b.length-1],c=!("."==c||"?"==c||"!"==c);c&&(s_Vi(a.$,b+"?"),a.$.el().selectionEnd=a.$.el().selectionEnd-1)},s_mVg=function(a){var b=s_Gl(a.$).length;return 0!=b&&a.Ca?Math.round(100*Math.min(a.Ca.Ea,b)/b):0},s_nVg=function(a){s_i().yb(a).then(function(b){b.show()})},s_oVg=function(a,b){s_e([new s_M(a.wa,"show")]);a.Fa=s_(s_A(b,s_gVg,2),1);s_pVg(a).then(function(c){c.og();
a.$.hide();a.Aa.show();c=a.Aa.el();var d=s_4ab(s_A(s_A(b,s_gVg,2),s_Is,3));s_0c(c,d)})};s_76.prototype.zy=function(){};s_76.prototype.Pu=function(){};var s_pVg=function(a){return s_i().yb(a.wa)};s_76.prototype.OKa=function(){this.Ca&&s_UUg(this.Ca)};s_76.prototype.hW=function(a){8==a.event.keyCode&&(this.Ia=!1)};s_X(s_76.prototype,"mAamLc",function(){return this.hW});s_X(s_76.prototype,"XVYTM",function(){return this.OKa});s_X(s_76.prototype,"uULtK",function(){return this.Pu});
s_X(s_76.prototype,"S1suLe",function(){return this.CVb});s_X(s_76.prototype,"qoaWqf",function(){return this.p4b});s_X(s_76.prototype,"FAYxBd",function(){return this.$T});s_X(s_76.prototype,"r9DEDb",function(){return this.closeDialog});s_X(s_76.prototype,"uIfyde",function(){return this.cSb});s_X(s_76.prototype,"G73uL",function(){return this.IEa});s_X(s_76.prototype,"kkE2Fe",function(){return this.kt});s_Y(s_jza,s_76);

s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("CYuKbe");


s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("sy1ee");
var s_16=function(a){s_h.call(this,a.Pa);this.Aa=a.Jb.aH;this.$="";this.wa=null};s_k(s_16,s_h);s_16.Ka=function(){return{Jb:{aH:s_Lk}}};var s_GUg=function(a){a.wa||(a.wa=s_dm(a.Ha("kKYS5d").el()));return a.wa};s_16.prototype.kt=function(){};s_16.prototype.m6=function(){};s_16.prototype.jT=function(){};s_16.prototype.EK=function(){};var s_HUg=function(a,b){a.$=b};s_16.prototype.$z=function(){return this.$};var s_IUg=function(a){a.Aa.notify(s_pUg,a.$)};s_16.prototype.Pg=function(){return s_i().yb(this.Ha("Sx9Kwc").el())};
var s_JUg=function(a){var b=new Map;b.set("question_stanza_id",a.$);b.set("all_answers","true");return b};s_16.prototype.tka=function(){};s_16.prototype.Pu=function(){};s_X(s_16.prototype,"uULtK",function(){return this.Pu});s_X(s_16.prototype,"bpxabc",function(){return this.EK});s_X(s_16.prototype,"Tz47we",function(){return this.jT});s_X(s_16.prototype,"mDlMyb",function(){return this.m6});s_X(s_16.prototype,"kkE2Fe",function(){return this.kt});s_Rl(s_16);

s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("sy1ef");
var s_KUg=function(a){s_Q.call(this,a.Pa)};s_k(s_KUg,s_Q);s_KUg.Ka=s_Q.Ka;var s_LUg=function(){s_Og("qid","",!0)},s_26=function(){s_Og("ugcqalb","",!0)};s_4i(s_Mk,s_KUg);

s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("RCgzR");
var s_MUg=function(a){s_Q.call(this,a.Pa)};s_k(s_MUg,s_Q);s_MUg.Ka=s_Q.Ka;var s_NUg=function(){var a=document.body;s_0f(a,"overflowState",s_6g(a,"overflow"));s_J(a,"overflow","hidden")},s_OUg=function(){var a=document.body,b=s_c(a,"overflowState")||"";s_J(a,"overflow",b);s_2f(a,"overflowState")};s_4i(s_Nk,s_MUg);

s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("DVbjQe");
var s_36=function(a){s_16.call(this,a.Pa)};s_k(s_36,s_16);s_36.Ka=function(){return{service:{scroll:s_Nk,BWa:s_Mk}}};s_a=s_36.prototype;s_a.openDialog=function(){var a=this;this.Pg().then(function(c){c.OA();s_NUg()});var b=s_JUg(this);s_dm(this.Ha("GsJ1Oe").el(),b).then(function(){a.Pg().then(function(c){c.qg();s_i().yb(a.Ha("GsJ1Oe").el()).then(function(d){d=d.$z();a.$=d},function(){})})},function(){a.Pg().then(function(c){c.qg()})})};
s_a.jT=function(a){var b=this;s_82()||(this.Pg().then(function(c){c.close();s_IUg(b)}),s_26(),s_LUg(),s_f(a.targetElement.el(),{data:{qid:this.$z()}}))};s_a.m6=function(){var a=this;s_82()||(s_26(),s_LUg(),this.Pg().then(function(b){b.close();s_IUg(a)}))};s_a.EK=function(){if(s_82())return!1;s_26();s_LUg();this.Pg().then(function(a){a.close()});return!0};s_a.Pq=function(){s_26();s_LUg();s_OUg();this.notify(s_BUg)};s_a.Pu=function(){"ugcaa"==s_Qg("ugcqalb")&&this.tka()};
s_a.tka=function(){var a=this;s_HUg(this,s_Qg("qid")||"");s_GUg(this).then(function(){a.openDialog()})};s_a.kt=function(a){var b=this;this.$=a.data;s_Og("ugcqalb","ugcaa",!0);s_Og("qid",this.$z(),!0);s_GUg(this).then(function(){b.openDialog()})};s_X(s_36.prototype,"kkE2Fe",function(){return this.kt});s_X(s_36.prototype,"uULtK",function(){return this.Pu});s_X(s_36.prototype,"g8GAr",function(){return this.Pq});s_X(s_36.prototype,"bpxabc",function(){return this.EK});s_X(s_36.prototype,"mDlMyb",function(){return this.m6});
s_X(s_36.prototype,"Tz47we",function(){return this.jT});s_Y(s_cza,s_36);

s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("IkchZc");
var s_jld=s_R("IkchZc");
var s_kld=function(a){s_h.call(this,a.Pa)};s_k(s_kld,s_h);s_kld.Ka=s_h.Ka;s_kld.prototype.navigate=function(a){var b=a.targetElement.el();a=b.getAttribute("target");var c;if(c=b.href){var d=s_Kj(b.href);null!=d.wa.match("google")&&"/imgres"==d.getPath()&&(b=s_ea(b),d=new s_Qa,s_Fh(d,b),c=c.replace(/&vet=[^&]*|$/,"&vet="+s_Ra(d)))}else c=null;c&&("_blank"==a?s_6c(c,void 0,s_lc("_blank")):s_6c(c,void 0,s_lc("_self")))};s_X(s_kld.prototype,"RySO6d",function(){return this.navigate});s_Y(s_jld,s_kld);

s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("sy1ej");
var s_VUg=function(a){s_v(this,a,0,-1,null,null)};s_l(s_VUg,s_u);s_VUg.prototype.Eb="zPzIne";s_VUg.prototype.getError=function(){return s_(this,1)};s_VUg.prototype.Jj=function(a){return s_z(this,1,a)};s_VUg.prototype.kv=function(){return null!=s_(this,1)};
var s_WUg={Bqa:s_TUg},s_66=function(a){s_h.call(this,a.Pa);this.Da=this.wa=this.Ba=this.Aa=this.$=null;this.Ea=!1;this.Ja=a.service.yC;this.Ia=!1;this.Ca=null};s_k(s_66,s_h);s_66.Ka=function(){return{service:{yC:s_Ok}}};s_66.prototype.kt=function(){};var s_XUg=function(a){return s_dm(a.Ha("R3qzdc").el(),new Map)};s_66.prototype.openDialog=function(){};s_66.prototype.closeDialog=function(){this.Pg().then(function(a){a.close()})};
var s_YUg=function(a){var b=new Map;b.set("question_stanza_id",a.wa);b.set("all_answers","false");return b};s_66.prototype.IEa=function(){!this.Ea&&this.Ia&&s_ZUg(this)};var s_ZUg=function(a){0==s_Gl(a.$).trim().length?s_Xi(a.Aa,"disabled","disabled"):s_Yi(a.Aa,"disabled")};
s_66.prototype.$Rb=function(){var a=this;if(s_Gl(this.$).trim()){var b=new Map;b.set("answer",s_Gl(this.$).trim());b.set("q",s_Tg().get("q"));b.set("voice_fraction",s__Ug(this));this.Da?b.set("stanza_id",this.Da):b.set("parent_stanza_id",this.wa);s_Xi(this.Aa,"disabled","disabled");this.Ea=!0;this.Ja.fetch("ugc_ms_sa",b).then(function(c){c=new s_VUg(c);a.Ea=!1;c.kv()?s_0Ug(a,c.getError()):a.zy()},function(){a.Ea=!1;s_Yi(a.Aa,"disabled");s_i().yb(a.Ha("e8A2Qc").el()).then(function(c){c.show()})});
s_f(this.Aa.el(),{data:{qid:this.wa}})}};s_66.prototype.zy=function(){};var s__Ug=function(a){var b=s_Gl(a.$).length;return 0!=b&&a.Ca?Math.round(100*Math.min(a.Ca.Ea,b)/b):0};s_66.prototype.Pg=function(){return s_i().yb(this.Ha("Sx9Kwc").el())};
var s_1Ug=function(a,b){a.wa=b},s_2Ug=function(a,b){a.Aa=b},s_3Ug=function(a){a.Ba&&(window.webkitSpeechRecognition?a.Ca=new s_WUg.Bqa(a.Ba,a.$,function(){s_ZUg(a)}):a.Ba.hide());a.Ia=!0},s_0Ug=function(a,b){switch(b){case 1:a=a.Ha("F0Oo3b").el();break;case 2:a=a.Ha("u4Qk1d").el();break;default:a=a.Ha("e8A2Qc").el()}s_i().yb(a).then(function(c){c.show()})};s_66.prototype.Pu=function(){};s_66.prototype.uka=function(){};s_66.prototype.OKa=function(){this.Ca&&s_UUg(this.Ca)};
s_X(s_66.prototype,"XVYTM",function(){return this.OKa});s_X(s_66.prototype,"uULtK",function(){return this.Pu});s_X(s_66.prototype,"TWHySd",function(){return this.$Rb});s_X(s_66.prototype,"G73uL",function(){return this.IEa});s_X(s_66.prototype,"r9DEDb",function(){return this.closeDialog});s_X(s_66.prototype,"kkE2Fe",function(){return this.kt});s_Y(s_gza,s_66);

s_g().$();

}catch(e){_DumpException(e)}
try{
var s_4Ug=function(a,b){a.Da=b},s_5Ug=function(a,b){a.$=b},s_6Ug=function(a,b){a.Ba=b};s_P("J3Ajmb");
var s_7Ug=function(a){s_66.call(this,a.Pa)};s_k(s_7Ug,s_66);s_7Ug.Ka=function(){return{service:{scroll:s_Nk,BWa:s_Mk}}};s_a=s_7Ug.prototype;
s_a.openDialog=function(){var a=this;this.Fa=this.Ha("IqGAOb");this.La=this.Ha("pHkpRc");s_2Ug(this,this.Ha("ZFcF4"));var b=this.Ha("EsVykb");this.Pg().then(function(d){d.OA();s_NUg()},function(){});var c=this.Ha("UCBLxb");s_dm(b.el(),s_YUg(this)).then(function(){var d=s_Ml(a,b,"alJ6Oc");0<d.size()?(s_5Ug(a,s_Ml(a,b,"B7I4Od").ze(0)),s_6Ug(a,s_Ml(a,b,"sI3MNd").zg()),s_4Ug(a,d.ze(0).getData("answerStanzaId").kb()),s_3Ug(a)):c.hide();a.Pg().then(function(e){e.qg();0<d.size()&&(a.$.focus(),s_ZUg(a))},
function(){})},function(){c.hide();a.Pg().then(function(d){d.qg()},function(){})})};s_a.zy=function(){this.Fa.hide();this.La.show();s_26();s_LUg()};s_a.Pq=function(){s_OUg();s_26();s_LUg()};s_a.Pu=function(){"ugcaq"==s_Qg("ugcqalb")&&this.uka()};s_a.uka=function(){var a=this;s_1Ug(this,s_Qg("qid")||"");s_XUg(this).then(function(){a.openDialog()})};s_a.kt=function(a){var b=this;this.wa=a.data;s_Og("ugcqalb","ugcaq",!0);s_Og("qid",this.wa||"",!0);s_XUg(this).then(function(){b.openDialog()})};
s_X(s_7Ug.prototype,"kkE2Fe",function(){return this.kt});s_X(s_7Ug.prototype,"uULtK",function(){return this.Pu});s_X(s_7Ug.prototype,"g8GAr",function(){return this.Pq});s_Y(s_hza,s_7Ug);


s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("NZI0Db");

s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("TD6q4d");

s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("syw9");

s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("WVLMce");
var s_Ujd=s_R("WVLMce");
var s_Vjd=["birrg","img-brk"],s_vN=function(a){s_h.call(this,a.Pa);this.Oa=s_bHa("input","iri",this.Ma().el());this.Ra=s_bHa("span","iri",this.Ma().el());this.Da=s_0e("irl_r");this.Ca=s_0e("irl_p");this.Ba=s_0e("irl_c");this.La=s_0e("irl_d");this.Ia=s_0e("irl_t");this.Fa=s_0e("irl_m");this.wa=s_G("img-brk",void 0);this.Ja=[];this.Ea=this.Aa=0;this.$={}};s_k(s_vN,s_h);s_vN.Ka=s_h.Ka;
s_vN.prototype.render=function(){s_L(this.Da,!1);s_L(this.Ca,!0);s_L(this.Ba,!0);s_L(this.Ia,!1);s_L(this.Fa,!1);s_S(this.wa,"ri_iur");var a=s_F("rg_el",this.wa);this.Aa=a.length;for(var b=0;b<this.Aa;b++){var c=a[b],d=s_G("iri",c);d?s_L(d,!0):(d=s_G("bia",c),s_Wjd(this,c,b,d.id))}a=s_b(s_Vjd);for(b=a.next();!b.done;b=a.next())for(b=s_F(b.value,this.wa),c=0;c<b.length;c++)d=b[c],d.style.height&&(s_0f(d,"height",String(d.style.height)),d.style.height="",d.style.height=d.clientHeight+"px")};
var s_Wjd=function(a,b,c,d){var e=a.Oa.cloneNode(!0);s_L(e,!0);e.id="irl_bt_"+c;b.appendChild(e);var f=s_I(e,"click",function(g){var h=a.Ra.cloneNode(!0);s_L(h,!0);var k=s_G("iri",b);if(k){var l=a.$[k.id];l&&(s_pg(l),s_cc(a.$,k.id));s_of(h,k)}else b.appendChild(h);b.getElementsByTagName("img")[0].className="ri_of";a.Ja[c]=!0;a.Ea++;a.done();google.log("rep",d+"&ei="+google.kEI);g.stopPropagation()});a.$[e.id]=f},s_Xjd=function(a){s_T(a.wa,"ri_iur");for(var b=s_F("iri",a.wa),c=0;c<b.length;c++)s_L(b[c],
!1);b=s_b(s_Vjd);for(c=b.next();!c.done;c=b.next()){c=s_F(c.value,a.wa);for(var d=0;d<c.length;d++){var e=c[d],f=s_c(e,"height");f&&(e.style.height=f,s_2f(e,"height"))}}};s_vN.prototype.done=function(){s_Xjd(this);this.Da.style.display="none";this.Ca.style.display="none";this.Ba.style.display="none";this.La.style.display="none";this.Ia.style.display="";this.Aa!=this.Ea&&(this.Fa.style.display="")};
s_vN.prototype.cancel=function(){s_Xjd(this);this.Ca.style.display="none";this.Ba.style.display="none";this.Da.style.display=""};s_vN.prototype.Uc=function(){for(var a in this.$)s_pg(this.$[a]);s_bda(this.$);s_Mb(this.Ja);this.Ea=this.Aa=0};s_X(s_vN.prototype,"IbE0S",function(){return this.cancel});s_X(s_vN.prototype,"iib5kc",function(){return this.done});s_X(s_vN.prototype,"rcuQ6b",function(){return this.render});s_Y(s_Ujd,s_vN);

s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("ZNtvCb");

s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("fUqMxb");

s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("lToJ7");


s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("r36a9c");
var s__Ta=s_R("r36a9c");
var s_0Ta=function(a){return null!=a&&0<a.getBoundingClientRect().width&&0<a.getBoundingClientRect().height?(a=window.getComputedStyle(a,null),"none"!==a.display&&"hidden"!==a.visibility&&"auto"===a.clip):!1},s_1Ta=function(a){s_h.call(this,a.Pa)};s_k(s_1Ta,s_h);s_1Ta.Ka=s_h.Ka;
s_1Ta.prototype.Kyb=function(){var a=this.Ha("BKxS1e").el();s_f(a);a=s_0i(this.QF().documentElement).find('[role="heading"], h1, h2, h3').filter(s_0Ta).zg();if(!s_yf(a.el())){if(null==s_Wi(a,"aria-label")&&null==s_Wi(a,"aria-describedby")){var b=s_Ri(a);if(s_0Ta(b.el())&&"A"==b.el().tagName){b.focus();return}b=a.children().filter(s_0Ta);if(1==b.size()&&"A"==b.zg().el().tagName){b.zg().focus();return}}a.el().tabIndex="-1";a.el().onblur=function(c){c.target.removeAttribute("tabIndex")}}a.focus()};
s_X(s_1Ta.prototype,"i3viod",function(){return this.Kyb});s_Y(s__Ta,s_1Ta);

s_g().$();

}catch(e){_DumpException(e)}
try{
s_P("vUqcAd");
var s_86=function(a){s_76.call(this,a.Pa)};s_k(s_86,s_76);s_86.Ka=function(){return{service:{scroll:s_Nk,BWa:s_Mk}}};s_86.prototype.openDialog=function(){var a=this;"ugcask"!=s_Qg("ugcqalb")&&s_Og("ugcqalb","ugcask",!0);this.Ra=this.Ha("Dxkhvd");this.Va=this.Ha("pHkpRc");this.Va.hide();this.Ra.show();this.Pg().then(function(b){b.qg();s_lVg(a);s_NUg()})};s_86.prototype.zy=function(){this.Ra.hide();this.Va.show();s_26()};
s_86.prototype.Pq=function(){s_OUg();s_26();s_pVg(this).then(function(a){try{a.close()}catch(b){}},function(){})};s_86.prototype.Pu=function(){"ugcask"==s_Qg("ugcqalb")&&this.kt()};s_X(s_86.prototype,"uULtK",function(){return this.Pu});s_X(s_86.prototype,"g8GAr",function(){return this.Pq});s_Y(s_kza,s_86);


s_g().$();

}catch(e){_DumpException(e)}
try{
var s_ISg=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};s_P("xj7LNb");
var s_JSg=s_R("xj7LNb");
var s_KSg=s_O("m5ueAd");
var s_M6=function(a){s_h.call(this,a.Pa);if(this.Aa=this.Ma().getData("cs").Nc())this.Ca=[],this.wa="",this.$=this.Ma().getData("iae").Gc(0),this.Ba=Promise.resolve(),this.hDa=[],this.Da=Promise.resolve(),s_LSg(this,this.Ma(),this.Sa("xXq91c"))};s_k(s_M6,s_h);s_M6.Ka=s_h.Ka;s_M6.prototype.Qqa=function(){s_MSg(this)};s_M6.prototype.XS=function(a){var b=s_Nl(this,a.targetElement,"xXq91c");a=s_Nl(this,a.targetElement,"oQYOj");s_e([new s_M(a.el(),"hide")],{triggerElement:b.el(),userAction:3})};
s_M6.prototype.YS=function(a){var b=this,c=s_Nl(this,a.targetElement,"xXq91c"),d=s_Nl(this,a.targetElement,"oQYOj");s_e([new s_M(d.el(),"show")],{triggerElement:c.el()});if(this.Aa){d=this.Ca.indexOf(c.el());var e=this.Ma().getData("mqac").Gc(0);if(!(0<e&&d>=e)){var f=s_NSg(this),g=s_0i(a.targetElement.closest(".related-question-pair"));s_7Ja(f,this.Ma());f.setStyle({display:"block","transition-duration":"300ms"});var h=s_$a(300);h.then(function(){return f.setStyle({opacity:1,transform:"none"})});
this.Ba=this.Ba.then(function(){return s_OSg(b,c,f,g,h)})}}};
var s_LSg=function(a,b,c){a.wa=b.getData("cs").kb();c.Td(function(e){return a.Ca.unshift(e)});if(0<a.$){b=b.getData("mqc").Gc();var d=s_ISg(s_Tg().get("q")+a.$.toString());(c=c.ze(d%(c.size()+b)))?(--a.$,c.click()):a.$=0}},s_OSg=function(a,b,c,d,e){var f,g,h,k,l,m,n,p;return s_mb(function(q){switch(q.$){case 1:return f=b.qd(),g=b.getData("kt"),h=new Map,h.set("q",f),h.set("state",a.wa+"."+g),a.getData("sgrdEnabled").Nc()&&s_ri(s__i(s_Ri(a.Ma())),s_KSg,{context:h,triggerElement:b.el()}),s_ib(q,2),
s_gb(q,s_em(a.Ma().el(),h),4);case 4:s_jb(q,3);break;case 2:k=s_kb(q),s_ba(k instanceof Error?k:Error(k));case 3:if(!a.Sa("sM5MNb").el())return a.$=0,c.remove(),q["return"]();l=a.Ha("sM5MNb");m=s_Ml(a,l,"xXq91c");n=l.Di().offsetHeight;p=l.remove().children();c.before(p).setStyle({"border-width":(n-c.Di().clientHeight)/2+"px 0","margin-top":-n+"px"});e.then(function(){a.hDa.push({V8a:c,Un:p});s_MSg(a)});s_e(p.map(function(r){return new s_M(r,"show")}),{triggerElement:d.el(),userAction:1,data:{irq:f}});
s_LSg(a,l,m);s_hb(q)}})},s_MSg=function(a){a.Da=a.Da.then(function(){var b,c,d,e,f;return s_mb(function(g){switch(g.$){case 1:if(0==a.hDa.length)return g["return"]();b=s_b(a.hDa.splice(0,1));c=b.next().value;d=c.V8a;e=c.Un;d.setStyle({opacity:"",transform:""});s_N(function(){return d.remove()},300);f=0;case 2:if(!(f<e.size())){g.Me(4);break}e.ze(f).children().setStyle({opacity:1,transform:"none","transition-duration":"300ms"});return s_gb(g,s_$a(100),3);case 3:++f;g.Me(2);break;case 4:s_N(function(){return s_Zg(182)},
300),s_MSg(a),s_hb(g)}})})};s_X(s_M6.prototype,"o7YQ2",function(){return this.YS});s_X(s_M6.prototype,"NlNJyb",function(){return this.XS});s_X(s_M6.prototype,"A6ecOd",function(){return this.Qqa});var s_NSg=function(a){return s_0i(a.Ha("aZ2wEe").el().cloneNode(!0))};s_Y(s_JSg,s_M6);

s_g().$();

}catch(e){_DumpException(e)}
// Google Inc.
