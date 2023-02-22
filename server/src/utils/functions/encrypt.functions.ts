import bcrypt from 'bcryptjs';

export const encryptPassword = (password: string): string => {
  const salt = bcrypt.genSaltSync();

  return bcrypt.hashSync(password, salt)
}

export const matchPasswords = (password: string, hash: string): boolean => {
  return bcrypt.compareSync(password, hash)
}
