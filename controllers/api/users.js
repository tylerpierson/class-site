const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const checkToken = (req, res) => {
    console.log('req.user', req.user)
    res.json(req.exp)
}


module.exports = {
    create,
    index,
    show,
    update,
    destroy,
    jsonUsers,
    jsonUser,
    login,
}

// jsonUsers jsonUser
// viewControllers

function jsonUser (_, res) {
    res.json(res.locals.data.user)
}

function jsonUsers (_, res) {
    res.json(res.locals.data.users)
}

/****** C - Create *******/
async function create(req, res, next) {
    try {
        // Hash the user password before saving it to the database
        const hashedPassword = await bcrypt.hash(req.body.password, 10); // 10 is the saltRounds
        req.body.password = hashedPassword;

        // If campus exists, proceed with creating the user
        const user = await User.create(req.body);

        // Generate authentication token
        const token = await user.generateAuthToken();

        console.log('User created:', user);
        res.locals.data.user = user;
        console.log('Request body:', req.body);
        res.json({ user, token })
        next();
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

async function index(_, res, next) {
    try {
        const users = await User.find({})
        res.locals.data.users = users
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function show(req, res, next) {
    try {
        const user = await User.findById(req.params.id)
        res.locals.data.user = user
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function update(req, res, next) {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        res.locals.data.user = user;
        next();
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

async function destroy(req, res, next) {
    try {
        const user = await User
            .findByIdAndDelete(req.params.id)
            .exec();
        res.locals.data.user = user;
        res.json({ message: `${user.name} @${req.params.id} has been deleted successfully.` });
        next();
    }
    catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

function jsonUser (req, res) {
    res.json(res.locals.data.user)
}

function jsonUsers (req, res) {
    res.json(res.locals.data.users)
}

async function login(req, res) {
    try {
        const { email, password } = req.body;
        console.log('Login request received for email:', email);

        const user = await User.findOne({ email });
        console.log('User found:', user);

        if (!user) {
            console.log('User not found');
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const match = await bcrypt.compare(password, user.password);
        console.log('Password match:', match);

        if (!match) {
            console.log('Password does not match');
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const token = await user.generateAuthToken()
        res.json({ user, token })

        console.log('Login successful for user:', user, token);
        res.locals.data.user = user;
        res.locals.data.token = token;
        return
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

/* -- Helper Functions -- */

function createJWT (user) {
    return jwt.sign(
      // data payload
      {  user },
      process.env.SECRET,
      { expiresIn: '24h' }
    )
  }