import React from 'react'
import btcSrc from "../assets/Crypto.jpg"
import {motion} from "framer-motion"
import { Box , Image , Text } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"} >
      <motion.div
      style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image src={btcSrc} w={"full"} h={"full"} objectFit={"contain"} filter={"grayscale(1)"} />
      </motion.div>

      <Text>
        Crypto Tracker
      </Text>
    </Box>
  )
}

export default Home