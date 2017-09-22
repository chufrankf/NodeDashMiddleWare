var config = {
    default: {
      host: 'localhost',
      username: 'ndev',
      password: 'password',
      database: 'NodeDashboard'
    }
  }
  
  exports.get = function get(env) {
    return config[env] || config.default;
  }