(function () {
    'use strict';
    var init = function () {                
        var slider2 = new rSlider({
            target: '#time_range',
            values: [8, 8.3, 9, 9.3, 10, 10.3, 11, 11.3, 12, 12.3, 13, 13.3, 14, 14.3, 15, 15.3, 16, 16.3, 17, 17.3, 18, 18.3, 19],
            step: 1,
            range: true,
            set: [14, 15.3],
            tooltip: true,
            scale: true,
            labels: true,
            width: null,
            onChange: function (vals) {
                console.log(vals);
            }
        });
    };
    window.onload = init;
})();