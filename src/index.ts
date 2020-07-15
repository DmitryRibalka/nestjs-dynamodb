export { DynamoDBModule } from './module/dynamodb.module'
export { InjectModel, ReturnModel } from './module/dynamodb.decorators'
export {
  attribute as Attribute,
  hashKey as HashKey,
  rangeKey as RangeKey,
  table as Table,
  autoGeneratedHashKey as AutoGeneratedHashKey,
  versionAttribute as VersionAttribute,
} from '@aws/dynamodb-data-mapper-annotations'
