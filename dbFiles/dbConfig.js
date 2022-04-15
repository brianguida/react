const config = {
    user: 'Brian',
    password: 'test',
    server: 'DESKTOP-032UJEU',
    database: 'testing',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS'
    },
    port: 1433
}

module.exports = config;