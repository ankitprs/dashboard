import { FunctionComponent } from "react";

const FigmaFacilitator: FunctionComponent = () => {
  return (
    <div className="self-stretch rounded bg-white flex flex-col items-start justify-start py-[0.875rem] px-[0rem] gap-[0.844rem] text-left text-[0.75rem] text-text-colors-text-color-3 font-roboto border-[1px] border-solid border-lightgray">
      <div className="self-stretch h-[12rem] relative rounded bg-white box-border hidden border-[1px] border-solid border-lightgray" />
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.75rem]">
        <div className="relative leading-[1rem] z-[1]">
          <span>{`Load No. I-I-AAA-1325 `}</span>
          <span className="text-dimgray">will be</span>
          <span>{` `}</span>
          <span className="text-gray">delivered</span>
          <span className="text-text-colors-text-color-1"> by</span>
          <span>{` `}</span>
          <span className="text-text-colors-text-color-1">Aman</span>
          <span>{` `}</span>
          <span className="text-text-colors-text-color-1">(Driver)</span>
        </div>
      </div>
      <div className="self-stretch h-[0.063rem] relative box-border z-[1] border-t-[1px] border-solid border-lightgray" />
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.75rem] text-dimgray">
        <div className="flex-1 relative leading-[1rem] z-[1]">
          <span className="text-text-colors-text-color-1">Aman</span>
          <span>{` (Driver) will `}</span>
          <span className="text-gray">Picked Up</span>
          <span>{` goods at `}</span>
          <span className="text-gray">Location_Name</span>
          <span>{` for `}</span>
          <span className="text-text-colors-text-color-3">
            Load No. I-I-AAA-1325
          </span>
        </div>
      </div>
      <div className="self-stretch h-[0.063rem] relative box-border z-[1] border-t-[1px] border-solid border-lightgray" />
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.75rem]">
        <div className="relative leading-[1rem] z-[1]">
          <span>{`Load No. I-I-AAA-1325 `}</span>
          <span className="text-dimgray">will</span>
          <span>{` `}</span>
          <span className="text-dimgray">{`start added by `}</span>
          <span className="text-text-colors-text-color-1">Gurpreet Singh</span>
        </div>
      </div>
      <div className="self-stretch h-[0.063rem] relative box-border z-[1] border-t-[1px] border-solid border-lightgray" />
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.75rem]">
        <div className="relative leading-[1rem] z-[1]">
          <span>{`Load No. I-I-AAA-1325 `}</span>
          <span className="text-dimgray">will</span>
          <span>{` `}</span>
          <span className="text-dimgray">{`start added by `}</span>
          <span className="text-text-colors-text-color-1">Gurpreet Singh</span>
        </div>
      </div>
    </div>
  );
};

export default FigmaFacilitator;
