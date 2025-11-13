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
  Science as ScienceIcon,
} from '@mui/icons-material';
import AppLayout from '@/components/AppLayout';

export default function LaboratorioPage() {
  const requests = [
    {
      id: 'SOL-122',
      lote: 'L2024-11',
      product: 'Producto A - 500g',
      type: 'Análisis Físico-Químico',
      analyst: 'Dr. R. Muñoz',
      requestDate: '10/11/2025',
      status: 'Completado',
      statusColor: 'success',
      tests: 'pH, Humedad, Densidad',
      priority: 'Alta',
    },
    {
      id: 'SOL-123',
      lote: 'L2024-12',
      product: 'Producto B - 1kg',
      type: 'Análisis Microbiológico',
      analyst: 'Dra. P. Rojas',
      requestDate: '11/11/2025',
      status: 'En Análisis',
      statusColor: 'primary',
      tests: 'Coliformes, E.coli, Salmonella',
      priority: 'Alta',
    },
    {
      id: 'SOL-124',
      lote: 'L2024-13',
      product: 'Producto C - 250g',
      type: 'Análisis Sensorial',
      analyst: 'T.Q. L. Fernández',
      requestDate: '11/11/2025',
      status: 'Pendiente',
      statusColor: 'warning',
      tests: 'Color, Olor, Sabor, Textura',
      priority: 'Media',
    },
  ];

  const stats = [
    { label: 'Solicitudes Activas', value: '8', color: '#8b5cf6', icon: '🔬' },
    { label: 'Completadas Hoy', value: '4', color: '#10b981', icon: '✅' },
    { label: 'Pendientes', value: '3', color: '#f59e0b', icon: '⏳' },
    { label: 'Muestras en Cola', value: '12', color: '#3B82F6', icon: '📊' },
  ];

  return (
    <AppLayout>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>
            Gestión de Laboratorio
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Control y seguimiento de análisis de laboratorio
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
            '&:hover': {
              background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
            },
          }}
        >
          Nueva Solicitud
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

      {/* Requests List */}
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
        Solicitudes de Análisis
      </Typography>

      <Grid container spacing={3}>
        {requests.map((request) => (
          <Grid item xs={12} key={request.id}>
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
                        {request.id}
                      </Typography>
                      <Chip
                        label={request.status}
                        color={request.statusColor as any}
                        size="small"
                        icon={
                          request.status === 'Completado' ? <CheckCircleIcon /> :
                          request.status === 'Pendiente' ? <ScheduleIcon /> : <ScienceIcon />
                        }
                      />
                      <Chip
                        label={`Prioridad: ${request.priority}`}
                        size="small"
                        variant="outlined"
                        color={request.priority === 'Alta' ? 'error' : request.priority === 'Media' ? 'warning' : 'default'}
                      />
                    </Box>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
                      {request.product}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                      Lote: {request.lote} | Tipo: {request.type}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Analista: {request.analyst}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                        Fecha de solicitud
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}>
                        {request.requestDate}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Pruebas: {request.tests}
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
