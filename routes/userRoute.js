import { loginRequired } from '../controllers/loginRequired.js';
import { profile } from '../controllers/profile.js';
import { registration } from '../controllers/registration.js';
import { sign_in } from '../controllers//userAuth.js';

export const Routes = function(app) {
    app.route('/tasks').post(loginRequired, profile);
    app.route('/auth/register').post(registration);
    app.route('/auth/sign_in').post( sign_in);
    app.route('/profile').post( profile);
};