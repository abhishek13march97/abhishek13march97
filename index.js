   
   $(document).ready(function()
   {
      $("a[href*='#about']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#about').offset().top }, 600, 'easeOutSine');
      });
      $("#PanelLayer").panel({animate: true, animationDuration: 200, animationEasing: 'easeOutCubic', dismissible: false, display: 'push', position: 'left'});
      $("a[href*='#skills']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#skills').offset().top }, 600, 'easeOutSine');
      });
      $("#progressbar_uidesign").progressbar(
      {
         value: 80,
         change: function() 
         {
            $("#progressbar_uidesign-label").text($(this).progressbar('value') + '%');
         }
      });
      $("#progressbar_jquery").progressbar(
      {
         value: 60,
         change: function() 
         {
            $("#progressbar_jquery-label").text($(this).progressbar('value') + '%');
         }
      });
      $("#progressbar_php").progressbar(
      {
         value: 75,
         change: function() 
         {
            $("#progressbar_php-label").text($(this).progressbar('value') + '%');
         }
      });
      $("#progressbar_html").progressbar(
      {
         value: 90,
         change: function() 
         {
            $("#progressbar_html-label").text($(this).progressbar('value') + '%');
         }
      });
      $("a[href*='#section3']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#section3').offset().top }, 600, 'easeOutCubic');
      });
   });
   
   $(document).ready(function()
   {
      var $progressbars = $('.ui-progressbar');
      
      $progressbars.each(function() 
      {
        var $obj = $(this);
        $obj.data('value', $obj.progressbar('option', 'value'));
        $obj.data('done', false);
        $obj.progressbar('option', 'value', 0);
      });
      $(window).bind('scroll', function() 
      {
         $progressbars.each(function() 
         {
            var $obj = $(this);
            if (!$obj.data('done') && $(window).scrollTop() + $(window).height() >= $obj.offset().top) 
            {
               $obj.data('done', true);
               $obj.animate({scroll: 1}, 
               { 
                  duration: 3000, 
                  step: function(now) 
                  {
                     var $obj = $(this);
                     var val = Math.round($obj.data('value') * now);
                     $obj.progressbar('option', 'value', val);
                  }
               });
            }
         });
      }).triggerHandler('scroll');
   });
   
   var wb_Timer1;
   function TimerStartTimer1()
   {
      wb_Timer1 = setTimeout(function()
      {
         var event = null;
         ShowPanel('PanelLayer', event);
      }, 200);
   }
   function TimerStopTimer1()
   {
      clearTimeout(wb_Timer1);
   }
   TimerStartTimer1();
   