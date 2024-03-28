import { FunctionComponent } from "react";
import ConditionChecker from "../components/condition-checker";
import ArcAssembler from "../components/arc-assembler";
import FigmaFacilitator from "../components/figma-facilitator";

const Dashboard: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-background-colors-bg-3 overflow-hidden flex flex-row items-start justify-start gap-[0.625rem] tracking-[normal] text-left text-[0.875rem] text-text-colors-text-color-3 font-roboto mq1025:flex-wrap mq1025:pl-[0.625rem] mq1025:pr-[0.625rem] mq1025:box-border">
      <div className="h-[45rem] w-[4.625rem] flex flex-col items-start justify-start py-[0rem] pr-[0.625rem] pl-[0rem] box-border mq1025:hidden">
        <div className="self-stretch flex-1 relative flex items-center justify-center">
          <img
            className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-contain absolute left-[0rem] top-[0.125rem] w-full h-full [transform:scale(1.25)]"
            loading="lazy"
            alt=""
            src="/frame-1.svg"
          />
        </div>
      </div>
      <section className="flex-1 flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border min-w-[33.563rem] max-w-full text-left text-[0.75rem] text-text-colors-text-color-3 font-roboto mq725:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.875rem] max-w-full">
          <ConditionChecker />
          <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pr-[0.375rem] pl-[0rem] box-border gap-[1.5rem] max-w-full">
            <div className="self-stretch rounded-2xl bg-white shadow-[0px_2px_8px_rgba(26,_56,_117,_0.05)] overflow-hidden flex flex-row items-start justify-between py-[0.875rem] pr-[2.188rem] pl-[3rem] gap-[1.25rem] mq725:flex-wrap mq725:justify-center mq975:pl-[1.5rem] mq975:box-border">
              <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                  <div className="h-[1.25rem] flex flex-row items-start justify-start py-[0rem] pr-[1.875rem] pl-[1.813rem] box-border">
                    <img
                      className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/fleet-icons.svg"
                    />
                  </div>
                  <div className="relative font-medium inline-block min-w-[4.938rem]">
                    Create Indents
                  </div>
                </div>
              </div>
              <div className="h-[2.938rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-lightgray mq725:w-full mq725:h-[0.063rem]" />
              <div className="w-[4.063rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border text-center">
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                  <div className="h-[1.25rem] flex flex-row items-start justify-start py-[0rem] pr-[1.438rem] pl-[1.375rem] box-border">
                    <img
                      className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/regular-used-icons.svg"
                    />
                  </div>
                  <div className="self-stretch relative font-medium inline-block min-w-[4.063rem]">
                    Add Vehicle
                  </div>
                </div>
              </div>
              <div className="h-[2.938rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-lightgray mq725:w-full mq725:h-[0.063rem]" />
              <div className="w-[4.063rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border text-center">
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                  <div className="h-[1.25rem] flex flex-row items-start justify-start py-[0rem] pr-[1.438rem] pl-[1.375rem] box-border">
                    <img
                      className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/rv-hookup-fill0-wght400-grad0-opsz24-1-5.svg"
                    />
                  </div>
                  <div className="self-stretch relative font-medium inline-block min-w-[4.063rem]">
                    Add Trailer
                  </div>
                </div>
              </div>
              <div className="h-[2.938rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-lightgray mq725:w-full mq725:h-[0.063rem]" />
              <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                  <div className="h-[1.25rem] flex flex-row items-start justify-start py-[0rem] pr-[1.438rem] pl-[1.375rem] box-border">
                    <img
                      className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/regular-used-icons-1.svg"
                    />
                  </div>
                  <div className="relative font-medium inline-block min-w-[4.063rem]">
                    Add Driver
                  </div>
                </div>
              </div>
              <div className="h-[2.938rem] w-[0.063rem] relative box-border border-r-[1px] border-solid border-lightgray mq725:w-full mq725:h-[0.063rem]" />
              <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                  <div className="h-[1.25rem] flex flex-row items-start justify-start py-[0rem] pr-[1.438rem] pl-[1.375rem] box-border">
                    <img
                      className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/regular-used-icons.svg"
                    />
                  </div>
                  <div className="relative font-medium inline-block min-w-[4.063rem]">
                    Add Indents
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[3.25rem] max-w-full text-[1rem] mq725:flex-wrap mq450:gap-[3.25rem_1.625rem]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.875rem] min-w-[15.625rem] max-w-full">
                <div className="w-[11.75rem] relative font-medium flex items-center box-border pr-[1.25rem]">
                  High Priority alerts (14)
                </div>
                <div className="self-stretch rounded-2xl bg-white shadow-[0px_2px_8px_rgba(26,_56,_117,_0.05)] flex flex-col items-start justify-start p-[0.75rem] box-border gap-[0.875rem] max-w-full text-[0.875rem] text-gray">
                  <div className="w-[24rem] h-[9.125rem] relative rounded-2xl bg-white shadow-[0px_2px_8px_rgba(26,_56,_117,_0.05)] hidden max-w-full" />
                  <div className="self-stretch flex flex-row items-start justify-start gap-[0.5rem] mq450:flex-wrap">
                    <img
                      className="h-[2rem] w-[2rem] relative rounded overflow-hidden shrink-0 min-h-[2rem] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/icon--container.svg"
                    />
                    <div className="flex-1 flex flex-row items-start justify-start gap-[2.75rem] min-w-[13rem] mq450:gap-[2.75rem_1.375rem]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="w-[9.938rem] relative font-medium inline-block box-border pr-[1.25rem] z-[1]">
                          Driver Raised Concern
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[0.5rem] text-[0.625rem]">
                          <div className="relative inline-block min-w-[4.688rem] z-[1]">
                            Load No : 12454,
                          </div>
                          <div className="relative z-[1]">
                            Bill To : RoaDo demo Bangalore
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem] text-[0.75rem]">
                        <div className="relative inline-block min-w-[3.313rem] z-[1]">
                          13 Fab 24
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative text-[0.75rem] leading-[1rem] z-[1]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eius mod tempor incididunt ut labore et dolore magna
                    aliqua
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end text-text-colors-text-color-1">
                    <div className="w-[12.125rem] flex flex-row items-start justify-between py-[0rem] pr-[0rem] pl-[1.25rem] box-border gap-[1.25rem]">
                      <div className="rounded flex flex-row items-start justify-start py-[0.438rem] px-[0.625rem] z-[1]">
                        <div className="relative [text-decoration:underline] inline-block min-w-[2.5rem]">
                          Ignore
                        </div>
                      </div>
                      <button className="cursor-pointer [border:none] py-[0.438rem] px-[0.75rem] bg-text-colors-text-color-1 rounded flex flex-row items-start justify-start z-[1] hover:bg-steelblue">
                        <div className="relative text-[0.875rem] font-roboto text-white text-left inline-block min-w-[3.063rem]">
                          Resolve
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-end justify-start gap-[0.813rem] min-w-[15.625rem] max-w-full text-[0.875rem] text-gray">
                <button className="cursor-pointer [border:none] py-[0rem] pr-[0rem] pl-[1.25rem] bg-[transparent] h-[1.25rem] flex flex-row items-start justify-start box-border gap-[0.313rem]">
                  <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                    <div className="relative text-[0.875rem] font-roboto text-text-colors-text-color-1 text-left inline-block min-w-[3.125rem]">
                      View All
                    </div>
                  </div>
                  <img
                    className="h-[1.25rem] w-[1.25rem] relative min-h-[1.25rem]"
                    alt=""
                    src="/group-2616069.svg"
                  />
                </button>
                <div className="self-stretch rounded-2xl bg-white shadow-[0px_2px_8px_rgba(26,_56,_117,_0.05)] flex flex-col items-start justify-start p-[0.75rem] box-border gap-[0.875rem] max-w-full">
                  <div className="w-[24rem] h-[9.125rem] relative rounded-2xl bg-white shadow-[0px_2px_8px_rgba(26,_56,_117,_0.05)] hidden max-w-full" />
                  <div className="self-stretch flex flex-row items-start justify-start gap-[0.5rem] mq450:flex-wrap">
                    <img
                      className="h-[2rem] w-[2rem] relative rounded overflow-hidden shrink-0 min-h-[2rem] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/icon--container-1.svg"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pr-[2.25rem] pl-[0rem] box-border gap-[0.25rem] min-w-[10.5rem]">
                      <div className="relative font-medium z-[1]">
                        Reefer Temp. out of range
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[0.5rem] text-[0.625rem]">
                        <div className="relative inline-block min-w-[4.688rem] z-[1]">
                          Load No : 12454,
                        </div>
                        <div className="relative z-[1]">
                          Bill To : RoaDo demo Bangalore
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem] text-[0.75rem]">
                      <div className="relative inline-block min-w-[3.313rem] z-[1]">
                        13 Fab 24
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative text-[0.75rem] leading-[1rem] z-[1]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eius mod tempor incididunt ut labore et dolore magna
                    aliqua
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end text-text-colors-text-color-1">
                    <div className="w-[12.438rem] flex flex-row items-start justify-between py-[0rem] pr-[0rem] pl-[1.25rem] box-border gap-[1.25rem]">
                      <div className="rounded flex flex-row items-start justify-start py-[0.438rem] px-[0.625rem] z-[1]">
                        <div className="relative [text-decoration:underline] inline-block min-w-[2.5rem]">
                          Ignore
                        </div>
                      </div>
                      <button className="cursor-pointer [border:none] py-[0.438rem] px-[0.75rem] bg-text-colors-text-color-1 rounded flex flex-row items-start justify-start z-[1] hover:bg-steelblue">
                        <div className="relative text-[0.875rem] font-roboto text-white text-left inline-block min-w-[3.063rem]">
                          Resolve
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[22.5rem] bg-white shadow-[0px_2px_8px_rgba(26,_56,_117,_0.05)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[1.5rem] px-[1rem] pb-[2.25rem] box-border gap-[1.5rem] max-w-full mq725:pt-[1.25rem] mq725:pb-[1.438rem] mq725:box-border">
        <ArcAssembler />
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.875rem]">
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
            <div className="relative font-medium">
              Scheduled Activities (14)
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem] text-[0.75rem] text-gray">
              <div className="relative [text-decoration:underline] inline-block min-w-[2.688rem]">
                View All
              </div>
            </div>
          </div>
          <FigmaFacilitator />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
