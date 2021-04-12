(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(4),r=s.n(n),l=(s(14),s(0)),i=function(e){return Object(l.jsx)("header",{className:"min-w-full mx-auto bg-purple-300 px-10 py-4 flex justify-around items-center",children:Object(l.jsx)("h1",{className:"font-bold text-4xl",children:"Search your movie"})})},o=function(){return Object(l.jsx)("div",{className:"min-w-full mx-auto bg-purple-300",children:Object(l.jsxs)("p",{className:"items-center p-2.5 mx-10",children:["\xa9 ",(new Date).getFullYear()," Copyright Text"]})})},h=s(2),m=s(5),d=s(6),x=s(9),j=s(8),u=s(7),b=function(e){var t=e.Title,s=e.Poster,a=e.Year,c=e.imdbID;return Object(l.jsx)("div",{className:"sm:px-5 p-5 my-5",children:Object(l.jsxs)("a",{href:"https://www.imdb.com/title/".concat(c),className:"bg-white h-full block transform hover:scale-105 hover:shadow-2xl transition duration-700",children:[Object(l.jsx)("div",{children:"N/A"===s?Object(l.jsx)("img",{src:"https://via.placeholder.com/300x480?text=".concat(t),alt:"poster",className:"w-full"}):Object(l.jsx)("img",{src:s,alt:"poster"})}),Object(l.jsxs)("div",{className:"px-4 py-2 mt-2 bg-white",children:[Object(l.jsx)("h2",{className:"font-bold text-2xl text-gray-800",children:t}),Object(l.jsx)("p",{className:"sm:text-sm text-xs text-gray-700 px-2 mr-1 my-3",children:a})]})]})})},f=function(e){var t=e.films;return Object(l.jsx)("div",{className:"grid grid-cols-auto-fit my-5 sm:my-1",children:t?t.map((function(e,t){return Object(l.jsx)(b,Object(u.a)({},e),t)})):Object(l.jsx)("p",{className:"p-7 font-medium text-3xl",children:"Nothing found"})})},p=(s(16),function(){return Object(l.jsx)("div",{className:"loader ease-linear rounded-full border-4 border-t-8 border-gray-300 h-32 w-32"})}),g=function(e){Object(x.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(m.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={searchForm:"",films:[],checked:"all",sort:"all",loading:!0},e.handlerChange=function(t){e.setState((function(){return Object(h.a)({},t.target.name,t.target.value)}),(function(){return e.fetchFilms}))},e.checkboxChanger=function(t){e.setState((function(){return Object(h.a)({},t.target.name,t.target.value)}),e.fetchFilms)},e.handleKey=function(t){"Enter"===t.key&&e.fetchFilms()},e.fetchFilms=function(){e.setState({loading:!0}),fetch("https://www.omdbapi.com/?apikey=61ff04a9&s=".concat(e.state.searchForm).concat("all"===e.state.sort?"":"&type=".concat(e.state.sort))).then((function(e){return e.json()})).then((function(t){e.setState({films:t.Search,loading:!1})}))},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.omdbapi.com/?apikey=61ff04a9&s=naruto".concat("all"===this.state.sort?"":"&type=".concat(this.state.sort))).then((function(e){return e.json()})).then((function(t){e.setState({films:t.Search,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.films,s=e.sort,a=e.loading;return Object(l.jsx)("main",{className:"flex-grow  bg-gray-200",children:Object(l.jsxs)("div",{className:"p-5 flex flex-col m-auto max-w-6xl",children:[Object(l.jsxs)("div",{className:"relative flex-1",children:[Object(l.jsx)("input",{type:"search",name:"searchForm",placeholder:"Title",className:"p-4 text-gray-700 w-full bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400",value:this.state.searchForm,onChange:this.handlerChange,onKeyDown:this.handleKey}),Object(l.jsx)("button",{className:"bg-blue-600 text-white rounded font-lg absolute top-0 right-0 bottom-0 mt-1 mr-1 mb-1 px-8 font-semibold",onClick:this.fetchFilms,children:"Search"})]}),Object(l.jsxs)("div",{className:"flex gap-x-20 flex-wrap",children:[Object(l.jsxs)("label",{className:"inline-flex items-center mt-3",children:[Object(l.jsx)("input",{type:"radio",className:"form-radio h-5 w-5 text-gray-600",name:"sort",value:"all",onChange:this.checkboxChanger,checked:"all"===this.state.sort}),Object(l.jsx)("span",{className:"ml-2 text-gray-700",children:"All"})]}),Object(l.jsxs)("label",{className:"inline-flex items-center mt-3",children:[Object(l.jsx)("input",{type:"radio",className:"form-radio h-5 w-5 text-gray-600",name:"sort",value:"movie",onChange:this.checkboxChanger,checked:"movie"===this.state.sort}),Object(l.jsx)("span",{className:"ml-2 text-gray-700",children:"Movies"})]}),Object(l.jsxs)("label",{className:"inline-flex items-center mt-3",children:[Object(l.jsx)("input",{type:"radio",className:"form-radio h-5 w-5 text-gray-600",name:"sort",value:"series",onChange:this.checkboxChanger,checked:"series"===this.state.sort}),Object(l.jsx)("span",{className:"ml-2 text-gray-700",children:"Series"})]})]}),!0===a?Object(l.jsx)("div",{className:"mx-auto my-20 ",children:Object(l.jsx)(p,{})}):Object(l.jsx)(f,{films:t,sort:s})]})})}}]),s}(c.a.Component),O=function(){return Object(l.jsxs)("div",{className:"flex flex-col h-screen",children:[Object(l.jsx)(i,{}),Object(l.jsx)(g,{}),Object(l.jsx)(o,{})]})};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.38c0bce4.chunk.js.map