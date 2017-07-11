Ext.define("HealthTrack.view.login.LoginViewController", {
    extend: "Ext.app.ViewController",

    alias: "controller.loginview",

    init: function() {
        this.callParent();

        this.loginForm = this.lookupReference("loginForm");
        this.registrationForm = this.lookupReference("registrationForm");
    },

    onLogin: function() {
        //Ext.Msg.alert("Login", "Budu teprv zalogovavat");
        this.getView().destroy();

        var view = Ext.create("Sandbox.view.main.Main");
        view.show();
    },

    onGoToLogin: function() {
        this.registrationForm.hide();
        this.loginForm.show();
    },

    onGoToRegister: function() {
        this.loginForm.hide();
        this.registrationForm.show();
    },

    onRegister: function() {
        Ext.Msg.alert("Register", "Budu teprv registrovat");
    }
});