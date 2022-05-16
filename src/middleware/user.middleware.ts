import { Request, Response, NextFunction } from 'express';
import User from '../interface/user.interface';

function validateUsername(user: User) {
  const { username } = user;
  if (!username) {
    const message = '"username" is required';
    return ({ status: 400, message });
  }

  if (username.length < 3) {
    const message = '"username" length must be at least 3 characters long';
    return ({ status: 422, message });
  }

  if (typeof username !== 'string') {
    const message = '"username" must be a string'; 
    return ({ status: 422, message });
  }
  return null;
}

function validateClass(user: User) {
  const { classe } = user;
  if (!classe) {
    const message = '"classe" is required';
    return ({ status: 400, message });
  }

  if (classe.length < 3) {
    const message = '"classe" length must be at least 3 characters long';
    return ({ status: 422, message });
  }

  if (typeof classe !== 'string') {
    const message = '"classe" must be a string'; 
    return ({ status: 422, message });
  }
}

function validateLevel(user: User) {
  const { level } = user;
  if (level < 1) {
    const message = '"level" must be greater than or equal to 1';
    return ({ status: 422, message });
  }

  if (!level) {
    const message = '"level" is required';
    return ({ status: 400, message });
  }

  if (typeof level !== 'number') {
    const message = '"level" must be a number'; 
    return ({ status: 422, message });
  }
}

function validatePassword(user: User) {
  const { password } = user;
  if (!password) {
    const message = '"password" is required';
    return ({ status: 400, message });
  }

  if (password.length < 8) {
    const message = '"password" length must be at least 8 characters long';
    return ({ status: 422, message });
  }

  if (typeof password !== 'string') {
    const message = '"password" must be a string'; 
    return ({ status: 422, message });
  }
}

export default function validateBody(req: Request, res: Response, next: NextFunction) {
  const user = req.body as User; 

  const errorName = validateUsername(user);
  if (errorName) return res.status(errorName.status).json({ message: errorName.message });

  const errorClasse = validateClass(user);
  if (errorClasse) return res.status(errorClasse.status).json({ message: errorClasse.message });

  const errorLevel = validateLevel(user);
  if (errorLevel) return res.status(errorLevel.status).json({ message: errorLevel.message });

  const errorPassword = validatePassword(user);
  if (errorPassword) { 
    return res.status(errorPassword.status).json({ message: errorPassword.message }); 
  }

  next();
}