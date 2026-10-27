import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  title: { type: String, required: true },
  project: { type: String, required: true },
  assignee: { type: String, required: true },
  priority: { type: String, required: true, enum: ["Low", "Medium", "High"] },
  status: { type: String, required: true, enum: ["To Do", "In Progress", "Done"] },
  dueDate: { type: String }
}, { timestamps: true, versionKey: false });
export default mongoose.model('Task', schema);
