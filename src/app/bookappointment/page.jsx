"use client";
import { toast } from "react-hot-toast";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  FieldError,
  TextField,
  Select,
  TextArea,
  Label,
  Input,
  ListBox,
  Button,
} from "@heroui/react";

const BookForm = () => {
  const searchParams = useSearchParams();
  const doctorNameFromURL = searchParams.get("doctorName") || "";

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const appointment = Object.fromEntries(formData.entries());

    console.log(appointment);

    const res = await fetch("http://localhost:5000/patient-appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointment),
    });

    const data = await res.json();
    console.log(data);
    toast.success("Appointment booked successfully!");
  };

  const handleCancel = () => {
    const confirmCancel = confirm("Are you sure you want to cancel?");
    if (confirmCancel) {
      document.querySelector("form").reset();
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="p-10 space-y-8 max-w-4xl mx-auto shadow my-6 rounded-2xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="md:col-span-2">
          <TextField name="patientName" isRequired>
            <Label>Patient Name</Label>
            <Input placeholder="Enter your name" className="rounded-2xl" />
            <FieldError />
          </TextField>
        </div>

        <TextField name="age" isRequired>
          <Label>Age</Label>
          <Input type="number" placeholder="25" className="rounded-2xl" />
          <FieldError />
        </TextField>

        <TextField name="phone" isRequired>
          <Label>Phone Number</Label>
          <Input placeholder="01XXXXXXXXX" className="rounded-2xl" />
          <FieldError />
        </TextField>

        <TextField name="email">
          <Label>Email</Label>
          <Input type="email" placeholder="example@gmail.com" className="rounded-2xl" />
          <FieldError />
        </TextField>

        <Select name="gender" isRequired className="w-full" placeholder="Select Gender">
          <Label>Gender</Label>
          <Select.Trigger className="rounded-2xl">
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="Male" textValue="Male">Male</ListBox.Item>
              <ListBox.Item id="Female" textValue="Female">Female</ListBox.Item>
              <ListBox.Item id="Other" textValue="Other">Other</ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

       
        <div className="md:col-span-2">
          <TextField name="doctorName" isRequired>
            <Label>Doctor Name</Label>
            <Input
              value={doctorNameFromURL}
              readOnly
              className="rounded-2xl bg-slate-100 cursor-not-allowed"
            />
            <FieldError />
          </TextField>
        </div>

        <TextField name="date" isRequired>
          <Label>Appointment Date</Label>
          <Input type="date" className="rounded-2xl" />
          <FieldError />
        </TextField>

        <TextField name="time" isRequired>
          <Label>Appointment Time</Label>
          <Input type="time" className="rounded-2xl" />
          <FieldError />
        </TextField>

        <div className="md:col-span-2">
          <TextField name="symptoms" isRequired>
            <Label>Symptoms / Problem</Label>
            <TextArea
              placeholder="Describe your health issue..."
              className="rounded-3xl"
            />
            <FieldError />
          </TextField>
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          type="submit"
          className="w-full bg-cyan-500 text-white rounded-2xl py-3"
        >
          Book Appointment
        </Button>

        <Button
          type="button"
          onClick={handleCancel}
          className="w-full bg-red-500 text-white rounded-2xl py-3"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

const BookPatientAppointment = () => {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <BookForm />
    </Suspense>
  );
};

export default BookPatientAppointment;