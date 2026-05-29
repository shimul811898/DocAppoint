"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { User } from "lucide-react";
import { BiEdit } from "react-icons/bi";

import { toast } from "react-hot-toast";

export function UpdateUserModal() {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get("name");
        const image = formData.get("image");

        try {
            await authClient.updateUser({
                name,
                image,
            });
            toast.success("Profile updated successfully!");
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            toast.error("Failed to update profile");
            console.log("Update failed:", error);
        }
    };

    return (
        <Modal>
            <Button variant="secondary">
                <BiEdit /> Update Profile
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <User className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Update User Info</Modal.Heading>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                                    <TextField name="name" type="text" variant="secondary">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>

                                    <TextField name="image" type="url" variant="secondary">
                                        <Label>Photo URL</Label>
                                        <Input placeholder="Enter Photo URL" />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button type="button" variant="secondary">
                                            Cancel
                                        </Button>

                                        <Button type="submit">
                                            Save
                                        </Button>
                                    </Modal.Footer>

                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}