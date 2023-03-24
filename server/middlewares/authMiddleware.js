import jwt from "jsonwebtoken"
import {SECRET_KEY} from '../config.js'

export default function authMiddleware(request, response, next) {
  if (request.method === 'OPTIONS') {
    next()
  }

  try {
    const token = request.headers.authorization.split(' ')[1]
    if (!token) {
      response.status(400).json({ message: 'You are not authorized' })
      next()
    }
    const decodedData = jwt.verify(token, SECRET_KEY)
    request.user = decodedData
    next()
  } catch(e) {
    response.status(400).json({message: "You are not authorized"})
  }
  
}