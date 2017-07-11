Ext.define("HealthTrack.view.login.LoginForm", {
    extend: "Ext.form.Panel",
    xtype: "login",
    bodyPadding: "5, 20, 0, 20",
    border: true,
    title: "Log In",
    ui: "sracka",
    items: [
        {
            xtype: "textfield",
            fieldLabel: "User",
            name: "user",
            emptyText: "Username"
        },
        {
            xtype: "textfield",
            fieldLabel: "Password",
            name: "password",
            inputType: "password",
            emptyText: "Password"
        }
    ],
    buttons: [
        {
            text: "Log In",
            handler: "onLogin"
        }
    ],
    dockedItems: [
        {
            xtype: "toolbar",
            dock: "top",
            items: [
                {
                    xtype: "container",
                    flex: 1
                },
                {
                    xtype: "linkbutton",
                    title: "Register",
                    style: "padding: 0px 20px 0px 0px",
                    listeners: {
                        click: "onGoToRegister"
                    }
                }
            ]
        }
    ]
});