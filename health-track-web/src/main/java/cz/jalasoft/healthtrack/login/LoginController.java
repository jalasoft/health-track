package cz.jalasoft.healthtrack.login;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Honza Lastovicka (lastovicka@avast.com)
 * @since 2017-07-23.
 */
@RestController
public class LoginController {

    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public ResponseEntity<Void> onLogin(
            @RequestBody
            Credentials credentials) {

        return ResponseEntity.ok(null);
    }
}
