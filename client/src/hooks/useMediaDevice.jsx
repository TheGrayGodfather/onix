import { useMediaQuery } from "@mui/material";

const useMediaDevice = () => {
  const isMobile = useMediaQuery("(min-width: 0px) and (max-width: 639.9999px)");
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1023.9999px)");
  const isLaptopSmall = useMediaQuery("(min-width: 1024px)  and (max-width: 1199.9999px)");
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  
  return { isMobile, isTablet, isLaptopSmall, isDesktop };
};

export default useMediaDevice;