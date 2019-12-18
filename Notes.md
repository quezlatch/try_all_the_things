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