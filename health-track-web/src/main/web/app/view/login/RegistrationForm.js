Ext.define("HealthTrack.view.login.RegistrationForm", {
    extend: "Ext.form.Panel",

    xtype: "registration",


    bodyPadding: 10,
    fieldDefaults: {
        labelAlign: "right",
        labelStyle: "font-weight: bold",
        labelPad: 10,
        labelWidth: 150
    },
    layout: 'vbox',
    width: 550,
    viewModel: {
        type: "registration"
    },
    bind: {
        title: '{title}'
    },

    items: [
        {
            xtype: "fieldset",
            title: "Login information",
            layout: "vbox",
            width: '100%',
            items: [
                {
                    xtype: "textfield",
                    fieldLabel: "Username",
                    emptyText: "Username",
                    width: '50%'
                },
                {
                    xtype: "textfield",
                    fieldLabel: "Password",
                    inputType: 'password',
                    emptyText: "Password",
                    width: '100%'
                },
                {
                    xtype: "textfield",
                    fieldLabel: "Password reentered",
                    inputType: 'password',
                    emptyText: "Password reentered",
                    width: '100%'
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: "Personal information",
            width: '100%',
            fieldDefaults: {
                labelWidth: 100
            },

            items: [
                {
                    xtype: "textfield",
                    fieldLabel: "Name",
                    emptyText: "Name",
                    width: '50%',
                    reference: 'name',
                    publishes: [
                        'value'
                    ]
                },
                {
                    xtype: "textfield",
                    fieldLabel: "Surname",
                    emptyText: "Surname",
                    width: '66%',
                    reference: 'surname',
                    publishes: [
                        'value'
                    ]
                },
                {
                    xtype: "textfield",
                    fieldLabel: "E-mail",
                    emptyText: "E-mail",
                    vtype: "email",
                    width: '66%'
                },
                {
                    xtype: 'dateselector',
                    fieldLabel: "Date of Birth"
                }
            ]
        }
    ],
    buttons: [
        {
            text: "Back",
            handler: "onGoToLogin"
        },
        {
            text: "Register",
            handler: "onRegister"
        }
    ]
});