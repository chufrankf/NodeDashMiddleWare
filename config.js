var config = {
    default: {
      host: '127.0.0.1',
      username: 'ndev',
      password: 'password',
      database: 'NodeDashboard',
      port: 8080,
      token_length: 3600, // 1 hour
      token_key: process.env.TOKEN
    }
  }
  
  exports.get = function get(env) {
    return config[env] || config.default;
  }