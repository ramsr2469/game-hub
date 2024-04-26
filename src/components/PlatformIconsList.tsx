import { HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}

function PlatformIconsList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    playstation: FaPlaystation,
    ios: MdPhoneIphone,
    linux: FaLinux,
    web: BsGlobe,
    android: FaAndroid,
    apple: FaApple,
    nintendo: SiNintendo,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
}

export default PlatformIconsList;
