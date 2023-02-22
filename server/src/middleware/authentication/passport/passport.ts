import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Express } from 'express';

import { ENV_CONFIG } from '../../../env-config';
import { getUserByIdWithFields } from '../../../models/user.models';
import { IJwtResponse } from '../../../utils';

const AUTH_OPTIONS = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: ENV_CONFIG.JWT
};

const verifyCallback = async (payload: IJwtResponse, done: any) => {
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

export const useAuthentication = (app: Express) => {
  passport.use(new JwtStrategy(AUTH_OPTIONS, verifyCallback));
  app.use(passport.initialize());
}
