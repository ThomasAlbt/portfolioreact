import { useEffect, useState } from "react";

const Loading = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="splash-container">
        <div className="splash-content">
          <h1 className="splash-name">Thomas Albert</h1>
          <p className="splash-title">Développeur Web Full Stack</p>
          <div className="splash-loader"></div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};


export default Loading;
