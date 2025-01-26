import mongoose, { Schema } from "mongoose";

const petSchema = new Schema(
  {
    animal: {
      type: String,
      required: true,
    },
    petName: {
      type: String,
    },
    age: {
      type: Number,
    },
    petAvatar: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Pet = mongoose.model("Pet", petSchema);
