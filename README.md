Lumx-transition
============

Easy transition for Angular Ui-router.

##Documentation

[Documentation site](https://github.com/DevAndyLee/Angular-Hero-Sample)

###Install with Bower

```
bower install lumx-transition
```

##Usage

1. Include `lxTransition` as a dependency in your Angular app.

    ```js
    angular.module('app', ['lxTransition'])
    ```

2. Include the supplied CSS file.

3. Declare the page transitions to use on the `ui-view` element, including `lx-transition`:
    ```html
    <div ui-view class="page-transition lx-transition"></div>
    ```
4. Define the lumx options in your state:
    ```js
        $stateProvider.state("yourState", {
            url: "/",
            templateUrl: 'yourstate.html',
            controller: 'YourStateCtrl',
            lumx: {
                enter: {
                    options: {
                        duration: 500,
                        easing: 'easeInOutCirc',
                        classes: 'lx-transition--scale-up'
                    }
                },
                leave: {
                    options: {
                        duration: 500,
                        easing: 'easeInOutCirc',
                        classes: 'lx-transition--scale-down'
                    }
                }
            }
        });
    ```
