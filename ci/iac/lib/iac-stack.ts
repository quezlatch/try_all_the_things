import * as cdk from '@aws-cdk/core';
import * as codebuild from '@aws-cdk/aws-codebuild';

export class IacStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const project = new codebuild.Project(this, "Tatt", {
            source: codebuild.Source.gitHub({
                owner: 'quezlatch',
                repo: 'try_all_the_things',
                webhook: true, 
                webhookFilters: [
                    codebuild.FilterGroup.inEventOf(codebuild.EventAction.PUSH).andBranchIs('master'),
                ]
            })
        })
    }
}
