import { Request, Response } from 'express'
import { MSG_ERROR } from '../../common/messages/messages.error'

const notFoundHandler = (_req: Request, res: Response) => {
  res.status(404)
  return res.json({ success: false , message: MSG_ERROR.notFoundHandler, data: [] })
}

export const ERROR_EXCEPTION ={ notFoundHandler }