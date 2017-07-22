Ext.define("HealthTrack.view.component.NumberRangeComboBox", {
    extend: "Ext.form.field.ComboBox",
    alias: "widget.rangecombobox",

    config: {
        start: 0,
        end: 10
    },

    valueField: "value",
    displayField: "value",
    forceSelection: true,

    initComponent: function() {
        this.callParent();
        this.store = this.initStore();
    },

    initStore: function() {
        var data = this.sequenceData(this.config.start, this.config.end);

        return Ext.create("Ext.data.Store", {
            fields: [ "value"],
            data: data
        });
    },

    sequenceData: function(start, end) {
        var result = [];

        this.range(start, end, function(n) {
            result.push({
                value: n
            });
        });

        return result;
    },

    range: function(start, end, callback) {
        var data = [];
        if (start > end) {
            for(var i=start;i>=end;i--) {
                data.push(callback(i));
            }
        } else {
            for(var i=start;i<=end;i++) {
                data.push(callback(i));
            }
        }
        return data;
    }
});