(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Bl7J:function(e,t,a){"use strict";var n=a("dI71"),l=a("q1tI"),i=a.n(l),c=(a("wcMv"),a("Wbzz")),o=a("xXAp"),r=a.n(o),s=function(e){return i.a.createElement("header",{id:"header",className:"alt"},i.a.createElement(c.Link,{to:"/",className:"logo"},i.a.createElement("img",{style:{height:"95%",padding:"5%"},src:r.a})),i.a.createElement("nav",null,i.a.createElement("a",{className:"menu-link",onClick:e.onToggleMenu,href:"javascript:;"},"Menu")))},m=function(e){return i.a.createElement("nav",{id:"menu"},i.a.createElement("div",{className:"inner"},i.a.createElement("ul",{className:"links"},i.a.createElement("li",null,i.a.createElement(c.Link,{onClick:e.onToggleMenu,to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(c.Link,{onClick:e.onToggleMenu,to:"/research"},"Research")),i.a.createElement("li",null,i.a.createElement(c.Link,{onClick:e.onToggleMenu,to:"/art"},"Art")),i.a.createElement("li",null,i.a.createElement(c.Link,{onClick:e.onToggleMenu,to:"/webdev"},"Web Development")),i.a.createElement("li",null,i.a.createElement(c.Link,{onClick:e.onToggleMenu,to:"/blog"},"Blog")),i.a.createElement("li",null,i.a.createElement(c.Link,{onClick:e.onToggleMenu,to:"#aboutme"},"About me")))),i.a.createElement("a",{className:"close",onClick:e.onToggleMenu,href:"javascript:;"},"Close"))},u=function(e){return i.a.createElement("footer",{id:"footer"},i.a.createElement("div",{className:"inner"},i.a.createElement("ul",{className:"icons"},i.a.createElement("li",null,i.a.createElement("a",{href:"mailto:a.kochoska@gmail.com",className:"icon alt fa-envelope"},i.a.createElement("span",{className:"label"},"Email"))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.linkedin.com/in/angela-kochoska/",className:"icon alt fa-linkedin"},i.a.createElement("span",{className:"label"},"LinkedIn"))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/gecheline",className:"icon alt fa-github"},i.a.createElement("span",{className:"label"},"GitHub"))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.instagram.com/geche.art/",className:"icon alt fa-instagram"},i.a.createElement("span",{className:"label"},"Instagram")))),i.a.createElement("ul",{className:"copyright"},i.a.createElement("li",null,"© Untitled"),i.a.createElement("li",null,"Design: ",i.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))))},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isMenuVisible:!1,loading:"is-loading"},a.handleToggleMenu=a.handleToggleMenu.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}Object(n.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({loading:""})}),100)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},a.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},a.render=function(){var e=this.props.children;return i.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},i.a.createElement("div",{id:"wrapper"},i.a.createElement(s,{onToggleMenu:this.handleToggleMenu}),e,i.a.createElement(u,null)),i.a.createElement(m,{onToggleMenu:this.handleToggleMenu}))},t}(i.a.Component);t.a=g},w2l6:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),i=a("Bl7J");t.default=function(){return l.a.createElement(i.a,null,l.a.createElement("div",{id:"main",className:"alt"},l.a.createElement("section",{id:"one"},l.a.createElement("div",{className:"inner"},l.a.createElement("h1",null,"NOT FOUND"),l.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness.")))))}},wcMv:function(e,t,a){},xXAp:function(e,t,a){e.exports=a.p+"static/astropond_logo-59a19db44e7977d5d9f69e9217ae1b64.svg"}}]);
//# sourceMappingURL=component---src-pages-404-js-3ec51e08411040863d50.js.map