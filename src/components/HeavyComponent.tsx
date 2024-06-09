import { useEffect, useState } from "react";

const HeavyComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    isLoaded && (
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-5 mb-2">This is a heavy component</h1>
        <h2>This component takes 5 seconds to load</h2>
      </div>
    )
  );
};

export default HeavyComponent;
