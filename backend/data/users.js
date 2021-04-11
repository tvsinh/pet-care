import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Quản trị viên',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Văn Sinh',
    email: 'vansinh@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
