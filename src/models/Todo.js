import AWS from "aws-sdk";

const dynamoDB = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
const putItem = (param) => new Promise((resolve, reject) => {
  dynamoDB.putItem(param, (err, data) => {
    if (err) reject(err);
    resolve(data);
  });
});


const add = async () => {
  const res = await putItem({
    Item: {
      "user": "1",
      "id": "1",
      "content": "aspdjqwd",
    },
    ReturnConsumedCapacity: "NONE",
    TableName: "todo-mvc",
  });
}


export default {
  add,
};
