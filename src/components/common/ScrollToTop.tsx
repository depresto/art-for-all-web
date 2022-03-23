import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ScrollToTop: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [router.asPath]);

  return null;
};

export default ScrollToTop;
