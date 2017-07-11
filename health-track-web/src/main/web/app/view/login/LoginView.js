Ext.define("HealthTrack.view.login.LoginView", {
    extend: "Ext.container.Viewport",
    controller: "login",

    layout: "center",
    style: {
        background: "url('resources/login-background.jpg') no-repeat fixed center",
        backgroundSize: "100% auto"
    },
    items: [
        {
            xtype: "login",
            reference: "loginForm"
        },
        {
            xtype: "registration",
            hidden: true,
            reference: "registrationForm"
        }
    ]
});