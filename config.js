var config = {
    default: {
      host: 'localhost',
      username: 'ndev',
      password: 'password',
      database: 'NodeDashboard',
      port: 8080
    }
  }
  
  exports.get = function get(env) {
    return config[env] || config.default;
  }