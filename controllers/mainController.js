const cptList = require("../models/cptlist")
//Setting up database
const mysql = require("mysql")
require("dotenv").config({ path: "../.env" })

exports.getCPTList = async (req, res) => {
    try {
        res.json(cptList)
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occured" })
    }
}


exports.getCPTPrices = async (req, res) => {
    try {
        const db = mysql.createConnection({
            host: "ls-97ca44692fa72cde87991c41b9617342f6834eeb.c3ynveqcbsjy.us-east-2.rds.amazonaws.com",
            port: 3306,
            user: "dbmasteruser",
            password: process.env.mySQLPass,
            database: "mrf",
        })
        let code = req.query.cpt
        let hospital = req.params.id
        const q = `SELECT * FROM ${hospital} where billingcode = ?`
        db.query(q, [code],(err, data) => {
            if (err) return res.json(err)
            return res.json(data)
        })
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occured" })
    }
}

exports.getHospitalList = async (req, res) => {
    try {
        const db = mysql.createConnection({
            host: "ls-97ca44692fa72cde87991c41b9617342f6834eeb.c3ynveqcbsjy.us-east-2.rds.amazonaws.com",
            port: 3306,
            user: "dbmasteruser",
            password: process.env.mySQLPass,
            database: "mrf",
        })
        const q = `SHOW TABLES`
        db.query(q, (err, data) => {
            if (err) return res.json(err)
            return res.json(data)
        })
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occured" })
    }
}