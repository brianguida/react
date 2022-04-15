const config = require('./dbConfig'),
    sql = require('mssql');

const getData = async() => {
    try{
        let pool = await sql.connect(config);
        let employees = pool.request().query("SELECT * FROM SUR")
        console.log(employees);
        return employees;
    }
    catch(error)
    {
        console.log(error);
    }
}

module.exports = {
    getData
}