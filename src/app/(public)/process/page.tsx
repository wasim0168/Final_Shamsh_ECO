"use client";
import useIsMobile from "@/hooks/use-mobile";
import DesktopProcess from "@/screens/process/desktop-process";
import MobileProcess from "@/screens/process/mobile-process";

const Process = () => {
  const isMobile = useIsMobile();
  return isMobile ? <MobileProcess /> : <DesktopProcess />;
};

export default Process;
