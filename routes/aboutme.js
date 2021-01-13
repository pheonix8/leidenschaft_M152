/**
 *Description of index
 *@author Matti3939
 *@version 1.0
 *@since 13.01.2021
 */

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    return res.render("aboutme");
});

module.exports = router;