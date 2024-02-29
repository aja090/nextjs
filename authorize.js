const authorize = (req, res, next) => {

    const { users } = req.query

    if (users === 'aseel') {
        req.users = { id: 1, name: 'aseel' };
        next()

    } else {
        res.status(401).send('Unauthorize');

    }


}

export { authorize };