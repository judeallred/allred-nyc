Get-Date > www/last-deploy.txt
aws s3 sync www s3://www.allred.nyc --delete --profile allred-nyc
rm www/last-deploy.txt