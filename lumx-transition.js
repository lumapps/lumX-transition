(function()
{
    'use strict';

    angular.module('lxTransition', ['ui.router', 'ngAnimate'])
        .animation('.lx-transition', lxTransition);

    var definedTransitions = {
        toLeft: {
            start: {
                translateX: "0",
                translateZ: "0",
            },
            end: {
                translateX: "-100%",
                translateZ: "0",
            }
        },
        fromLeft: {
            start: {
                translateX: "-100%",
                translateZ: "0"
            },
            end: {
                translateX: "0",
                translateZ: "0",
            }
        },

        toRight: {
            start: {
                translateX: "0",
                translateZ: "0",
            },
            end: {
                translateX: "100%",
                translateZ: "0",
            }
        },
        fromRight: {
            start: {
                translateX: "100%",
                translateZ: "0"
            },
            end: {
                translateX: "0",
                translateZ: "0",
            }
        },

        toTop: {
            start: {
                translateY: "0",
                translateZ: "0",
            },
            end: {
                translateY: "-100%",
                translateZ: "0",
            }
        },
        fromTop: {
            start: {
                translateY: "-100%",
                translateZ: "0",
            },
            end: {
                translateY: "0",
                translateZ: "0",
            }
        },

        toBottom: {
            start: {
                translateY: "0",
                translateZ: "0",
            },
            end: {
                translateY: "100%",
                translateZ: "0",
            }
        },
        fromBottom: {
            start: {
                translateY: "100%",
                translateZ: "0",
            },
            end: {
                translateY: "0",
                translateZ: "0",
            }
        },

        fadeIn: {
            start: {
                opacity: 0.3
            },
            end: {
                opacity: 1
            }
        },
        fadeOut: {
            start: {
                opacity: 1
            },
            end: {
                opacity: 0.3
            }
        },

        scaleDown: {
            start: {
                scale: 1,
                opacity: 1
            },
            end: {
                scale: 0.8,
                opacity: 0
            }
        },
        scaleUp: {
            start: {
                scale: 0.8,
                opacity: 0
            },
            end: {
                scale: 1,
                opacity: 1
            }
        }
    };

    /**
     * Manage browser vendor names. From Transit (http://ricostacruz.com/jquery.transit/).
     */
    var div = document.createElement('div');
    var support = {};
    function getVendorPropertyName(prop)
    {
        // Handle unprefixed versions (FF16+, for example)
        if (prop in div.style)
        {
            return prop;
        }

        var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
        var prop_= prop.charAt(0).toUpperCase() + prop.substr(1);

        for (var i = 0; i < prefixes.length; ++i)
        {
            var vendorProp = prefixes[i] + prop_;
            if (vendorProp in div.style)
            {
                return vendorProp;
            }
        }
    }

    function checkTransform3dSupport()
    {
        div.style[support.transform] = '';
        div.style[support.transform] = 'rotateY(90deg)';
        return div.style[support.transform] !== '';
    }

    // Check for the browser's transitions support.
    support.animation                = getVendorPropertyName('animation');
    support.animationName            = getVendorPropertyName('animationName');
    support.animationDelay           = getVendorPropertyName('animationDelay');
    support.animationDuration        = getVendorPropertyName('animationDuration');
    support.animationTimingFunction  = getVendorPropertyName('animationTimingFunction');
    support.animationFillMode        = getVendorPropertyName('animationFillMode');
    support.transition               = getVendorPropertyName('transition');
    support.transitionDelay          = getVendorPropertyName('transitionDelay');
    support.transform                = getVendorPropertyName('transform');
    support.transformOrigin          = getVendorPropertyName('transformOrigin');
    support.filter                   = getVendorPropertyName('Filter');
    support.transform3d              = checkTransform3dSupport();

    var eventNames = {
        'transition':       'transitionend',
        'MozTransition':    'transitionend',
        'OTransition':      'oTransitionEnd',
        'WebkitTransition': 'webkitTransitionEnd',
        'msTransition':     'MSTransitionEnd'
    };

    // Detect the 'transitionend' event needed.
    var transitionEnd = support.transitionEnd = eventNames[support.transition] || null;

    var cssEase = {
        'ease':           'ease',
        'easeIn':         'ease-in',
        'easeOut':        'ease-out',
        'easeInOut':      'ease-in-out',
        'snap':           'cubic-bezier(0,1,.5,1)',
        'easeInCubic':    'cubic-bezier(.550,.055,.675,.190)',
        'easeOutCubic':   'cubic-bezier(.215,.61,.355,1)',
        'easeInOutCubic': 'cubic-bezier(.645,.045,.355,1)',
        'easeInCirc':     'cubic-bezier(.6,.04,.98,.335)',
        'easeOutCirc':    'cubic-bezier(.075,.82,.165,1)',
        'easeInOutCirc':  'cubic-bezier(.785,.135,.15,.86)',
        'easeInExpo':     'cubic-bezier(.95,.05,.795,.035)',
        'easeOutExpo':    'cubic-bezier(.19,1,.22,1)',
        'easeInOutExpo':  'cubic-bezier(1,0,0,1)',
        'easeInQuad':     'cubic-bezier(.55,.085,.68,.53)',
        'easeOutQuad':    'cubic-bezier(.25,.46,.45,.94)',
        'easeInOutQuad':  'cubic-bezier(.455,.03,.515,.955)',
        'easeInQuart':    'cubic-bezier(.895,.03,.685,.22)',
        'easeOutQuart':   'cubic-bezier(.165,.84,.44,1)',
        'easeInOutQuart': 'cubic-bezier(.77,0,.175,1)',
        'easeInQuint':    'cubic-bezier(.755,.05,.855,.06)',
        'easeOutQuint':   'cubic-bezier(.23,1,.32,1)',
        'easeInOutQuint': 'cubic-bezier(.86,0,.07,1)',
        'easeInSine':     'cubic-bezier(.47,0,.745,.715)',
        'easeOutSine':    'cubic-bezier(.39,.575,.565,1)',
        'easeInOutSine':  'cubic-bezier(.445,.05,.55,.95)',
        'easeInBack':     'cubic-bezier(.6,-.28,.735,.045)',
        'easeOutBack':    'cubic-bezier(.175, .885,.32,1.275)',
        'easeInOutBack':  'cubic-bezier(.68,-.55,.265,1.55)'
    };
    /**
     * End of Transit (http://ricostacruz.com/jquery.transit/)
     */

    function slugifyBuiltin(builtin)
    {
        return builtin.replace(/([A-Z]+)/g, function(match, group)
        {
            return '-' + group.toLowerCase();
        });
    }

    function getTransition(builtins, custom)
    {
        builtins = angular.isDefined(builtins) ? builtins.split(' ') : [];
        var result = {
            start: {},
            end: {}
        };

        for (var idx in builtins)
        {
            var definedTransition = definedTransitions[builtins[idx]];
            if (angular.isDefined(definedTransition))
            {
                for (var attrname in definedTransition.start)
                {
                    result.start[attrname] = definedTransition.start[attrname];
                }
                for (var attrname in definedTransition.end)
                {
                    result.end[attrname] = definedTransition.end[attrname];
                }
            }
        }

        if (angular.isDefined(custom))
        {
            for (var attrname in custom.start)
            {
                result.start[attrname] = custom.start[attrname];
            }
            for (var attrname in custom.end)
            {
                result.end[attrname] = custom.end[attrname];
            }
        }

        return result;
    }

    function animate($element, options, start, end, callback)
    {
        var transition = getTransition(options.builtin, { start: start, end: end });

        if (options.type === 'velocity' && angular.isDefined($element.velocity))
        {
            if (transition.start && Object.keys(transition.start).length > 0)
            {
                $element.velocity(transition.start, { duration: 0 });
            }

            $element.velocity(transition.end, {
                duration: options.duration,
                easing: options.easing,
                complete: callback
            });
        }
        else if (options.type === 'velocity' && angular.isDefined(window.Velocity))
        {
            if (transition.start && Object.keys(transition.start).length > 0)
            {
                Velocity($element[0], transition.start, { duration: 0 });
            }

            Velocity($element[0], transition.end, {
                duration: options.duration,
                easing: options.easing,
                complete: callback
            });
        }
        else
        {
            var duration = options.duration + 'ms';
            var easing = cssEase[options.easing];
            var fill = 'both';

            var name = '';

            var builtins = angular.isDefined(options.builtin) ? options.builtin.split(' ') : [];
            for (var idx in builtins)
            {
                if (name)
                {
                    name += ', ';
                }
                name += 'lxTransition' + builtins[idx].charAt(0).toUpperCase() + builtins[idx].substring(1) + ' ' + duration + ' ' + easing + ' ' + fill;
            }

            if (name)
            {
                $element[0].style[support.animation] = name;
            }

            $element[0].style[support.animationDuration] = duration;
            $element[0].style[support.animationTimingFunction] = easing;
            $element[0].style[support.animationFillMode] = fill;

            var classes = angular.isDefined(options.classes) ? options.classes.split(' ') : [];
            for (var classIdx in classes)
            {
                $element.addClass(classes[classIdx]);
            }

            setTimeout(callback, options.duration);
        }
    }

    function lxTransition($rootScope, $timeout)
    {
        var leaving = {
            state: undefined,
            params: undefined
        };
        var entering = {
            state: undefined,
            params: undefined
        };

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams)
        {
            leaving = {
                state: fromState,
                params: fromParams
            };
            entering = {
                state: toState,
                params: toParams
            };
        });

        return {
            enter: function(element, done)
            {
                if (!entering.state || !leaving.state || !entering.state.lumx)
                { // No transition at app start or if undefined
                    done();
                    return;
                }

                var data = entering.state.lumx.enter;
                $rootScope.$broadcast('lxEnterTransitionStart', element, data.options.duration);
                var $element = angular.element(element);
                var oldStyle = $element.attr('style');

                $element.addClass('lx-transition-enter');
                animate($element, data.options, data.start, data.end, function()
                {
                    $rootScope.$broadcast('lxEnterTransitionEnd', $element[0]);
                    $element.removeClass('lx-transition-enter');
                    $element.attr('style', oldStyle || '');

                    var classes = angular.isDefined(data.options.classes) ? data.options.classes.split(' ') : [];
                    for (var classIdx in classes)
                    {
                        $element.removeClass(classes[classIdx]);
                    }

                    done();
                });
            },
            leave: function(element, done)
            {
                if (!entering.state || !leaving.state || !leaving.state.lumx)
                { // No transition at app start
                    done();
                    return;
                }

                var data = leaving.state.lumx.leave;
                $rootScope.$broadcast('lxLeaveTransitionStart', element, data.options.duration);
                var $element = angular.element(element);
                var oldStyle = $element.attr('style');

                $element.addClass('lx-transition-leave');
                animate($element, data.options, data.start, data.end, function()
                {
                    $rootScope.$broadcast('lxLeaveTransitionEnd', $element[0]);
                    $element.removeClass('lx-transition-leave');
                    $element.attr('style', oldStyle || '');

                    var classes = angular.isDefined(data.options.classes) ? data.options.classes.split(' ') : [];
                    for (var classIdx in classes)
                    {
                        $element.removeClass(classes[classIdx]);
                    }

                    done();
                });
            }
        };
    }
})();
