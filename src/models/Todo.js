import AWS from "aws-sdk";

const dynamoDB = new AWS.DynamoDB({
  apiVersion: "2012-08-10",
  region: "ap-northeast-2",
});
const putItem = (param) => new Promise((resolve, reject) => {
  dynamoDB.putItem(param, (err, data) => {
    if (err) reject(err);
    resolve(data);
  });
});


const add = async () => {
  const res = await putItem({
    Item: {
      "user": { "S": "1" },
      "id": { "S": "1" },
      "content": { "S": "aspdjqwd" },
    },
    ReturnConsumedCapacity: "NONE",
    TableName: "todo",
  });
}


export default {
  add,
};
