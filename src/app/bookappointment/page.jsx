"use client";

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

const BookPatientAppointment = () => {
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


        <div>
          <Select
            name="doctorName"
            isRequired
            className="w-full"
            placeholder="Select Doctor"
          >
            <Label>Doctor</Label>

            <Select.Trigger className="rounded-2xl">
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>

            <Select.Popover>
              <ListBox>
                <ListBox.Item id="Dr. John Smith" textValue="Dr. John Smith">
                  Dr. John Smith
                </ListBox.Item>

                <ListBox.Item id="Dr. Sarah Ahmed" textValue="Dr. Sarah Ahmed">
                  Dr. Sarah Ahmed
                </ListBox.Item>

                <ListBox.Item id="Dr. Ali Khan" textValue="Dr. Ali Khan">
                  Dr. Ali Khan
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
        </div>

        <TextField name="appointmentDate" type="date" isRequired>
          <Label>Appointment Date</Label>
          <Input type="date" className="rounded-2xl" />
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

      <Button
        type="submit"
        className="w-full bg-cyan-500 text-white rounded-none"
      >
        Book Appointment
      </Button>
    </form>
  );
};

export default BookPatientAppointment;