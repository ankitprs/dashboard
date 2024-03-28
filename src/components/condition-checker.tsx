import { FunctionComponent } from "react";
import SequenceController from "./sequence-controller";

const ConditionChecker: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center gap-[0.75rem] text-left text-[0.875rem] text-text-colors-text-color-3 font-roboto mq725:flex-wrap">
      <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border min-w-[11.25rem] max-w-[12.25rem] text-[1.5rem] font-montserrat">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.063rem]">
          <h3 className="m-0 w-[9.688rem] relative text-inherit font-medium font-inherit inline-block box-border pr-[1.25rem] mq450:text-[1.188rem]">
            Dashboard
          </h3>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-[0.875rem] font-roboto">
            <div className="self-stretch rounded-xl bg-white shadow-[0px_2px_8px_rgba(26,_56,_117,_0.05)] flex flex-col items-start justify-start pt-[0.75rem] px-[0.75rem] pb-[0.875rem] gap-[1rem]">
              <div className="w-[12.25rem] h-[16.625rem] relative rounded-xl bg-white shadow-[0px_2px_8px_rgba(26,_56,_117,_0.05)] hidden" />
              <div className="w-[9.063rem] flex flex-row items-start justify-start py-[0rem] px-[0.25rem] box-border">
                <div className="flex-1 flex flex-col items-start justify-start gap-[0.625rem]">
                  <div className="w-[3.875rem] relative inline-block box-border pr-[1.25rem] z-[1]">
                    Orders
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.688rem] text-[0.75rem]">
                    <div className="flex-1 flex flex-row items-start justify-start py-[2.438rem] px-[2.063rem] relative">
                      <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
                        <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[50%] bg-mediumaquamarine z-[1]" />
                        <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
                          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-mediumslateblue w-full h-full z-[2]" />
                          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-goldenrod w-full h-full z-[3]" />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[1.125rem] px-[0rem] pb-[0rem]">
                        <div className="relative font-medium inline-block min-w-[2.563rem] z-[4]">
                          123456
                        </div>
                      </div>
                      <div className="relative text-dimgray inline-block min-w-[1.688rem] z-[4] ml-[-2.025rem]">
                        Total
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] text-[0.75rem]">
                <div className="self-stretch rounded [background:linear-gradient(90deg,_#fff,_#ffcb49)] flex flex-row items-start justify-between py-[0.313rem] pr-[0.75rem] pl-[0.25rem] gap-[1.25rem] z-[1]">
                  <div className="h-[1.5rem] w-[10.75rem] relative rounded [background:linear-gradient(90deg,_#fff,_#ffcb49)] hidden" />
                  <div className="relative inline-block min-w-[3.438rem] z-[2]">
                    Upcoming
                  </div>
                  <div className="relative inline-block min-w-[0.875rem] z-[2]">
                    50
                  </div>
                </div>
                <div className="self-stretch rounded [background:linear-gradient(90deg,_#fff,_#7464ff)] flex flex-row items-start justify-between py-[0.313rem] pr-[0.75rem] pl-[0.25rem] gap-[1.25rem] z-[1]">
                  <div className="h-[1.5rem] w-[10.75rem] relative rounded [background:linear-gradient(90deg,_#fff,_#7464ff)] hidden" />
                  <div className="relative inline-block min-w-[2.813rem] z-[2]">
                    Ongoing
                  </div>
                  <div className="relative inline-block min-w-[1.313rem] z-[2]">
                    100
                  </div>
                </div>
                <div className="self-stretch rounded [background:linear-gradient(90deg,_#fff,_#4fd2b5)] flex flex-row items-start justify-between py-[0.313rem] pr-[0.75rem] pl-[0.25rem] gap-[1.25rem] z-[1]">
                  <div className="h-[1.5rem] w-[10.75rem] relative rounded [background:linear-gradient(90deg,_#fff,_#4fd2b5)] hidden" />
                  <div className="relative inline-block min-w-[3.688rem] z-[2]">
                    Completed
                  </div>
                  <div className="relative inline-block min-w-[0.875rem] z-[2]">
                    50
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[7.5rem] relative text-[1rem] font-medium flex items-center box-border pr-[1.25rem]">
              Quick Actions
            </div>
          </div>
        </div>
      </div>
      <SequenceController trips="Trips" />
      <SequenceController trips="Revenue" propWidth="4.563rem" />
      <div className="flex-1 flex flex-col items-end justify-start gap-[1rem] min-w-[11.625rem] max-w-[12.625rem]">
        <div className="w-[8.25rem] h-[2rem] relative rounded-2xl shrink-0 flex items-center justify-center">
          <img
            className="w-full h-full overflow-hidden shrink-0 object-contain absolute left-[0rem] top-[0.125rem] [transform:scale(1.5)]"
            loading="lazy"
            alt=""
            src="/frame-2614572.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.375rem] pl-[0rem]">
          <div className="flex-1 rounded-xl bg-white shadow-[0px_2px_8px_rgba(26,_56,_117,_0.05)] flex flex-col items-start justify-start pt-[0.75rem] px-[0.75rem] pb-[0.875rem] gap-[1rem]">
            <div className="w-[12.25rem] h-[16.625rem] relative rounded-xl bg-white shadow-[0px_2px_8px_rgba(26,_56,_117,_0.05)] hidden" />
            <div className="w-[9.063rem] flex flex-row items-start justify-start py-[0rem] px-[0.25rem] box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.625rem]">
                <div className="relative inline-block min-w-[3.75rem] z-[1]">
                  Expences
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.688rem] text-[0.75rem]">
                  <div className="flex-1 flex flex-row items-start justify-start py-[2.438rem] px-[2.063rem] relative">
                    <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
                      <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[50%] bg-mediumaquamarine z-[1]" />
                      <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
                        <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-mediumslateblue w-full h-full z-[2]" />
                        <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-goldenrod w-full h-full z-[3]" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[1.125rem] px-[0rem] pb-[0rem]">
                      <div className="relative font-medium inline-block min-w-[2.563rem] z-[4]">
                        123456
                      </div>
                    </div>
                    <div className="relative text-dimgray inline-block min-w-[1.688rem] z-[4] ml-[-2.025rem]">
                      Total
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] text-[0.75rem]">
              <div className="self-stretch rounded [background:linear-gradient(90deg,_#fff,_#ffcb49)] flex flex-row items-start justify-between py-[0.313rem] pr-[0.75rem] pl-[0.25rem] gap-[1.25rem] z-[1]">
                <div className="h-[1.5rem] w-[10.75rem] relative rounded [background:linear-gradient(90deg,_#fff,_#ffcb49)] hidden" />
                <div className="relative inline-block min-w-[4.875rem] z-[2]">
                  Freight Charge
                </div>
                <div className="relative inline-block min-w-[0.875rem] z-[2]">
                  50
                </div>
              </div>
              <div className="self-stretch rounded [background:linear-gradient(90deg,_#fff,_#7464ff)] flex flex-row items-start justify-between py-[0.313rem] pr-[0.75rem] pl-[0.25rem] gap-[1.25rem] z-[1]">
                <div className="h-[1.5rem] w-[10.75rem] relative rounded [background:linear-gradient(90deg,_#fff,_#7464ff)] hidden" />
                <div className="relative inline-block min-w-[4.5rem] z-[2]">
                  Driver Charge
                </div>
                <div className="relative inline-block min-w-[1.313rem] z-[2]">
                  100
                </div>
              </div>
              <div className="self-stretch rounded [background:linear-gradient(90deg,_#fff,_#4fd2b5)] flex flex-row items-start justify-between py-[0.313rem] pr-[0.75rem] pl-[0.25rem] gap-[1.25rem] z-[1]">
                <div className="h-[1.5rem] w-[10.75rem] relative rounded [background:linear-gradient(90deg,_#fff,_#4fd2b5)] hidden" />
                <div className="relative inline-block min-w-[4.813rem] z-[2]">
                  Other Charges
                </div>
                <div className="relative inline-block min-w-[0.875rem] z-[2]">
                  50
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConditionChecker;
