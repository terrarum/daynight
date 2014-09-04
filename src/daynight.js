(function($) {
    $(function() {

        var options = {};

        var now,
            dt       = 0,
            last     = timestamp(),
            slow     = 1, // slow motion scaling factor
            step     = 1/60,
            slowStep = slow * step,
            update   = update,
            render   = render,
            fpsmeter = new FPSMeter(options.fpsmeter || { decimals: 0, graph: true, theme: 'dark', left: '5px' });

        function frame() {
            fpsmeter.tickStart();
            now = timestamp();
            dt = dt + Math.min(1, (now - last) / 1000);
            while(dt > slowStep) {
                dt = dt - slowStep;
                update(step);
            }
            render(dt/slow);
            last = now;
            fpsmeter.tick();
            requestAnimationFrame(frame);
        }

        requestAnimationFrame(frame);

        function timestamp() {
            return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
        }

        //**************************************************************
        // THE SIMULATION ITSELF.

        var DAY_LENGTH = 10000;

        // Game starts at Daytime.
        var isDay = true;
        var newDay = DAY_LENGTH;

        var buildings = {
            batteries: 1,
            collectors: 1
        }

        var update = function(step) {
            var ms = step * 1000;
            newDay -= ms;
            if (newDay <= 0) {
                newDay = DAY_LENGTH;
                isDay = !isDay;
            }
        }

        var render = function(step) {
            $('.stat-daytime').html(isDay ? '1' : '0');
        }

    })
})(jQuery)