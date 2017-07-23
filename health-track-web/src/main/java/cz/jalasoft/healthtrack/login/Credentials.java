package cz.jalasoft.healthtrack.login;

/**
 * @author Honza Lastovicka (lastovicka@avast.com)
 * @since 2017-07-23.
 */
public class Credentials {

    private String user;
    private String password;

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
