'use client';

import React from 'react';
import { Box, Container } from '@mui/material';
import Header from './Header';

interface AppLayoutProps {
  children: React.ReactNode;
  userName?: string;
  userRole?: string;
  notificationCount?: number;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

export default function AppLayout({
  children,
  userName,
  userRole,
  notificationCount,
  maxWidth = 'xl'
}: AppLayoutProps) {
  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Header
        userName={userName}
        userRole={userRole}
        notificationCount={notificationCount}
      />
      <Container
        maxWidth={maxWidth}
        sx={{
          py: 4,
          animation: 'fadeIn 0.4s ease',
          '@keyframes fadeIn': {
            from: { opacity: 0, transform: 'translateY(10px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
