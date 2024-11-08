import mongoose, { model, Schema } from "mongoose";

const taskModel = new Schema({
  taskName: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
  priority: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Task = mongoose.models.Task || model("Task", taskModel);
