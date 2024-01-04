#!/bin/sh

echo "Deploying to the cloud"
 
scp -r * dgoetz@slab2.ethz.ch:homepage/download/HS23

echo "Deployment complete!"