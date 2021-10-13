/**
* @author: Alumuko https://github.com/alumuko/alumuko
* @copyright: Copyright (c) 2021 Alumuko. All rights reserved.
* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
* @website: https://github.com/alumuko/vue2-datetimerange-picker
*
* Special thanks to Dan Grossman.
* This program is base on Dan Grossman's bootstrap-daterangepicker (version 3.1)
*/

Vue.component('datetimerange-picker', {
    //template: '<input type="text" :id="inputTextId" :class="inputTextClass" :size="inputTextSize" :style="inputTextStyle" />',
    props: {
        startDate: {
            type: [Date, String]
        },
        endDate: {
            type: [Date, String]
        },
        minDate: {
            type: [Date, String]
        },
        maxDate: {
            type: [Date, String]
        },
        maxSpan: {
            type: Object
        },
        showDropdowns: {
            type: Boolean
        },
        minYear: {
            type: [Number, String]
        },
        maxYear: {
            type: [Number, String]
        },
        showWeekNumbers: {
            type: Boolean
        },
        showIsoWeekNumbers: {
            type: Boolean
        },
        timePicker: {
            type: Boolean
        },
        timePickerIncrement: {
            type: [Number, String]
        },
        timePickerTwentyfourHour: {
            type: Boolean
        },
        timePickerSeconds: {
            type: Boolean
        },
        ranges: {
            type: Object
        },
        showCustomRangeLabel: {
            type: Boolean
        },
        alwaysShowCalendars: {
            type: Boolean
        },
        opens: {
            type: String
        },
        drops: {
            type: String
        },
        buttonClasses: {
            type: [String, Object]
        },
        applyButtonClasses: {
            type: String
        },
        applyClass: {
            type: String
        },
        cancelButtonClasses: {
            type: String
        },
        cancelClass: {
            type: String
        },
        dateLimit: {
            type: Object
        },
        singleDatePicker: {
            type: Boolean
        },
        autoApply: {
            type: Boolean
        },
        linkedCalendars: {
            type: Boolean
        },
        isInvalidDate: {
            type: Function
        },
        isCustomDate: {
            type: Function
        },
        autoUpdateInput: {
            type: Boolean
        },
        parentEl: {
            type: String
        },
        template: {
            type: String
        },
        // locale
        localeDirection: {
            type: String
        },
        localeFormat: {
            type: String
        },
        localeSeparator: {
            type: String
        },
        localeDaysOfWeek: {
            type: Object
        },
        localeMonthNames: {
            type: Object
        },
        localeFirstDay: {
            type: [Number, String]
        },
        localeAapplyLabel: {
            type: String
        },
        localeCancelLabel: {
            type: String
        },
        localeWeekLabel: {
            type: String
        },
        localeCustomRangeLabel: {
            type: String
        },
        // bind element
        bindElement: {
            type: [String, Object]
        },
        inputTextId: {
            type: String,
        },
        inputTextSize: {
            type: [Number, String],
        },
        inputTextClass: {
            type: String,
            default: 'datetimerange-picker-input'
        },
        inputTextStyle: {
            type: String,
            default: 'text-align: center'
        },
        onRangeChange: {
            type: Function,
        }
    },
    data: function () {
        return {
            picker: null
        }
    },
    render: function (createElement) {
        if (this.$props.bindElement)
            return createElement('span', {
                attrs: {
                    stype: "display: none"
                }
            });
        else {
            let textSize
                = this.$props.inputTextSize ? this.$props.inputTextSize :
                    this.$props.timePicker ? 40 : 24;
            if (typeof textSize === 'string')
                textSize = Number(textSize)
            return createElement('input', {
                attrs: {
                    type: 'text',
                    id: this.$props.inputTextId,
                    size: textSize,
                    class: this.$props.inputTextClass,
                    style: this.$props.inputTextStyle,
                }
            })
        };
    },
    mounted: function () {
        let vm = this;
        let pickerOption = {};
        if (this.startDate)
            pickerOption['startDate'] = this.startDate;
        if (this.endDate)
            pickerOption['endDate'] = this.endDate;
        if (this.minDate)
            pickerOption['minDate'] = this.minDate;
        if (this.maxDate)
            pickerOption['maxDate'] = this.maxDate;
        if (this.maxSpan)
            pickerOption['maxSpan'] = this.maxSpan;
        if (this.showDropdowns)
            pickerOption['showDropdowns'] = this.showDropdowns;
        if (this.minYear)
            if (typeof this.minYear === 'string')
                pickerOption['minYear'] = Number(this.minYear);
            else
                pickerOption['minYear'] = this.minYear;
        if (this.maxYear)
            if (typeof this.maxYear === 'string')
                pickerOption['maxYear'] = Number(this.maxYear);
            else
                pickerOption['maxYear'] = this.maxYear;
        if (this.showWeekNumbers)
            pickerOption['showWeekNumbers'] = this.showWeekNumbers;
        if (this.showIsoWeekNumbers)
            pickerOption['showISOWeekNumbers'] = this.showIsoWeekNumbers;
        if (this.timePicker)
            pickerOption['timePicker'] = this.timePicker;
        if (this.timePickerIncrement)
            if (typeof this.timePickerIncrement === 'string')
                pickerOption['timePickerIncrement'] = Number(this.timePickerIncrement);
            else
                pickerOption['timePickerIncrement'] = this.timePickerIncrement;
        if (this.timePickerTwentyfourHour)
            pickerOption['timePicker24Hour'] = this.timePickerTwentyfourHour;
        if (this.timePickerSeconds)
            pickerOption['timePickerSeconds'] = this.timePickerSeconds;
        if (this.ranges)
            pickerOption['ranges'] = this.ranges;
        if (this.showCustomRangeLabel)
            pickerOption['showCustomRangeLabel'] = this.showCustomRangeLabel;
        if (this.alwaysShowCalendars)
            pickerOption['alwaysShowCalendars'] = this.alwaysShowCalendars;
        if (this.opens)
            pickerOption['opens'] = this.opens;
        if (this.drops)
            pickerOption['drops'] = this.drops;
        if (this.buttonClasses)
            pickerOption['buttonClasses'] = this.buttonClasses;
        if (this.applyButtonClasses)
            pickerOption['applyButtonClasses'] = this.applyButtonClasses;
        if (this.applyClass)
            pickerOption['applyClass'] = this.applyClass;
        if (this.cancelButtonClasses)
            pickerOption['cancelButtonClasses'] = this.cancelButtonClasses;
        if (this.cancelClass)
            pickerOption['cancelClass'] = this.cancelClass;
        if (this.dateLimit)
            pickerOption['dateLimit'] = this.dateLimit;
        if (this.singleDatePicker)
            pickerOption['singleDatePicker'] = this.singleDatePicker;
        if (this.autoApply)
            pickerOption['autoApply'] = this.autoApply;
        if (this.linkedCalendars)
            pickerOption['linkedCalendars'] = this.linkedCalendars;
        if (this.isInvalidDate)
            pickerOption['isInvalidDate'] = this.isInvalidDate;
        if (this.isCustomDate)
            pickerOption['isCustomDate'] = this.isCustomDate;
        if (this.autoUpdateInput)
            pickerOption['autoUpdateInput'] = this.autoUpdateInput;
        if (this.parentEl)
            pickerOption['parentEl'] = this.parentEl;
        if (this.template)
            pickerOption['template'] = this.template;

        let localeOption = {};
        if (this.localeDirection)
            localeOption['direction'] = this.localeDirection;
        if (this.localeFormat)
            localeOption['format'] = this.localeFormat;
        if (this.localeSeparator)
            localeOption['separator'] = this.localeSeparator;
        if (this.localeDaysOfWeek)
            localeOption['daysOfWeek'] = this.localeDaysOfWeek;
        if (this.localeMonthNames)
            localeOption['monthNames'] = this.localeMonthNames;
        if (this.localeFirstDay)
            localeOption['firstDay'] = this.localeFirstDay;
        if (this.localeAapplyLabel)
            localeOption['aapplyLabel'] = this.localeAapplyLabel;
        if (this.localeCancelLabel)
            localeOption['cancelLabel'] = this.localeCancelLabel;
        if (this.localeWeekLabel)
            localeOption['weekLabel'] = this.localeWeekLabel;
        if (this.localeCustomRangeLabel)
            localeOption['customRangeLabel'] = this.localeCustomRangeLabel;
        if (this.localeWeekLabel)
            localeOption['weekLabel'] = this.localeWeekLabel;
        if (this.localeCustomRangeLabel)
            localeOption['customRangeLabel'] = this.localeCustomRangeLabel;
        pickerOption['locale'] = localeOption;

        let pickerBindElement = this.$props.bindElement ? this.$props.bindElement : this.$el;
        this.picker = new DateRangePicker(pickerBindElement, pickerOption,
            function (startDate, endDate) {
                if (typeof vm.startDate === 'string') {
                    if (vm.localeFormat)
                        vm.$emit('update:startDate', startDate.format(vm.localeFormat));
                    else
                        vm.$emit('update:startDate', startDate.format());
                } else {
                    vm.$emit('update:startDate', startDate.toDate());
                }
                if (typeof vm.endDate === 'string') {
                    if (vm.localeFormat)
                        vm.$emit('update:endDate', endDate.format(vm.localeFormat));
                    else
                        vm.$emit('update:endDate', endDate.format());
                } else {
                    vm.$emit('update:endDate', endDate.toDate());
                }
                if (vm.onRangeChange) {
                    vm.onRangeChange(startDate, endDate);
                }
            }
        );
    }
})
