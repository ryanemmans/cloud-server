# Cloud Server

Created by Ryan Emmans

## Summary of Problem Domain

Deploy a simple Node.js server to EC2, using Elastic Beanstalk

### Task 1

- Create a new environment, using Elastic Beanstalk from the AWS Control Panel (GUI)
- Manually deploy your application to this environment by uploading a .zip file

### Task 2

- Using the same server, create a new environment using Elastic Beanstalk from your terminal
- Manually deploy your application to this environment by using `eb deploy`

## Links to application deployment

- [AWS GUI Deploy](http://lab16cloudserver-env.eba-jpphykbq.us-west-2.elasticbeanstalk.com/)
- [AWS CLI Deploy](http://cloud-server.eba-srgjq4y6.us-west-2.elasticbeanstalk.com/)
- [Pull Requests](https://github.com/ryanemmans/cloud-server/pulls?q=is%3Apr+is%3Aclosed)

## Process

```plaintext
When zipping for GUI deployment, include everything but node_modules

- Configure AWS credentials
- `AWS` CLI: `aws configure`
- `cd` into project directory
  - run `eb init` -> 3, to initialize application.
  - 2 for Create new Application
  - Select platform -> 1
  - Setup SSH -> no
  - run `eb create app-name`, to create your environment
  - `eb deploy`
  - `eb open`
```
