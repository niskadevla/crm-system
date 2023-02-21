import multer, { FileFilterCallback } from 'multer';
import moment from 'moment';
import { Request } from 'express';

import { DEFAULT_FILE_SIZE, FILE_NAME_TIME_FORMAT } from '../../utils';
import { allowedTypeRegExp } from '../../utils';

const storage = multer.diskStorage({
  destination(_: Request, file: Express.Multer.File, cb) {
    cb(null, 'uploads/');
  },
  filename(_: Request, file: Express.Multer.File, cb) {
    const date = moment().format(FILE_NAME_TIME_FORMAT);

    cb(null, `${date}-${file.originalname}`);
  }
});

const fileFilter = (_: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  allowedTypeRegExp.test(file.mimetype) ? cb(null, true) : cb(null, false);
};

const limits = {
  fileSize: DEFAULT_FILE_SIZE
};

export const Upload = multer({ storage, fileFilter, limits });
