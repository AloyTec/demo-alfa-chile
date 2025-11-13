'use client';

import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
} from '@mui/material';
import Grid from '@/components/Grid';
import {
  Add as AddIcon,
  CheckCircle as CheckCircleIcon,
  Schedule as ScheduleIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';
import AppLayout from '@/components/AppLayout';

export default function CalidadPage() {
  const inspections = [
    {
      id: 'INS-045',
      lote: 'L2024-11',
      product: 'Producto A - 500g',
      type: 'Control en Proceso',
      inspector: 'C. Torres',
      date: '11/11/2025 10:30',
      status: 'En Proceso',
      statusColor: 'primary',
      criteria: 'Peso, pH, Color',
    },
    {
      id: 'INS-046',
      lote: 'L2024-12',
      product: 'Producto B - 1kg',
      type: 'Inspección Final',
      inspector: 'M. Silva',
      date: '11/11/2025 09:15',
      status: 'Pendiente',
      statusColor: 'warning',
      criteria: 'Empaque, Etiquetado, Sellado',
    },
    {
      id: 'INS-044',
      lote: 'L2024-10',
      product: 'Producto C - 250g',
      type: 'Control de Recepción',
      inspector: 'A. Gómez',
      date: '10/11/2025 16:45',
      status: 'Aprobada',
      statusColor: 'success',
      criteria: 'Documentación, Estado físico',
    },
  ];

  const stats = [
    { label: 'Inspecciones Pendientes', value: '5', color: '#f59e0b', icon: '⏳' },
    { label: 'Aprobadas Hoy', value: '12', color: '#10b981', icon: '✅' },
    { label: 'No Conformidades', value: '2', color: '#ef4444', icon: '❌' },
    { label: 'Tasa de Aprobación', value: '96%', color: '#3B82F6', icon: '📊' },
  ];

  return (
    <AppLayout>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>
            Control de Calidad
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Gestión de inspecciones y control de calidad
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            background: 'linear-gradient(135deg, #10b981, #059669)',
            '&:hover': {
              background: 'linear-gradient(135deg, #059669, #047857)',
            },
          }}
        >
          Nueva Inspección
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

      {/* Inspections List */}
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
        Inspecciones Recientes
      </Typography>

      <Grid container spacing={3}>
        {inspections.map((inspection) => (
          <Grid item xs={12} key={inspection.id}>
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
                  <Grid item xs={12} md={8}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
                        {inspection.id}
                      </Typography>
                      <Chip
                        label={inspection.status}
                        color={inspection.statusColor as any}
                        size="small"
                        icon={
                          inspection.status === 'Aprobada' ? <CheckCircleIcon /> :
                          inspection.status === 'Pendiente' ? <WarningIcon /> : <ScheduleIcon />
                        }
                      />
                    </Box>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
                      {inspection.product}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                      Lote: {inspection.lote} | Tipo: {inspection.type}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Inspector: {inspection.inspector}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                        Fecha de inspección
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}>
                        {inspection.date}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Criterios: {inspection.criteria}
                      </Typography>
                    </Box>
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
