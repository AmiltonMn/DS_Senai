import mongoose, { Schema, Document } from 'mongoose'
interface ITask extends Document {
    title: string
    description: string
    completed: boolean
    createdAt: string
    updateAt: string
}

const taskSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    completed: { type: Boolean, required: true },
    createdAt: { type: String, required: true },
    updateAt: { type: Date, required: false },
})

const Task = mongoose.model<ITask>('Task', taskSchema);

export default Task;