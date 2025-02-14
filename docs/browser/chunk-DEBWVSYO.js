import{$ as d,Aa as k,B as U,I as r,J as c,O as C,Q as p,Sa as M,T as A,W as m,Z as a,_ as n,ba as O,f as u,g as R,ga as s,h as x,ha as F,ia as l,ja as g,k as D,o as N,ra as j,s as S,wa as w,xa as E,za as T}from"./chunk-UO4QCD7C.js";var $=()=>["lesson/1"],q=()=>["lesson/2"],X=()=>["lesson/3"],G=()=>["lesson/4"],H=()=>["lesson/5"],y=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["app-big-star"]],decls:11,vars:10,consts:[[1,"space-x-4"],[1,"btn","btn-primary",3,"routerLink"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"a",1),s(2,"Lesson 1"),n(),a(3,"a",1),s(4,"Lesson 2"),n(),a(5,"a",1),s(6,"Lesson 3"),n(),a(7,"a",1),s(8,"Lesson 4"),n(),a(9,"a",1),s(10,"Lesson 5"),n()()),e&2&&(r(),m("routerLink",g(5,$)),r(2),m("routerLink",g(6,q)),r(2),m("routerLink",g(7,X)),r(2),m("routerLink",g(8,G)),r(2),m("routerLink",g(9,H)))},dependencies:[k],encapsulation:2})};var v=class i{constructor(){}units=[{number:1,name:"Unit 1",content:{heading:{text:`Bienvenido a la primera unidad de este curso.  
            Esta   unidad, como todas las unidades del curso est\xE1 dividida en 5 Lecciones, 3 secciones de consultas y 1 examen.
             En esta primera unidad aprender\xE1 algunas expresiones que se utilizan para  `,topics:["-	Saludar","-	Presentarse y presentar a otras personas.","-	Preguntar y decir nombres y apellidos.","-	Preguntar y decir como est\xE1 una persona","-	Preguntar y deletrear palabras.","-	Desedirse"],instructions:"De  Click en la tri\xE1ngulo 1 de la estrella para comenzar a estudiar la primera lecci\xF3n de esta unidad."}}},{number:2,name:"Unit 2",content:{heading:"23"}},{number:3,name:"Unit 3",content:{heading:"23"}},{number:4,name:"Unit 4",content:{heading:"23"}},{number:5,name:"Unit 5",content:{heading:"23"}},{number:6,name:"Unit 6",content:{heading:"23"}},{number:7,name:"Unit 7",content:{heading:"23"}},{number:8,name:"Unit 8",content:{heading:"23"}},{number:9,name:"Unit 9",content:{heading:"23"}},{number:10,name:"Unit 10",content:{heading:"23"}},{number:11,name:"Unit 11",content:{heading:"23"}},{number:12,name:"Unit 12",content:{heading:"23"}},{number:13,name:"Unit 13",content:{heading:"23"}}];currentUnit(){}getUnitData(t){return x(this.units.find(e=>e.number===t))}getLessonData(t){return x(this.lessons.find(e=>e.id===t))}getExcersiseData(t){return x(this.excersises.find(e=>e.id===t))}lessons=[{unitId:1,id:1,number:1,name:"Lesson 1",content:{heading:{text:"EXPRESIONES PARA SALUDAR A OTRA PERSONA",topics:[]}}}];excersises=[{id:1,lessonId:1,instructions:"Observe la imagen y escuche la expresi\xF3n que se utilizan para saludar a una persona desde las 12:00 de la noche hasta las 11:59 de la ma\xF1ana. ",images:[{url:"image.jpg"}],audio:[{url:"audio.wav"}]}];static \u0275fac=function(e){return new(e||i)};static \u0275prov=S({token:i,factory:i.\u0275fac,providedIn:"root"})};var f=class i{_emitTime=new R(1);constructor(){}set emitTime(t){this._emitTime.next(t)}get emitTime$(){return this._emitTime.asObservable()}static \u0275fac=function(e){return new(e||i)};static \u0275prov=S({token:i,factory:i.\u0275fac,providedIn:"root"})};function K(i,t){if(i&1&&(a(0,"li"),s(1),n()),i&2){let e=t.$implicit;r(),F(e)}}var h=class i{constructor(t,e,o){this._latinEnglishService=t;this._appService=e;this._activatedRoute=o}title="ng-host-handling";heading;ngOnInit(){this._activatedRoute.params.subscribe(t=>{this._latinEnglishService.getUnitData(Number(t.id)).subscribe(e=>{console.log(e),this.heading=e.content.heading})})}dispatchOrder(){console.log("Order given"),this._turbo_generator.next("3pm")}value=9;textToSpeech=[{id:1,en:"Name",es:"Nombre"},{id:2,en:"First name",es:"Primer Nombre"},{id:3,en:"Second name",es:"Segundo nombre"},{id:4,en:"Middle name",es:"Segundo nombre"},{id:5,en:"Last name",es:"Apellido"},{id:6,en:"Surname",es:"Apellido"},{id:7,en:"Family name",es:"Apellido"},{id:8,en:"Full name",es:"Nombre complete"},{id:9,en:"Nickname",es:"apodo, sobrenombre"}];playInARow(t){D(2e3).pipe(N(this.textToSpeech.length)).subscribe(e=>{this.textToSpeech&&(this._appService.emitTime=this.textToSpeech[e].id)})}_turbo_generator=new u;_chaff=new u;_water=new u;_forced_air=new u;_fire=new u;static \u0275fac=function(e){return new(e||i)(c(v),c(f),c(E))};static \u0275cmp=p({type:i,selectors:[["app-unit"]],decls:11,vars:3,consts:[[1,"view-container"],[1,"view-header"],[4,"ngFor","ngForOf"],["href","",1,"text-xl"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"div",1)(2,"h1"),s(3),n(),a(4,"ul"),A(5,K,2,1,"li",2),n(),a(6,"a",3),s(7),n()(),d(8,"app-big-star"),a(9,"div"),d(10,"div"),n()()),e&2&&(r(3),l(" ",o.heading.text," "),r(2),m("ngForOf",o.heading.topics),r(2),l(" ",o.heading.instructions," "))},dependencies:[j,y],encapsulation:2})};var I=class i{data=U.required();static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["app-exercise"]],inputs:{data:[1,"data"]},decls:4,vars:1,consts:[["src","data()?.images?[0]","alt",""]],template:function(e,o){e&1&&(a(0,"div")(1,"div"),s(2),n(),d(3,"img",0),n()),e&2&&(r(2),l(" ",o.data().instruction," "))},encapsulation:2})};var _=class i{constructor(t,e,o,B,Q,V){this._router=t;this._maIconRegistry=e;this._domSanitizer=o;this._activatedRoute=B;this._latinEnglishService=Q;this._appService=V}lesson=C(null);currentExercise=0;currentExerciseData=C({instruction:""});iconsUrl="icons";isIcon=!1;actionIconNames=["star"];ngOnInit(){this._activatedRoute.params.subscribe(t=>{console.log(t),this._latinEnglishService.getLessonData(Number(t.id)).subscribe(e=>{console.log(e),this.lesson.set(e)})});for(let t=0;t<this.actionIconNames.length;t++){let e=this.actionIconNames[t];this._maIconRegistry.addSvgIcon(e,this._domSanitizer.bypassSecurityTrustResourceUrl(`${this.iconsUrl}/${e}.svg`))}this.isIcon=!0}start(){this.currentExercise+=1,this._latinEnglishService.getExcersiseData(Number(this.currentExercise)).subscribe(t=>{console.log(t);let e={instruction:t.instructions,images:t.images,audios:t.audio};this.currentExerciseData.set(e)})}next(){this.currentExercise+=1,this._latinEnglishService.getExcersiseData(Number(this.currentExercise)).subscribe(t=>{console.log(t);let e={instruction:t.instructions,images:t.images,audios:t.audio};this.currentExerciseData.set(e)})}static \u0275fac=function(e){return new(e||i)(c(T),c(M),c(w),c(E),c(v),c(f))};static \u0275cmp=p({type:i,selectors:[["app-lesson"]],decls:6,vars:3,consts:[[1,"p-4","bg-card","shadow","rounded-lg"],[3,"click"],[3,"data"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"div"),s(2),n(),a(3,"button",1),O("click",function(){return o.currentExercise===0?o.start():o.next()}),s(4),n(),d(5,"app-exercise",2),n()),e&2&&(r(2),l(" ",o.lesson().content.heading.text," "),r(2),l(" ",o.currentExercise===0?"Comenzar":"Siguiente"," "),r(),m("data",o.currentExerciseData()))},dependencies:[I],encapsulation:2})};var Ce=[{path:"",component:h},{path:":id",component:h},{path:":id/lesson/:id",component:_}];export{Ce as default};
