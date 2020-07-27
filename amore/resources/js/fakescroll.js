/* FakeScroll */


define(['ui', 'jquery', 'gsap', 'scrollto'], function(IG, $, gsap) {
    'use strict';

    function FakeScroll($target, speed) {
        this.$win = $(window);
        this.$target = $target;
        this.$faker = $('<span></span>');
        this.speed = typeof speed === 'number' ? number : 0.1;
        this.scrollTop = this.$win.scrollTop();
        this.y = this.scrollTop;
        this.isScrolling = false;
        this.resizeAfterTmr = null;

        IG.fakeScrollTop = this.y;

        this.init();
    }

    FakeScroll.prototype = {
        init: function() {
            var self = this;

            if(this.$target.length >= 2) {
                this.$_target = this.$target;
                this.$target = $('<div class="fakescroll"></div>').insertAfter(this.$target.last());

                this.$_target.appendTo(this.$target);
            }

            this.$target.css({
                position: 'fixed',
                left: 0,
                right: 0
            });

            this.$faker.css({
                position: 'relative',
                display: 'block',
                width: 1,
                height: this.$target.outerHeight()
            }).insertAfter(this.$target);

            this.$win.on({
                load: function() {
                    self.onResize();
                },
                resize: function() {
                    self.onResize();

                    if(self.resizeAfterTmr) {
                        clearTimeout(self.resizeAfterTmr);
                    }

                    self.resizeAfterTmr = setTimeout(function() {
                        self.onResize();
                    }, 300);
                },
                scroll: function() {
                    self.updatePos();
                    !self.isScrolling && self.update();
                }
            });
        },
        onResize: function() {
            this.updateSize();
            this.updatePos();
            !this.isScrolling && this.update();
        },
        updateSize: function() {
            this.$faker.css('height', this.$target.outerHeight());
        },
        updatePos: function() {
            this.scrollTop = this.$win.scrollTop();
        },
        update: function() {
            var self = this,
                distance;

            this.isScrolling = true;
            this.y += (this.scrollTop - this.y) * this.speed;
            IG.fakeScrollTop = this.y;
            distance = Math.abs(this.scrollTop - this.y);

            if(distance < 0.001) {
                this.y = this.scrollTop;
                this.isScrolling = false;
            }

            TweenMax.set(this.$target, {
                y: -this.y
            });

            if(this.isScrolling) {
                requestAnimationFrame(function() {
                    self.update.call(self);
                });
            }
        }
    };

    return FakeScroll;
});
