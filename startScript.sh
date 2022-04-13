#!/bin/sh
cd dist
MONGODB_URI=mongodb://test-k8s.southeastasia.cloudapp.azure.com:27017 npm start
