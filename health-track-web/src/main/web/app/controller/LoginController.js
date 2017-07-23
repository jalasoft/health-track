Ext.define("HealthTrack.controller.LoginController", {
    extend: "Ext.app.Controller",

    login: function(credentials, callback) {

        Ext.Ajax.request({
            url: '/login',
            method: 'POST',
            jsonData: Ext.JSON.encode(credentials),

            success: function(response, opts) {
                console.log("SUCCESS");
                console.log(response);
                console.log(opts);

                callback.call();
            },

            failure: function(response, opts) {
                console.log("FAILURE");
                console.log(response);
                console.log(opts);

                callback.call();
            }
        });
    }
});