import{d as m,U as c,m as f,M as h,J as w,_ as g,r as i,o as _,c as V,b as o,e as n,w as a,j as v,X as y,h as C,p as S,q as b}from"./index-ndZ4D6My.js";import{H as B,N as F}from"./Navigation-agvUXJ8_.js";import{_ as $}from"./ssrBoot--GxFJ_Pv.js";import{a as N,V as I}from"./VCard-if2q-Q_q.js";import{V as U,a as r}from"./VTextField-NByOXRhe.js";import{V as k}from"./VForm-o86U_5Py.js";import"./VAvatar-KwYm5DOR.js";import"./transition-UUEsY4u_.js";import"./index-T_rq9rzx.js";const D=m({name:"Login",components:{Header:B,Navigation:F},data(){return{is_form_dense:c.isSmartphoneHorizontal(),username:"",password:"",password_showing:!1}},computed:{...f(w)},async created(){await this.userStore.fetchUser(),this.userStore.is_logged_in&&await this.$router.replace({path:"/settings/account"})},methods:{async login(){if(this.username===""||this.password===""){h.error("ユーザー名またはパスワードが空です。");return}await this.userStore.login(this.username,this.password)!==!1&&await this.$router.replace({path:"/settings/account"})}}}),d=e=>(S("data-v-b629ee27"),e=e(),b(),e),E={class:"route-container"},H={class:"login-container-wrapper d-flex align-center w-100 mb-13"},x=d(()=>n("img",{class:"d-block",src:$,style:{"max-width":"250px"}},null,-1)),M=d(()=>n("h4",{class:"mt-10"},"ログイン",-1));function T(e,s,j,A,L,q){const l=i("Header"),p=i("Navigation"),u=i("Icon");return _(),V("div",E,[o(l),n("main",null,[o(p),n("div",H,[o(N,{class:"login-container px-10 pt-8 pb-11 mx-auto",elevation:"10",width:"100%","max-width":"450"},{default:a(()=>[o(I,{class:"login__logo py-4 d-flex flex-column justify-center align-center"},{default:a(()=>[x,M]),_:1}),o(U),o(k,{ref:"login",onSubmit:s[4]||(s[4]=v(()=>{},["prevent"]))},{default:a(()=>[o(r,{class:"mt-12",color:"primary",variant:"outlined",placeholder:"ユーザー名","hide-details":"",autofocus:"",density:e.is_form_dense?"compact":"default",modelValue:e.username,"onUpdate:modelValue":s[0]||(s[0]=t=>e.username=t)},null,8,["density","modelValue"]),o(r,{class:"mt-8",color:"primary",variant:"outlined",placeholder:"パスワード","hide-details":"",density:e.is_form_dense?"compact":"default",modelValue:e.password,"onUpdate:modelValue":s[1]||(s[1]=t=>e.password=t),type:e.password_showing?"text":"password","append-inner-icon":e.password_showing?"mdi-eye":"mdi-eye-off","onClick:append":s[2]||(s[2]=t=>e.password_showing=!e.password_showing)},null,8,["density","modelValue","type","append-inner-icon"]),o(y,{class:"login-button mt-5",color:"secondary",variant:"flat",width:"100%",height:"56",onClick:s[3]||(s[3]=t=>e.login())},{default:a(()=>[o(u,{icon:"fa:sign-in",class:"mr-2"}),C("ログイン ")]),_:1})]),_:1},512)]),_:1})])])])}const W=g(D,[["render",T],["__scopeId","data-v-b629ee27"]]);export{W as default};