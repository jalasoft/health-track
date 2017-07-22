Ext.define("HealthTrack.view.login.RegistrationViewModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.registration",

    formulas: {
        title: {
            bind: {
                name: '{name.value}',
                surname: '{surname.value}'
            },

            get: function(data) {

                var nameDefined =  data.name && data.name.length > 0;
                var surnameDefined = data.surname && data.surname.length > 0;

                if (nameDefined || surnameDefined) {
                    return "Registration of " + data.name + " " + data.surname;
                }

                return "Registration";
            }
        }
    }
});