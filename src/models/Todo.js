import dynamoose from "dynamoose";
dynamoose.AWS.config.update({
  region: "ap-northeast-2",
});

const TodoSchema = new dynamoose.Schema({
  userId: {
    type: String,
    hashKey: true,
  },
  id: {
    type: String,
    rangeKey: true,
  },
  content: {
    required: true,
    type: String,
  },
  done: {
    type: Boolean,
    required: true,
    default: false,
  },
}, {
  timestamps: true,
});

TodoSchema.statics.getAll = async (userId) => {
  return Todo.query("userId").eq(userId).exec();
};

export const Todo = dynamoose.model("todo", TodoSchema);
