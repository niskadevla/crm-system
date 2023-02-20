const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const ENV_CONFIG = require('../../../env-config');
const { getUserByIdWithFields } = require('../../../models/user.models');

const AUTH_OPTIONS = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: ENV_CONFIG.JWT
};

const verifyCallback = async (payload, done) => {
  try {
    const user = await getUserByIdWithFields(payload.userId, 'email id');

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  } catch (err) {
    console.error(err);
  }
}

const useAuthentication = (app) => {
  app.use(passport.initialize());
  passport.use(new JwtStrategy(AUTH_OPTIONS, verifyCallback));
}

module.exports = useAuthentication;