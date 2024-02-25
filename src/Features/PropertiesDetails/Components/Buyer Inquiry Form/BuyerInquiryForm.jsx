import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { GrFormPrevious } from "react-icons/gr";
import "./Form.css";
import toast from "react-hot-toast";
import useAxios from "../../../../Hooks/useAxios";
import useAuth from "../../../../Hooks/useAuth";

const BuyerInquiryForm = ({ details }) => {
  const [formStep, setFormStep] = useState(0);
  const [range, setRange] = useState(10000);
  const instance = useAxios();
  const { user } = useAuth();

  console.log(details?.ownerInformation?.email, details?._id)

  const completeFormStep = event => {
    event.preventDefault();
    setFormStep(curr => curr + 1);
  };

  const goToPreviousStep = () => {
    setFormStep(curr => curr - 1);
  };

  const renderButton = () => {
    if (formStep > 1) {
      return undefined;
    } else if (formStep === 1) {
      return (
        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn bg-[#eb6753] text-white border-none"
          >
            Submit
          </button>
        </div>
      );
    } else {
      return (
        <div className="form-control mt-6">
          <button
            onClick={event => completeFormStep(event)}
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
    reset,
    watch,

    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  const onSubmit = async (data) => {
    console.log(data);

    //? information.
    const buyerInquiries = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      job_title: data.jobTitle,
      annual_income: data.annualIncome,
      savings: data.savings,
      home_preferences: data.propertyType,
      question: data.question,
      status: "pending",
      // Property Info
      user_email: user.email,
      buyer_property_images: details.propertyImages[0],
      buyer_property_title: details.propertyTitle,
      buyer_property_price: details.price,
      buyer_property_squareFootage: details.squareFootage,
      buyer_property_ownerEmail: details?.ownerInformation?.email,
      buyer_property_id: details?._id,
    }
  
    try {
      const res = await instance.post("/buyer-inquiries", buyerInquiries);
      console.log(res);
      if (res?.data?.status === "success") {
        reset();
        toast.success('Please fill out the form correctly.');
      } else {

        if (res?.data?.error) {
          toast.error(`Error: ${res.data.error}`);
        } else {
          toast.error('Please try again.');
        }
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }

  };

  const handleRange = e => {
    setRange(e.target.value);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center  bg-[#f6fff5] bg-[url('https://i.ibb.co/wdYwvVV/2150799631.jpg')] bg-cover rounded-xl overflow-hidden mt-6">
      <div className="h-full w-full absolute z-0 opacity-50 bg-black"></div>

      <div className="px-8 min-h-screen py-12 relative z-20 w-full mx-auto flex flex-col items-center justify-center bg-transparent backdrop-blur-3xl backdrop-brightness-100  ">
        <div className="absolute z-10 top-4 right-4">
          <h1 className="text-xl text-gray-200 font-medium">
            {formStep + 1} / 2
          </h1>
        </div>
        <div className="absolute z-20 top-4 left-4">
          {formStep > 0 && (
            <button
              onClick={goToPreviousStep}
              type="button"
              className="px-5 py-2 flex items-center justify-center hover:text-[#eb6753] text-gray-200 border-none"
            >
              <GrFormPrevious className="text-2xl" />
            </button>
          )}
        </div>

        <div className="min-h-[30vh] mt-6">
          <img
            className="h-full w-full rounded-xl object-cover"
            src="https://i.ibb.co/wdYwvVV/2150799631.jpg"
            alt=""
          />
        </div>
        <div className=" w-full flex flex-col items-start justify-center gap-3 mt-4">
          <h1 className="text-3xl text-gray-100 font-bold text-left">
            Inquiry & Preferences
          </h1>
          <p className="text-gray-200 text-2xl text-left font-thin">
            Please fill out the form.
          </p>
        </div>

        <div className="w-full h-full">
          <div className=" w-full h-full   relative z-10 ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" p-0 flex flex-col justify-between  gap-0 w-full card-body h-full"
            >
              {/* step one */}
              {formStep === 0 && (
                <div className="grid grid-cols-6 gap-4">
                  {/* <h1 className="text-4xl text-black col-span-6 font-semibold">Property Description</h1> */}
                  <div className="form-control col-span-3">
                    <label className="label">
                      <span className="label-text text-gray-400">
                        Your Name
                      </span>
                    </label>
                    <input
                      {...register('name', { required: true })}
                      name="name"
                      type="text"
                      placeholder="name"
                      className="input input-bordered "
                    />

                    {errors.name && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-control col-span-3">
                    <label className="label">
                      <span className="label-text text-gray-400">
                        {' '}
                        Your Email
                      </span>
                    </label>
                    <input
                      {...register('email', { required: true })}
                      name="email"
                      type="text"
                      placeholder="email"
                      className="input input-bordered "
                    />

                    {errors.email && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div className="form-control col-span-6">
                    <label className="label">
                      <span className="label-text text-gray-400">Phone</span>
                    </label>
                    <input
                      {...register('phone', { required: true })}
                      name="phone"
                      type="text"
                      placeholder="phone"
                      className="input input-bordered"
                    />

                    {errors.phone && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-control col-span-6">
                    <label className="label">
                      <span className="label-text text-gray-400">
                        Job Title
                      </span>
                    </label>
                    <input
                      {...register('jobTitle', { required: true })}
                      name="jobTitle"
                      type="text"
                      placeholder="job title"
                      className="input input-bordered "
                      required
                    />

                    {errors.jobTitle && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-control col-span-6">
                    <label className="label">
                      <span className="label-text text-gray-400">
                        Annual Income :
                        <span
                          className={`${range < 400000 &&
                            'text-red-600'} ${range > 400000 &&
                            range < 800000 &&
                            'text-yellow-600'} ${range > 800000 &&
                            'text-green-600'}`}
                        >
                          {range}
                        </span>
                      </span>
                    </label>

                    <input
                      {...register('annualIncome', { required: true })}
                      name="annualIncome"
                      type="range"
                      min="10000"
                      max="1200000"
                      placeholder="annual income"
                      className="slider range-primary input-bordered "
                      required
                      onChange={handleRange}
                    />

                    {errors.annualIncome && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* step Two */}
              {formStep === 1 && (
                <div className="grid grid-cols-6 py-8 gap-4">
                  <div className="form-control col-span-3">
                    <label className="label">
                      <span className="label-text text-gray-400">Savings</span>
                    </label>
                    <input
                      {...register('savings', { required: true })}
                      name="savings"
                      type="text"
                      placeholder="savings"
                      className="input input-bordered "
                      required
                    />

                    {errors.savings && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-control col-span-3">
                    <label className="label">
                      <span className="label-text text-gray-400">
                        Home Preferences
                      </span>
                    </label>
                    <select
                      {...register('propertyType', { required: true })}
                      name="propertyType"
                      id="type"
                      className="input input-bordered"
                    >
                      <option
                        value=""
                        selected
                        disabled
                        defaultValue="propertyType"
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
                  <div className="form-control col-span-6">
                    <label className="label">
                      <span className="label-text text-gray-400">
                        Ask a question
                      </span>
                    </label>
                    <textarea
                      {...register('question', { required: true })}
                      name="question"
                      placeholder="ask a question"
                      className="px-5 py-3 rounded-lg input-bordered "
                      required
                      id=""
                      cols="30"
                      rows="6"
                    ></textarea>
                    {errors.question && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  {/* <div className="form-control col-span-2">
                 <label className="label">
                   <span className="label-text">Latitude</span>
                 </label>
                 <input
                   {...register("latitude", { required: true })}
                   name="latitude"
                   type="text"
                   placeholder="latitude"
                   className="input input-bordered"
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
                   className="input input-bordered"
                   required
                 />

                 {errors.longitude && <span>This field is required</span>}
               </div> */}
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

export default BuyerInquiryForm;
