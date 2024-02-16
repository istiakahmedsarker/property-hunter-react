import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaUpload } from "react-icons/fa";
import { GrFormPrevious } from "react-icons/gr";
import Container from "../../Components/Container/Container";
import toast from "react-hot-toast";
import imagesUpload from "./UploadImage";
import axios from "axios";

const AddProperties = () => {
  const [formStep, setFormStep] = useState(0);
  const [propertyType, setPropertyType] = useState("");
  // const [imagePreview, setImagePreview] = useState('');
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const completeFormStep = (event) => {
    event.preventDefault();
    setFormStep((curr) => curr + 1);
  };

  const goToPreviousStep = () => {
    setFormStep((curr) => curr - 1);
  };

  const renderButton = () => {
    if (formStep > 4) {
      return undefined;
    } else if (formStep === 4) {
      return (
        <div className="form-control mt-6">
          <button
            type={`${formStep === 4 && "submit"}`}
            className="btn bg-[#eb6753] text-white border-none"
          >
            Add Property
          </button>
        </div>
      );
    } else {
      return (
        <div className="form-control mt-6">
          <button
            onClick={(event) => completeFormStep(event)}
            type="button"
            className="btn bg-[#eb6753] text-white border-none"
          >
            Next
          </button>
        </div>
      );
    }
  };

  const {
    register,
    handleSubmit,
    watch,

    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmit = async (data) => {
    // console.log(data)
    //? Property description
    const propertyTitle = data.propertyTitle;
    const propertyTYPE = data.propertyType || propertyType;
    const name = data.name;
    const email = data.email;
    const phone = data.phone;
    //? Media
    const propertyImg = imageFiles[0];
    const propertyImg1 = imageFiles[1];
    const propertyImg2 = imageFiles[2];
    //? Location
    const address = data.address;
    const state = data.state;
    const city = data.city;
    const zipCode = data.zipCode;
    const neighborhood = data.neighborhood;
    const latitude = data.latitude;
    const longitude = data.longitude;
    //? Property details
    const floorNumber = data.floorNumber;
    const bedroom = data.rooms;
    const bathroom = data.bathroom;
    const blockName = data.blockName;
    const squareFootage = data.squareFootage;
    const apartmentNumber = data.apartmentNumber;
    const price = data.price;
    const yearBuilt = data.yearBuilt;
    const easement = data.easement.split(",");
    const utilities = data.utilities.split(",");

    //? Additional information
    const parkingIncluded = data.parking;
    const parkingSpace = data.parkingSpace;
    const propertyStatus = data.propertyStatus;
    const description = data.description;

    // console.log(
    //   propertyTitle,
    //   propertyType,
    //   neighborhood,
    //   name,
    //   squareFootage,
    //   email,
    //   phone,
    //   propertyImg,
    //   propertyImg1,
    //   propertyImg2,
    //   address,
    //   state,
    //   city,
    //   zipCode,
    //   latitude,
    //   longitude,
    //   floorNumber,
    //   bedroom,
    //   bathroom,
    //   blockName,
    //   apartmentNumber,
    //   price,
    //   yearBuilt,
    //   parkingIncluded,
    //   parkingSpace,
    //   propertyStatus,
    //   description,
    //   easement,
    //   utilities
    // );

    //? Validation
    if (
      !propertyTitle ||
      !propertyTYPE ||
      !squareFootage ||
      !name ||
      !email ||
      !phone ||
      !propertyImg ||
      !propertyImg1 ||
      !propertyImg2 ||
      !address ||
      !state ||
      !city ||
      !zipCode ||
      !neighborhood ||
      !latitude ||
      !longitude ||
      // !floorNumber ||
      // !bedroom ||
      !bathroom ||
      // !blockName ||
      // !apartmentNumber ||
      !price ||
      !yearBuilt ||
      !parkingIncluded ||
      !parkingSpace ||
      !propertyStatus ||
      !description ||
      !utilities ||
      !easement
    ) {
      return toast.error("Please fill out the form correctly.");
    }

    //  //? Validation if property is apartment
    //? Validation if property is apartment
    if (propertyTYPE === "apartment") {
      if (!floorNumber || !bedroom || !blockName || !apartmentNumber) {
        toast.error("Please fill out the apartment details correctly.");
        return;
      }
    }

    try {
      const images = await imagesUpload(imageFiles);
      // console.log(images);

      if (images.length > 0) {
        //  }

        //? Save to database.

        const property = {
          propertyTitle: propertyTitle,
          propertyType: propertyTYPE || propertyType,
          location: {
            address: address,
            city: city,
            state: state,
            zipCode: parseInt(zipCode),
            neighborhood: neighborhood,
            latitude: parseInt(latitude),
            longitude: parseInt(longitude),
          },
          price: parseInt(price),
          squareFootage: parseInt(squareFootage),
          easement: easement,
          bedroom: parseInt(bedroom),
          bathroom: parseInt(bathroom),
          description: description,
          propertyImages: [images[0], images[1], images[2]],
          utilities: utilities,
          parking: {
            included: parkingIncluded,
            spaces: parseInt(parkingSpace),
          },
          yearBuilt: parseInt(yearBuilt),
          propertyStatus: propertyStatus,
          ownerInformation: {
            name: name,
            email: email,
            phone: parseInt(phone),
          },
        };
        const { data } = await axios.post(
          "https://property-hunter-server-roan.vercel.app/api/v1/properties/",
          property
        );
        // console.log(data);
        if (data.status === "success") {
          toast.success("Successfully added the property.");
          completeFormStep(event);
        }
        // console.log(property, "property Data");
      }
    } catch (error) {
      // console.log(error.message);
      toast.error(error.message);
    }
  };

  //? Handle the images separately
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const imagePreview = reader.result;
        const property = e.target.name;

        //? Get the image files.
        let newFiles;

        if (property === "propertyImg") {
          newFiles = [file, ...imageFiles.slice(1, 3)];
        } else if (property === "propertyImg1") {
          newFiles = [imageFiles[0], file, imageFiles[2]];
        } else if (property === "propertyImg2") {
          newFiles = [...imageFiles.slice(0, 2), file];
        } else {
          newFiles = imageFiles;
        }

        setImageFiles(newFiles);

        //? Make the image previews.
        let newPreviews;

        if (property === "propertyImg") {
          // Replace the first image only
          newPreviews = [imagePreview, ...imagePreviews.slice(1, 3)];
        } else if (property === "propertyImg1") {
          // Replace the second image only
          newPreviews = [imagePreviews[0], imagePreview, imagePreviews[2]];
        } else if (property === "propertyImg2") {
          // Replace the third image only
          newPreviews = [...imagePreviews.slice(0, 2), imagePreview];
        } else {
          newPreviews = imagePreviews;
        }

        setImagePreviews(newPreviews); // Ensure the array length doesn't exceed 3
      };

      reader.readAsDataURL(file);
    }
  };

  const formRef = useRef(null);

  //? Handle the property type
  const handlePropertyType = (e) => {
    const propertyType = e.target.value;
    setPropertyType(propertyType);
    // console.log(propertyType);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center  bg-[#f6fff5] bg-[url('https://i.ibb.co/6tGzzDv/frames-for-your-heart-m-R1-CIDdu-GLc-unsplash.jpg')] bg-cover">
      <div className="h-full w-full absolute z-0 opacity-60 bg-[#05133d]"></div>

      <Container>
        <div className="px-8 relative z-20 min-h-[80vh] ml-6 mr-6 mb-6 mt-[32px] mx-auto flex flex-col items-center justify-center bg-[#ffffff] rounded-xl py-12">
          <div className="absolute z-10 top-4 right-4">
            <h1 className="text-xl text-black font-medium">
              {formStep + 1} / 6
            </h1>
          </div>
          <div className="absolute z-10 top-4 left-4">
            {formStep > 0 && formStep < 5 && (
              <button
                onClick={goToPreviousStep}
                type="button"
                className="px-5 py-2 flex items-center justify-center hover:text-[#eb6753] text-xl text-gray-800 border-none"
              >
                <GrFormPrevious />
              </button>
            )}
          </div>
          <div className="mb-6 w-full flex flex-col items-center justify-center gap-3">
            <h1 className="text-3xl md:text-4xl text-black font-bold text-left">
              Add New Property
            </h1>
            <p className="text-gray-600 text-2xl font-thin">
              We are glad to see you again!
            </p>
          </div>

          <div className="w-full">
            <div
              className={`h-2 rounded-xl bg-[#eb6753] ${formStep === 0 &&
                "w-2/4"}  ${formStep === 4 && "[80%]"}  ${formStep === 0 &&
                "w-[15%]"} ${formStep === 1 && "w-[30%]"} ${formStep === 2 &&
                "w-[45%]"} ${formStep === 3 && "w-[60%]"} ${formStep === 5 &&
                "w-full"}`}
            ></div>

            <div className=" w-full h-full   relative rounded-xl z-10 ">
              <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className=" p-0 flex flex-col justify-between rounded-xl gap-0 w-full card-body h-full"
              >
                {/* step one */}
                {formStep === 0 && (
                  <div className="grid grid-cols-6 py-8 gap-2 md:gap-4">
                    <h1 className="text-2xl md:text-4xl text-black col-span-6 font-semibold text-center md:text-left">
                      Property Description
                    </h1>
                    <div className="form-control col-span-3">
                      <label className="label">
                        <span className="label-text">Property Title</span>
                      </label>
                      <input
                        {...register("propertyTitle", { required: true })}
                        name="propertyTitle"
                        type="text"
                        placeholder="property title"
                        className="input border-gray-600 input-bordered "
                      />

                      {errors.propertyTitles && (
                        <span>This field is required</span>
                      )}
                    </div>

                    <div className="form-control col-span-3">
                      <label className="label">
                        <span className="label-text text-gray-400">
                          Property Type
                        </span>
                      </label>
                      <select
                        onChange={handlePropertyType}
                        // {...register("propertyType", { required: true })}
                        required
                        name="propertyType"
                        id="type"
                        value={propertyType || ""}
                        className="input border-gray-600 input-bordered"
                      >
                        <option
                          value=""
                          selected
                          disabled
                          // defaultValue="propertyType"
                        >
                          Type
                        </option>
                        <option value="home">Home</option>
                        <option value="apartment">Apartment</option>
                        <option value="villa">Villa</option>
                      </select>
                      {errors.propertyType && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="form-control col-span-2">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        {...register("name", { required: true })}
                        name="name"
                        type="text"
                        placeholder="name"
                        className="input border-gray-600 input-bordered "
                      />
                      {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="form-control col-span-2">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        {...register("email", { required: true })}
                        name="email"
                        type="email"
                        placeholder="email "
                        className="input border-gray-600 input-bordered "
                      />
                      {errors.email && <span>This field is required</span>}
                    </div>
                    <div className="form-control col-span-2">
                      <label className="label">
                        <span className="label-text">Phone</span>
                      </label>
                      <input
                        {...register("phone", { required: true })}
                        name="phone"
                        type="text"
                        placeholder="phone"
                        className="input border-gray-600 input-bordered"
                      />

                      {errors.phone && <span>This field is required</span>}
                    </div>
                    <div></div>
                  </div>
                )}
                {/* step Two */}
                {formStep === 1 && (
                  <div className="grid grid-cols-6 gap-1 md:gap-4 py-8 min-h-[40vh] ">
                    <h1 className="text-2xl md:text-4xl text-black col-span-6 mb-0 font-semibold text-center md:text-left">
                      Upload photos of your property
                    </h1>
                    <div className=" col-span-6 w-full h-[40vh] border-dashed border-2 rounded-xl border-gray-500 flex items-center justify-center ">
                      <div className="form-control bg-[] h-1/3 col-span-3 rounded-xl flex gap-4 items-center justify-center">
                        <h1 className="text-2xl text-gray-800 font-thin text-center">
                          Main Property Image
                        </h1>
                        <div className="flex items-center justify-between">
                          {imagePreviews &&
                            imagePreviews?.map((imagePreview, i) => (
                              <img
                                key={i}
                                id="propertyImg"
                                src={imagePreview}
                                alt=""
                                className="h-20 w-20"
                              />
                            ))}
                        </div>
                        <input
                          {...register("propertyImg", { required: true })}
                          name="propertyImg"
                          type="file"
                          className="hidden rounded-xl"
                          accept="image/*"
                          id="file"
                          required
                          // onChange={handleFileChange} // handle file change here
                          onChange={handleFileChange}
                        />
                        <label
                          htmlFor="file"
                          className="py-5 px-4 md:px-8 text-white bg-[#eb6753] rounded-lg text-center flex items-center text-[14px] md:text-xl justify-center gap-3"
                        >
                          <FaUpload />
                          Upload Photo
                        </label>

                        {errors.propertyImg && (
                          <span>This field is required</span>
                        )}
                      </div>
                    </div>
                    <div className="form-control col-span-3">
                      <label className="label">
                        <span className="label-text">Property Image 1</span>
                      </label>
                      <input
                        {...register("propertyImg1", { required: true })}
                        name="propertyImg1"
                        type="file"
                        id="file2"
                        placeholder="property image"
                        className="input input-bordered hidden"
                        onChange={handleFileChange}
                        required
                      />
                      <label
                        htmlFor="file2"
                        className="py-5 px-4 md:px-8 text-white bg-[#eb6753] rounded-lg text-center flex items-center text-[14px] md:text-xl justify-center gap-3"
                      >
                        <FaUpload />
                        Upload Photo
                      </label>

                      {errors.propertyImg1 && (
                        <span>This field is required</span>
                      )}
                    </div>
                    <div className="form-control col-span-3">
                      <label className="label">
                        <span className="label-text">Property Image 2</span>
                      </label>
                      <input
                        {...register("propertyImg2", { required: true })}
                        name="propertyImg2"
                        type="file"
                        id="file3"
                        placeholder="property image"
                        className="input input-bordered hidden"
                        onChange={handleFileChange}
                        required
                      />
                      <label
                        htmlFor="file3"
                        className="py-5 px-4 md:px-8  text-white bg-[#eb6753] rounded-lg text-center flex items-center text-[14px] md:text-xl justify-center gap-3"
                      >
                        <FaUpload />
                        Upload Photo
                      </label>

                      {errors.propertyImg2 && (
                        <span>This field is required</span>
                      )}
                    </div>
                  </div>
                )}
                {/* step Three */}
                {formStep === 2 && (
                  <div className="grid grid-cols-6 py-8 gap-1 md:gap-4">
                    <h1 className=" text-2xl md:text-4xl text-black col-span-6 font-semibold text-center md:text-left">
                      Listing Location
                    </h1>
                    <div className="form-control col-span-6">
                      <label className="label">
                        <span className="label-text">Address</span>
                      </label>
                      <input
                        {...register("address", { required: true })}
                        name="address"
                        type="text"
                        placeholder="address"
                        className="input border-gray-600 input-bordered "
                        required
                      />

                      {errors.address && <span>This field is required</span>}
                    </div>
                    <div className="form-control col-span-2">
                      <label className="label">
                        <span className="label-text">State</span>
                      </label>
                      <input
                        {...register("state", { required: true })}
                        name="state"
                        type="text"
                        placeholder="state"
                        className="input border-gray-600 input-bordered "
                        required
                      />

                      {errors.state && <span>This field is required</span>}
                    </div>
                    <div className="form-control col-span-2">
                      <label className="label">
                        <span className="label-text">City</span>
                      </label>
                      <input
                        {...register("city", { required: true })}
                        name="city"
                        type="text"
                        placeholder="city"
                        className="input border-gray-600 input-bordered "
                        required
                      />
                      {errors.city && <span>This field is required</span>}
                    </div>
                    <div className="form-control col-span-2">
                      <label className="label">
                        <span className="label-text">Zip Code</span>
                      </label>
                      <input
                        {...register("zipCode", { required: true })}
                        name="zipCode"
                        type="text"
                        placeholder="zip code "
                        className="input border-gray-600 input-bordered "
                        required
                      />
                      {errors.zipCode && <span>This field is required</span>}
                    </div>
                    <div className="form-control col-span-2">
                      <label className="label">
                        <span className="label-text">Neighborhood</span>
                      </label>
                      <input
                        {...register("neighborhood", { required: true })}
                        name="neighborhood"
                        type="text"
                        placeholder="neighborhood"
                        className="input border-gray-600 input-bordered "
                        required
                      />
                      {errors.neighborhood && (
                        <span>This field is required</span>
                      )}
                    </div>
                    <div className="form-control col-span-2">
                      <label className="label">
                        <span className="label-text">Latitude</span>
                      </label>
                      <input
                        {...register("latitude", { required: true })}
                        name="latitude"
                        type="text"
                        placeholder="latitude"
                        className="input border-gray-600 input-bordered"
                        required
                      />

                      {errors.latitude && <span>This field is required</span>}
                    </div>
                    <div className="form-control col-span-2">
                      <label className="label">
                        <span className="label-text">Longitude</span>
                      </label>
                      <input
                        {...register("longitude", { required: true })}
                        name="longitude"
                        type="text"
                        placeholder="longitude"
                        className="input border-gray-600 input-bordered"
                        required
                      />

                      {errors.longitude && <span>This field is required</span>}
                    </div>
                  </div>
                )}
                {/* step Four */}
                {formStep === 3 && (
                  <div className="grid grid-cols-8 py-8 gap-1 md:gap-4">
                    <h1 className=" text-2xl md:text-4xl text-black col-span-8 font-semibold">
                      Property Details
                    </h1>
                    {propertyType === "apartment" && (
                      <>
                        <div className="form-control col-span-2">
                          <label className="label">
                            <span className="label-text">Floor number</span>
                          </label>
                          <input
                            {...register("floorNumber", { required: true })}
                            name="floorNumber"
                            type="text"
                            placeholder="floor number"
                            className="input border-gray-600 input-bordered "
                            required
                          />

                          {errors.floorNumber && (
                            <span>This field is required</span>
                          )}
                        </div>
                        <div className="form-control col-span-2">
                          <label className="label">
                            <span className="label-text">Rooms</span>
                          </label>
                          <input
                            {...register("rooms", { required: true })}
                            name="rooms"
                            type="text"
                            placeholder="rooms"
                            className="input border-gray-600 input-bordered "
                            required
                          />

                          {errors.rooms && <span>This field is required</span>}
                        </div>
                        <div className="form-control col-span-2">
                          <label className="label">
                            <span className="label-text">Apartment No</span>
                          </label>
                          <input
                            {...register("apartmentNumber", { required: true })}
                            name="apartmentNumber"
                            type="text"
                            placeholder="apartment number"
                            className="input border-gray-600 input-bordered "
                            required
                          />
                          {errors.apartmentNumber && (
                            <span>This field is required</span>
                          )}
                        </div>
                        <div className="form-control col-span-2">
                          <label className="label">
                            <span className="label-text">Block Name</span>
                          </label>
                          <input
                            {...register("blockName", { required: true })}
                            name="blockName"
                            type="text"
                            placeholder="block name"
                            className="input border-gray-600 input-bordered "
                            required
                          />
                          {errors.blockName && (
                            <span>This field is required</span>
                          )}
                        </div>
                      </>
                    )}
                    <div className="form-control col-span-2">
                      <label className="label">
                        <span className="label-text">Bathroom</span>
                      </label>
                      <input
                        {...register("bathroom", { required: true })}
                        name="bathroom"
                        type="text"
                        placeholder="bathroom"
                        className="input border-gray-600 input-bordered "
                        required
                      />

                      {errors.bathroom && <span>This field is required</span>}
                    </div>

                    <div className="form-control col-span-2">
                      <label className="label">
                        <span className="label-text">SquareFootage</span>
                      </label>
                      <input
                        {...register("squareFootage", { required: true })}
                        name="squareFootage"
                        type="text"
                        placeholder="square footage"
                        className="input border-gray-600 input-bordered "
                        required
                      />
                      {errors.squareFootage && (
                        <span>This field is required</span>
                      )}
                    </div>

                    <div className="form-control col-span-2">
                      <label className="label">
                        <span className="label-text">Price</span>
                      </label>
                      <input
                        {...register("price", { required: true })}
                        name="price"
                        type="text"
                        placeholder="price"
                        className="input border-gray-600 input-bordered"
                        required
                      />

                      {errors.price && <span>This field is required</span>}
                    </div>
                    <div className="form-control col-span-2">
                      <label className="label">
                        <span className="label-text">Year Built</span>
                      </label>
                      <input
                        {...register("yearBuilt", { required: true })}
                        name="yearBuilt"
                        type="text"
                        placeholder="year built"
                        className="input border-gray-600 input-bordered"
                        required
                      />

                      {errors.yearBuilt && <span>This field is required</span>}
                    </div>
                    <div className="form-control col-span-4">
                      <label className="label">
                        <span className="label-text">
                          Easement (separated by commas):
                        </span>
                      </label>
                      <input
                        {...register("easement", { required: true })}
                        name="easement"
                        type="text"
                        placeholder="easement"
                        className="input border-gray-600 input-bordered"
                        required
                      />

                      {errors.easement && <span>This field is required</span>}
                    </div>
                    <div className="form-control col-span-4">
                      <label className="label">
                        <span className="label-text">
                          Utilities (separated by commas):
                        </span>
                      </label>
                      <input
                        {...register("utilities", { required: true })}
                        name="utilities"
                        type="text"
                        placeholder="utilities"
                        className="input border-gray-600 input-bordered"
                        required
                      />

                      {errors.utilities && <span>This field is required</span>}
                    </div>
                  </div>
                )}
                {/* step Four */}
                {formStep === 4 && (
                  <div className="grid grid-cols-6 py-8 gap-1 md:gap-4">
                    <h1 className=" text-2xl md:text-4xl text-black col-span-6 font-semibold">
                      Additional information
                    </h1>
                    <div className="form-control col-span-2">
                      <label className="label">
                        <span className="label-text text-gray-400">
                          Parking
                        </span>
                      </label>
                      <select
                        {...register("parking", { required: true })}
                        name="parking"
                        id="parking"
                        className="input border-gray-600 input-bordered"
                      >
                        <option
                          value=""
                          selected
                          disabled
                          defaultValue="parking"
                        >
                          Select
                        </option>
                        <option value="true">True</option>
                        <option value="false">False</option>
                      </select>
                      {errors.parking && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="form-control col-span-2">
                      <label className="label">
                        <span className="label-text">Parking Space</span>
                      </label>
                      <input
                        {...register("parkingSpace", { required: true })}
                        name="parkingSpace"
                        type="number"
                        placeholder="parkingSpace"
                        className="input border-gray-600 input-bordered "
                        required
                      />

                      {errors.parkingSpace && (
                        <span>This field is required</span>
                      )}
                    </div>
                    <div className="form-control col-span-2">
                      <label className="label">
                        <span className="label-text text-gray-400">
                          Property Status
                        </span>
                      </label>
                      <select
                        {...register("propertyStatus", { required: true })}
                        name="propertyStatus"
                        id="propertyStatus"
                        className="input border-gray-600 input-bordered"
                      >
                        <option
                          value=""
                          selected
                          disabled
                          defaultValue="propertyStatus"
                        >
                          Status
                        </option>
                        <option value="rent">Rent</option>
                        <option value="sale">Sale</option>
                      </select>
                      {errors.propertyStatus && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>

                    <div className="form-control col-span-6">
                      <label className="label">
                        <span className="label-text">Description</span>
                      </label>

                      <textarea
                        {...register("description", { required: true })}
                        name="description"
                        placeholder="description"
                        className="px-5 py-3 border-2 rounded-xl border-gray-400"
                        required
                        id=""
                        cols="30"
                        rows="10"
                      ></textarea>

                      {errors.description && (
                        <span>This field is required</span>
                      )}
                    </div>
                  </div>
                )}
                {/* submit */}
                {formStep === 5 && (
                  <div className="h-[80vh] w-full flex items-center justify-center ">
                    <h1 className="col-span-1 text-2xl md:text-4xl text-black text-center bold font-bold">
                      Congratulations! <br />
                      Added a new property.
                    </h1>
                  </div>
                )}

                {renderButton()}
                {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AddProperties;
