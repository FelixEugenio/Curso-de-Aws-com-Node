import * as lambda  from 'aws-cdk-lib/aws-lambda';
import  * as lambdaNodeJs from 'aws-cdk-lib/aws-lambda-nodejs';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as path from 'path';

export class ProductsAppStack extends cdk.Stack {
    readonly productsFechHandler: lambdaNodeJs.NodejsFunction;
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {

    super(scope, id, props);

    this.productsFechHandler = new lambdaNodeJs.NodejsFunction(this, 'ProductsFetchFunction', {
        functionName: 'ProductsFetchFunction',
        entry:"lambda/products/productFechFunction.ts",
        handler: 'handler',
        memorySize: 128,
        timeout: cdk.Duration.seconds(5),
        bundling: {
            minify: true,
            sourceMap: false
        }
  })
}
}    