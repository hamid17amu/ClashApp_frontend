"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { format, set } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import axios, { AxiosError } from "axios";
import { CLASH_URL } from "@/lib/apiEndPoints";
import { customUser } from "@/app/api/auth/[...nextauth]/options";
import { toast } from "sonner";
import { clearCache } from "@/actions/commonActions";

export default function Addclash({user}:{user:customUser}) {
  const [Open, setOpen] = useState(false);
  const [clashData, setClashData] = useState<clashForm>({});
  const [date, setDate] = useState<Date|null>();
  const [Image, setImage] = useState<File | null>();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<clashFormError>({});

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit=async(e:React.FormEvent)=>{
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('title',clashData?.title??"");
      formData.append('description',clashData?.description??"");
      formData.append('expire_at',date?.toISOString() ?? "");
      if(Image) formData.append('image',Image);

      const {data} = await axios.post(`${CLASH_URL}`,formData, {headers:{
        Authorization: user.token
      }});
      setLoading(false);
      if(data?.message){
        clearCache("dashboard");
        setClashData({});
        setDate(null);
        setImage(null);
        setErrors({});
        toast.success(data.message);
        setOpen(false);
      }
      
    } catch (error) {
      setLoading(false);
      if(error instanceof AxiosError){
        if(error.response?.status===422){
          setErrors(error.response?.data?.errors);

        }
      }else{
        toast.error("Oops! Something went wrong");
      }
    }

  }



  return (
    <div>
      <Dialog open={Open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button onClick={() => setOpen(true)}>Add Clash</Button>
        </DialogTrigger>
        <DialogContent
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
        >
          <DialogHeader>
            <DialogTitle>Create Clash</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                id="title"
                placeholder="Enter the Title here"
                value={clashData?.title ?? ""}
                onChange={(e) => {
                  setClashData({ ...clashData, title: e.target.value });
                }}
              />
            </div>
            <span className="text-red-500">{errors?.title}</span>
            <div className="mt-4">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Description"
                value={clashData?.description ?? ""}
                onChange={(e) => {
                  setClashData({ ...clashData, description: e.target.value });
                }}
              />
            </div>
            <span className="text-red-500">{errors?.description}</span>
            <div className="mt-4">
              <Label htmlFor="expiryDate" className="block">Expiry date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full mt-2 justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date ?? new Date()}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <span className="text-red-500">{errors?.expire_at}</span>
            <div className="mt-4">
              <Label htmlFor="image">Image</Label>
              <Input type="file" id="image" placeholder="" onChange={handleImageChange}/>
            </div>
            <span className="text-red-500">{errors?.image}</span>
            <div className="mt-4">
              <Button className="w-full" disabled={loading}>{loading?"Processing...":"Submit"}</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
