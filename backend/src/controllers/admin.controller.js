import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Admin } from "../models/admin.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateTokens = async (userId) => {
  try {
    const user = await Admin.findById(userId);

    if (!user) {
      throw new ApiError(404, `User with ID ${userId} not found`);
    }

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      `Something went wrong while generating access and refresh tokens: ${error.message}`
    );
  }
};

const registerAdmin = asyncHandler(async (req, res) => {
  //get data
  //check whether email or username already exists
  //create user object in db
  //remove password and refresh token field from response
  //check for user creation
  //return res

  const { adminName, adminEmail, adminUsername, password } = req.body;

  if (
    [adminName, adminEmail, adminUsername, password].some(
      (field) => field?.trim === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await Admin.findOne({
    $or: [{ adminName }, { adminEmail }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with username or email already exists");
  }

  const user = await Admin.create({
    adminName,
    adminEmail,
    password,
    adminUsername,
  });

  const createdUser = await Admin.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, createdUser, "User created successfully!!!"));
});

const loginAdmin = asyncHandler(async (req, res) => {
  try {
    const { adminEmail, adminUsername, password } = req.body;

    if (!adminUsername && !adminEmail) {
      throw new ApiError(400, "Username or email is required");
    }

    const user = await Admin.findOne({
      $or: [{ adminUsername }, { adminEmail }],
    });

    if (!user) {
      throw new ApiError(400, "User not found");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
      throw new ApiError(401, "Invalid user credentials");
    }

    const { accessToken, refreshToken } = await generateTokens(user._id);
    const loggedInUser = await Admin.findById(user._id).select(
      "-password -refreshToken"
    );

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponse(
          200,
          { user: loggedInUser, accessToken, refreshToken },
          "User logged in successfully"
        )
      );
  } catch (error) {
    console.error("Error in loginUser:", error.message);
    throw error;
  }
});

export { registerAdmin, loginAdmin };
