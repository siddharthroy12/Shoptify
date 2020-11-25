import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1234', 10),
        isAdmin: true
    },
    {
        name: 'Vansh',
        email: 'vansh@example.com',
        password: bcrypt.hashSync('1234', 10),
    },
    {
        name: 'Saif',
        email: 'saif@example.com',
        password: bcrypt.hashSync('1234', 10),
    }
]

export default users