import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Clock4 } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className=" max-w-7xl mx-auto py-16 px-10">
      <div className="flex gap-2 mb-8">
        <MapPin />
        <div>
          <h4 className="text-[#000000] font-medium">Address</h4>
          <p className="text-[#000000] font-normal text-wrap">
            236 5th SE Avenue, New York NY10000, United States
          </p>
        </div>
      </div>
      <div className="flex gap-2 mb-8">
        <Phone />
        <div>
          <h4 className="text-[#000000] font-medium">Phone</h4>
          <p className="text-[#000000] font-normal text-wrap">
            Mobile: +(84) 546-6789
          </p>
          <p className="text-[#000000] font-normal text-wrap">
            Hotline: +(84) 456-6789
          </p>
        </div>
      </div>
      <div className="flex gap-2 mb-6">
        <Clock4 />
        <div>
          <h4 className="text-[#000000] font-medium">Working Time</h4>
          <p className="text-[#000000] font-normal text-wrap">
            Monday-Friday: 9:00 - 22:00{" "}
          </p>
          <p className="text-[#000000] font-normal text-wrap">
            {" "}
            Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>
      </div>
    </div>
  );
}
