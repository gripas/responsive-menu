/*!  
 * Mini projektas v1 (http://manowebas.lt/)
 * Copyright 2023 The  Authors Dariaus Jakaičio projektas
 * Licensed under MIT (https://github.com/gripas/responsive-menu/blob/main/LICENSE)
 */

$(document).ready(function() {
	
    $('.nav-toggle').click(function(){
      var collapse = $(this).attr('data-collapse');					
        let nMenu = function menu(){
        if($(this).css('display')=='none'){      
          t_change.html('<i class="fa fa-bars" style="color: rgba(226, 222, 241, 0.722);"></i>');
        }else{
          t_change.html('<i class="fa fa-bars" style="color: rgba(226, 222, 241, 0.722);"></i>');
        }
      }
      var t_change = $(this);
      $(collapse).toggle(nMenu);
    });
          
 
    $('.v2-toggle').click(function(){
      var collapse = $(this).attr('data-collapse_2');					
        let nMenu = function menu(){
        if($(this).css('display')=='none'){      
          t_change.html('<i class="fa fa-bars" style="color: rgba(226, 222, 241, 0.722);"></i>');
        }else{
          t_change.html('<i class="fa fa-bars" style="color: rgba(226, 222, 241, 0.722);"></i>');
        }
      }
      var t_change = $(this);
      $(collapse).toggle(nMenu);
    });
          
  });	
