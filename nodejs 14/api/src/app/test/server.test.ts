import {
    Request,
    Response,
  } from 'express';

const run = (req: Request, res: Response) => {
    try {
        return res.json({ success: true,  message: 'API FUNCIONANDO', data: [] })
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
};

export const test = {run}