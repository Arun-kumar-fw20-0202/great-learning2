import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Grid,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

import FormError from "../../core/FormError";
import DyInput from "../DynamicInputs/DyInput";
import { coursename, genders, occupation } from "../../../data/course";
import DySelectBx from "../DynamicInputs/DySelectBx";

const Step2 = ({ Controller, control, errors, onNext, prevStep, handleSubmit }) => {
  const leadFrom = [
    { name: "Reference" },
    { name: "Broucher" },
    { name: "Email" },
    { name: "Facebook" },
    { name: "Just Dial" },
    { name: "Website" },
    { name: "Sign Board" },
    { name: "IVR" },
  ];

  return (
    <>
      <Grid gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(4,1fr)" }} w="full" gap="5">
        {/* Fullname */}

        <Controller
          control={control}
          name="city"
          rules={{ required: "City is required*" }}
          render={({ field: { onChange, value } }) => (
            <div>
              <DyInput
                value={value}
                onChange={onChange}
                title={"City/Town"}
                placeholder="Your city/town"
              />
              <FormError err={errors} name="city" />
            </div>
          )}
        />

        <Controller
          control={control}
          name="state"
          rules={{ required: "State is required*" }}
          render={({ field: { onChange, value } }) => (
            <div>
              <DyInput value={value} onChange={onChange} title={"State"} placeholder="Your state" />
              <FormError err={errors} name="state" />
            </div>
          )}
        />

        <Controller
          control={control}
          name="country"
          rules={{ required: "Country is required*" }}
          render={({ field: { onChange, value } }) => (
            <div>
              <DyInput
                value={value}
                onChange={onChange}
                title={"Country"}
                placeholder="Your country"
              />
              <FormError err={errors} name="country" />
            </div>
          )}
        />

        <Controller
          control={control}
          name="pincode"
          rules={{ required: "Pincode is required*" }}
          render={({ field: { onChange, value } }) => (
            <div>
              <DyInput
                value={value}
                onChange={onChange}
                title={"Pincode"}
                placeholder="Your pincode"
              />
              <FormError err={errors} name="pincode" />
            </div>
          )}
        />

        <Controller
          control={control}
          name="email"
          rules={{ required: "Email is required*" }}
          render={({ field: { onChange, value } }) => (
            <div>
              <DyInput value={value} onChange={onChange} title={"Email"} placeholder="Your email" />
              <FormError err={errors} name="email" />
            </div>
          )}
        />

        <Controller
          control={control}
          name="altEmail"
          rules={{ required: "Alternative Email is required*" }}
          render={({ field: { onChange, value } }) => (
            <div>
              <DyInput
                value={value}
                onChange={onChange}
                title={"Alternative Email"}
                placeholder="Your alternative email"
              />
              <FormError err={errors} name="altEmail" />
            </div>
          )}
        />

        <Controller
          control={control}
          name="mobileNumber"
          rules={{ required: "Mobile Number is required*" }}
          render={({ field: { onChange, value } }) => (
            <div>
              <DyInput
                value={value}
                onChange={onChange}
                title={"Mobile Number"}
                placeholder="Your mobile number"
              />
              <FormError err={errors} name="mobileNumber" />
            </div>
          )}
        />

        <Controller
          control={control}
          name="phoneNumber"
          rules={{ required: "Phone Number is required*" }}
          render={({ field: { onChange, value } }) => (
            <div>
              <DyInput
                value={value}
                onChange={onChange}
                title={"Phone Number"}
                type="textarea"
                placeholder="Your phone number"
              />
              <FormError err={errors} name="phoneNumber" />
            </div>
          )}
        />

        <Controller
          control={control}
          name="address"
          rules={{ required: "Address is required*" }}
          render={({ field: { onChange, value } }) => (
            <div>
              <Textarea value={value} onChange={onChange} placeholder="Your Full Address." />
              <FormError err={errors} name="address" />
            </div>
          )}
        />
      </Grid>
      <Controller
        control={control}
        name="leadFrom"
        rules={{ required: "Reference is required*" }}
        render={({ field: { onChange, value } }) => (
          <Box mt="8">
            <RadioGroup onChange={onChange} value={value}>
              <Heading size="md" color="#b9292f">
                HOW DID YOU KNOW ABOUT UPSKILLNEXUS?
              </Heading>
              <Stack direction={"row"} gap="2">
                {leadFrom?.map((ele, i) => (
                  <Radio value={ele?.name} key={i}>
                    {ele?.name}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
            <FormError err={errors} name="leadFrom" />
          </Box>
        )}
      />

      {/*  */}
      <Flex justify={"end"} p="2" mt="4" gap="2">
        <Button onClick={() => prevStep()}>Back</Button>
        <Button onClick={handleSubmit(onNext)}>Next</Button>
      </Flex>
    </>
  );
};

export default Step2;
