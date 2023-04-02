import User from '../models/User.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config.js'
import Role from '../models/Role.js';
import { validationResult } from 'express-validator';

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles
  };
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' })
}

const isAllowed = (request) => {
  if (request.user.isOwner || request.user.hasRole) {
    return true;
  }
}

class UserController {
  async registration(request, response) {
    try {
      const validationErrors = validationResult(request)
      if (!validationErrors.isEmpty()) {
        return response.status(500).json(validationErrors)
      }
      const { username, firstname, lastname, surname, age, password } = request.body;
      const hashPassword = bcrypt.hashSync(password, 7)
      const userRole = await Role.findOne({ value: 'User' })
      const user = await User.create({
        username,
        firstname,
        lastname,
        surname,
        age,
        roles: [userRole.value],
        password: hashPassword,
      });

      response.json(user);
    } catch (e) {
      response.status(500).json(`No required data \n ${e}`)
    }
  }
  async authorization(request, response) {
    try {
      const { username, password } = request.body;
      const user = await User.findOne({ username }).select('+password')
      if (!user) {
        return response.status(400).json("User does not exist")
      }
      const validPassword = bcrypt.compareSync(password, user.password)
      if (!validPassword) {
        return response.status(400).json("Incorrect password")
      };
      const token = generateAccessToken(user._id, user.roles)

      return response.json({ token, id: user._id })
    } catch (e) {
      response.status(500).json(e)
    }
  }

  async getAll(request, response) {
    const users = await User.find();

    return response.json(users);
  }

  async getOne(request, response) {
    const { id } = request.params;
    let user = '';
    console.log(request);
    if(isAllowed(request)) {
      user = await User.findById(id).select('+password');
    } else {
      user = await User.findById(id);
    }
    return response.json(user);
  }

  async update(request, response) {
    const { id } = request.params;
    const updatedUser = await User.findByIdAndUpdate(id, request.body);

    return response.json(updatedUser);
  }

  async delete(request, response) {
    const { id } = request.params;
    const deletedUser = await User.findByIdAndDelete(id);

    response.json(deletedUser);
  }
}

export default new UserController();


// {
//   "username": "admin",
//     "firstName": "admin",
//       "lastName": "admin",
//         "surname": "admin",
//           "age" : 14,
//             "password": "admin"
// }