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



const BookAppointment = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const bookappointment = Object.fromEntries(formData.entries());
    console.log(bookappointment)
    const res = await fetch("http://localhost:5000/bookappointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookappointment),
    });
    const data = await res.json();

    console.log(data)
  }

  return (
    <form
      onSubmit={onSubmit}
      className="p-10 space-y-8 max-w-4xl mx-auto shadow my-6 z-40 rounded-2xl "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="md:col-span-2">
          <TextField name="doctorName" isRequired>
            <Label>Doctor Name</Label>
            <Input placeholder="Dr. John Smith" className="rounded-2xl" />
            <FieldError />
          </TextField>
        </div>

        <TextField name="specialization" isRequired>
          <Label>Specialization</Label>
          <Input placeholder="Cardiologist" className="rounded-2xl" />
          <FieldError />
        </TextField>

        <div>
          <Select
            name="department"
            isRequired
            className="w-full"
            placeholder="Select department"
          >
            <Label>Department</Label>

            <Select.Trigger className="rounded-2xl">
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>

            <Select.Popover>
              <ListBox>
                <ListBox.Item id="Cardiology" textValue="Cardiology">
                  Cardiology
                  <ListBox.ItemIndicator />
                </ListBox.Item>

                <ListBox.Item id="Neurology" textValue="Neurology">
                  Neurology
                  <ListBox.ItemIndicator />
                </ListBox.Item>

                <ListBox.Item id="Orthopedics" textValue="Orthopedics">
                  Orthopedics
                  <ListBox.ItemIndicator />
                </ListBox.Item>

                <ListBox.Item id="Dermatology" textValue="Dermatology">
                  Dermatology
                  <ListBox.ItemIndicator />
                </ListBox.Item>

                <ListBox.Item id="Pediatrics" textValue="Pediatrics">
                  Pediatrics
                  <ListBox.ItemIndicator />
                </ListBox.Item>

                <ListBox.Item id="General" textValue="General">
                  General
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
        </div>

        <TextField name="fee" type="number" isRequired>
          <Label>Consultation Fee (USD)</Label>
          <Input
            type="number"
            placeholder="50"
            className="rounded-2xl"
          />
          <FieldError />
        </TextField>

        <TextField name="experience" isRequired>
          <Label>Experience</Label>
          <Input
            placeholder="10 Years"
            className="rounded-2xl"
          />
          <FieldError />
        </TextField>

        <div className="md:col-span-2">
          <TextField name="appointmentDate" type="date" isRequired>
            <Label>Appointment Date</Label>
            <Input type="date" className="rounded-2xl" />
            <FieldError />
          </TextField>
        </div>

        <div className="md:col-span-2">
          <TextField name="imageUrl" isRequired>
            <Label>Doctor Image URL</Label>
            <Input
              type="url"
              placeholder="https://example.com/doctor.jpg"
              className="rounded-2xl"
            />
            <FieldError />
          </TextField>
        </div>

        <div className="md:col-span-2">
          <TextField name="description" isRequired>
            <Label>About Doctor</Label>
            <TextArea
              placeholder="Write doctor details..."
              className="rounded-3xl"
            />
            <FieldError />
          </TextField>
        </div>
      </div>

      <Button
        type="submit"
        variant="outline"
        className="rounded-none w-full bg-cyan-500 text-white"
      >
        Add Appointment
      </Button>
    </form>
  );
};

export default BookAppointment;
