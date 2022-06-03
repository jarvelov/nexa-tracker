import React, { useEffect, useState } from 'react';

export type ConditionallyRenderProps = {
  client?: boolean;
  server?: boolean;
  children: React.ReactElement;
};

const ConditionallyRender: React.FC<ConditionallyRenderProps> = ({
  children,
  client,
  server,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  if (!isMounted && client) {
    return null;
  }

  if (isMounted && server) {
    return null;
  }

  return children;
};

export default ConditionallyRender;
