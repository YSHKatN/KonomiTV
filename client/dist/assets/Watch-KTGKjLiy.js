import{d as a,m as n,u as p,_ as m,r as d,o as c,g as u}from"./index-ndZ4D6My.js";import{W as h,V as l,P as _,u as f}from"./PlayerController-4ygl77lO.js";import"./ChannelsStore-xA0_mt5P.js";import"./ssrBoot--GxFJ_Pv.js";import"./VDialog-pmrLWE8U.js";import"./VSwitch-fjBgU2Yt.js";import"./index-T_rq9rzx.js";import"./lazy-ow2CGE0z.js";import"./transition-UUEsY4u_.js";import"./VAvatar-KwYm5DOR.js";import"./VTextField-NByOXRhe.js";import"./VCard-if2q-Q_q.js";import"./VWindowItem-yEskoe8l.js";import"./CommentMuteSettings-Wir5EXnU.js";import"./VSelect-NGSqugWF.js";import"./vuedraggable.umd-E_5q6Ie5.js";import"./Twitter-MSDI6ZGV.js";import"./PlayerUtils-VNZ3821B.js";let t=null;const y=a({name:"Video-Watch",components:{Watch:h},computed:{...n(f,p)},created(){this.init()},beforeRouteUpdate(o,e,r){this.destroy().then(()=>this.init()),r()},beforeUnmount(){this.destroy()},methods:{async init(){if(this.$route.params.video_id===void 0){this.$router.push({path:"/not-found/"});return}const o=await l.fetchVideo(parseFloat(this.$route.params.video_id));if(o===null){this.$router.push({path:"/not-found/"});return}this.playerStore.recorded_program=o,t=new _("Video"),await t.init()},async destroy(){t!==null&&(await t.destroy(),t=null)}}});function $(o,e,r,i,W,V){const s=d("Watch",!0);return c(),u(s,{playback_mode:"Video"})}const E=m(y,[["render",$]]);export{E as default};