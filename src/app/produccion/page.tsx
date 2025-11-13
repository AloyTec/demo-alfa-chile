'use client';

import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  LinearProgress,
} from '@mui/material';
import Grid from '@/components/Grid';
import {
  Add as AddIcon,
  PlayArrow as PlayIcon,
  Pause as PauseIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import AppLayout from '@/components/AppLayout';
import { useRouter } from 'next/navigation';

export default function ProduccionPage() {
  const router = useRouter();

  const orders = [
    {
      id: 'OP-001',
      product: 'Producto A - Presentación 500g',
      lote: 'L2024-11',
      quantity: 5000,
      completed: 3200,
      status: 'En Proceso',
      priority: 'Alta',
      line: 'Línea 1',
      startDate: '08/11/2025',
      endDate: '12/11/2025',
      statusColor: 'primary',
    },
    {
      id: 'OP-002',
      product: 'Producto B - Presentación 1kg',
      lote: 'L2024-12',
      quantity: 3000,
      completed: 2850,
      status: 'En Proceso',
      priority: 'Media',
      line: 'Línea 2',
      startDate: '09/11/2025',
      endDate: '13/11/2025',
      statusColor: 'primary',
    },
    {
      id: 'OP-003',
      product: 'Producto C - Presentación 250g',
      lote: 'L2024-13',
      quantity: 8000,
      completed: 8000,
      status: 'Completada',
      priority: 'Baja',
      line: 'Línea 3',
      startDate: '06/11/2025',
      endDate: '10/11/2025',
      statusColor: 'success',
    },
    {
      id: 'OP-004',
      product: 'Producto D - Presentación 2kg',
      lote: 'L2024-14',
      quantity: 2000,
      completed: 1200,
      status: 'Pausada',
      priority: 'Alta',
      line: 'Línea 1',
      startDate: '10/11/2025',
      endDate: '14/11/2025',
      statusColor: 'warning',
    },
  ];

  const stats = [
    { label: 'Órdenes Activas', value: '12', color: '#3B82F6', icon: '🏭' },
    { label: 'Completadas Hoy', value: '3', color: '#10b981', icon: '✅' },
    { label: 'Producción Total', value: '15,200', color: '#8b5cf6', icon: '📦' },
    { label: 'Líneas Operativas', value: '3/4', color: '#f59e0b', icon: '⚙️' },
  ];

  const getProgressPercentage = (completed: number, total: number) => {
    return Math.round((completed / total) * 100);
  };

  return (
    <AppLayout>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>
            Gestión de Producción
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Control y seguimiento de órdenes de producción
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            background: 'linear-gradient(135deg, #3B82F6, #1E3A8A)',
            '&:hover': {
              background: 'linear-gradient(135deg, #2563eb, #1E40AF)',
            },
          }}
        >
          Nueva Orden
        </Button>
      </Box>

      {/* Stats */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                      {stat.label}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary' }}>
                      {stat.value}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      bgcolor: `${stat.color}20`,
                    }}
                  >
                    {stat.icon}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Orders List */}
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
        Órdenes de Producción
      </Typography>

      <Grid container spacing={3}>
        {orders.map((order) => (
          <Grid item xs={12} key={order.id}>
            <Card
              sx={{
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
                        {order.id}
                      </Typography>
                      <Chip
                        label={order.status}
                        color={order.statusColor as any}
                        size="small"
                        icon={
                          order.status === 'Completada' ? <CheckCircleIcon /> :
                          order.status === 'Pausada' ? <PauseIcon /> : <PlayIcon />
                        }
                      />
                      <Chip
                        label={`Prioridad: ${order.priority}`}
                        size="small"
                        variant="outlined"
                        color={order.priority === 'Alta' ? 'error' : order.priority === 'Media' ? 'warning' : 'default'}
                      />
                    </Box>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
                      {order.product}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Lote: {order.lote} | {order.line}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          Progreso
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                          {order.completed.toLocaleString()} / {order.quantity.toLocaleString()} unidades
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={getProgressPercentage(order.completed, order.quantity)}
                        sx={{
                          height: 8,
                          borderRadius: 1,
                          bgcolor: '#e2e8f0',
                          '& .MuiLinearProgress-bar': {
                            bgcolor: order.status === 'Completada' ? '#10b981' : order.status === 'Pausada' ? '#f59e0b' : '#3B82F6',
                          },
                        }}
                      />
                      <Typography variant="caption" sx={{ color: 'text.secondary', mt: 0.5 }}>
                        {getProgressPercentage(order.completed, order.quantity)}% completado
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Inicio: {order.startDate} | Fin estimado: {order.endDate}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </AppLayout>
  );
}
