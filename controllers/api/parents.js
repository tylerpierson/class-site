const Parent = require('../../models/parent')
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const checkToken = (req, res) => {
    console.log('req.parent', req.parent)
    res.json(req.exp)
}


module.exports = {
    create,
    index,
    show,
    update,
    destroy,
    jsonParents,
    jsonParent,
    login,
}

// jsonParents jsonParent
// viewControllers

function jsonParent (_, res) {
    res.json(res.locals.data.parent)
}

function jsonParents (_, res) {
    res.json(res.locals.data.parents)
}

async function create(req, res, next) {
    try {
        const { studentId, password } = req.body;

        // Check if the studentId exists in any User's studentIds array
        const userWithStudentId = await User.findOne({ studentIds: studentId });

        if (!userWithStudentId) {
            return res.status(400).json({ msg: 'Invalid student ID' });
        }

        // Hash the password before saving it to the database
        req.body.password = await bcrypt.hash(password, 10);

        // Create the new parent using the entire req.body object
        const parent = await Parent.create(req.body);

        // Generate authentication token
        const token = await parent.generateAuthToken();

        console.log('Parent created:', parent);
        res.locals.data.parent = parent;
        res.json({ parent, token });
        next();
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}



async function index(_, res, next) {
    try {
        const parents = await Parent.find({})
        res.locals.data.parents = parents
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function show(req, res, next) {
    try {
        const parent = await Parent.findById(req.params.id)
        res.locals.data.parent = parent
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function update(req, res, next) {
    try {
        const parent = await Parent.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        res.locals.data.parent = parent;
        next();
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

async function destroy(req, res, next) {
    try {
        const parent = await Parent
            .findByIdAndDelete(req.params.id)
            .exec();
        res.locals.data.parent = parent;
        res.json({ message: `${parent.name} @${req.params.id} has been deleted successfully.` });
        next();
    }
    catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

function jsonParent (req, res) {
    res.json(res.locals.data.parent)
}

function jsonParents (req, res) {
    res.json(res.locals.data.parents)
}

async function login(req, res) {
    try {
        const { email, password } = req.body;
        console.log('Login request received for email:', email);

        const parent = await Parent.findOne({ email });
        console.log('Parent found:', parent);

        if (!parent) {
            console.log('Parent not found');
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const match = await bcrypt.compare(password, parent.password);
        console.log('Password match:', match);

        if (!match) {
            console.log('Password does not match');
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const token = await parent.generateAuthToken()
        res.json({ parent, token })

        console.log('Login successful for parent:', parent, token);
        res.locals.data.parent = parent;
        res.locals.data.token = token;
        return
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

/* -- Helper Functions -- */

function createJWT (parent) {
    return jwt.sign(
      // data payload
      {  parent },
      process.env.SECRET,
      { expiresIn: '24h' }
    )
  }