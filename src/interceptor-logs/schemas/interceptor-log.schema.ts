import * as mongoose from 'mongoose';

export const InterceptorLogSchema = new mongoose.Schema({
  error: Boolean,
  dateCreated: String,
  status: Number,
  statusText: String,
  url: String,
  ok: Boolean,
  type: Number,
  name: String,
  message: String,
});
