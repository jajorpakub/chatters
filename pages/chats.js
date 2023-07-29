import React, { useState, useEffect, useContext } from "react";

import { Context } from "../context";

import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFromSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFromSocial)
);

export default function Chats() {
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  });

  useEffect(() => {
    if (username.length === 0 || secret.length === 0) router.push("/");
  })

  if (!showChat) return  <div />;
  return( 
  <div className="background">
    <div className='engine'>
      <ChatEngine
      height="calc(100vh - 200px)"
      projectID="3bcf2221-a3b7-4338-a4ec-0bcad6cf8c9e"
      userName={username}
      userSecret={secret}
      />
    </div>

  </div>
  )
}
