define(function(require, exports, module) {

  var $ = require("$");
  require("./tinytip.css");

  var defaults = {
    txt: '操作进行中，请稍候'
  };

  var Tinytip = function(options){
    this.options = $.extend({}, defaults, options);

    // Initialize
    var wrapper = $('<div style="display:none;" class="tinytip_wrapper"></div>');
    wrapper.html(this.options.txt);
    $('body').append(wrapper);

    this.wrapper = wrapper;

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

  module.exports = Tinytip;
});
