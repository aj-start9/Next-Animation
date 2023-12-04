import CircularProgression from "./CircularProgression";

export default function Home() {
  const serviceTab = [
    {
      value: 90,
      title: "CREATION",
    },
    {
      value: 80,
      title: "DEVELOPMENT",
    },
    {
      value: 75,
      title: "PRODUCTION",
    },
  ];
  return (
    <div className="my-2 w-80">
      <div className="container mx-auto w-full flex items-center flex-wrap lg:flex-nowrap">       
        <div className="w-full h-full ">
          <div className="flex lg:justify-around lg:flex-row flex-col justify-center">
            {serviceTab.map((x, index) => {
              return (
                <div key={index} className="flex flex-col items-center">
                  <div>
                    <CircularProgression
                      serviceTab={serviceTab}
                      index={index}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}