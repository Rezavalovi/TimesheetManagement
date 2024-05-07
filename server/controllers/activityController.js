const { Activity } = require("../models");


class ActivityController {
    static async getAll(req, res, next) {
        try {
            const data = await Activity.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async getActivityById(req, res, next) {
        try {
            const { id } = req.params
            const data = await Activity.findAll({
                where: {
                    UserId: id
                }
            })

            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async addActivity(req, res, next) {
        try {
            const {title, startDate, finishDate, startTime, finishTime, duration } = req.body

            let body =
                { title, startDate, finishDate, startTime, finishTime, duration }
            const createdActivity = await Activity.create(body)
            res.status(200).json({
                message: "Activity added",
                data: createdActivity
            })
        } catch (error) {
            next(error);
        }
    }

    static async deleteActivity(req, res, next) {
        try {
            const { id } = req.params
            await Activity.destroy({
                where: {
                    id: id
                }
            })
            res.status(200).json({
                message: "Activity deleted",
            })
        } catch (error) {
            next(error);
        }
    }

    static async updateActivity(req, res, next) {
        try {
            let { id } = req.params
            let { title, startDate, finishDate, startTime, finishTime, duration } = req.body

            await Activity.update({
                title, startDate, finishDate, startTime, finishTime, duration 
            }, {
                where: {
                    id: id
                }
            })
            let data = await Activity.findByPk(id)
            if (!data) {
                throw { name: "NotFound" }
            }
            res.status(200).json(da)
        } catch (error) {
            next(error);
        }
    }

}

module.exports = ActivityController;