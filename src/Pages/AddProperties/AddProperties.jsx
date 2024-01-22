import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddProperties = () => {
  const [formStep, setFormStep] = useState(0);

  const completeFormStep = () => {
    setFormStep((curr) => curr + 1);
  };

  const renderButton = () => {
    if (formStep > 3) {
      return undefined;
    } else if (formStep === 3) {
      return (
        <div className="form-control mt-6">
          <button
            disabled={!isValid}
            onClick={completeFormStep}
            type="button"
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
            disabled={!isValid}
            onClick={completeFormStep}
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


  const onSubmit = (data) => console.log(data);

  const handleTab = (step) => {
    setFormStep(step);
  };
  return (
    <div className="relative min-h-screen flex items-center justify-center  bg-[#fff7f5] bg-[url('https://i.ibb.co/4W9YMVZ/7598163.jpg')] bg-cover">
        <div className="h-full w-full absolute z-0 opacity-50 bg-black"></div>
      
      <div className="px-8 relative z-20 min-h-[80vh] min-w-[1240px] mx-auto flex flex-col items-center justify-center bg-white rounded-xl py-12">

      <div className="absolute z-10 top-4 right-4">
            <h1 className="text-xl text-black font-medium">{formStep + 1} / 5</h1>
        </div>
      <div className="mb-6 w-full flex flex-col items-center justify-center gap-3">
        <h1 className="text-4xl text-gray-800 font-bold text-left">
          Add New Property
        </h1>
        <p className="text-gray-600 text-2xl font-thin">
          We are glad to see you again!
        </p>
      </div>
    
      <div className="w-full">
        <div
          className={`h-2 rounded-xl bg-green-800 ${formStep === 0 && "w-2/4"}  ${
            formStep === 4 && "w-full"
          }  ${formStep === 0 && "w-1/5"} ${formStep === 1 && "w-2/5"} ${formStep === 2 && "w-3/5"} ${formStep === 3 && "w-4/5"}`}
        ></div>

        <div className=" w-full h-full bg-[#fff7f5]  relative rounded-xl z-10 ">
         
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" p-0 flex flex-col justify-between rounded-xl gap-0 w-full card-body h-full"
          >
            {/* step one */}
            {formStep === 0 && (
              <div className="grid grid-cols-6 py-8 gap-4">
                <h1 className="text-4xl text-black col-span-6 font-semibold">Property Description</h1>
                <div className="form-control col-span-3">
                  <label className="label">
                    <span className="label-text">Property</span>
                  </label>
                  <input
                    {...register("propertyTitles", { required: true })}
                    name="propertyTitles"
                    type="text"
                    placeholder="Property Titles"
                    className="input input-bordered "
                  />

                  {errors.propertyTitles && <span>This field is required</span>}
                </div>
                <div className="form-control col-span-3">
                  <label className="label">
                    <span className="label-text">Property Type</span>
                  </label>
                  <input
                    {...register("propertyType", { required: true })}
                    name="propertyType"
                    type="text"
                    placeholder="Property Type"
                    className="input input-bordered "
                  />

                  {errors.propertyType && <span>This field is required</span>}
                </div>
                <div className="form-control col-span-2">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    name="name"
                    type="text"
                    placeholder="name"
                    className="input input-bordered "
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
                    className="input input-bordered "
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
                    className="input input-bordered"
                  />

                  {errors.phone && <span>This field is required</span>}
                </div>
              </div>
            )}
            {/* step Two */}
            {formStep === 1 && (
               <div className="grid grid-cols-6 gap-4 py-8 min-h-[40vh] ">
               <h1 className=" text-4xl text-black col-span-6 mb-0 font-semibold">Upload photos of your property</h1>
               <div className=" col-span-6 w-full h-[40vh] border-dashed border-2 rounded-xl border-gray-500 flex items-center justify-center ">
               <div className="form-control bg-[] h-1/3 col-span-3 border-2 rounded-xl flex items-center justify-center">
                  <input 
                    {...register("propertyTitles", { required: true })}
                    name="propertyTitles"
                    type="file"
                    className=" rounded-xl border-gray-800 p-10 "
                  />

                  {errors.propertyImage && <span>This field is required</span>}

                 
                </div>

                
               </div>
               <div className="form-control col-span-3">
                  <label className="label">
                    <span className="label-text">Property</span>
                  </label>
                  <input
                    {...register("propertyImage1", { required: true })}
                    name="propertyImg1"
                    type="file"
                    placeholder="Property Image"
                    className="input input-bordered "
                  />

                  {errors.propertyImg1 && <span>This field is required</span>}
                </div>
                <div className="form-control col-span-3">
                  <label className="label">
                    <span className="label-text">Property Image 2</span>
                  </label>
                  <input
                    {...register("propertyImg2", { required: true })}
                    name="propertyImg2"
                    type="file"
                    placeholder="Property Image"
                    className="input input-bordered "
                  />

                  {errors.propertyImg2 && <span>This field is required</span>}
                </div>
             </div>
            )}
            {/* step Two */}
            {formStep === 2 && (
               <div className="grid grid-cols-6 py-8 gap-4">
               <h1 className=" text-4xl text-black col-span-6 font-semibold">Listing Location</h1>
               <div className="form-control col-span-6">
                 <label className="label">
                   <span className="label-text">Address</span>
                 </label>
                 <input
                   {...register("address", { required: true })}
                   name="address"
                   type="text"
                   placeholder="address"
                   className="input input-bordered "
                 />

                 {errors.address && <span>This field is required</span>}
               </div>
               <div className="form-control col-span-3">
                 <label className="label">
                   <span className="label-text">State</span>
                 </label>
                 <input
                   {...register("state", { required: true })}
                   name="state"
                   type="text"
                   placeholder="state"
                   className="input input-bordered "
                 />

                 {errors.state && <span>This field is required</span>}
               </div>
               <div className="form-control col-span-3">
                 <label className="label">
                   <span className="label-text">City</span>
                 </label>
                 <input
                   {...register("city", { required: true })}
                   name="city"
                   type="text"
                   placeholder="city"
                   className="input input-bordered "
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
                   className="input input-bordered "
                 />
                 {errors.zipCode && <span>This field is required</span>}
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
                   className="input input-bordered"
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
                   className="input input-bordered"
                 />

                 {errors.longitude && <span>This field is required</span>}
               </div>
             </div>
            )}
            {/* step Four */}
            {formStep === 3 && (
               <div className="grid grid-cols-6 py-8 gap-4">
               <h1 className=" text-4xl text-black col-span-6 font-semibold">Property Details</h1>
               <div className="form-control col-span-2">
                 <label className="label">
                   <span className="label-text">Floor number</span>
                 </label>
                 <input
                   {...register("floorNumber", { required: true })}
                   name="floorNumber"
                   type="text"
                   placeholder="floor number"
                   className="input input-bordered "
                 />

                 {errors.floorNumber && <span>This field is required</span>}
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
                   className="input input-bordered "
                 />

                 {errors.floorNumber && <span>This field is required</span>}
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
                   className="input input-bordered "
                 />
                 {errors.blockName && <span>This field is required</span>}
               </div>
               <div className="form-control col-span-2">
                 <label className="label">
                   <span className="label-text">Apartment Number</span>
                 </label>
                 <input
                   {...register("apartmentNumber", { required: true })}
                   name="apartmentNumber"
                   type="text"
                   placeholder="apartment number"
                   className="input input-bordered "
                 />
                 {errors.apartmentNumber && <span>This field is required</span>}
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
                   className="input input-bordered"
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
                   className="input input-bordered"
                 />

                 {errors.yearBuilt && <span>This field is required</span>}
               </div>
             </div>
            )}
            {/* submit */}
            {formStep === 4 && (
              <div className="h-[80vh] w-full flex items-center justify-center ">
                <h1 className="col-span-1 text-4xl text-black text-center bold font-bold">
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
    </div>
  );
};

export default AddProperties;
