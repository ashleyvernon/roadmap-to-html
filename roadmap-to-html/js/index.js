function initializeSearch(){var t=$('#search-input input[type="text"]'),e=algoliasearch(ALGOLIA_APP_ID,ALGOLIA_PUBLIC_KEY).initIndex("test_ROADMAP");t.autocomplete({hint:!1},[{source:$.fn.autocomplete.sources.hits(e,{hitsPerPage:10}),displayKey:"title",templates:{suggestion:function(t){return'<a href="/roadmap-to-html/'+t.path+'">'+t._highlightResult.title.value+"</a>"}}}])}function px(t){return-1===(t+="").indexOf("px")&&(t+="px"),t}function handleTopPages(t){t.forEach(function(t){$("ul.top-pages").append('<li><h4><a href="'+t.url+'">'+t.title+"</a></h4></li>")})}function pullTopPages(){$.getJSON("https://s3.amazonaws.com/rr-roadmap-top-pages-checker/top_pages.json",handleTopPages)}var ALGOLIA_APP_ID="ER4XGAZU3H",ALGOLIA_PUBLIC_KEY="ad6b289aa74181fef926dc6133bfece7";$(function(){function t(){return c.css("left")===px(0)&&p.css("left")===px(l)}function e(t){t.stopImmediatePropagation(),n()}function a(){c.animate({left:px(0)}),p.animate({left:px(l)}),i&&p.on("click",e)}function n(){i&&p.off("click",e),c.animate({left:"-"+px(l)}),p.animate({left:px(0)})}var i=$("body").width()<900,o=$(document),p=($("body"),$("main")),c=$("#site-navigation"),l=px(c.css("width"));!1===i&&!1===t()&&a(),o.on("click","#js-toggle-menu",function(){t()?n():a()}),initializeSearch(),pullTopPages()});