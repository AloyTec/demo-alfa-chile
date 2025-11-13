'use client';

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  Avatar,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  userName?: string;
  userRole?: string;
  notificationCount?: number;
}

export default function Header({
  userName = 'María González',
  userRole = 'Producción',
  notificationCount = 3
}: HeaderProps) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    router.push('/login');
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'white',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            cursor: 'pointer'
          }}
          onClick={() => router.push('/dashboard')}
        >
          ALOYTECH | Alfa Chile
        </Typography>

        <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <Link href="/dashboard" style={{ textDecoration: 'none' }}>
            <Typography
              sx={{
                color: 'text.secondary',
                fontWeight: 500,
                '&:hover': { color: 'primary.main' },
                transition: 'color 0.3s'
              }}
            >
              Inicio
            </Typography>
          </Link>
          <Link href="#" style={{ textDecoration: 'none' }}>
            <Typography
              sx={{
                color: 'text.secondary',
                fontWeight: 500,
                '&:hover': { color: 'primary.main' },
                transition: 'color 0.3s'
              }}
            >
              Mi Área
            </Typography>
          </Link>
          <Link href="/indicadores-kpi" style={{ textDecoration: 'none' }}>
            <Typography
              sx={{
                color: 'text.secondary',
                fontWeight: 500,
                '&:hover': { color: 'primary.main' },
                transition: 'color 0.3s'
              }}
            >
              Reportes
            </Typography>
          </Link>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton
            size="large"
            sx={{
              backgroundColor: '#DBEAFE',
              '&:hover': { backgroundColor: '#BFDBFE' }
            }}
          >
            <Badge badgeContent={notificationCount} color="error">
              <NotificationsIcon sx={{ color: 'primary.main' }} />
            </Badge>
          </IconButton>

          <Box
            onClick={handleMenu}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              cursor: 'pointer',
              '&:hover': { opacity: 0.8 }
            }}
          >
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                {userName}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
                {userRole}
              </Typography>
            </Box>
            <Avatar
              sx={{
                bgcolor: 'primary.main',
                width: 40,
                height: 40,
                background: 'linear-gradient(135deg, #3B82F6, #1E3A8A)'
              }}
            >
              {getInitials(userName)}
            </Avatar>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Perfil</MenuItem>
            <MenuItem onClick={handleClose}>Configuración</MenuItem>
            <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
          </Menu>

          <Button
            variant="contained"
            color="error"
            onClick={handleLogout}
            sx={{
              ml: 1,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#dc2626'
              }
            }}
          >
            Cerrar Sesión
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
