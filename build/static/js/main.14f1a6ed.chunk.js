(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,a){e.exports=a(216)},129:function(e,t,a){},216:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),s=(a(129),a(36)),i=a(37),l=a(40),u=a(38),m=a(41),h=a(219),g=(a(67),a(22)),p=a(221),d=a(42),f=a(222),E=["name","artists","key","mode","duration_ms","time_signature","rank"],v=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"populatetags",value:function(e){var t=Object.keys(e).filter(function(e){return!E.includes(e)}),a=[];return t.forEach(function(t){a.push(r.a.createElement(g.a,{span:3}," ",t," : ",r.a.createElement("b",null,e[t])))}),a}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,{style:{marginTop:20},itemLayout:"horizontal",dataSource:this.props.songs,renderItem:function(t){return r.a.createElement(p.a.Item,{style:{padding:10,background:"#f2f4f8",marginBottom:20},keys:t._id},r.a.createElement(p.a.Item.Meta,{keys:t._id,title:r.a.createElement(d.a,{gutter:16},r.a.createElement(g.a,{span:6},r.a.createElement(f.a,{title:"Rank",value:t.rank})),r.a.createElement(g.a,{span:6},r.a.createElement(f.a,{title:"Song Name",value:t.name})),r.a.createElement(g.a,{span:6},r.a.createElement(f.a,{title:"Artist",value:t.artists})),r.a.createElement(g.a,{span:6},r.a.createElement(f.a,{title:"Duration",value:(t.duration_ms/6e4).toFixed(2)+" Min"}))),description:r.a.createElement("div",null,r.a.createElement(d.a,{gutter:16,style:{marginTop:20,padding:10}},e.populatetags(t)))}))}})}}]),t}(n.Component),k=a(220),b=a(50),O=k.a.Search,y=b.a.Option,S=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).fetchSongs=function(){fetch("https://tunenow.herokuapp.com/api/songs?search=".concat(e.state.search,"&sortOn=").concat(e.state.sortOn)).then(function(e){return e.json()}).then(function(t){e.props.setSongData(t.data.songs)},function(e){})},e.onSearchChange=function(t){e.state.search=t,(t.length>2||!t.length)&&e.fetchSongs()},e.onSortByChange=function(t){e.state.sortOn=t,e.fetchSongs()},e.state={search:"",sortOn:"rank"},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchSongs()}},{key:"render",value:function(){return r.a.createElement(d.a,{gutter:16},r.a.createElement(g.a,{span:16},r.a.createElement(O,{placeholder:"input search text",onSearch:this.onSearchChange,enterButton:!0})),r.a.createElement(g.a,{span:8},r.a.createElement("label",null,"Sort By : "),r.a.createElement(b.a,{defaultValue:"rank",style:{width:120},onChange:this.onSortByChange},r.a.createElement(y,{value:"duration_ms"},"Time"),r.a.createElement(y,{value:"name"},"Name"),r.a.createElement(y,{value:"artists"},"Artists"),r.a.createElement(y,{value:"rank"},"Rank"))))}}]),t}(n.Component),j=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).setSongData=function(t){console.log(t),e.setState({songs:t})},e.state={songs:[]},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App",style:{padding:30}},r.a.createElement(h.a,null,r.a.createElement(S,{setSongData:this.setSongData}),r.a.createElement(v,{songs:this.state.songs})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},67:function(e,t,a){}},[[124,1,2]]]);
//# sourceMappingURL=main.14f1a6ed.chunk.js.map