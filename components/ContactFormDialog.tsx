'use client';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ContactForm } from './ContactForm';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { useState } from 'react';
import { on } from 'events';

const ContactFormDialog = ({
  email,
  phone,
  open,
  onClose
}: {
  email?: string;
  phone?: string;
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      <Dialog open={open} onOpenChange={onClose}>
        <div className=" flex justify-center gap-y-0 items-center">
          <DialogContent className="lg:max-h-[500px]  !max-w-[calc(100vw-100px)] md:!max-w-[calc(100vw-200px)] lg:!max-w-[calc(100vw-500px)]  px-4 sm:px-6">
            <DialogTitle className="text-center text-primary-800  dark:text-primary-300  text-xl sm:text-2xl font-bold mb-0 pb-0">
              Get In Touch
            </DialogTitle>
            <DialogDescription className="text-center justify-center text-primary-950 text-sm md:text-md py-0 my-0 ">
              <div className="flex flex-col gap-2 items-center justify-center mb-0 pb-0">
                <span className="mb-1 text-primary-800 dark:text-primary-300 text-sm md:text-lg">
                  Let&#39;s work together! I would love to hear from
                  you!
                </span>

                {email || phone ? (
                  <span className=" flex flex-col  sm:flex-row gap-2 md:gap-4 ">
                    {email && (
                      <a href={`mailto:${email}`}>
                        <span className="flex flex-row gap-2 items-center">
                          <FaEnvelope /> {email}
                        </span>
                      </a>
                    )}
                    {phone && (
                      <a href={`tel:${phone}`}>
                        <span className="flex flex-row gap-2 items-center">
                          <FaPhone /> {phone}
                        </span>
                      </a>
                    )}
                  </span>
                ) : null}
              </div>
            </DialogDescription>

            <div className="px-4 sm:px-6 lg:px-8  flex justify-center mt-0 mb-6">
              <ScrollArea className=" w-full">
                <ContactForm contactFormSubmitted={() => onClose()} />
              </ScrollArea>
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
};
export default ContactFormDialog;
