jQuery('#MPage1').bind('pageinit',function(event){
 	jQuery('#MButton1').bind('click',function(event){jsWrapper(event,'MButton1SubmitEvent','MButton1_MButton1Click')});

});
 var MPage1JSAjaxCallError=function(){
          jQuery("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h1>"+ jQuery.mobile.pageLoadErrorMessage +"</h1></div>")
						.css({ "display": "block", "opacity": 0.96, "top": jQuery(window).scrollTop() + 100 })
						.appendTo( jQuery.mobile.pageContainer )
						.delay( 800 )
						.fadeOut( 400, function(){
							jQuery(this).remove();
						});
        };
         	function MEdit1_updatehidden(event)
            {
            	edit=$('#MEdit1').get(0);
                hidden=$('#MEdit1_hidden').get(0);
                hidden.value=edit.value;
                            }
        