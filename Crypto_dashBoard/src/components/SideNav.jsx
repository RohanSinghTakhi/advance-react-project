import { Box, Heading, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { BiSupport } from 'react-icons/bi';
import { BsArrowDown } from 'react-icons/bs';
import { RxDashboard } from 'react-icons/rx';

function SideNav() {
  const navLinks = [
    {
      icon: RxDashboard,
      text: 'Dashboard',
      link: '/'
    },
    {
      icon: BsArrowDown,
      text: 'Transaction',
      link: '/Transaction'
    }
  ];

  return (<>
    <Stack boxShadow="lg" maxW="16rem" h="100vh" justifyContent="space-between">
      <Box>
      <Heading textAlign="center" fontSize="20px" mb="5" as="h1" pt="3.5rem">
          @STOCK_CRYPTO   
      </Heading>
      {navLinks.map((nav) => (
        <HStack
          mt="1"
          mx="3"
          py="3"
          px="4"
          key={nav.text}
          _hover={{ bg: '#F3F3F7', cursor: 'pointer', borderRadius: "10px" }}
          href={nav.link}
        >
          <Icon as={nav.icon} />
          <Text fontSize="14px" color="#797E82">{nav.text}</Text>

        </HStack>
      ))}
      </Box>
      <Box>
      <HStack
          mt="1"
          mx="3"
          py="3"
          px="4"
          mb="5"

          _hover={{ bg: '#F3F3F7', cursor: 'pointer', borderRadius: "10px" }}
          
        >
            <Icon as={BiSupport} />
            <Text fontSize="14px" color="#797E82">Support</Text>

          </HStack>
          </Box>
    </Stack>
  </>
  );
}

export default SideNav;
