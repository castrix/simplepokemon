(this.webpackJsonpujian=this.webpackJsonpujian||[]).push([[0],{68:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),c=n.n(a),o=n(19),i=n.n(o),r=n(8),l=n(3),d=n(9),m=n(12),j=n(25),p=n.n(j),h=n(10),u=n(38),b=n(13),O=n(14),y=n(16),x=n(15),g=n(39),v=n.n(g).a.create({baseURL:"https://pokeapi.co/api/v2/pokemon"}),k=function(e){var t=e.pokemon;return Object(s.jsx)("div",{className:"column card",children:Object(s.jsxs)("div",{className:"ui fluid card",style:{position:"relative"},children:[Object(s.jsx)("h1",{style:{position:"absolute",marginLeft:"0.5vw"},children:t.id}),Object(s.jsx)(r.b,{onClick:e.select,className:"image",to:"/details",children:Object(s.jsx)("img",{alt:"nama",src:t.sprites.front_default})}),Object(s.jsx)("div",{className:"content",style:{textAlign:"center"},children:Object(s.jsxs)(r.b,{onClick:e.select,className:"header",to:e.link,children:[t.species.name," "]})})]})})},f=function(e){return{type:"POKEMON_SELECTED",payload:e}},N=function(e){return{type:"DISPLAY_CATCH",payload:e}},C=function(){return Object(s.jsxs)("div",{className:"ui three column grid",style:{marginTop:"1vh"},children:[Object(s.jsx)("div",{className:"column",children:Object(s.jsx)(r.b,{to:"/",style:{justifySelf:"center"},children:Object(s.jsx)("button",{className:"ui green button",style:{width:"100%"},children:"Search Pokemon"})})}),Object(s.jsx)("div",{className:"column",children:Object(s.jsx)(r.b,{to:"mypokemons",style:{justifySelf:"center"},children:Object(s.jsx)("button",{className:"ui green button",style:{width:"100%"},children:"My Pokemons Lists"})})}),Object(s.jsx)("div",{className:"column",children:Object(s.jsx)("a",{href:"/",style:{justifySelf:"center"},children:Object(s.jsx)("button",{className:"ui green button",style:{width:"100%"},children:"About Me"})})})]})};function w(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),s=[e[n],e[t]];e[t]=s[0],e[n]=s[1]}return e}var A=function(e){Object(y.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(b.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={pokemon:[],errorMsg:""},e.test=function(e){console.log(e)},e}return Object(O.a)(n,[{key:"loadApi",value:function(){var e=Object(u.a)(p.a.mark((function e(){var t,n,s,a=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("",{params:{limit:20,offset:Math.floor(1e3*Math.random()+1)}});case 2:t=e.sent,n=w(t.data.results),s=0;case 5:if(!(s<n.length)){e.next=11;break}return e.next=8,v.get("/"+n[s].name).then((function(e){a.setState({pokemon:[].concat(Object(h.a)(a.state.pokemon),[e.data])})}));case 8:s++,e.next=5;break;case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.loadApi()}},{key:"render",value:function(){var e=this;return this.state.pokemon.length>0?Object(s.jsxs)(c.a.Fragment,{children:[Object(s.jsx)("div",{className:"container-fluid",style:{textAlign:"center",justifyContent:"center",paddingTop:"3vh"},children:Object(s.jsx)("img",{alt:"logo",src:"/simplepokemon/pokemon/pokemon.svg",style:{width:"200px"}})}),Object(s.jsx)(C,{}),Object(s.jsx)("div",{className:"ui main",children:Object(s.jsx)("div",{className:"ui column grid",style:{padding:"2em",marginTop:"5vh"},children:this.state.pokemon.map((function(t,n){return Object(s.jsx)(k,{pokemon:t,select:function(){e.props.selectPokemon(t),e.props.displayCatch("block")},link:"/pokemon/#/details"},n)}))})}),Object(s.jsx)("p",{style:{width:"100vw",textAlign:"center"},children:"by: Ihsan Fajar Ramadhan"})]}):Object(s.jsxs)(c.a.Fragment,{children:[Object(s.jsx)("div",{className:"ui",style:{textAlign:"center",justifyContent:"center",paddingTop:"3vh"},children:Object(s.jsx)("img",{alt:"logo",src:"/simplepokemon/pokemon/pokemon.svg",style:{width:"200px"}})}),Object(s.jsx)(C,{}),Object(s.jsxs)("div",{className:"ui",style:{textAlign:"center",justifyContent:"center",marginTop:"20vh"},children:[Object(s.jsx)("i",{className:"life ring outline loading icon massive blue"}),Object(s.jsx)("p",{className:"ui text blue",children:"Searching for nearby pokemons..."})]}),Object(s.jsx)("p",{style:{width:"100vw",textAlign:"center"},children:"by: Ihsan Fajar Ramadhan"})]})}}]),n}(c.a.Component),P=Object(d.b)((function(e){return{pokemons:e.pokemonLists}}),{addPokemon:function(e){return{type:"POKEMON_ADDED",payload:e}},selectPokemon:f,displayCatch:N})(A),M=function(e){Object(y.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(b.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={redirect:!1},e.Catch=function(){if(1===Math.round(Math.random())){e.props.catchPokemon(e.props.pokemon);var t=e.props.pokemon,n=localStorage.getItem("mypokemons");n?JSON.parse(n).length>0&&(n=JSON.parse(n),n=[e.props.pokemon].concat(Object(h.a)(n)),localStorage.setItem("mypokemons",JSON.stringify(n))):(console.log("new"),localStorage.setItem("mypokemons",JSON.stringify([t]))),alert("Catched!")}else alert("Failed!");e.setState({redirect:!0})},e}return Object(O.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(s.jsx)(l.a,{to:"mypokemons"}):this.props.pokemon.id?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"container-fluid",style:{textAlign:"center",justifyContent:"center",paddingTop:"3vh"},children:Object(s.jsx)("img",{alt:"logo",src:"/simplepokemon/pokemon/pokemon.svg",style:{width:"200px"}})}),Object(s.jsx)(C,{}),Object(s.jsx)("button",{onClick:this.Catch,className:"ui yellow button",style:{display:this.props.displayCatch,justifySelf:"center",width:"100%",marginTop:"5vh"},children:"Catch!"}),Object(s.jsxs)("div",{className:"ui two column grid",style:{padding:"2em"},children:[Object(s.jsx)("div",{className:"ui column",style:{position:"relative"},children:Object(s.jsx)("div",{className:"column",style:{position:"absolute",right:0,width:"30vw"},children:Object(s.jsx)(k,{pokemon:this.props.pokemon,link:"/details"})})}),Object(s.jsx)("div",{className:"column",children:Object(s.jsx)("div",{className:"ui list",children:this.props.pokemon.stats.map((function(e,t){return Object(s.jsxs)("div",{className:"item",children:[Object(s.jsx)("span",{className:"header",children:e.stat.name.toUpperCase()}),Object(s.jsx)("div",{className:"ui progress green","data-value":e.base_stat,id:"example5",children:Object(s.jsx)("div",{className:"bar",style:{width:Math.floor(e.base_stat/300*100)+"%"},children:Object(s.jsx)("div",{className:"progress",children:e.base_stat})})})]},t)}))})})]}),Object(s.jsx)("p",{style:{width:"100vw",textAlign:"center"},children:"by: Ihsan Fajar Ramadhan"})]}):Object(s.jsx)("div",{children:"nothing is selected"})}}]),n}(c.a.Component),S=Object(d.b)((function(e){return{pokemon:e.selectedPokemon,mypokemons:e.MyPokemons,displayCatch:e.Catch}}),{catchPokemon:function(e){return{type:"POKEMON_CATCHED",payload:e}}})(M),E=function(e){Object(y.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(b.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={pokemons:[]},e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("mypokemons"));e&&e.length>0&&this.setState({pokemons:e})}},{key:"render",value:function(){var e=this;return this.state.pokemons.length>0?Object(s.jsxs)(c.a.Fragment,{children:[Object(s.jsx)("div",{className:"container-fluid",style:{textAlign:"center",justifyContent:"center",paddingTop:"3vh"},children:Object(s.jsx)("img",{alt:"logo",src:"/simplepokemon/pokemon/pokemon.svg",style:{width:"200px"}})}),Object(s.jsx)(C,{}),Object(s.jsx)("div",{className:"ui main container maximum",children:Object(s.jsx)("div",{className:"ui column grid",style:{padding:"2em"},children:this.state.pokemons.map((function(t,n){return Object(s.jsx)(k,{select:function(){e.props.selectPokemon(t),e.props.displayCatch("none")},pokemon:t,link:"/details"},n)}))})}),Object(s.jsx)("p",{style:{width:"100vw",textAlign:"center"},children:"by: Ihsan Fajar Ramadhan"})]}):Object(s.jsxs)(c.a.Fragment,{children:[Object(s.jsxs)("div",{className:"ui",style:{textAlign:"center",justifyContent:"center",paddingTop:"3vh"},children:[Object(s.jsx)("img",{alt:"logo",src:"/simplepokemon/pokemon/pokemon.svg",style:{width:"200px"}}),Object(s.jsx)("div",{className:"ui tag green label",children:"My Pokemon Lists"})]}),Object(s.jsx)(C,{}),Object(s.jsxs)("div",{className:"ui",style:{textAlign:"center",marginTop:"20vh",justifyContent:"center"},children:[Object(s.jsx)("i",{className:"folder open outline icon massive blue"}),Object(s.jsx)("p",{className:"ui text blue",children:"You have no pokemon..."})]}),Object(s.jsx)("p",{style:{width:"100vw",textAlign:"center"},children:"by: Ihsan Fajar Ramadhan"})]})}}]),n}(c.a.Component),T=Object(d.b)((function(e){return{pokemons:e.MyPokemons}}),{selectPokemon:f,displayCatch:N})(E),D=Object(m.b)({pokemonLists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"POKEMON_ADDED"===t.type?[].concat(Object(h.a)(e),[t.payload]):e},selectedPokemon:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"POKEMON_SELECTED"===t.type?t.payload:e},MyPokemons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"POKEMON_CATCHED"===t.type?[].concat(Object(h.a)(e),[t.payload]):e},Catch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"none",t=arguments.length>1?arguments[1]:void 0;return"DISPLAY_CATCH"===t.type?t.payload:e}}),I=function(){return Object(s.jsx)(r.a,{children:Object(s.jsxs)(d.a,{store:Object(m.c)(D),children:[Object(s.jsx)(l.b,{path:"/",exact:!0,component:P}),Object(s.jsx)(l.b,{path:"/details",component:S}),Object(s.jsx)(l.b,{path:"/mypokemons",component:T})]})})};i.a.render(Object(s.jsx)(I,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.fbfe849c.chunk.js.map