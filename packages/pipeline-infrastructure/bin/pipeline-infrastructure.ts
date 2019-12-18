#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { PipelineInfrastructureStack } from '../lib/pipeline-infrastructure-stack';

const app = new cdk.App();
new PipelineInfrastructureStack(app, 'PipelineInfrastructureStack');