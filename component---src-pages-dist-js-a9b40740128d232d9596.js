(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0Ewi":function(e,a,t){"use strict";a.a=function(e,a){return+(Math.round(e+"e+"+a)+"e-"+a)}},"MKI+":function(e,a,t){"use strict";t.r(a);t("xfY5");var l=t("q1tI"),n=t.n(l),r=t("0Ewi"),c=t("4HCI"),m=t("Bl7J"),s=t("Wbzz"),o=function(e){var a=e.X1,t=e.Y1,l=e.X2,m=e.Y2;return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{block:!0},"d = sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2)"),n.a.createElement(c.a,{block:!0},"d = sqrt(("+l+" - "+a+")^2 + ("+m+" - "+t+")^2)"),n.a.createElement(c.a,{block:!0},"d = sqrt(("+(l-a)+")^2 + ("+(m-t)+")^2)"),n.a.createElement(c.a,{block:!0},"d = sqrt("+Math.pow(l-a,2)+" + "+Math.pow(m-t,2)+")"),n.a.createElement(c.a,{block:!0},"d = sqrt("+(Math.pow(l-a,2)+Math.pow(m-t,2))+")"),n.a.createElement(c.a,{block:!0},"d approx "+Object(r.a)(Math.sqrt(Math.pow(l-a,2)+Math.pow(m-t,2)),2)))},i="Find the distance between two points as the crow flies",u=Object(s.withPrefix)("/images/squairy_light.png");a.default=function(){var e=n.a.useState(""),a=e[0],t=e[1],l=n.a.useState(""),s=l[0],d=l[1],p=n.a.useState(""),E=p[0],b=p[1],N=n.a.useState(""),g=N[0],h=N[1];return n.a.createElement(m.a,{title:"Distancer",desc:i,image:u},n.a.createElement("div",{className:"row pt-2"},n.a.createElement("h1",{className:"col-12"},"Distancer"),n.a.createElement("h2",{className:"col-12"},i)),n.a.createElement("div",{className:"row pt-4"},n.a.createElement("div",{className:"col-12 col-sm-6 col-md input-group"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},"Point 1 X coord:")),n.a.createElement("input",{type:"number",value:a,onChange:function(e){return t(e.target.value)},className:"form-control text-right",min:"-999",max:"999",placeholder:"X1"})),n.a.createElement("div",{className:"col-12 d-sm-none"},n.a.createElement("br",null)),n.a.createElement("div",{className:"col-12 col-sm-6 col-md input-group"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},"Point 1 Y coord:")),n.a.createElement("input",{type:"number",value:s,onChange:function(e){return d(e.target.value)},className:"form-control text-right",min:"-999",max:"999",placeholder:"Y1"})),n.a.createElement("div",{className:"col-12 d-md-none"},n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("div",{className:"col-12 col-sm-6 col-md input-group"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},"Point 2 X coord:")),n.a.createElement("input",{type:"number",value:E,onChange:function(e){return b(e.target.value)},className:"form-control text-right",min:"-999",max:"999",placeholder:"X2"})),n.a.createElement("div",{className:"col-12 d-sm-none"},n.a.createElement("br",null)),n.a.createElement("div",{className:"col-12 col-sm-6 col-md input-group"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("span",{className:"input-group-text"},"Point 2 Y coord:")),n.a.createElement("input",{type:"number",value:g,onChange:function(e){return h(e.target.value)},className:"form-control text-right",min:"-999",max:"999",placeholder:"Y2"}))),n.a.createElement("div",{className:"row pt-4 pb-2"},n.a.createElement("h3",{className:"col-12"},"Points: ","("+a+", "+s+"), ("+E+", "+g+")"),n.a.createElement("h3",{className:"col-12"},"Answer: ",Object(r.a)(Math.sqrt(Math.pow(E-a,2)+Math.pow(g-s,2)),2)),n.a.createElement("div",{className:"col-12"},n.a.createElement("button",{type:"button",className:"btn btn-lg btn-light m-3","data-toggle":"modal","data-target":"#results"},"View more detailed results"))),n.a.createElement("div",{className:"modal fade",id:"results",tabIndex:"-1",role:"dialog","aria-labelledby":"results-label"},n.a.createElement("div",{className:"modal-dialog"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h5",{className:"modal-title",id:"results-label"},"More detailed results | points: ",n.a.createElement(c.a,null,"$("+a+", "+s+")$"),", ",n.a.createElement(c.a,null,"$("+E+", "+g+")$")),n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"×"))),n.a.createElement("div",{className:"modal-body"},n.a.createElement(o,{X1:Number(a),Y1:Number(s),X2:Number(E),Y2:Number(g)})),n.a.createElement("div",{className:"modal-footer"},n.a.createElement("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal"},"Close"))))))}}}]);
//# sourceMappingURL=component---src-pages-dist-js-a9b40740128d232d9596.js.map