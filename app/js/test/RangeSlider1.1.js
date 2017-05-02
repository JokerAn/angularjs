$.fn.AnInputRange = function(cfg){
    var userAgent = navigator.userAgent;
    // var isWebkit = (userAgent.indexOf("AppleWebKit") >= 0);
    var isIE = false;

    function isIE() {
        if (window.ActiveXObject || "ActiveXObject" in window) {
            isIE = true;
        } else {
            isIE = (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1
            && !(userAgent.indexOf("Opera") > -1));
            isIE = false;
        }
    }

    var min = cfg.min;
    var max = cfg.max;
    var step = cfg.step;
    var value = cfg.value;
    var me=this;

    $(me).attr('min', min)
        .attr('max', max)
        .attr('step', step)
        .attr('value', value);

    var event = null;
    if (isIE) {
        event = "change";
    } else {
        event = "input";
    }
    $(me).css( 'background-size',value + '% 100%' );
    console.log($(me).css( 'background-size'));
    $(me).bind(event, function(e){
        $(me).css( 'background-size',this.value + '% 100%' );
    });
};