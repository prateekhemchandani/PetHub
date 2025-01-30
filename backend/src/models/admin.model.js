import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const adminSchema = new Schema(
  {
    adminName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    adminUsername: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      index: true,
      trim: true,
    },
    adminEmail: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

adminSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

adminSchema.methods.generateAccessToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
      adminUsername: this.adminUsername,
      adminName: this.adminName,
      adminEmail: this.adminEmail,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

adminSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const Admin = mongoose.model("Admin", adminSchema);
