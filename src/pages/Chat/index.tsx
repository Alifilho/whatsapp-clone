import React, { FC, useState } from 'react';

import {
  Flex,
  Avatar,
  AvatarBadge,
  Text,
  Icon,
  Input,
  Box,
} from '@chakra-ui/react';

import Message from 'components/layout/Message';

import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';

import { randomColor } from 'utils/generate';

import sampleImage from '../../../assets/sample/pp.jpg';

const messages = [
  {
    id: '1234qewr',
    sender: 'Fernando Gomes',
    date: '2021-06-08T15:05:44.085Z',
    content: 'Hello Alisson',
  },
  {
    id: '5678asdf',
    sender: 'Alisson Oliveira',
    date: '2021-06-08T15:05:44.085Z',
    content: 'Hello Fernando',
  },
  {
    id: '5678asdf',
    sender: 'Alisson Oliveira',
    date: '2021-06-08T15:05:44.085Z',
    content: 'Hello Fernando',
  },
  {
    id: '1234qewr',
    sender: 'Fernando Gomes',
    date: '2021-06-08T15:05:44.085Z',
    content: 'Hello Alisson',
  },
  {
    id: '5678asdf',
    sender: 'Alisson Oliveira',
    date: '2021-06-08T15:05:44.085Z',
    content: 'Hello Fernando',
  },
  {
    id: '1234qewr',
    sender: 'Fernando Gomes',
    date: '2021-06-08T15:05:44.085Z',
    content: 'Hello Alisson',
  },
  {
    id: '5678asdf',
    sender: 'Alisson Oliveira',
    date: '2021-06-08T15:05:44.085Z',
    content: 'Hello Fernando',
  },
  {
    id: '5678asdf',
    sender: 'Alisson Oliveira',
    date: '2021-06-08T15:05:44.085Z',
    content: 'Hello Fernando',
  },
];

const user = 'Alisson Oliveira';

const Chat: FC = () => {
  const [color] = useState(randomColor());

  return (
    <Flex minH="100vh" minW="100vw" direction="column">
      <Flex align="center" minW="100vw" px="2.5vw" py="2vh" bgColor="#2A2F32">
        <Avatar name="Alisson Oliveira" src={sampleImage} size="sm">
          <AvatarBadge boxSize="1em" bg="green.500" />
        </Avatar>
        <Text color="#E0E0E2" ml="2vw" fontWeight="bold">
          Alisson Oliveira
        </Text>
      </Flex>

      <Flex
        bgColor="#0D1418"
        flex="auto"
        p="5"
        minW="100vw"
        maxW="100vw"
        maxH="81.2vh"
        overflowY="auto"
      >
        <Box w="100%">
          {messages.map((message) => (
            <Flex
              key={message.id}
              style={{
                justifyContent:
                  message.sender === user ? 'flex-end' : 'flex-start',
              }}
              mb="0.5vh"
            >
              <Message
                nameColor={color}
                sender={message.sender}
                content={message.content}
                date={message.date}
                isUser={message.sender === user}
              />
            </Flex>
          ))}
        </Box>
      </Flex>

      <Flex
        align="center"
        minW="100vw"
        px="2.5vw"
        minH="10vh"
        bgColor="#1E2428"
      >
        <Icon as={HiOutlineEmojiHappy} color="#828689" boxSize={8} />
        <Icon as={AiOutlinePaperClip} color="#828689" boxSize={8} ml="1vw" />
        <Input
          placeholder="Digite uma mensagem"
          size="md"
          ml="1vw"
          borderRadius="25px"
          border="0px"
          bgColor="#33383B"
        />
        <Icon as={BsFillMicFill} color="#828689" boxSize={8} ml="1vw" />
      </Flex>
    </Flex>
  );
};

export default Chat;
