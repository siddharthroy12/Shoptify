import path from 'path'
import express from 'express'
import request from 'request'
const router  = express.Router()

router.post('/', (req, res) => {
    const forwardReqConfig = {
        url: `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_KEY}`,
    }
    req.pipe(request.post(forwardReqConfig)).pipe(res)
})

export default router