(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{29:function(e,n,t){},30:function(e,n,t){},53:function(e,n,t){"use strict";t.r(n);var o,r,i,c,a,s,d,l,u,b,f,h,m,p,j,g,x,k,v,O,C,B,N,E,H=t(1),y=t(8),w=t.n(y),D=(t(29),t(30),t(17)),I=t(18),T=t(23),L=t(22),R=t(0),z=function(){var e=new Date,n=e.getDay();if(0==n)var t="Ch\u1ee7 nh\u1eadt";for(var o=1;o<=6;o++)if(n==o)t="Th\u1ee9 "+(o+1);return Object(R.jsxs)("div",{children:[Object(R.jsx)("span",{id:"day",children:t+", "}),Object(R.jsx)("span",{id:"date",children:"Ng\xe0y "+e.toLocaleString()})]})},F=t(2),U=t(3),S=(F.c.div(o||(o=Object(U.a)(["\n  background-color: ",";\n  color: ",";\n  border: 5px solid ",";\n  padding: 15px;\n  margin-right: auto;\n  margin-left: auto;\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.color}),(function(e){return e.theme.color})),F.c.div(r||(r=Object(U.a)(["\n  transition: 2s ease-in-out;\n  background-color: ",";\n  box-shadow: ",";\n  color: ",";\n  padding: 15px 30px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 4%;\n  max-width: 50%;\n  backdrop-filter: blur(3px);\n  border-radius: ",";\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.boxShadow}),(function(e){return e.theme.color}),(function(e){return e.theme.borderRadiusContainer}))),A=F.c.h1(i||(i=Object(U.a)(['\n  transition: 2s ease-in-out;\n  font-family: "Gochi Hand", cursive;\n  font-size: 4rem;\n  font-weight: 600;\n  line-height: 1.2;\n  color: ',";\n"])),(function(e){return e.theme.HeadingColor})),_=(F.c.h2(c||(c=Object(U.a)(['\n  transition: 2s ease-in-out;\n  font-family: "Gochi Hand", cursive;\n  font-size: 3rem;\n  font-weight: 600;\n  line-height: 1.2;\n  color: ',";\n"])),(function(e){return e.theme.HeadingColor})),F.c.h3(a||(a=Object(U.a)(['\n  transition: 2s ease-in-out;\n  font-family: "Gochi Hand", cursive;\n  font-size: 2rem;\n  line-height: 1.2;\n  color: ',";\n"])),(function(e){return e.theme.HeadingColor})),F.c.h4(s||(s=Object(U.a)(['\n  transition: 2s ease-in-out;\n  font-family: "Gochi Hand", cursive;\n  font-size: 1.3rem;\n  font-weight: 400;\n  line-height: 1.2;\n  color: ',";\n"])),(function(e){return e.theme.HeadingColor}))),G=(F.c.h5(d||(d=Object(U.a)(['\n  transition: 2s ease-in-out;\n  font-family: "Gochi Hand", cursive;\n  font-size: 0.5rem;\n  line-height: 1.2;\n  color: ',";\n"])),(function(e){return e.theme.HeadingColor})),t(4)),P=t(24),J=["label"],q=F.c.input(l||(l=Object(U.a)(["\n  transition: .3s ease-in-out;\n  color: ",";\n  border: ",";\n  border-radius: ",";\n  background-color: ",";\n  min-height: 35px;\n  padding-left: 20px;\n  height: 50px;\n  font-size: 15px;\n  width: 100%;\n  &::placeholder {\n    transition: 2s ease-in-out;\n    color: ",";\n  }\n  &:focus {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.color}),(function(e){return e.theme.borderBtn}),(function(e){return e.theme.borderRadiusBtn}),(function(e){return e.theme.taskBgColor}),(function(e){return e.theme.color}),(function(e){return e.theme.focusbgInput})),K=F.c.span(u||(u=Object(U.a)(["\n  color: ",";\n  width: auto;\n"])),(function(e){return e.theme.color})),M=function(e){var n=e.label,t=Object(P.a)(e,J);return Object(R.jsxs)("span",{children:[Object(R.jsx)(K,{children:n}),Object(R.jsx)(q,Object(G.a)({},t))]})},Q=F.c.button(b||(b=Object(U.a)(["\n    apperance:none;\n    background-color: ",";\n    color: ",";\n    border: ",";\n    transition: all .5s;\n    padding: .45rem 1.2rem;\n    font-size:13px;\n    border-radius:",";\n    &:hover {\n        color: ",";\n        background-color:",";\n        border: ",";\n    };\n    // &:disabled{\n    //     cursor:no-drop;\n    //     background-color: #888;\n    //     color: #111;\n    //     border-color: #888;\n    // }\n"])),(function(e){return e.theme.BtnBgColor}),(function(e){return e.theme.BtnTextColor}),(function(e){return e.theme.borderBtn}),(function(e){return e.theme.borderRadiusBtn}),(function(e){return e.theme.BtnTextColor}),(function(e){return e.theme.BtnUnCheckColorHover}),(function(e){return e.theme.borderButton})),V=F.c.div(f||(f=Object(U.a)(['\n    display: inline-block;\n    padding: 3px 2px;\n    border-radius: 14px;\n    position: fixed;\n    border: 1px solid #95a5a6;\n    right: -37%;\n    left: 105%;\n    max-width: 79px;\n    top: 11%;\n\n  & label {\n    text-align: center;\n    font-size: 15px;\n    font-weight:100;\n    font-family: sans-serif;\n    display: inline-block;\n    color: #909090;\n    position: relative;\n    z-index: 2;\n    margin: 0;\n    text-align: center;\n    padding: 5px 10px;\n  }\n\n  & input {\n    position: absolute;\n    z-index: 3;\n    opacity: 0;\n    cursor: pointer;\n    width: 100%;\n    height: 100%;\n  }\n\n  & span {\n    height: 28px;\n    width: 89%;\n    line-height: 21px;\n    border-radius: 11px;\n    background: #fff;\n    display: block;\n    position: absolute;\n    left: 22px;\n    top: 2px;\n    transition: all 0.3s ease-in-out;\n  }\n\n  & input[value="1"]:checked ~ span {\n    background: #000;\n    left: 4px;\n    top: 5px;\n  }\n\n  & input[value="2"]:checked ~ span {\n    background: #FFC107;\n    left: 4px;\n    top: 36px;\n  }\n  & input[value="3"]:checked ~ span {\n    background: #f984bf;\n    left: 4px;\n    top: 68px;\n  }\n\n  & input[value="1"]:checked + label,\n  input[value="3"]:checked + label {\n    color: #fff;\n  }\n  & input[value="2"]:checked + label {\n    color: #000;\n  }\n']))),W=F.c.table(h||(h=Object(U.a)(["\n  color: ",";\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n  border-spacing: 2px;\n  border-color: ",";\n\n  "])),(function(e){return e.theme.color}),(function(e){return e.theme.color})),X=F.c.thead(m||(m=Object(U.a)(["\n  vertical-align: middle;\n//   border: 1px solid ",";\n  border-radius: ",";\n"])),(function(e){return e.theme.color}),(function(e){return e.theme.borderRadiusButton})),Y=(F.c.tbody(p||(p=Object(U.a)(["\n  vertical-align: middle;\n  border-color: inherit;\n"]))),F.c.tr(j||(j=Object(U.a)(["\n  vertical-align: middle;\n  //  border: 1px solid ",";\n   //   border-radius: ",";\n}\n"])),(function(e){return e.theme.color}),(function(e){return e.theme.borderRadiusButton}))),Z=(F.c.td(g||(g=Object(U.a)(["\npadding: 0.75rem;\nvertical-align: middle;\nborder: 1px solid ",";\n  "])),(function(e){return e.theme.color})),F.c.th(x||(x=Object(U.a)(["\n  background-color: ","\n  color: ","\n  vertical-align: middle;\n    padding: .75rem;\n    font-weight: 100;\n"])),(function(e){return e.theme.backgroundColor}),(function(e){return e.theme.color}))),$=t(9),ee="add_task",ne="complete_task",te="edit_task",oe="update_task",re="undo_task",ie="delete_task",ce="change_theme",ae=function(e){return{type:ce,themeId:e}},se=function(e){return{type:ne,taskId:e}},de=function(e){return{type:re,taskId:e}},le=function(e){return{type:ie,taskId:e}},ue=function(e){return{type:te,task:e}},be=function(e){return{type:oe,taskName:e}},fe=F.c.button(k||(k=Object(U.a)(["\n    apperance:none;\n    background-color: transparent;\n    color: ",";\n    border: ",";\n    transition: all .2s;\n    position:relative;\n    width: 30px;\n    height:30px;\n    font-size:13px;\n    border-radius:",";\n    & > i{\n        display:none;\n    }\n    &:hover {\n        background-color: ",";\n        color: ",";\n        border: ",";\n        & > i{\n            display:contents;\n            position: absolute;\n            top:0;\n            bottom:0;\n            left:0;\n            right:0;\n        }\n    };\n"])),(function(e){return e.theme.colorIcon}),(function(e){return e.theme.borderBtnCheck}),(function(e){return e.theme.borderRadiusCircle}),(function(e){return e.theme.BtnBgColor}),(function(e){return e.theme.colorIconHover}),(function(e){return e.theme.borderButton})),he=F.c.button(v||(v=Object(U.a)(["\n    apperance:none;\n    background-color: ",";;\n    color: ",";\n    border: ",";\n    transition: all .2s;\n    padding: .4rem .6rem;\n    font-size:13px;\n    border-radius:",";\n    &:hover {\n        background-color: ",";\n        color: ",";\n        border: ",";\n    };\n"])),(function(e){return e.theme.BtnEditColor}),(function(e){return e.theme.colorIconHover}),(function(e){return e.theme.borderBtnEdit}),(function(e){return e.theme.borderRadiusCircle}),(function(e){return e.theme.BtnEditColorHover}),(function(e){return e.theme.colorIconHover}),(function(e){return e.theme.borderBtnEditHover})),me=F.c.button(O||(O=Object(U.a)(["\napperance:none;\nbackground-color: ",";;\ncolor: ",";\nborder: ",";\ntransition: all .2s;\npadding: .4rem .6rem;\nfont-size:13px;\nborder-radius:",";\n&:hover {\n    background-color: ",";\n    color: ",";\n    border: ",";\n};\n"])),(function(e){return e.theme.BtnDeleteColor}),(function(e){return e.theme.colorIconHover}),(function(e){return e.theme.borderBtnDelete}),(function(e){return e.theme.borderRadiusCircle}),(function(e){return e.theme.BtnDeleteColorHover}),(function(e){return e.theme.colorIconHover}),(function(e){return e.theme.borderBtnDeleteHover})),pe=F.c.button(C||(C=Object(U.a)(["\n    apperance:none;\n    background-color: ",";\n    color: ",";\n    border: ",";\n    transition: all .2s;\n    padding: .4rem .6rem;\n    font-size:13px;\n    border-radius:",";\n    &:hover {\n        background-color: ",";\n        color: ",";\n        border: ",";\n    };\n"])),(function(e){return e.theme.BtnBgColor}),(function(e){return e.theme.colorIconHover}),(function(e){return e.theme.borderBtnCheck}),(function(e){return e.theme.borderRadiusCircle}),(function(e){return e.theme.BtnUnCheckColorHover}),(function(e){return e.theme.colorIconHover}),(function(e){return e.theme.borderBtnUnCheckHover})),je=F.c.button(B||(B=Object(U.a)(["\n    apperance:none;\n    background-color: ",";;\n    color: ",";\n    border: ",";\n    transition: all .2s;\n    padding: .45rem 1rem;\n    font-size:13px;\n    border-radius:",";\n    &:hover {\n        background-color: ",";\n        color: ",";\n        border: ",";\n        \n    };\n    &:disabled{\n        cursor:no-drop;\n        background-color: #888;\n        color: #111;\n        border-color: #888;\n    }\n"])),(function(e){return e.theme.BtnEditColor}),(function(e){return e.theme.colorIconHover}),(function(e){return e.theme.borderBtnEdit}),(function(e){return e.theme.borderRadiusBtn}),(function(e){return e.theme.BtnEditColorHover}),(function(e){return e.theme.colorIconHover}),(function(e){return e.theme.borderBtnEditHover})),ge=F.c.div(N||(N=Object(U.a)(["\ntransition: 2s ease-in-out;\n  background-color: ",";\n  border-radius: ",";\n  color:",";\n  margin-bottom: 1rem;\n"])),(function(e){return e.theme.taskBgColor}),(function(e){return e.theme.borderRadiusBtn}),(function(e){return e.theme.color})),xe=t.p+"static/media/helveticaneue.721fc7aa.ttf",ke=t.p+"static/media/helveticaneuebold.e1d6112f.ttf",ve=t.p+"static/media/helveticaneuemedium.d0966923.ttf",Oe=Object(F.b)(E||(E=Object(U.a)(["\n@font-face {\n    font-family: 'Helv-neue';\n    src: url(",");\n}\n@font-face {\n    font-family: 'Helv-neue-medium';\n    src:  url(",");\n}\n@font-face {\n    font-family: 'Helv-neue-bold';\n    src: url(",");\n}\n\nbody {\n    background-color: ",";\n    transition: 2s ease-in-out;\n    background: ",';\n    background-size:cover;\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box;\n        font-family: "Helv-neue";\n    &::-webkit-scrollbar {\n        -webkit-appearance: none;\n        width: 5px;\n        background: transparent;\n      }\n    &::-webkit-scrollbar-thumb {\n        background: #ff6565;\n        border: 1px solid #ff6565;\n        border-radius: 5px;\n      }\n      &::-webkit-scrollbar-thumb:hover {\n        background: #ff6565;\n      }\n}\n\n'])),xe,ke,ve,(function(e){return e.theme.bodyColor}),(function(e){return e.theme.bgImage})),Ce=function(e){Object(T.a)(t,e);var n=Object(L.a)(t);function t(){var e;Object(D.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={taskName:"",disabled:!0},e.renderTaskToDo=function(){return e.props.taskList.filter((function(e){return!e.completed})).map((function(n,t){return Object(R.jsx)(Y,{children:Object(R.jsx)(ge,{children:Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("div",{className:"col-1 d-flex align-items-center pl-4",children:Object(R.jsx)(fe,{className:"ml-1",onClick:function(){e.props.dispatch(se(n.id))},children:Object(R.jsx)("i",{className:"fa fa-check"})})}),Object(R.jsx)("div",{className:"col-8 d-flex align-items-center pl-1",children:n.taskName}),Object(R.jsx)("div",{className:"col-3 d-flex justify-content-end",children:Object(R.jsxs)(Z,{children:[Object(R.jsx)(he,{className:"ml-1",onClick:function(){e.setState({disabled:!1},(function(){e.props.dispatch(ue(n))}))},children:Object(R.jsx)("i",{className:"fa fa-edit"})}),Object(R.jsx)(me,{className:"ml-1",onClick:function(){e.props.dispatch(le(n.id))},children:Object(R.jsx)("i",{className:"fa fa-trash"})})]})})]})})},t)}))},e.renderTaskCompleted=function(){return e.props.taskList.filter((function(e){return e.completed})).map((function(n,t){return Object(R.jsx)(Y,{children:Object(R.jsx)(ge,{children:Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("div",{className:"col-1 d-flex align-items-center pl-4",children:Object(R.jsx)(pe,{className:"ml-1",onClick:function(){e.props.dispatch(de(n.id))},children:Object(R.jsx)("i",{className:"fa fa-check"})})}),Object(R.jsx)("div",{className:"col-8 d-flex align-items-center pl-1",children:n.taskName}),Object(R.jsx)("div",{className:"col-3 d-flex justify-content-end",children:Object(R.jsx)(Z,{children:Object(R.jsx)(me,{className:"ml-1",onClick:function(){e.props.dispatch(le(n.id))},children:Object(R.jsx)("i",{className:"fa fa-trash"})})})})]})})},t)}))},e.renderTheme=function(){return Object(R.jsxs)(V,{className:"tw-toggle",children:[Object(R.jsx)("input",{defaultChecked:!0,type:"radio",name:"toggle",value:1,onClick:function(n){var t=n.target.value;e.props.dispatch(ae(t))}}),Object(R.jsxs)("label",{className:"toggle toggle-yes",children:[Object(R.jsx)("i",{className:"fa fa-moon"})," Dark"]}),Object(R.jsx)("br",{}),Object(R.jsx)("input",{type:"radio",name:"toggle",value:2,onClick:function(n){var t=n.target.value;e.props.dispatch(ae(t))}}),Object(R.jsxs)("label",{className:"toggle toggle-yes",children:[Object(R.jsx)("i",{className:"fa fa-sun"})," Light"]}),Object(R.jsx)("br",{}),Object(R.jsx)("input",{type:"radio",name:"toggle",value:3,onClick:function(n){var t=n.target.value;e.props.dispatch(ae(t))}}),Object(R.jsxs)("label",{className:"toggle toggle-yes",children:[Object(R.jsx)("i",{className:"fa fa-ice-cream"})," Cute"]}),Object(R.jsx)("span",{})]})},e}return Object(I.a)(t,[{key:"render",value:function(){var e=this;return Object(R.jsxs)(F.a,{theme:this.props.themeTodoList,children:[Object(R.jsx)(Oe,{}),Object(R.jsxs)(S,{children:[this.renderTheme(),Object(R.jsxs)("div",{className:"row d-flex align-items-center",children:[Object(R.jsx)("div",{className:"col-8",children:Object(R.jsx)(A,{className:"mt-4",children:"Todo list"})}),Object(R.jsx)("div",{className:"col-4",children:Object(R.jsx)(z,{})})]}),Object(R.jsxs)("div",{className:"row mt-5",children:[Object(R.jsx)("div",{className:"col-lg-9 col-sm-7",children:Object(R.jsx)(M,{value:this.state.taskName,placeholder:"Enter your task to do...",name:"taskName",onChange:function(n){e.setState({taskName:n.target.value})}})}),Object(R.jsxs)("div",{className:"col-lg-3 col-sm-5 d-flex justify-content-center",children:[Object(R.jsxs)(Q,{onClick:function(){var n=e.state.taskName,t={id:Date.now(),taskName:n,completed:!1};e.props.dispatch(function(e){return{type:ee,newTask:e}}(t))},children:[Object(R.jsx)("i",{className:"fa fa-plus"})," Add"]}),this.state.disabled?Object(R.jsxs)(je,{disabled:!0,className:"ml-3",onClick:function(){e.props.dispatch(be(e.state.taskName))},children:[Object(R.jsx)("i",{className:"fa fa-sync"})," Update"]}):Object(R.jsxs)(je,{className:"ml-3",onClick:function(){var n=e.state.taskName;e.setState({disabled:!0,taskName:""},(function(){e.props.dispatch(be(n))}))},children:[Object(R.jsx)("i",{className:"fa fa-sync"})," Update"]})]})]}),Object(R.jsx)(_,{className:"mt-5 mb-4 ml-2",children:"Task to do"}),Object(R.jsx)(W,{children:Object(R.jsx)(X,{children:this.renderTaskToDo()})}),Object(R.jsx)(_,{className:"mt-5 mb-4 ml-2",children:"Task completed"}),Object(R.jsx)(W,{children:Object(R.jsx)(X,{children:this.renderTaskCompleted()})})]})]})}},{key:"componentDidUpdate",value:function(e,n){e.taskEdit.id!==this.props.taskEdit.id&&this.setState({taskName:this.props.taskEdit.taskName})}}]),t}(H.Component),Be=Object($.b)((function(e){return{themeTodoList:e.TodoListReducer.themeTodoList,taskList:e.TodoListReducer.taskList,taskEdit:e.TodoListReducer.taskEdit}}))(Ce);var Ne=function(){return Object(R.jsx)("div",{children:Object(R.jsx)(Be,{})})},Ee=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,55)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),o(e),r(e),i(e),c(e)}))},He=t(10),ye=t(7),we=t(13),De=t.n(we),Ie={bodyColor:"#3D3E49",bgImage:"url('./images/darkmode.jpg')",bgColor:"#00000085",color:"#fff",taskBgColor:"#35353578",focusbgInput:"#383838",HeadingColor:"#FDBD3B",colorIcon:"#6EC3BD",colorIconHover:"#fff",BtnTextColor:"#fff",BtnBgColor:"#6EC3BD",BtnEditColor:"#AF69E3",BtnEditColorHover:"#834dab",borderBtnEdit:"1px solid #AF69E3",borderBtnEditHover:"1px solid #834dab",BtnDeleteColor:"#EB3260",BtnDeleteColorHover:"#b71e44",borderBtnDelete:"1px solid #EB3260",borderBtnDeleteHover:"1px solid #b71e44",borderBtnCheck:"1px solid #6EC3BD",BtnUnCheckColorHover:"#498e89",borderBtnUnCheckHover:"1px solid #498e89",borderBtn:"none",borderRadiusBtn:"30px",borderRadiusCircle:"50%",borderRadiusContainer:"25px",hoverTextColor:"#343a40",hoverBgColor:"#fff",borderColor:"#343a40"},Te=[{id:1,name:"Dark",theme:Ie},{id:2,name:"Light",theme:{bodyColor:"#3D3E49",bgImage:"url('./images/lightmode.jpg')",bgColor:"#ffffff3b",boxShadow:"0 3px 30px #84848438",color:"#444",focusbgInput:"#fff",taskBgColor:"#fff",HeadingColor:"#6EC3BD",colorIcon:"#6EC3BD",colorIconHover:"#fff",BtnTextColor:"#fff",BtnBgColor:"#6EC3BD",BtnEditColor:"#AF69E3",BtnEditColorHover:"#834dab",borderBtnEdit:"1px solid #AF69E3",borderBtnEditHover:"1px solid #834dab",BtnDeleteColor:"#EB3260",BtnDeleteColorHover:"#b71e44",borderBtnDelete:"1px solid #EB3260",borderBtnDeleteHover:"1px solid #b71e44",borderBtnCheck:"1px solid #6EC3BD",BtnUnCheckColorHover:"#498e89",borderBtnUnCheckHover:"1px solid #498e89",borderBtn:"none",borderRadiusBtn:"30px",borderRadiusCircle:"50%",borderRadiusContainer:"25px",hoverTextColor:"#343a40",hoverBgColor:"#fff",borderColor:"#343a40"}},{id:3,name:"Cute",theme:{bodyColor:"#3D3E49",bgImage:"url('./images/cutemode.jpg')",bgColor:"#ffffff3b",boxShadow:"0 3px 30px #84848438",color:"#444",focusbgInput:"#ffffff80",taskBgColor:"#ffffff80",HeadingColor:"#F984BF",colorIcon:"#6EC3BD",colorIconHover:"#fff",BtnTextColor:"#fff",BtnBgColor:"#6EC3BD",BtnEditColor:"#AF69E3",BtnEditColorHover:"#834dab",borderBtnEdit:"1px solid #AF69E3",borderBtnEditHover:"1px solid #834dab",BtnDeleteColor:"#EB3260",BtnDeleteColorHover:"#b71e44",borderBtnDelete:"1px solid #EB3260",borderBtnDeleteHover:"1px solid #b71e44",borderBtnCheck:"1px solid #6EC3BD",BtnUnCheckColorHover:"#498e89",borderBtnUnCheckHover:"1px solid #498e89",borderBtn:"none",borderRadiusBtn:"30px",borderRadiusCircle:"50%",borderRadiusContainer:"25px",hoverTextColor:"#343a40",hoverBgColor:"#fff",borderColor:"#343a40"}}],Le={themeTodoList:Ie,taskList:[{id:"task1",taskName:"task 1",completed:!0},{id:"task2",taskName:"task 2",completed:!0},{id:"task3",taskName:"task 3",completed:!1},{id:"task4",taskName:"task 4",completed:!1}],taskEdit:{id:"-1",taskName:"",completed:!1}},Re=Object(He.a)({TodoListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case ee:if(""===n.newTask.taskName.trim())return De.a.fire({icon:"info",position:"top",toast:!0,text:"Please enter you task!",showConfirmButton:!1,timer:2500,timerProgressBar:!0}),Object(G.a)({},e);var t=Object(ye.a)(e.taskList),o=t.findIndex((function(e){return e.taskName===n.newTask.taskName}));return-1!==o?(De.a.fire({icon:"warning",text:"Task already exists!",position:"top",toast:!0,showConfirmButton:!1,timer:2500,timerProgressBar:!0}),Object(G.a)({},e)):(e.taskList=[].concat(Object(ye.a)(t),[n.newTask]),Object(G.a)({},e));case ce:var r=Te.find((function(e){return e.id==n.themeId}));return r&&(e.themeTodoList=Object(G.a)({},r.theme)),Object(G.a)({},e);case ne:var i=Object(ye.a)(e.taskList),c=i.findIndex((function(e){return e.id===n.taskId}));return-1!==c&&(i[c].completed=!0),Object(G.a)(Object(G.a)({},e),{},{taskList:i});case re:var a=Object(ye.a)(e.taskList),s=a.findIndex((function(e){return e.id===n.taskId}));return-1!==s&&(a[s].completed=!1),Object(G.a)(Object(G.a)({},e),{},{taskList:a});case ie:return Object(G.a)(Object(G.a)({},e),{},{taskList:e.taskList.filter((function(e){return e.id!==n.taskId}))});case te:return Object(G.a)(Object(G.a)({},e),{},{taskEdit:n.task});case oe:e.taskEdit=Object(G.a)(Object(G.a)({},e.taskEdit),{},{taskName:n.taskName});var d=Object(ye.a)(e.taskList),l=d.findIndex((function(n){return n.id===e.taskEdit.id}));return-1!==l&&(d[l]=e.taskEdit),e.taskList=d,e.taskEdit={id:"-1",taskName:"",completed:!1},Object(G.a)({},e);default:return Object(G.a)({},e)}}}),ze=(t(47),t(48),t(49),Object(He.b)(Re));w.a.render(Object(R.jsx)($.a,{store:ze,children:Object(R.jsx)(Ne,{})}),document.getElementById("root")),Ee()}},[[53,1,2]]]);
//# sourceMappingURL=main.5c2915a4.chunk.js.map