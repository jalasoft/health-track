Ext.define("HealthTrack.view.component.LinkButton", {
    extend: "Ext.Component",
    xtype: "linkbutton",

    data: {
        title: "link"
    },
    autoEl: "section",
    tpl: "<a href='#'>{title}</a>",

    initComponent: function() {
        this.callParent();

        this.setData({
            title: this.title
        });

        var t = this;
        this.addListener({
            el : {
                delegate: "a",
                click: function(e) {
                    console.log(arguments);
                    e.preventDefault();
                    t.fireEvent("click");
                }
            }
        });
    },

    setTitle: function(newTitle) {
        this.setData({
            title: newTitle
        });
    },

    getTitle: function() {
        return this.getData().title;
    }
});