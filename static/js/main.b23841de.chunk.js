(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e){e.exports=[{value:"fantasy",label:"Fantasy"},{value:"thriller",label:"Thriller"},{value:"drama",label:"Drama"},{value:"mystery",label:"Mystery"},{value:"horror",label:"Horror"},{value:"satire",label:"Satire"},{value:"computers",label:"Computers"}]},35:function(e,t,n){e.exports={select:"Select_select__2GpZs"}},39:function(e,t,n){e.exports={list:"BookList_list__3ezp8"}},43:function(e,t,n){e.exports=n(94)},94:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),u=n.n(o),i=n(21),c=n(7),l=n(8),s=n(10),h=n(9),p=n(11),f=n(41),d=n(31),m=n.n(d),b=n(32),v=n.n(b),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"react",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"computers",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return v.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"+subject:").concat(t,"&startIndex=").concat(n)).then(function(e){return e.data})},S=n(36),O=n(2),j=n(3);function k(){var e=Object(O.a)([""]);return k=function(){return e},e}function y(){var e=Object(O.a)([""]);return y=function(){return e},e}function E(){var e=Object(O.a)([""]);return E=function(){return e},e}var w=j.a.form(E()),C=j.a.input(y()),x=j.a.button(k()),I=n(34),L=n(35),M=n.n(L),F=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",selectedOption:""},n.handleChangeInput=function(e){return n.setState({value:e.target.value})},n.handleChangeSelect=function(e){return n.setState({selectedOption:e})},n.handleSubmit=function(e){e.preventDefault();var t=n.props,a=t.resetState,r=t.onSubmit,o=t.setValue,u=n.state.value,i=n.state.selectedOption.value||"";a(),o(u,i),r(u,i),n.reset()},n.reset=function(){return n.setState({value:"",selectedOption:""})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.value,n=e.selectedOption;return r.a.createElement(w,{onSubmit:this.handleSubmit},r.a.createElement(C,{onChange:this.handleChangeInput,value:t}),r.a.createElement(S.a,{className:M.a.select,value:n,onChange:this.handleChangeSelect,options:I}),r.a.createElement(x,{type:"submit"},"Search"))}}]),t}(a.Component),B=n(39),D=n.n(B);function U(){var e=Object(O.a)([""]);return U=function(){return e},e}function _(){var e=Object(O.a)([""]);return _=function(){return e},e}function V(){var e=Object(O.a)([""]);return V=function(){return e},e}function A(){var e=Object(O.a)([""]);return A=function(){return e},e}function z(){var e=Object(O.a)([""]);return z=function(){return e},e}function J(){var e=Object(O.a)([""]);return J=function(){return e},e}function N(){var e=Object(O.a)(["\n  font-size: 18px;\n"]);return N=function(){return e},e}function q(){var e=Object(O.a)(["\n  display: block;\n  height: auto;\n"]);return q=function(){return e},e}function G(){var e=Object(O.a)(["\n  width: 50%;\n"]);return G=function(){return e},e}var H=j.a.li(G()),P=j.a.img(q()),R=j.a.h5(N()),T=j.a.p(J()),W=j.a.p(z()),Z=j.a.p(A()),K=j.a.p(V()),Q=j.a.p(_()),X=(j.a.p(U()),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={hide:!1},n.cutString=function(e){return e.substring(0,80)},n.handleShowMore=function(){n.setState({hide:!1})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.description.length>80&&this.setState({hide:!0})}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.description,a=e.authors,o=e.publisher,u=e.publishedDate,i=e.pageCount,c=e.imageLinks,l=this.state.hide;return r.a.createElement(H,null,r.a.createElement(P,{src:c.thumbnail}),r.a.createElement(R,null,t),l?r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null,"".concat(this.cutString(n),"...")," "),r.a.createElement("button",{type:"submit",onClick:this.handleShowMore},"show more")):r.a.createElement(T,null,n),r.a.createElement(W,null,a&&a.length>1?a.map(function(e){return r.a.createElement("span",{key:e,style:{marginRight:"10px"}},e)}):a),r.a.createElement(Z,null,o),r.a.createElement(K,null,u),r.a.createElement(Q,null,i))}}]),t}(a.Component));X.defaultProps={title:"Sorry! Unknown title",description:"Sorry! Unknown description",publisher:"Sorry! Unknown publisher",authors:["Sorry! Unknown author"],imageLinks:"https://dwsinc.co/wp-content/uploads/2018/05/image-not-found.jpg",publishedDate:"Sorry! Unknown published date",pageCount:"Sorry! Unknown page count"};var Y=function(e){var t=e.items;return r.a.createElement("ul",{className:D.a.list},t.map(function(e){return r.a.createElement(X,Object.assign({key:e.id},e))}))},$=function(e){return r.a.createElement("button",{onClick:e.onClick},e.children)},ee={position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},te=function(e){return e.map(function(e){var t=e.volumeInfo,n=e.id;return Object(f.a)({},t,{id:n})})},ne=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={books:[],isLoading:!1,error:null,isLoadMore:!1,value:"",genres:"",startIndex:0},n.indexIncrement=function(){return n.setState(function(e){return{startIndex:e.startIndex+10}})},n.resetState=function(){return n.setState({isLoadMore:!0,books:[],startIndex:0})},n.setValue=function(e,t){return n.setState({value:e,genres:t})},n.handleFetchBooks=function(e,t,a){n.setState({isLoading:!0}),g(e,t,a).then(function(e){var t=e.items;n.setState(function(e){return{books:[].concat(Object(i.a)(e.books),Object(i.a)(te(t)))}}),n.indexIncrement()}).catch(function(e){return n.setState({error:e,isLoadMore:!1})}).finally(function(){return n.setState({isLoading:!1})})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({isLoading:!0}),this.handleFetchBooks()}},{key:"render",value:function(){var e=this.state,t=e.books,n=e.isLoading,a=e.error,o=e.isLoadMore,u=e.value,i=e.genres,c=e.startIndex;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{onSubmit:this.handleFetchBooks,resetState:this.resetState,setValue:this.setValue}),n&&r.a.createElement(m.a,{name:"ball-clip-rotate-multiple",color:"blue",fadeIn:"none",style:ee}),0!==t.length&&r.a.createElement(Y,{items:t}),a&&r.a.createElement("p",null,"Whoops, something went wrong: ",a.message),0!==t.length&&o&&r.a.createElement($,{onClick:this.handleFetchBooks.bind(null,u,i,c)},"Load more"))}}]),t}(a.Component);u.a.render(r.a.createElement(ne,null),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.b23841de.chunk.js.map