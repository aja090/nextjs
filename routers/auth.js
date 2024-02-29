import { Router } from 'express';

const router = Router()

router.post('/', (req, res) => {

    const { langaugename } = req.body

    if (langaugename) {
        res.status(200).send(`New langauge ${langaugename}`)

    } else {
        res.status(401).send('Can\'t accept any language')
    }
})

export default router;