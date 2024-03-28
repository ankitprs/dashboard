import { FunctionComponent } from "react";
import FrameComponent from "./frame-component";

const ArcAssembler: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[0.375rem] text-left text-[0.75rem] text-text-colors-text-color-3 font-roboto">
      <div className="w-[11.375rem] relative text-[1rem] font-medium flex items-center box-border pr-[1.25rem]">
        Todays Highlights (14)
      </div>
      <div className="flex flex-row items-start justify-start pt-[0rem] pb-[0.5rem] pr-[1.25rem] pl-[0rem] text-dimgray">
        <div className="relative inline-block min-w-[4.25rem]">19 Mar 2024</div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.125rem] gap-[1.125rem] text-dimgray">
        <FrameComponent
          income="Income"
          cAD="100000 CAD"
          paymentsReceived="2 payments received"
        />
        <FrameComponent
          income="Expenses"
          cAD="50000 CAD"
          paymentsReceived="5 payments paid"
          propMinWidth="3.25rem"
          propColor="#d04141"
          propMinWidth1="5.125rem"
          propMinWidth2="5.563rem"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-between pt-[0rem] px-[0rem] pb-[0.5rem] gap-[1.25rem] text-[0.875rem]">
        <div className="relative font-medium">Completed Activities (14)</div>
        <div className="flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem] text-[0.75rem] text-gray">
          <div className="relative [text-decoration:underline] inline-block min-w-[2.688rem]">
            View All
          </div>
        </div>
      </div>
      <div className="self-stretch rounded bg-white flex flex-col items-start justify-start py-[0.875rem] px-[0rem] gap-[0.844rem] border-[1px] border-solid border-lightgray">
        <div className="self-stretch h-[14rem] relative rounded bg-white box-border hidden border-[1px] border-solid border-lightgray" />
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.75rem]">
          <div className="h-[2rem] flex-1 relative leading-[1rem] whitespace-pre-wrap inline-block z-[1]">
            <span className="text-text-colors-text-color-1">
              Gurpreet Singh
            </span>
            <span>{` `}</span>
            <span className="text-dimgray">{` (Dispatch team) has created `}</span>
            <span>Load No. I-I-AAA-1325</span>
          </div>
        </div>
        <div className="self-stretch h-[0.063rem] relative box-border z-[1] border-t-[1px] border-solid border-lightgray" />
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.75rem] text-dimgray">
          <div className="flex-1 relative leading-[1rem] z-[1]">
            <span className="text-text-colors-text-color-1">Aman</span>
            <span>{` (Driver) `}</span>
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
          <div className="h-[2rem] flex-1 relative leading-[1rem] whitespace-pre-wrap inline-block z-[1]">
            <span className="text-text-colors-text-color-1">
              Gurpreet Singh
            </span>
            <span>{` `}</span>
            <span className="text-dimgray">{` (Dispatch team) has created `}</span>
            <span>Load No. I-I-AAA-1325</span>
          </div>
        </div>
        <div className="self-stretch h-[0.063rem] relative box-border z-[1] border-t-[1px] border-solid border-lightgray" />
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.75rem]">
          <div className="relative leading-[1rem] z-[1]">
            <span>{`Load No. I-I-AAA-1325 `}</span>
            <span className="text-dimgray">will</span>
            <span>{` `}</span>
            <span className="text-dimgray">{`start added by `}</span>
            <span className="text-text-colors-text-color-1">
              Gurpreet Singh
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArcAssembler;
