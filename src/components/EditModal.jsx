"use client";

import { toast } from "react-hot-toast";
import { useState } from "react";
import {
    Button,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
    FieldError,
} from "@heroui/react";
import { User } from "lucide-react";
import { FaUserEdit } from "react-icons/fa";

export function UpdateUserModal({ allAppoint, onUpdateSuccess }) {
    const [isOpen, setIsOpen] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formFields = Object.fromEntries(formData.entries());

        
        const updatedData = {
            ...allAppoint,
            ...formFields,
        };

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${allAppoint?._id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formFields),
                }
            );

            const data = await res.json();

            if (data.modifiedCount > 0 || res.ok) {
                toast.success("Appointment updated successfully!");
                setIsOpen(false);
                
                
                if (onUpdateSuccess) {
                    onUpdateSuccess(updatedData);
                }
            } else {
                toast.error("No changes were made.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to update appointment");
        }
    };

    return (
        <>
            <Button
                variant="secondary"
                onPress={() => setIsOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium hover:bg-blue-100 transition"
            >
                <FaUserEdit /> Edit
            </Button>

            <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />

                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <User className="size-5" />
                                </Modal.Icon>
                                <Modal.Heading>Update Appointment Details</Modal.Heading>
                            </Modal.Header>

                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                        <div className="md:col-span-2">
                                            <TextField
                                                name="patientName"
                                                defaultValue={allAppoint?.patientName}
                                                isRequired
                                            >
                                                <Label>Patient Name</Label>
                                                <Input
                                                    placeholder="Enter your name"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        <TextField
                                            name="age"
                                            defaultValue={allAppoint?.age}
                                        >
                                            <Label>Age</Label>
                                            <Input
                                                type="number"
                                                placeholder="25"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        <TextField
                                            name="phone"
                                            defaultValue={allAppoint?.phone}
                                        >
                                            <Label>Phone Number</Label>
                                            <Input
                                                placeholder="01XXXXXXXXX"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        <TextField
                                            name="email"
                                            defaultValue={allAppoint?.email}
                                        >
                                            <Label>Email</Label>
                                            <Input
                                                type="email"
                                                placeholder="example@gmail.com"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        <TextField
                                            name="date"
                                            defaultValue={allAppoint?.date}
                                        >
                                            <Label>Appointment Date</Label>
                                            <Input type="date" className="rounded-2xl" />
                                            <FieldError />
                                        </TextField>

                                        <TextField
                                            name="time"
                                            defaultValue={allAppoint?.time}
                                        >
                                            <Label>Appointment Time</Label>
                                            <Input type="time" className="rounded-2xl" />
                                            <FieldError />
                                        </TextField>

                                        <Modal.Footer>
                                            <Button
                                                type="button"
                                                variant="secondary"
                                                onPress={() => setIsOpen(false)}
                                            >
                                                Cancel
                                            </Button>
                                            <Button type="submit">Save</Button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </>
    );
}