const Border = () => {
  return (
    <div>
      <div className="absolute top-0 right-0 z-[300] bg-black rounded h-24 w-24"></div>

      <div className="fixed top-0 left-0 h-3 w-full z-[10000] pointer-events-none bg-black">
        <div
          className="absolute"
          style={{
            top: "calc(0% + 0.75rem)",
            left: "calc(0% + 0.75rem)",
            transform: "rotate(0deg)",
          }}
        >
          <svg
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
          >
            <path
              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
              fill="black"
            ></path>
          </svg>
        </div>
        <div
          className="absolute"
          style={{
            top: "calc(0% + 0.75rem)",
            right: "calc(0% + 0.75rem)",
            transform: "rotate(90deg)",
          }}
        >
          <svg
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
          >
            <path
              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
              fill="black"
            ></path>
          </svg>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 h-3 w-full z-[10000] pointer-events-none bg-black">
        <div
          className="absolute"
          style={{
            bottom: "calc(0% + 0.75rem)",
            right: "calc(0% + 0.75rem)",
            transform: "rotate(180deg)",
          }}
        >
          <svg
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
          >
            <path
              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
              fill="black"
            ></path>
          </svg>
        </div>
        <div
          className="absolute"
          style={{
            bottom: "calc(0% + 0.75rem)",
            left: "calc(0% + 0.75rem)",
            transform: "rotate(270deg)",
          }}
        >
          <svg
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
          >
            <path
              d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
              fill="black"
            ></path>
          </svg>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-3 h-full z-[10000] pointer-events-none bg-black"></div>
      <div className="fixed top-0 right-0 w-3 h-full z-[10000] pointer-events-none bg-black"></div>
    </div>
  );
};

export default Border;
