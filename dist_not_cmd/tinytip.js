// tinytip 1.0.0
// author: karaschee@gmail.com

;(function($) {

  var defaults = {
    txt: '操作进行中，请稍候',
    container: 'body',
    css: {}
  };

  var Tinytip = function(options){
    options = $.extend({}, defaults, options);

    // Initialize
    var wrapper = $('<div style="display:none;" class="tinytip_wrapper"></div>');
    var container = $(options.container);

    container.append( wrapper.html(options.txt) );
    if(!container.is('body')){
      wrapper.css({'position': 'absolute', 'top': '30px'});
      container.css({'position': 'relative'});
    }

    wrapper.css(options.css);

    this.wrapper = wrapper;
    this.options = options;

    Tinytip.tips = Tinytip.tips || [];
    Tinytip.tips.push(this);
  };

  Tinytip.hide = function(){
    $.each(Tinytip.tips, function(i, v){
      $(v).hide();
    });
  }

  $.extend(Tinytip.prototype, {
    show: function(txt){
      this.wrapper.html(txt);
      this.wrapper.show();
    },
    hide: function(){
      this.wrapper.hide();
    },
    reset: function(){
      this.wrapper.html(this.options.txt);
    }
  });

  $.extend({
    Tinytip: Tinytip
  });
})(jQuery);
