export default function ownerMiddleware(request, response, next) {
  if (request.method === 'OPTIONS') {
    next()
  }
  try {
    const id = request.user.id;
    if (id === request.params.id) {
      request.user.isOwner = true;
      next()
    } else {
      response.status(400).json({ message: 'You have no rights to do this' })
    }
  } catch (e) {
    console.log(e);
    response.status(400).json({ message: 'You have no rights to do this' })
  }

}