const bcrypt = require('bcryptjs');
const User = require('../../models/user.model');
const jwt =  require('jsonwebtoken');

module.exports = {
  createUser: async args => {
    try {
      const existingUser = await User.findOne({email: args.userInput.email})
      // user ist entweder 'undefined' oder ein objekt
      if (existingUser) {
        throw new Error('User already exists.');
      }
      const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
      const user = new User({
        email: args.userInput.email,
        firstName: args.userInput.firstName,
        lastName: args.userInput.lastName,
        password: hashedPassword
      });
      const result = await user.save();
      return { ...result._doc, password: null, _id: result.id };
    } catch (error) {
      throw error;
    }
  },
  // wenn ich das result kenne, kann ich objectdestructuring in der arrow function verwenden
  // wenn nicht, benutzer ich args => { // code }
  login: async ({ email, password }) => {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error('User does not exist!');
    }
    const isEqual =  await bcrypt.compare(password, user.password);
    if(!isEqual) {
      throw new Error('Password is incorrect!');
    }
    const token = jwt.sign({
      userId: user.id,
      email: user.email
    },
    'MY_SECRET_KEY_SHOULD_BE_OUTSOURCED!',
    // OPTIONAL:
    {expiresIn: '1h'}
    );
    return { userId: user.id, token: token, tokenExpiration: 1 };
  }
}