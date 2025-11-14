'use client';

import React from 'react';
import { Box, Card, CardContent, Typography, Chip, Button, LinearProgress } from '@mui/material';
import Grid from '@/components/Grid';
import { Add as AddIcon, Visibility as VisibilityIcon, Edit as EditIcon } from '@mui/icons-material';
import AppLayout from '@/components/AppLayout';
import { useRouter } from 'next/navigation';

export default function ProduccionPage() {
  const router = useRouter();

  const orders = [
    { id: 'OP-001', product: 'Producto A - 500g', lote: 'L2024-11', quantity: 5000, completed: 3200, status: 'En Proceso', priority: 'Alta', line: 'Línea 1' },
    { id: 'OP-002', product: 'Producto B - 1kg', lote: 'L2024-12', quantity: 3000, completed: 2850, status: 'En Proceso', priority: 'Media', line: 'Línea 2' },
    { id: 'OP-003', product: 'Producto C - 250g', lote: 'L2024-13', quantity: 8000, completed: 8000, status: 'Completada', priority: 'Baja', line: 'Línea 3' },
  ];

  return (
    <AppLayout
      title="Gestión de Producción"
      module="produccion"
      showSidebar={true}
      sidebarBackLink="/dashboard"
      sidebarBackLabel="Volver al Dashboard"
    >
      <Box sx={{
        display: 'flex',
        gap: { xs: 1, sm: 2 },
        mb: { xs: 2, sm: 3 },
        flexWrap: 'wrap'
      }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => router.push('/produccion/nueva')}
          sx={{
            minHeight: 44,
            fontSize: { xs: '0.875rem', sm: '0.9375rem' },
            px: { xs: 2, sm: 3 }
          }}
        >
          <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>Nueva Orden</Box>
          <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>Nueva</Box>
        </Button>
        <Button
          variant="outlined"
          onClick={() => router.push('/produccion/lineas')}
          sx={{
            minHeight: 44,
            fontSize: { xs: '0.875rem', sm: '0.9375rem' },
            px: { xs: 2, sm: 3 }
          }}
        >
          Líneas
        </Button>
        <Button
          variant="outlined"
          onClick={() => router.push('/produccion/incidencias')}
          sx={{
            minHeight: 44,
            fontSize: { xs: '0.875rem', sm: '0.9375rem' },
            px: { xs: 2, sm: 3 }
          }}
        >
          Incidencias
        </Button>
        <Button
          variant="outlined"
          onClick={() => router.push('/produccion/materias-primas')}
          sx={{
            minHeight: 44,
            fontSize: { xs: '0.875rem', sm: '0.9375rem' },
            px: { xs: 2, sm: 3 },
            display: { xs: 'none', md: 'inline-flex' }
          }}
        >
          Materias Primas
        </Button>
      </Box>

      <Grid container spacing={3}>
        {orders.map((order) => {
          const progress = (order.completed / order.quantity) * 100;
          return (
            <Grid item xs={12} key={order.id}>
              <Card>
                <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    mb: 2,
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: { xs: 1.5, sm: 0 }
                  }}>
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                        {order.id}
                      </Typography>
                      <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                        {order.product}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                        Lote: {order.lote} | {order.line}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip
                        label={order.status}
                        color={order.status === 'Completada' ? 'success' : 'primary'}
                        size="small"
                        sx={{ fontSize: { xs: '0.7rem', sm: '0.8125rem' } }}
                      />
                      <Chip
                        label={order.priority}
                        color={order.priority === 'Alta' ? 'error' : 'default'}
                        size="small"
                        sx={{ fontSize: { xs: '0.7rem', sm: '0.8125rem' } }}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
                      {order.completed} / {order.quantity} unidades ({progress.toFixed(1)}%)
                    </Typography>
                    <LinearProgress variant="determinate" value={progress} sx={{ height: { xs: 6, sm: 8 } }} />
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <Button
                      size="small"
                      startIcon={<VisibilityIcon />}
                      onClick={() => router.push(`/produccion/${order.id}`)}
                      sx={{
                        minHeight: 36,
                        fontSize: { xs: '0.8rem', sm: '0.875rem' },
                        px: { xs: 1.5, sm: 2 }
                      }}
                    >
                      Ver
                    </Button>
                    <Button
                      size="small"
                      startIcon={<EditIcon />}
                      onClick={() => router.push(`/produccion/${order.id}/editar`)}
                      sx={{
                        minHeight: 36,
                        fontSize: { xs: '0.8rem', sm: '0.875rem' },
                        px: { xs: 1.5, sm: 2 }
                      }}
                    >
                      Editar
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </AppLayout>
  );
}
