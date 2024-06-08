export const login = async (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password || username === '' || password === '') {
        next(errorHandler(400, "All fields are required"))
    }

    try {
        const validUser = await User.findOne({ username })
        if (!validUser) {
            next(errorHandler(404, "User Not found"))
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validPassword) {
            return next(errorHandler(400, "Invalid Password"))
        }

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const {password: pass, ...rest} = validUser._doc;
        res.status(200).cookie('access_token', token, {
            httpOnly: true
        }).json( {message: "Login SuccessFull"})
        res.json()
    } catch (error) {
        next(error)
    }
}