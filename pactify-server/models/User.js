import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    minlength: 6,
    required: true
  },
  role: {
    type: String,
    default: "Basic",
    required: true    
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
//   picture: {
//     type: mongoose.Schema.Types.Mixed,
//     default: null
//   }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;