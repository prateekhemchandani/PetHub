import { asyncHandler } from "../utils/asyncHandler.js";
import { Pet } from "../models/pet.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const registerPet = asyncHandler(async (req, res) => {
  const { animal, petName, age, description } = req.body;

  if ([animal, petName, age, description].some((field) => field?.trim === "")) {
    throw new ApiError(400, "All fields are required");
  }

  // console.log(req.files);
  const avatarLocalPath = req.files?.avatar[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar file is required");
  }

  const pet = Pet.create({
    animal,
    petName,
    avatar: avatar.url,
    age,
    description,
  });
  if (!pet) {
    throw new ApiError(500, "Something went wrong while registering pet");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, pet, "Pet registered successfully"));
});

export { registerPet };
