Ext.define("HealthTrack.view.component.DateSelector", {
    extend: "Ext.form.FieldContainer",
    xtype: "dateselector",
    requires: [
        'HealthTrack.view.component.NumberRangeComboBox'
    ],
    layout: 'hbox',
    width: '100%',
    items: [
        {
            xtype: "rangecombobox",
            width: "33%",
            emptyText: "Year",
            margin: '0, 10, 0, 0',
            start: 2017,
            end: 1900
        },
        {
            xtype: "combobox",
            width: '33%',
            emptyText: "Month",
            margin: '0, 10, 0, 0',
            valueField: "month",
            displayField: "month",
            forceSelection: true,
            store: {
                fields: [ "month" ],
                data: [
                    { month: "January"},
                    { month: "February"},
                    { month: "March"},
                    { month: "April"},
                    { month: "May"},
                    { month: "June"},
                    { month: "July"},
                    { month: "August"},
                    { month: "September"},
                    { month: "October"},
                    { month: "November"},
                    { month: "December"}
                ]
            }
        },
        {
            xtype: "rangecombobox",
            width: "33%",
            emptyText: "Day",
            start: 1,
            end: 31
        }
    ]
});