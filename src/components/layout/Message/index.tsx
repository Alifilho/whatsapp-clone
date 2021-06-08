import React, { FC } from 'react';

import { Flex, Text, Box } from '@chakra-ui/react';

interface MessageProps {
  sender: string;
  isUser: boolean;
  date: string;
  content: string;
  nameColor: string;
}

const Message: FC<MessageProps> = ({
  sender,
  isUser,
  content,
  date,
  nameColor,
}: MessageProps) => {
  return (
    <Box
      bgColor={isUser ? '#056162' : '#262D31'}
      color="#FFFFFF"
      w="15vw"
      borderRadius="12.5px"
    >
      <Flex direction="column" p="2">
        {!isUser && (
          <Text fontSize="xs" color={nameColor}>
            {sender}
          </Text>
        )}
        <Text>{content}</Text>
        <Text alignSelf="flex-end" fontSize="xs">
          {new Date(date).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
      </Flex>
    </Box>
  );
};

export default Message;
