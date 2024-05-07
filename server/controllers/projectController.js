const { Op } = require("sequelize");
const { Project } = require("../models");


class ProjectController {
    static async getAll(req, res, next) {
        try {
            const data = await Project.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async searchProject(req, res, next) {
        const { filter, search } = req.query;
        // console.log(search, "search")
        const paramQuerySQL = {};
        let limit;
        let offset;
        if (search !== '' && typeof search !== 'undefined') {
            paramQuerySQL.where = {
                title: { [Op.iLike]: `%${search}%` },
            };
        }

        // filtering by projectName
        if (filter !== '' && typeof filter !== 'undefined') {
            const query = filter.projectName.map((item) => ({
                [Op.eq]: item,
            }));

            paramQuerySQL.where = {
                projectId: { [Op.or]: query },
            };
        }

        try {
            const data = await Article.findAll(paramQuerySQL);
            if (data) {
                res.status(200).json(data);
            }
        } catch (error) {
            next(error);
        }
    }

    static async addProject(req, res, next) {
        try {
            const { projectName } = req.body

            let body =
                { projectName }
            const createdProject = await Project.create(body)
            res.status(200).json({
                message: "Project added",
                data: createdProject
            })
        } catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.params
            await Project.destroy({
                where: {
                    id: id
                }
            })
            res.status(200).json({
                message: "Project deleted",
            })
        } catch (error) {
            next(error);
        }
    }

    static async updateProject(req, res, next) {
        try {
            let { id } = req.params
            let { projectName } = req.body

            await Project.update({
                projectName
            }, {
                where: {
                    id: id
                }
            })
            let data = await Project.findByPk(id)
            if (!data) {
                throw { name: "NotFound" }
            }
            res.status(200).json(da)
        } catch (error) {
            next(error);
        }
    }

}

module.exports = ProjectController;