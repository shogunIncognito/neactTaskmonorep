import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Task {
  @Prop({ unique: true, required: true, trim: true })
  title: string;

  @Prop({ trim: true })
  description: string;

  @Prop({ required: true })
  done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
