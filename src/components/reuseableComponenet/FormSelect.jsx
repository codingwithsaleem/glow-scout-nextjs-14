import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const FilterSelect = ({ selectItems, placeholder, Control , name ,customClass}) => {
  return (
    <FormField
      control={Control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <Select onValueChange={field.onChange}>
            <FormControl className={` border-darkMahron text-darkMahron py-2 px-4  rounded-full mb-4 md:mb-0 md:mr-4 ${customClass}`}>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} className="selectinputvalue" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {selectItems.map((item, index) => {
                return (
                  <SelectItem key={index} value={item.value}>
                    {item.label}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FilterSelect;
