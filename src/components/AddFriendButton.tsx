"use client";

import { FC,useState } from "react";
import Button from '@/components/ui/Button'
import { addFriendValidator } from "@/lib/validations/add-friend";
import axios, { AxiosError } from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface AddFriendButtonProps {}

type FormData = z.infer<typeof addFriendValidator>

const AddFriendButoon: FC<AddFriendButtonProps> = ({}) => {
     
  const [showSuccessState, setShowSuccessState] = useState<boolean>(false)

  const {register} = useForm<FormData>({
    resolver: zodResolver(addFriendValidator)
  })

  const addFriend = async (email: string) => {

    try {
      const validatedEmail = addFriendValidator.parse({email})

      await axios.post('/api/friends/add',{email: validatedEmail})

      setShowSuccessState(true)

    } catch (error) {}

      if(error instanceof z.ZodError){
        return
      }

      if(error instanceof AxiosError ){
        return
      }


  }

  return (
    <form className="max-w-sm">
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Add friend by E-Mail
      </label>

      <div className="mt-2 flex gap-4">
        <input
          type="text"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shoadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm-text-sm sm:leading-6 "
        placeholder="you@example.com"/>
        <Button>Add</Button>
      </div>
    </form>
  );
};

export default AddFriendButoon;
