import { Method } from "aws-cdk-lib/aws-apigateway";
import { APIGatewayProxyEvent, APIGatewayProxyResult , Context} from "aws-lambda";

export async function handler(event:APIGatewayProxyEvent, context:Context):Promise<APIGatewayProxyResult> {

    const lambdaRequestId = context.awsRequestId;
    const apiRequestId = event.requestContext.requestId
    console.log(`Lambda request ID: ${lambdaRequestId}`);
    console.log(`API Gateway request ID: ${apiRequestId}`);
    const method = event.httpMethod;

    if(event.resource === '/products'){
       if(method === 'GET'){
           console.log('GET')

           return{
            statusCode:200,
            body:JSON.stringify({
                message:'GET products - OK'
            })
           }
       }
    }

    return {
        statusCode:404,
        body:JSON.stringify({
            message:'Bad  Request'
        })
    }
}