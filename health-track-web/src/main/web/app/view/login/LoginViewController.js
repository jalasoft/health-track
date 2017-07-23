Ext.define("HealthTrack.view.login.LoginViewController", {
    extend: "Ext.app.ViewController",

    alias: "controller.loginview",

    init: function() {
        this.callParent();

        this.loginForm = this.lookupReference("loginForm");
        this.registrationForm = this.lookupReference("registrationForm");
    },

    onLogin: function() {
        var loginForm = this.getView().down("login");
        var credentials = loginForm.getValues();

        var loginController = HealthTrack.getApplication().loginController();
        var me = this;
        loginController.login(credentials, function() {

            me.getView().destroy();

            var view = Ext.create("HealthTrack.view.main.Main");
            view.show();
        });
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