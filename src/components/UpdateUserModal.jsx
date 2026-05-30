"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { User } from "lucide-react";
import { BiEdit } from "react-icons/bi";
import { toast } from "react-hot-toast";
import { useState } from "react";

export function UpdateUserModal() {
    const [isOpen, setIsOpen] = useState(false);

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
            setIsOpen(false);

            if (typeof authClient.refresh === "function") {
                await authClient.refresh();
            }
            
        } catch (error) {
            console.error(error);
            toast.error("Failed to update profile");
        }
    };

    return (
        <>
            <Button variant="secondary" onPress={() => setIsOpen(true)}>
                <BiEdit /> Update Profile
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
                                <Modal.Heading>Update User Info</Modal.Heading>
                            </Modal.Header>

                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                        
                                        <TextField name="name" type="text" variant="secondary">
                                            <Label>Name</Label>
                                            <Input placeholder="Enter your name" required />
                                        </TextField>

                                        <TextField name="image" type="url" variant="secondary">
                                            <Label>Photo URL</Label>
                                            <Input placeholder="Enter Photo URL" required />
                                        </TextField>

                                        <Modal.Footer>
                                            <Button 
                                                type="button" 
                                                variant="secondary" 
                                                onPress={() => setIsOpen(false)}
                                            >
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
        </>
    );
}