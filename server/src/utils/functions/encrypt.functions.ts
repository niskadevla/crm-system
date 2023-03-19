import metautil from 'metautil';

export const encryptPassword = async (password: string): Promise<string> => {
  return await metautil.hashPassword(password);
}

export const matchPasswords = async (password: string, hash: string): Promise<boolean> => {
  return await metautil.validatePassword(password, hash);
}
