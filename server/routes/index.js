const project = require("./projectRouter")
const user = require("./userRouter")
const activity = require("./activityRouter")

const router = require("express").Router()

router.use("/users", user)
router.use("/activity", activity)
router.use("/project", project)

module.exports = router
