import mongoose, { Document, Schema, PopulatedDoc, Types } from "mongoose";

export interface ITask extends Document  {
    name: string
    description: string
    tasks: PopulatedDoc<ITask & Document>[]
}

const ProjectSchema: Schema = new Schema ({
    name:{  
    type: String,
    trim: true,
    require: true
    },
    description:{  
    type: String,
    trim: true,
    require: true
    },
    project: {
        type: Types.ObjectId,
        ref: 'Project'
    },
    
},{timestamps:true})

const Task = mongoose.model<ITask>('Task',ProjectSchema)
export default Task