(this["webpackJsonpconnie-personal-site"]=this["webpackJsonpconnie-personal-site"]||[]).push([[0],{150:function(e,n,t){},167:function(e,n,t){"use strict";t.r(n);var a=t(0),s=t(47),c=t.n(s),i=t(79),o=(t(150),t(151),t(26)),r=t(177),l=t(179),j=t(5),m=t(180),b=t(178),u=t(114),g=t(7);var h=function(e){var n=e.text,t=e.language,a=e.showLineNumbers;return Object(g.jsx)(u.a,{text:n,language:t,showLineNumbers:a,theme:u.b,wrapLines:!0})},d={Python:'\n    \n    # If I am a class instance...\n\n    class SoftwareEngineer(DataAnalyst):\n    \n        def __init__(self, **kwargs):\n            for key, value in kwargs.items():\n                setattr(self, key, value)\n        \n        def greetings(self):\n            print("Hello world, welcome to my website!")\n    \n    ConnieKang = SoftwareEngineer(\n        name: "Connie Kang",\n        pronounce: "she/her",\n        email: "hqk1121@gmail.com",\n        canHire: True\n    )\n\n    ConnieKang.greetings()\n\n        ',Ruby:'\n    \n    # If I am a class instance...\n\n    class SoftwareEngineer << DataAnalyst\n\n        def initialize(*args)\n            @name, @pronouns, @email, @canHire, *nada = args\n            fail "Too many arguments" unless nada.empty?\n        end\n\n        def greetings\n            p "Hello World, welcome to my website!\n        end\n\n    end\n\n    ConnieKang = SoftwareEngineer.new(\n        name: "Connie Kang",\n        pronounce: "she/her",\n        email: "hqk1121@gmail.com",\n        canHire: True\n    )\n\n    ConnieKang.greetings\n\n    ',JavaScript:'\n    \n    // If I am a class instance...\n\n    class SoftwareEngineer extends DataAnalyst {\n\n        constructor(args) {\n            Object.assign(this, args);\n        }\n\n        greetings() {\n            console.log("Hello world, welcome to my website!");\n        }\n    }\n    \n    let ConnieKang = new SoftwareEngineer({\n        name: "Connie Kang",\n        pronounce: "she/her",\n        email: "hqk1121@gmail.com",\n        canHire: True\n    });\n\n    ConnieKang.greetings();\n\n    '};var x=function(){var e=Object(a.useState)("Python"),n=Object(o.a)(e,2),t=n[0],s=n[1],c=Object(a.useState)(d.Python),i=Object(o.a)(c,2),l=i[0],j=i[1];return Object(g.jsx)(r.a,{children:Object(g.jsxs)(m.a,{id:"homepage",children:[Object(g.jsx)(m.a.Column,{mobile:1,tablet:2,computer:4}),Object(g.jsxs)(m.a.Column,{mobile:14,tablet:12,computer:8,children:[Object(g.jsx)(b.a,{placeholder:"Python",onChange:function(e,n){var t=n.value;s(t),j(d[t])},search:!0,selection:!0,options:[{key:1,text:"Python",value:"Python"},{key:2,text:"Ruby",value:"Ruby"},{key:3,text:"JavaScript",value:"JavaScript"}],value:t}),Object(g.jsx)("div",{children:Object(g.jsx)(h,{text:l,language:t,showLineNumbers:!1})})]}),Object(g.jsx)(m.a.Column,{mobile:1,tablet:2,computer:4})]})})};var O=function(){return Object(g.jsx)(r.a,{text:!0,children:Object(g.jsx)("h2",{children:"It me CONNIEEE"})})};var p=function(){var e=Object(a.useState)("home"),n=Object(o.a)(e,2),t=n[0],s=n[1],c=function(e,n){var t=n.name;return s(t)};return Object(g.jsxs)("div",{className:"app",children:[Object(g.jsx)(r.a,{children:Object(g.jsxs)(l.a,{size:"huge",pointing:!0,secondary:!0,id:"menu",children:[Object(g.jsx)(l.a.Item,{id:"brand",as:i.b,to:"/",name:"",onClick:c,header:!0,children:"Connie Kang"}),Object(g.jsxs)(l.a.Menu,{position:"right",children:[Object(g.jsx)(l.a.Item,{name:"about me",as:i.b,to:"/about",active:"about me"===t,onClick:c}),Object(g.jsx)(l.a.Item,{name:"project",active:"project"===t,onClick:c}),Object(g.jsx)(l.a.Item,{name:"blog",active:"blog"===t,onClick:c}),Object(g.jsx)(l.a.Item,{name:"contact",active:"contact"===t,onClick:c})]})]})}),Object(g.jsxs)(j.c,{children:[Object(g.jsx)(j.a,{path:"/",element:Object(g.jsx)(x,{})}),Object(g.jsx)(j.a,{path:"/about",element:Object(g.jsx)(O,{})})]})]})};c.a.render(Object(g.jsx)(i.a,{children:Object(g.jsx)(p,{})}),document.getElementById("root"))}},[[167,152,153]]]);
//# sourceMappingURL=main.09f5e86a.chunk.js.map