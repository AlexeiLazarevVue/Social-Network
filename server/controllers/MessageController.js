import Message from "../models/Message.js"

class MessageController {
  async getMessagesFromTo(request, response) {
    const { userId, toId } = request.body

    const messages = await Message.find({ userId: userId, toId, toId })

    return response.json(messages)
  }

  async createMessage(request, response) {
    const { userId, toId, content } = request.body
    const date = new Date(Date.now()).toUTCString();

    const message = await Message.create({
      userId,
      date,
      content,
      toId
    })

    return response.json(message)
  }
}

export default new MessageController()