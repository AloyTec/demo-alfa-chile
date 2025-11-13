'use client';

import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import Grid from '@/components/Grid';
import {
  Factory as FactoryIcon,
  CheckCircle as CheckCircleIcon,
  Science as ScienceIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';
import AppLayout from '@/components/AppLayout';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  const stats = [
    {
      title: 'ÓRDENES ACTIVAS',
      value: '12',
      label: 'En proceso de producción',
      icon: '🏭',
      color: '#3B82F6',
      bgColor: '#DBEAFE',
      borderColor: '#3B82F6',
      route: '/produccion',
    },
    {
      title: 'INSPECCIONES PENDIENTES',
      value: '5',
      label: 'Requieren atención hoy',
      icon: '✅',
      color: '#10b981',
      bgColor: '#d1fae5',
      borderColor: '#10b981',
      route: '/calidad',
    },
    {
      title: 'ANÁLISIS EN CURSO',
      value: '8',
      label: 'Muestras siendo analizadas',
      icon: '🔬',
      color: '#8b5cf6',
      bgColor: '#ede9fe',
      borderColor: '#8b5cf6',
      route: '/laboratorio',
    },
    {
      title: 'ALERTAS DEL DÍA',
      value: '3',
      label: 'Requieren revisión',
      icon: '⚠️',
      color: '#f59e0b',
      bgColor: '#fef3c7',
      borderColor: '#f59e0b',
    },
  ];

  const notifications = [
    {
      title: '⚠️ Stock Bajo',
      text: 'Materia prima MP-789 por debajo del mínimo',
      type: 'warning',
      bgColor: '#fffbeb',
      borderColor: '#f59e0b',
    },
    {
      title: '✅ Inspección Aprobada',
      text: 'Lote L2024-11 cumple especificaciones',
      type: 'success',
      bgColor: '#f0fdf4',
      borderColor: '#10b981',
    },
    {
      title: '🔬 Análisis Completado',
      text: 'Resultados disponibles para SOL-122',
      type: 'info',
      bgColor: '#F8FAFC',
      borderColor: '#3B82F6',
    },
  ];

  const activities = [
    {
      icon: '🏭',
      title: 'Orden OP-001 actualizada',
      description: 'Producción: 3,200/5,000 unidades completadas',
      time: 'Hace 15 minutos',
      color: '#DBEAFE',
    },
    {
      icon: '✅',
      title: 'Inspección INS-045 iniciada',
      description: 'Inspector: C. Torres - Lote L2024-11',
      time: 'Hace 1 hora',
      color: '#d1fae5',
    },
    {
      icon: '🔬',
      title: 'Resultados de análisis registrados',
      description: 'SOL-122: Análisis físico-químico - Conforme',
      time: 'Hace 2 horas',
      color: '#ede9fe',
    },
    {
      icon: '🏭',
      title: 'Incidencia reportada',
      description: 'Línea 2: Ajuste menor de velocidad',
      time: 'Hace 3 horas',
      color: '#DBEAFE',
    },
  ];

  const orderStats = [
    { label: 'Completadas', value: 45, percentage: '76%', color: '#10b981' },
    { label: 'En Proceso', value: 12, percentage: '20%', color: '#3B82F6' },
    { label: 'Pausadas', value: 2, percentage: '3%', color: '#f59e0b' },
  ];

  return (
    <AppLayout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>
          Dashboard General
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Resumen de actividades del día - Martes, 11 de Noviembre 2025
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} lg={3} key={index}>
            <Card
              sx={{
                borderLeft: `4px solid ${stat.borderColor}`,
                cursor: stat.route ? 'pointer' : 'default',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                },
              }}
              onClick={() => stat.route && router.push(stat.route)}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                    {stat.title}
                  </Typography>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      bgcolor: stat.bgColor,
                    }}
                  >
                    {stat.icon}
                  </Box>
                </Box>
                <Typography variant="h3" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.5 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {stat.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Main Content Grid */}
      <Grid container spacing={3}>
        {/* Chart Panel */}
        <Grid item xs={12} lg={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, pb: 2, borderBottom: '2px solid #DBEAFE' }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Estado de Órdenes de Producción
                </Typography>
                <Typography
                  component="a"
                  href="/produccion"
                  sx={{ color: 'primary.main', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  Ver todas →
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 4, alignItems: 'center', flexWrap: 'wrap' }}>
                {/* Donut Chart Representation */}
                <Box sx={{ position: 'relative', width: 200, height: 200 }}>
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      background: `conic-gradient(
                        #10b981 0deg 274deg,
                        #3B82F6 274deg 317deg,
                        #f59e0b 317deg 329deg,
                        #e2e8f0 329deg 360deg
                      )`,
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 130,
                        height: 130,
                        bgcolor: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.08)',
                      }}
                    >
                      <Typography variant="h3" sx={{ fontWeight: 700, color: 'text.primary' }}>
                        59
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Órdenes
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Legend */}
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {orderStats.map((item, index) => (
                    <Card key={index} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          width: 16,
                          height: 48,
                          borderRadius: 1.5,
                          background: `linear-gradient(180deg, ${item.color}, ${item.color}dd)`,
                          boxShadow: `0 4px 12px ${item.color}33`,
                        }}
                      />
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" sx={{ fontWeight: 700, color: 'text.primary' }}>
                          {item.label}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {item.percentage} del total
                        </Typography>
                      </Box>
                      <Typography variant="h4" sx={{ fontWeight: 700, color: item.color }}>
                        {item.value}
                      </Typography>
                    </Card>
                  ))}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Notifications Panel */}
        <Grid item xs={12} lg={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, pb: 2, borderBottom: '2px solid #DBEAFE' }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Notificaciones Recientes
                </Typography>
                <Typography
                  component="a"
                  href="#"
                  sx={{ color: 'primary.main', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  Ver todas →
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {notifications.map((notif, index) => (
                  <Box
                    key={index}
                    sx={{
                      p: 2,
                      bgcolor: notif.bgColor,
                      borderLeft: `4px solid ${notif.borderColor}`,
                      borderRadius: 1.5,
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}>
                      {notif.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                      {notif.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Activity Feed */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, pb: 2, borderBottom: '2px solid #DBEAFE' }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Últimas Actividades
                </Typography>
                <Typography
                  component="a"
                  href="#"
                  sx={{ color: 'primary.main', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  Ver historial completo →
                </Typography>
              </Box>

              <List>
                {activities.map((activity, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      borderBottom: index < activities.length - 1 ? '1px solid #e2e8f0' : 'none',
                      px: 2,
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: activity.color, fontSize: '1.25rem' }}>
                        {activity.icon}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                          {activity.title}
                        </Typography>
                      }
                      secondary={
                        <>
                          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                            {activity.description}
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                            {activity.time}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AppLayout>
  );
}
