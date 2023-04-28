// {
//   _id: '841f83110b3a1eb1911a2ead',
//   website: 'http://thegymbrats.com',
//   address: {
//     streetName: '815 E Hudson st',
//     city: 'Hoboken',
//     state: 'New Jersey',
//     zipCode: '07305'
//   },
//  phoneNumber: ‘551-667-9876’,
//  email: “thegymbrats@gmail.com
//  overallRating: 4.8,
//  reviewIds: [
//     '61f83110b3a1eb1911a2ead',
//     '61f83110b3a1eb1911a2eaa',
//     '61f83110b3a1eb1911a2eac'
//   ],
//  classIds: [
//     '41f83110b3a1eb1911a2ead',
//     '41f83110b3a1eb1911a2eaa',
//     '41f83110b3a1eb1911a2eac'
//   ],
//  maxCapacity: 40,

// } 

import gymsData from '../config/mongoCollections.js';
import {ObjectId} from 'mongodb';
import {isValidBranch,
        isValidEmail,
        isValidPhoneNumber,
        isValidAddress,
        isValidMembershipPlanDetails,
        isValidRole,
        isValidId,
        isValidCapacity
} from '../validateData.js';

export const createGym = async(
    _id,
    branchName,
    website,
    address,
    phoneNumber,
    email,
    maxCapacity,
    membershipPlanDetails,
    role )=>  {
    try {
      // Validate input parameters
      branchName = isValidBranch(branchName);
      website = isValidWebsite(website);
      address = isValidAddress(address);
      phoneNumber = isValidPhoneNumber(phoneNumber);
      membershipPlanDetails = isValidMembershipPlanDetails(membershipPlanDetails);
      email = isValidEmail(email);
      role = isValidRole(role);
      maxCapacity = isValidCapacity(maxCapacity);

      let classIds = [];
      let reviewIds = [];
      let overallRating = 5;

      const gymsCollection = await gymsData();
      const newGym = {
        _id,
        branchName,
        website,
        address,
        phoneNumber,
        membershipPlanDetails,
        email,
        maxCapacity,
        role,
        classIds,
        reviewIds,
        overallRating
      };
      const insertInfo = await gymsCollection.insertOne(newGym);

      if (insertInfo.insertedCount === 0) {
        throw new Error('Could not add gym');
      }

      return await this.getGymById(insertInfo.insertedId);
    } 
    catch (err) {
      console.log(err);
      throw err; // re-throw the error to the caller
    }
};

export const getGymById = async(id) => {
  try {
    
    const gymsCollection = await gymsData();
    const gym = await gymsCollection.findOne({ _id: ObjectId(id) });

    if (!gym) {
      throw new Error('Gym not found');
    }

    return gym;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const updateGym = async(
    _id,
  branchName,
  website,
  address,
  phoneNumber,
  membershipPlanDetails,
  email,
  maxCapacity,
  role
  )=> {

  try {
    _id = isValidId(_id);
    branchName = isValidBranch(branchName);
    website = isValidWebsite(website);
    address = isValidAddress(address);
    phoneNumber = isValidPhoneNumber(phoneNumber);
    email = isValidEmail(email);
    maxCapacity = isValidCapacity(maxCapacity);
    membershipPlanDetails = isValidMembershipPlanDetails(membershipPlanDetails);
    role = isValidRole(role);
    let classIds = []
    let reviewIds = []
    let overallRating = 5;
    
    const gymsCollection = await gymsData();
    const gym = await gymsCollection.findOne({ _id: ObjectId(_id) });

    if (!gym) {
      throw new Error('Gym not found');
    }

    // Update gym's properties
    gym.branchName = branchName;
    gym.website = website;
    gym.address = address;
    gym.phoneNumber = phoneNumber;
    gym.email = email;
    gym.maxCapacity = maxCapacity;
    gym.membershipPlanDetails = membershipPlanDetails
    gym.role = role;
    gym.classIds = classIds;
    gym.reviewIds = reviewIds;
    gym.overallRating = overallRating;
    const updateInfo = await gymsCollection.replaceOne(
      { _id: ObjectId(_id) },
      gym
    );

    if (updateInfo.modifiedCount === 0) {
      throw new Error('Could not update gym');
    }

    return gym;
  } catch (err) {
    console.log(err);
    throw err;
  }
};


const addClassId = async (gymId, classId) => {
  try {
    const gym = await gymsData.findById(gymId);
    if (!gym) {
      throw new Error(`Gym with ID ${gymId} not found`);
    }
    if (gym.classIds.includes(classId)) {
      console.log(`Class with ID ${classId} already exists in gym`);
      return gym;
    }
    const updatedGym = await gymsData.findOneAndUpdate(
      { _id: gymId }, // find the gym with the specified ID and ensure that the class ID is not already in the classIds array
      { $push: { classIds: classId } }, // add the class ID to the classIds array
      { new: true } // return the updated gym object
    );
    if (!updatedGym) {
      throw new Error(`Gym with ID ${gymId} not found`);
    }
    console.log(`Added class with ID ${classId} to gym`);
    return updatedGym;
  } 
  catch (error) {
    console. Error(error);
    throw new Error('Failed to add class ID to gym');
  }
};


const addReviewId = async(gymId,reviewId) => {

  try {
    const gym = await gymsData.findById(gymId);
    if (!gym) {
      throw new Error(`Gym with ID ${gymId} not found`);
    }
    if (gym.reviewIds.includes(reviewId)) {
      console.log(`Review with ID ${reviewId} already exists in gym`);
      return gym;
    }
    const updatedGym = await gymsData.findOneAndUpdate(
      { _id: gymId }, // find the gym with the specified ID and ensure that the class ID is not already in the classIds array
      { $push: { reviewIds: reviewId } }, // add the review ID to the classIds array
      { new: true } // return the updated gym object
    );
    if (!updatedGym) {
      throw new Error(`Gym with ID ${gymId} not found`);
    }
    console.log(`Added review with ID ${reviewId} to gym`);
    return updatedGym;
  } 
  catch (error) {
    console. Error(error);
    throw new Error('Failed to add class ID to gym');
  }

}

const removeClassId = async (gymId, classId) => {
  classId = isValidId(classId); // validate the format of the class ID

  let gymCollection = db.collection('gyms'); // get the gym collection from the database
  const classRemoval = await gymCollection.findOneAndUpdate(
    { _id: gymId },
    { $pull: { classIds: classId } },
    { returnOriginal: false }
  ); // remove the class ID from the gym's classIds array

  if (!classRemoval.value) {
    throw `Could not delete class with id of ${classId} from gym with id of ${gymId}`;
  }
  
  return { ...classRemoval.value, deleted: true };
}

const removeReviewdid = async (gymId,reviewId) => {
    let reviewRemoval = await gymCollection.findOneAndUpdate(
      { _id: gymId },
      { $pull: { reviewIds: reviewId } },
      { returnOriginal: false }
    ); // remove the review ID from the gym's classIds array
  
    if (!reviewRemoval.value) {
      throw `Could not delete review with id of ${reviewId} from gym with id of ${gymId}`;
    }
    
    return { ...reviewRemoval.value, deleted: true };
  }