process.env.MONGODB_URI='mongodb+srv://hphpe:hdTlWN9GXSCN2Zry@cluster0.oc2cf.mongodb.net/mern_social?retryWrites=true&w=majority'
const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject'
}

export default config
