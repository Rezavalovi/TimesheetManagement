const { User } = require('../models');

class UserController {

    static async getUserInfo(req, res, next) {
        try {
            const user = await User.findAll({
                attributes: ['name', 'rate'],
            })
            res.json(user)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController