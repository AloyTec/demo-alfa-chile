'use client';

import React, { useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login after 2 seconds
    const timer = setTimeout(() => {
      router.push('/login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
        overflow: 'hidden',
        animation: 'fadeIn 0.5s ease-in',
        '@keyframes fadeIn': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          animation: 'fadeIn 0.5s ease-in',
        }}
      >
        <Box
          sx={{
            width: '250px',
            height: '100px',
            background: 'white',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'primary.main',
            fontWeight: 'bold',
            fontSize: '32px',
            margin: '0 auto 32px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            animation: 'pulse 2s ease-in-out infinite',
            '@keyframes pulse': {
              '0%, 100%': { transform: 'scale(1)' },
              '50%': { transform: 'scale(1.05)' },
            },
          }}
        >
          ALFA CHILE
        </Box>

        <Typography
          variant="h5"
          sx={{
            color: 'white',
            fontWeight: 500,
            mb: 3,
          }}
        >
          Cargando Sistema...
        </Typography>

        <CircularProgress
          size={50}
          sx={{
            color: 'white',
          }}
        />
      </Box>
    </Box>
  );
}
