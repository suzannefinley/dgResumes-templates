'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  useForm,
  SubmitHandler,
  FormProvider
} from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  //FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { contactFormSchema } from '@/lib/validators/contact';

import { sendContactEmail } from '@/email';

export function ContactForm({
  subscriberEmail,
  contactFormSubmitted
}: {
  subscriberEmail: string;
  contactFormSubmitted: () => void;
}) {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  //const { handleSubmit } = useForm();

  const formMethods = useForm({
    mode: 'onBlur'
  });

  //const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmit: SubmitHandler<
    z.infer<typeof contactFormSchema>
  > = values => {
    //alert('form submitted');
    sendContactEmail(values, subscriberEmail);
    console.log('data:', values);
    toast(
      'Your message was sent successfully! I will contact your shortly'
    );
    contactFormSubmitted();
  };

  return (
    <div className="flex  w-full p-0 sm:p-4 mx-0 sm:mx-4 justify-center  dark:border-gray-200 ">
      <FormProvider {...formMethods}>
        <Form {...form}>
          <form
            method="POST"
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col  !max-w-[calc(100vw-125px)] sm:w-3/4"
          >
            <div className="flex flex-col lg:flex-row w-full gap-6 mb-1  justify-between">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-medium">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="flex border-primary bg-white w-full xl:min-w-[300px]"
                        placeholder="Your Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm font-semibold text-red-600" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-medium">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="flex border-primary bg-white w-full xl:min-w-[300px]"
                        placeholder="Email Address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm font-semibold text-red-600" />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-6 w-full">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-medium">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="w-full border-primary bg-white min-h-30 font-medium"
                        placeholder="Type your message here."
                        rows={4}
                        id="message"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xl font-semibold text-red-600" />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Send
            </Button>
          </form>
        </Form>
      </FormProvider>
    </div>
  );
}
export default ContactForm;
