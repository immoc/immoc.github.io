var QuoteEngine=function(id,data,formatter){var qe=this;this.data=data;this.formatter=formatter;this.init=function(){this.id=(typeof id=="object")?id:[id];this.addOnloadEvent(function(){qe.replace()})};this.replace=function(){for(var i=0;i<this.id.length;i++){var obj=document.getElementById(this.id[i]);var html="";if(typeof this.formatter=="function"){html=this.formatter(this.data)}else{html="<p class='qod-text'>"+this.data.quote+"</p>";html+="<p class='qod-author'><a href='"+this.data.permalink+"'> &mdash; "+this.data.author+"</a></p>"};obj.innerHTML=html}};this.addOnloadEvent=function(fnc){if(typeof window.addEventListener!="undefined")window.addEventListener("load",fnc,false);else if(typeof window.attachEvent!="undefined"){window.attachEvent("onload",fnc)}else{if(window.onload!=null){var oldOnload=window.onload;window.onload=function(e){oldOnload(e);window[fnc]()}}else window.onload=fnc}};this.init()}

new QuoteEngine('qod-quote', {"id":1390,"quote":"Nobody can tell you if what you're doing is good, meaningful or worthwhile. The more compelling the path, the more lonely it is.  ","author":"Hugh Macleod","permalink":"http:\/\/quotesondesign.com\/hugh-macleod\/"}, null);