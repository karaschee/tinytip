define("karaschee/tinytip/1.0.0/tinytip-debug", [ "$-debug", "./tinytip-debug.css" ], function(require, exports, module) {
    var $ = require("$-debug");
    require("./tinytip-debug.css");
    var defaults = {
        txt: "操作进行中，请稍候",
        container: "body",
        css: {}
    };
    var Tinytip = function(options) {
        options = $.extend({}, defaults, options);
        // Initialize
        var wrapper = $('<div style="display:none;" class="tinytip_wrapper"></div>');
        var container = $(options.container);
        container.append(wrapper.html(options.txt));
        if (!container.is("body")) {
            wrapper.css({
                position: "absolute",
                top: "30px"
            });
            container.css({
                position: "relative"
            });
        }
        wrapper.css(options.css);
        this.wrapper = wrapper;
        this.options = options;
        Tinytip.tips = Tinytip.tips || [];
        Tinytip.tips.push(this);
    };
    Tinytip.hide = function() {
        $.each(Tinytip.tips, function(i, v) {
            $(v).hide();
        });
    };
    $.extend(Tinytip.prototype, {
        show: function(txt) {
            this.wrapper.html(txt);
            this.wrapper.show();
        },
        hide: function() {
            this.wrapper.hide();
        },
        reset: function() {
            this.wrapper.html(this.options.txt);
        }
    });
    module.exports = Tinytip;
});

define("karaschee/tinytip/1.0.0/tinytip-debug.css", [], function() {
    seajs.importStyle(".tinytip_wrapper{position:fixed;top:0;left:50%;margin-left:-75px;width:154px;padding:10px 10px 10px 30px;font-weight:700;font-size:12px;color:#666;background:url(loading.gif) 10px 50% no-repeat #eee;border:1px solid #ddd;border-top:1px solid #fff;border-radius:5px;border-top-left-radius:0;border-top-right-radius:0;z-index:20}");
});
