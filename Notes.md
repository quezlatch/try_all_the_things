# The things that I did

Used as basis: https://github.com/Quramy/lerna-yarn-workspaces-example



## Get started
* Create repo on github
* `npm install --global lerna`
* `npm i -g aws-cdk`
* `npm i -g yarn`
* clone repo
* cd to repo
* `lerna init`
* set up lerna for yarn workspaces (package.json and lerna.json)

## Create first repo
* `cd packages`
* `mkdir mkdir pipeline-infrastructur` the application which will create build pipeline infrastructure
* `cd pipeline-infrastructure`
* `cdk init sample-app --language=typescript` is the template right? dunno
* `rm package-lock.json` `rm -fr node_modules` we want lerna to look after this for us
* `cd ../..`
* `lerna bootstrap` to make the magic happen (should only have one node_modules in root)
* update "typeRoots" to point to "../../node_modules/@types"
* in root `lerna run build`

## Gitpod looks like fun :)

* update gitpod yml to run latest node (using nvm) and install global packages we want
* tried fiddling with docker image but weirdness happens when you update node

## aws iam setup

* create aws admin user *tatt* (try all the things) with access key
* add credentials to gitpod env vars so i can try stuff
* I feel there is something that could be done with permission boundaries also

## eek! emergency!

* it looks as though gitpod is really unhappy if it doesn't get the
node it wants. experiment with .nvmrc to see if we can fix this.
