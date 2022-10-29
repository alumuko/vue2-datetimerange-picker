# vue2-datetimerange-picker

## Overview.
A JavaScript component that is a "[vanilla-datetimerange-picker](https://github.com/alumuko/vanilla-datetimerange-picker)" wrapper for using Vue.js ver 2.


## Requirements
-  [Moment.js](https://momentjs.com/) (version 2.29.1 is recommended.)
-  [Vue.js](https://vuejs.org/) (version 2.3～2.x is required, 2.6.14 is recommended.)
-  [vanilla-datetimerange-picker](https://github.com/alumuko/vanilla-datetimerange-picker) (latest version is recommended.)


### IE11
If you want to use on Internet Explorer 11, include [Polyfill](https://polyfill.io/v3/polyfill.js?ua=ie/11) to use CustomEvent, Object.assign, Element.prototype.closest and Element.prototype.matches features.


## Quick start using CDN.
1. Include Moment.js,  vanilla-datetimerange-picker.js and vanilla-datetimerange-picker.js.css and the js file in your webpage:
```
<link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alumuko/vanilla-datetimerange-picker@latest/dist/vanilla-datetimerange-picker.css">

<script src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js" type="text/javascript"></script>
<script src="https://cdn.jsdelivr.net/gh/alumuko/vanilla-datetimerange-picker@latest/dist/vanilla-datetimerange-picker.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.14/vue.js"></script>
<script src="https://cdn.jsdelivr.net/gh/alumuko/vue2-datetimerange-picker@latest/dist/vue2-datetimerange-picker.js"></script>
```
2. Put "datetimerange-picker" element into "BODY", and bind.sync start and end data in Vue instances.
```
<datetimerange-picker v-bind:start-date.sync="startDate" v-bind:end-date.sync='endDate'>

<script>
    new Vue({
        el: '#app',
        data: {
            startDate: moment().subtract(6, 'days').startOf('day').toDate(),
            endDate: moment().endOf('day').toDate(),
        }
    });
</script>
```

See [simple example page](examples/datetime-example-simple.html).

## Properties

### Synchronized properties
| Property | Type | Description |
----|----|---- 
| start-date | Date or string | The beginning date of the initially selected date range. If you provide a string, it must match the date format string set in your locale setting.|
| end-date | Date or string | The end date of the initially selected date range.|

## Methods
| Method | Description |
----|----
| updateDate(newStartDateTime, newEndDateTime) | update date |
| updateRanges(newRanges) | update datetime range selection (since 0.2.0 with vanilla-datetimerange-picker 0.2.0 or later)|

### Other properties
<details>
<summary>Almost same as Dan Grossman's bootstrap-daterangepicker Version 3.1</summary>

| Property | Type | Description |
----|----|---- 
| bind-element | string or input element | Bind outer input element. If not set, use internal input element. See [outer example page](examples/datetime-exampl-outer.html)|
| min-date | Date or string | The earliest date a user may select.|
| max-date | Date or string | The latest date a user may select. |
| max-span | object | The maximum span between the selected start and end dates. You can provide any object the moment library would let you add to a date. |
|show-dropdowns | true/**false** | Show year and month select boxes above calendars to jump to a specific month and year. |
 min-year | number | The minimum year shown in the dropdowns when **showDropdowns** is set to true.|
| max-year | number | The maximum year shown in the dropdowns when **showDropdowns** is set to true.|
| show-week-numbers | true/**false** | Show localized week numbers at the start of each week on the calendars.|
| show-iso-week-numbers | true/**false** | Show ISO week numbers at the start of each week on the calendars.|
| time-picker | true/**false** | Adds select boxes to choose times in addition to dates.|
| time-picker-increment | number | Increment of the minutes selection list for times (i.e. 30 to allow only selection of times ending in 0 or 30).|
  time-picker-twentyfour-hour | true/**false** | Use 24-hour instead of 12-hour times, removing the AM/PM selection.|
| time-picker-seconds | true/**false** | Show seconds in the timePicker. |
| ranges | object |Set predefined date ranges the user can select from. Each key is the label for the range, and its value an array with two dates representing the bounds of the range. See example code.|
| show-custom-range-label | **true**/false | Displays "Custom Range" at the end of the list of predefined ranges, when the ranges option is used. This option will be highlighted whenever the current date range selection does not match one of the predefined ranges. Clicking it will display the calendars to select a new range. |
| always-show-calendars | true/**false** | Normally, if you use the ranges option to specify pre-defined date ranges, calendars for choosing a custom date range are not shown until the user clicks "Custom Range". When this option is set to true, the calendars for choosing a custom date range are always shown instead. |
| opens | 'left'/**'right'**/'center' | Whether the picker appears aligned to the left, to the right, or centered under the HTML element it's attached to. |
| drops | **'down'**/'up'/'auto' | Whether the picker appears below (default) or above the HTML element it's attached to. |
| button-classes | string | CSS class names that will be added to both the apply and cancel buttons.|
| apply-button-classes | string | CSS class names that will be added only to the apply button.|
| cancel-button-classes | string | CSS class names that will be added only to the cancel button. |
| single-date-picker | true/**false** | Show only a single calendar to choose one date, instead of a range picker with two calendars. The start and end dates provided to your callback will be the same single date chosen.|
| auto-apply | true/**false** | Hide the apply and cancel buttons, and automatically apply a new date range as soon as two dates are clicked.|
| linked-calendars | **true**/false | When enabled, the two calendars displayed will always be for two sequential months (i.e. January and February), and both will be advanced when clicking the left or right arrows above the calendars. When disabled, the two calendars can be individually advanced and display any month/year.|
| is-invalid-date | function(moment) | A function that is passed each date in the two calendars before they are displayed, and may return true or false to indicate whether that date should be available for selection or not.|
| is-custom-date | function(moment) | A function that is passed each date in the two calendars before they are displayed, and may return a string or array of CSS class names to apply to that date's calendar cell.|
| auto-update-input | **true**/false | Indicates whether the date range picker should automatically update the value of the &lt;input&gt; element it's attached to at initialization and when the selected dates change.|
| parent-el | string | the parent element that the date range picker will be added to, if not provided this will be 'body'|
| locale-format | string | date time text locale format like "YYYY年MM月DD日 HH時mm分ss秒".|
| locale-separator | string | separator between 2 date times. default separator is "**-**"|
| locale-apply-label | string | label text of the apply button. default is "**Apply**"|
| locale-cancel-label | string | label text of the cancel button. default is "**Cancel**"|
| locale-week-label | string | label text of week number column like "**W**"|
| locale-days-of-week | array of 7 strings | 7 label texts of week column like **['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']** |
| locale-month-names | array of 12 strings | 12 label texts of month nameweek column. like **['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']** |
| locale-first-day | number | 0 = from Sunday, 1 = from Monday, ..., 6 = from Saturday |
> **strong text value** means default value.

</details>
See [datetime example page](/examples/datetime-example.html)

## Events
<details>
<summary> Several events are triggered on the element you attach the picker to, which you can listen for.</summary>

| Name |  Description |
----|---- 
| show.daterangepicker | Triggered when the picker is shown |
| hide.daterangepicker | Triggered when the picker is hidden |
| showCalendar.daterangepicker | Triggered when the calendar(s) are shown |
| hideCalendar.daterangepicker | Triggered when the calendar(s) are hidden |
| apply.daterangepicker |Triggered when the apply button is clicked, or when a predefined range is clicked |
| cancel.daterangepicker |Triggered when the cancel button is clicked |

### Usage
```
    window.addEventListener('apply.daterangepicker', function (ev) {
        console.log(ev.detail.startDate.format('YYYY-MM-DD'));
        console.log(ev.detail.endDate.format('YYYY-MM-DD'));
    });
```
</details>

## Special Thanks
 Special thanks to [Dan Grossman](http://www.dangrossman.info/)

## License
 [MIT License](LICENSE)
