import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  income?: string;
  cAD?: string;
  paymentsReceived?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propColor?: CSSProperties["color"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  income,
  cAD,
  paymentsReceived,
  propMinWidth,
  propColor,
  propMinWidth1,
  propMinWidth2,
}) => {
  const incomeStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const cADStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth1,
    };
  }, [propColor, propMinWidth1]);

  const paymentsReceivedStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className="flex-1 rounded bg-white flex flex-col items-start justify-start p-[0.75rem] gap-[0.375rem] text-left text-[0.75rem] text-dimgray font-roboto border-[1px] border-solid border-lightgray">
      <div className="w-[9.688rem] h-[5.188rem] relative rounded bg-white box-border hidden border-[1px] border-solid border-lightgray" />
      <div
        className="relative font-medium inline-block min-w-[2.563rem] z-[1]"
        style={incomeStyle}
      >
        {income}
      </div>
      <div
        className="relative text-[1rem] font-medium text-green inline-block min-w-[5.688rem] z-[1]"
        style={cADStyle}
      >
        {cAD}
      </div>
      <div
        className="relative inline-block min-w-[6.875rem] z-[1]"
        style={paymentsReceivedStyle}
      >
        {paymentsReceived}
      </div>
    </div>
  );
};

export default FrameComponent;
