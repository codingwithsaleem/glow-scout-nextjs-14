"use client";

import TreatmentCard from "@/components/myCustom/TreatmentCard";
import { Card } from "@/components/ui/card";
import { Heart, Star, StarHalf, Clock, MapPin } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";


const page = () => {
    
  const [favourite, setFavourite] = useState(false);

  let dummyData = [
    {
      image: "/images/home/tranding-1.png",
      title: "Laser Resurfacing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-2.png",
      title: "Botox Injections",
      description: "Consectetur adipiscing elit.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-3.png",
      title: "Chemical Peel",
      description: "Ut ut nibh faucibus.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-4.png",
      title: "Microdermabrasion",
      description: "Etiam sed dolor ac diam.",
      label: "Lorem Ipsum",
    },
];

const testimonials = [
    {
        name: 'Ashley K.',
        stars: 5,
        review: '“It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.”',
    },

    {
        name: 'Ashley F.',
        stars: 4,
        review: '“It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.”'
    },

];

  return (
    <div className="container font-raleway mx-auto px-4 ">
      <div className="border-b border-darkMahron pb-5 mb-20">
        <h1 className="text-4xl  mt-6">Crystal Calm Spa</h1>
        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-6 mb-2">
          <div className="col-span-2">
            <div className="relative">
              <Image
                src="/images/salon-spas/spa-1.png"
                alt="Main Spa Image"
                width={600}
                height={400}
                className="w-full rounded-xl md:h-[500px] object-cover my-5"
              />
              <button className="absolute top-0 right-0 p-3 bg-lighttext rounded-b-lg rounded-tr-lg">
                View all images
              </button>
            </div>
            {/* <TreatmentCard
              image="/images/salon-spas/spa-1.png"
              imageAlt="Spa"
              label="Lorem Ipsum"
            /> */}
          </div>

          <div className="md:col-span-1 flex md:flex-col gap-4 md:py-5 justify-center items-center">
            <Image
              src="/images/salon-spas/spa-2.png"
              alt="Spa"
              width={100}
              height={200}
              className="w-full md:h-[240px] rounded-xl"
            />
            <Image
              src="/images/salon-spas/spa-3.png"
              alt="Spa"
              width={100}
              height={200}
              className="w-full md:h-[240px] rounded-xl"
            />
          </div>

          <div className="col-span-2 py-5">
            <Card className="p-6 border-darkMahron h-full flex flex-col max-h-[500px]">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Crystal Calm Spa
                </h2>
                <div className="flex justify-between items-center mb-4">
                  <p>Add to favourites</p>
                  <button onClick={() => setFavourite(!favourite)}>
                    <Heart size={20} color={favourite ? "red" : "black"} />
                  </button>
                </div>
                <div className="py-4">
                  <p>Rating</p>
                  <div className="flex items-center border-b border-darkMahron pb-4 mb-4">
                    <Star fill="#E5BA1F" strokeWidth={0} size={18} />
                    <Star fill="#E5BA1F" strokeWidth={0} size={18} />
                    <StarHalf fill="#E5BA1F" strokeWidth={0} size={18} />
                    <Star fill="#111" strokeWidth={0} size={18} />
                    <Star fill="#111" strokeWidth={0} size={18} />
                    <p className="text-[12px] ml-2">(5,212)</p>
                  </div>
                  <div className="py-4 border-b border-darkMahron">
                    <p className="flex gap-2 items-center mb-2">
                      <Clock size={16} strokeWidth={0.5} />
                      Open until 12:00p.m.
                    </p>
                    <address className="flex gap-2 items-center mb-2 not-italic">
                      <MapPin size={16} strokeWidth={0.5} />
                      13th Street 47 W 13th St, New York
                    </address>
                    <Link
                      href="#"
                      className="text-darkMahron underline font-bold"
                    >
                      Get directions
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="rounded-xl w-full mb-4"
                >
                  Visit Website
                </Button>
                <Button
                  type="button"
                  variant="myCustom"
                  size="lg"
                  className="rounded-xl w-full"
                >
                  Book Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className=" py-20 md:mt-6 font-raleway  border-b border-darkMahron">
      <div className="text-center pb-5">
        <h2 className="text-4xl">Treatments Offered</h2>
        <p className="mt-2 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
          faucibus.
        </p>
      </div>

      <div className="container my-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 mb-2">
          {dummyData.map((item, index) => (
            <TreatmentCard key={index} {...item} />
          ))}
        </div>
      </div>

    </div>

    <div className=" py-20 md:mt-6 font-raleway">
    <div className="text-center pb-5">
        <h2 className="text-6xl font-raleway">Reviews</h2>
      </div>
      <div>
       
       {
            testimonials.map((testimonial, index) => (
            <div key={index} className='flex flex-col md:flex-row justify-center items-center gap-5'>
            <div>
            <div className='p-6'>
            <h3 className=' text-[#351120] text-4xl font-bold pb-3'>{testimonial.name}</h3>
                <p className='py-3 w-[400px]'>{testimonial.review}</p>
                <div>
                <div className="relative">
            <div className="flex gap-2">
            { Array.from({ length: 5 }, (_, index) => (
                <Star fill="#111" strokeWidth={0} key={`star-${index}`}/>
            ))}
            </div>
            <div className="flex gap-2 absolute top-0">
            <Star fill="#E5BA1F" strokeWidth={0} />
            <Star fill="#E5BA1F" strokeWidth={0} />
            <Star fill="#E5BA1F" strokeWidth={0} />
            <Star fill="#E5BA1F" strokeWidth={0} />
            </div>
        </div>
                </div>
            </div>
            </div>
            <div className='p-6'>
            <h3 className=' text-[#351120] text-4xl font-bold pb-3'>{testimonial.name}</h3>
                <p className='py-3 w-[400px]'>{testimonial.review}</p>
                <div>
                <div className="relative">
            <div className="flex gap-2">
            { Array.from({ length: 5 }, (_, index) => (
                <Star fill="#111" strokeWidth={0} key={`star-${index}`}/>
            ))}
            </div>
            <div className="flex gap-2 absolute top-0">
            <Star fill="#E5BA1F" strokeWidth={0} />
            <Star fill="#E5BA1F" strokeWidth={0} />
            <Star fill="#E5BA1F" strokeWidth={0} />
            <Star fill="#E5BA1F" strokeWidth={0} />

            </div>
        </div>
                </div>
            </div>
            </div>
            ))
       }
        
      </div>

      <div className="flex justify-center items-center my-20">
          <Button type="submit" variant="myCustom" size="lg" className="rounded-full m-auto">
          View all
          </Button>
          </div>


          <div className="container border border-darkMahron rounded-xl p-4">
          <div className="pb-5">
        <h2 className="text-4xl">Add your review</h2>
      </div>
         <div className="flex gap-4">
         <Input placeholder="Type your message here." className=' border-b-1 bordeer-t-0  border-darkMahron'/>
         <div>
            <p>Ratings</p>
            <div className="flex gap-2">
            { Array.from({ length: 5 }, (_, index) => (
                <Star fill="#111" strokeWidth={0} key={`star-${index}`}/>
            ))}
         </div>
         </div>
          </div>
    </div>
    </div>
    </div>
  );
};

export default page;
