(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(34)},20:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),i=n.n(o),s=(n(20),n(3)),c=n(4),u=n(7),l=n(5),m=n(6),h=n(9),p=n(36),d=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("h2",{className:"board-header",id:this.props.playersInfo.id+"-header"},this.props.playersInfo.name)}}]),t}(a.Component),f=n(10),y=function(e,t,n){var a=t,r=Object(f.a)(Array(t).fill(1).map(function(e,t){return 1+t})),o=function(){return 0===Math.max.apply(null,r)};return{name:e,length:t,coordinates:n,health:a,isSunk:o,hit:function(e){return r[e]=0,o()}}},v=function(){var e=Object(f.a)(Array(10).fill(1).map(function(e,t){return 1+t})),t=Object(f.a)(Array(10).fill(1).map(function(e,t){return String.fromCharCode(97+t).toUpperCase()})),n=[],a=[],r=[],o=[],i=[],s=[],c=[],u={1:{name:"Aircraft Carrier",length:5},2:{name:"Battleship",length:4},3:{name:"Submarine",length:3},4:{name:"Cruiser",length:3},5:{name:"Destroyer",length:2}},l=(function(){for(var n=0;n<10;n++)for(var a=0;a<10;a++)i.push(t[n]+e[a])}(),function(){for(var e=Object.entries(u).length,t=0;t<e;t++){var a=Object.entries(u)[t][1],r=y(a.name,a.length,a.coordinates);n.push(r)}}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.length;return Math.floor(Math.random()*e)}),m=function(e){return s.find(function(t){return t===e})};!function(){for(var a=0;a<n.length;a++){var r=n[a].coordinates=[],o=l(10);if(o<5){o=l(10);for(var i=0;i<n[a].length;i++){var c=t[o];r[i]=c+e[o+i],r[i]!==c+"undefined"&&m(r[i])!==r[i]||(r=n[a].coordinates=[],i=-1,o=l(10))}r.forEach(function(e){s.push(e)})}else{o=l(10);for(var u=0;u<n[a].length;u++){var h=[e[o]];r[u]=t[o+u]+h,r[u]!=="undefined"+h.toString()&&m(r[u])!==r[u]||(r=n[a].coordinates=[],u=-1,o=l(10))}r.forEach(function(e){s.push(e)})}}}();return{fleet:n,incoming:function(e,t){o.push(e);for(var i=0;i<n.length;i++){var s=n[i].coordinates,u=n[i].name,l=s.findIndex(function(t){return t===e});if(-1!==l){var m=n[i].hit(l,t);return r.push(e),s[l]=0,m?(c.push(u),m):m}if(-1===l&&4===i)return a.push(e),null}},randomShots:function e(){var t=i[Math.floor(Math.random()*i.length)];return 0===t||void 0!==o.find(function(e){return e===t})?e():t},squares:i,shotsFired:o,kills:c,hits:r,missed:a,shipSpots:s,randomNum:l}},b=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=[];return v().squares.forEach(function(n,a){t.push(r.a.createElement("div",{className:e.props.squaresClass,id:e.props.playersInfo.id+"-"+n,key:a,onClick:e.props.onClick},n))}),t}}]),t}(a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"boards",id:this.props.playersInfo.id+"-board"},r.a.createElement(b,{onClick:this.props.onClick,playersInfo:this.props.playersInfo,squaresClass:this.props.squaresClass}))}}]),t}(a.Component),k=0,w=function(e){var t=v(),n=function(e){var n=t.squares.findIndex(function(t){return t===e});return[1,-1,10,-10].map(function(e){return e+n}).map(function(e){return t.squares[e]}).filter(function(e){return void 0!==e}).filter(function(e){return!0!==t.missed.includes(e)}).filter(function(e){return!0!==t.hits.includes(e)})},a=function(e){return t.shipSpots.includes(e)},r=0;return{name:e,attack:function(e,n){return k++,t.incoming(e,n)},comp_attack:function(){var e=t.randomShots(),o=a(e),i=[].concat.apply([],t.hits.map(n));switch(r){case 0:return!0===o&&(r=1),document.getElementById("computer-"+e);case 1:var s=i[0];return 0===i.length?(r=0,document.getElementById("computer-"+e)):document.getElementById("computer-"+s);default:console.log("default")}},getName:function(){return e},board:t,check_wounded_ship:a}},C=function(){return k%2===0?E:j},E=w("Player 1"),j=w("Sir Francis Drake"),O=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={human:{name:E.name,id:"human"},computer:{name:j.name,id:"computer"}};return r.a.createElement("div",{className:"play-area"},r.a.createElement("div",{className:"board-wrappers",id:e.human.id+"-board-wrapper"},r.a.createElement(d,{playersInfo:e.human}),r.a.createElement(g,{playersInfo:e.human,onClick:this.props.onClick,squaresClass:this.props.squaresClass})),r.a.createElement("div",{className:"board-wrappers",id:e.computer.id+"-board-wrapper"},r.a.createElement(d,{playersInfo:e.computer}),r.a.createElement(g,{playersInfo:e.computer,onClick:this.props.onClick,squaresClass:this.props.squaresClass})))}}]),t}(a.Component),_=(n(22),n(24),n(26),n(28),n(30),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).enemy=function(){return C()===E?j:E},n.commentary_array=[],n.checkWin=function(){if(5===n.state.userNum||5===n.state.compNum){n.commentary_array=[];var e=n.enemy().name+" Wins the Game!!!";n.commentary_array.push(e);var t=n.commentary_array.map(function(e,t){return r.a.createElement(r.a.Fragment,{key:t},e,r.a.createElement("br",null))});n.setState({commentary:t,disableApp:"disabled",game_over:!0})}},n.computer_attack=function(){j.comp_attack().click()},n.handleClick=n.handleClick.bind(Object(h.a)(Object(h.a)(n))),n.state={userNum:0,compNum:0,commentary:"",disableApp:"",game_over:!1,squaresClass:"board-squares"},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){j.board.fleet.forEach(function(e){e.coordinates.forEach(function(e){document.getElementById("computer-"+e).setAttribute("class","playerShips")})})}},{key:"update_kills",value:function(){this.setState({userNum:E.board.kills.length,compNum:j.board.kills.length})}},{key:"update_commentary",value:function(e){var t=this.enemy().name,n=C().name,a=this.enemy().board.kills,o=a[a.length-1],i=this.enemy().name+" missed",s=t+" damaged "+n+"'s ship",c=t+" sunk "+n+"'s "+o;switch(e){case null:this.commentary_array.push(i);break;case!1:this.commentary_array.push(s);break;case!0:this.commentary_array.push(c),this.update_kills(),this.checkWin();break;default:console.log("update_commentary switch error")}6===this.commentary_array.length&&this.commentary_array.shift();var u=this.commentary_array.map(function(e,t){return r.a.createElement(r.a.Fragment,{key:t},e,r.a.createElement("br",null))});this.setState({commentary:u}),this.checkWin()}},{key:"handleClick",value:function(e){var t=this,n=C().attack(e.target.innerHTML,this.enemy());this.update_commentary(n),setTimeout(function(){t.checkWin(),C()===j&&!1===t.state.game_over&&t.computer_attack()},100)}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App "+this.state.disableApp},r.a.createElement("header",{className:"App-header"},"Battleship"),r.a.createElement("section",{className:"scoreboard"},E.name+"'s Score: "+this.state.userNum),r.a.createElement("section",{className:"scoreboard"},j.name+"'s Score: "+this.state.compNum),r.a.createElement("section",{id:"commentary-display"},this.state.commentary),r.a.createElement(O,{onClick:function(t){e.handleClick(t),function(t){var n=e.enemy().check_wounded_ship(t.target.innerHTML);!0===n?t.target.className="hit disabled":!1===n&&(t.target.className="miss disabled")}(t)},squaresClass:this.state.squaresClass})))}}]),t}(a.Component)),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(_,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");N?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):S(t,e)})}}()}},[[14,2,1]]]);
//# sourceMappingURL=main.be4548bf.chunk.js.map