import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./user.model";

export interface ITodo extends Document {
  text: string;
  completed: boolean;
  completedAt: number;
  _creator: IUser["_id"];
}

const TodoSchema = new Schema({
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completedAt: {
    type: Number,
    default: null,
  },
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const Todo = mongoose.model<ITodo>("Todo", TodoSchema);

export { Todo };
