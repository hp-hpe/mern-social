#!/bin/sh
cd dist
export MONGODB_URI='mongodb+srv://hphpe:hdTlWN9GXSCN2Zry@cluster0.oc2cf.mongodb.net/mern_social?retryWrites=true&w=majority'
export PORT=3030
echo $MONGODB_URI
echo $PORT
npm start