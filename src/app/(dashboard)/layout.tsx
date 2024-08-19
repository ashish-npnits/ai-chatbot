
import { onLoginUser } from '@/actions/auth';
import SideBar from '@/components/sidebar';
import { ChatProvider } from '@/context/user-chat-context';
import React from 'react';

interface Props {
  children: React.ReactNode
}

const OwnerLayout = async (props:Props) => {
    const authenticated = await onLoginUser();
    if(!authenticated) return null;
  return (
    <ChatProvider>
      <SideBar domains={authenticated.domain?.domains}/>
    </ChatProvider>
  );
};

export default OwnerLayout;