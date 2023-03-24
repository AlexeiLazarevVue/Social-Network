export default function RoleMiddleware(roles) {
  return function (request, response, next) {
    if (request.method === 'OPTIONS') {
      next()
    }
    try {
      const userRoles = request.user.roles
      let hasRole = false
      userRoles.forEach(userRole => {
        if (roles.includes(userRole)) {
          hasRole = true
        }
      });
      if (hasRole) {
        next()
      } else {
        response.status(400).json({ message: 'You have no rights to do this' })
      }
    } catch (e) {
      console.log(e);
      response.status(400).json({ message: 'You have no rights to do this' })
    }
  }
}