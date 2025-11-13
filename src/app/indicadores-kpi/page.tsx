'use client';

import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import Grid from '@/components/Grid';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
} from '@mui/icons-material';
import AppLayout from '@/components/AppLayout';

export default function IndicadoresKPIPage() {
  const kpis = [
    {
      title: 'Eficiencia de Producción',
      value: '87%',
      trend: '+5%',
      trendDirection: 'up',
      color: '#3B82F6',
      description: 'vs mes anterior',
    },
    {
      title: 'Tasa de Defectos',
      value: '2.3%',
      trend: '-0.8%',
      trendDirection: 'down',
      color: '#10b981',
      description: 'reducción vs mes anterior',
    },
    {
      title: 'OEE (Overall Equipment Effectiveness)',
      value: '76%',
      trend: '+3%',
      trendDirection: 'up',
      color: '#8b5cf6',
      description: 'vs mes anterior',
    },
    {
      title: 'Tiempo de Ciclo Promedio',
      value: '45 min',
      trend: '-5 min',
      trendDirection: 'down',
      color: '#f59e0b',
      description: 'reducción vs mes anterior',
    },
    {
      title: 'Cumplimiento de Entregas',
      value: '94%',
      trend: '+2%',
      trendDirection: 'up',
      color: '#10b981',
      description: 'vs mes anterior',
    },
    {
      title: 'Utilización de Capacidad',
      value: '82%',
      trend: '+4%',
      trendDirection: 'up',
      color: '#3B82F6',
      description: 'vs mes anterior',
    },
  ];

  return (
    <AppLayout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>
          Indicadores y KPIs
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Métricas clave de rendimiento del sistema
        </Typography>
      </Box>

      {/* KPIs Grid */}
      <Grid container spacing={3}>
        {kpis.map((kpi, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, fontWeight: 600 }}>
                  {kpi.title}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, mb: 2 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: kpi.color,
                    }}
                  >
                    {kpi.value}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      color: kpi.trendDirection === 'up' ? '#10b981' : '#ef4444',
                    }}
                  >
                    {kpi.trendDirection === 'up' ? (
                      <TrendingUpIcon fontSize="small" />
                    ) : (
                      <TrendingDownIcon fontSize="small" />
                    )}
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {kpi.trend}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {kpi.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Additional Sections */}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                Producción Mensual
              </Typography>
              <Box
                sx={{
                  height: 300,
                  background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Gráfico de producción mensual
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                Calidad por Producto
              </Typography>
              <Box
                sx={{
                  height: 300,
                  background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Gráfico de calidad por producto
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AppLayout>
  );
}
