'use client';

import React from 'react';
import { Card, CardContent, Typography, Chip, LinearProgress, Box } from '@mui/material';
import Grid from '@/components/Grid';
import AppLayout from '@/components/AppLayout';

export default function ProduccionLineasPage() {
  const lines = [
    { id: 1, name: 'Línea 1', status: 'Activa', efficiency: 92, currentOrder: 'OP-001', product: 'Producto A' },
    { id: 2, name: 'Línea 2', status: 'Activa', efficiency: 88, currentOrder: 'OP-002', product: 'Producto B' },
    { id: 3, name: 'Línea 3', status: 'Mantenimiento', efficiency: 0, currentOrder: '-', product: '-' },
    { id: 4, name: 'Línea 4', status: 'Inactiva', efficiency: 0, currentOrder: '-', product: '-' },
  ];

  return (
    <AppLayout title="Líneas de Producción" module="produccion">
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {lines.map((line) => (
          <Grid item xs={12} md={6} key={line.id}>
            <Card>
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 2,
                  flexWrap: 'wrap',
                  gap: 1
                }}>
                  <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    {line.name}
                  </Typography>
                  <Chip
                    label={line.status}
                    color={line.status === 'Activa' ? 'success' : line.status === 'Mantenimiento' ? 'warning' : 'default'}
                    size="small"
                    sx={{ fontSize: { xs: '0.7rem', sm: '0.8125rem' } }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" gutterBottom sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
                  Orden Actual: {line.currentOrder}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
                  Producto: {line.product}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
                    Eficiencia: {line.efficiency}%
                  </Typography>
                  <LinearProgress variant="determinate" value={line.efficiency} sx={{ mt: 1, height: { xs: 6, sm: 8 } }} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </AppLayout>
  );
}
