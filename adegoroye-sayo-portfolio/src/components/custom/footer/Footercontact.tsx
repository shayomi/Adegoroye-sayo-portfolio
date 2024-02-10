import React from "react";
import { Typography } from "@/components/ui/typography";
import { Footercontactdata } from "@/utils/data/Footercontactdata";

const FooterContact = () => {
  return (
    <div className="flex flex-col gap-y-8 ">
      <div className="flex flex-col gap-y-2  ">
        <div>
          <Typography variant="h4" className="text-white font-bold">
            CONTACT ME
          </Typography>
        </div>

        <div>
          <Typography variant="p" className="text-white font-bold">
            Email:{" "}
            <a href="mailto:sayoadegoroye@gmail.com" className="font-normal">
              sayoadegoroye@gmail.com
            </a>
          </Typography>
        </div>
      </div>

      <div className="flex flex-col gap-y-2 ">
        <div>
          <Typography variant="h4" className="text-white font-bold">
            FOLLOW US
          </Typography>
        </div>

        <div className="flex flex-row gap-x-2 items-center">
          <div className=" rounded-sm p-1">
            <div className="flex flex-row gap-x-2 items-center">
              {Footercontactdata.map((item, index) => {
                return (
                  <div className=" rounded-sm p-1" key={index}>
                    <a href={item.website} target="_blank">
                      <img src={item.icon} width="27" height="27" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
