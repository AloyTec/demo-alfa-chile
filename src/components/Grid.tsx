import React from 'react';
import { Box, BoxProps } from '@mui/material';

interface GridProps extends Omit<BoxProps, 'container'> {
  container?: boolean;
  item?: boolean;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  spacing?: number;
}

const Grid: React.FC<GridProps> = ({
  container,
  item,
  xs,
  sm,
  md,
  lg,
  xl,
  spacing,
  children,
  sx,
  ...props
}) => {
  const gridStyles: any = {};

  if (container) {
    gridStyles.display = 'grid';
    gridStyles.gap = spacing ? `${spacing * 8}px` : 0;
    gridStyles.gridTemplateColumns = {
      xs: 'repeat(12, 1fr)',
    };
  }

  if (item) {
    const getGridColumn = (size?: number) => size ? `span ${size}` : 'span 12';

    gridStyles.gridColumn = {
      xs: getGridColumn(xs),
      sm: getGridColumn(sm || xs),
      md: getGridColumn(md || sm || xs),
      lg: getGridColumn(lg || md || sm || xs),
      xl: getGridColumn(xl || lg || md || sm || xs),
    };
  }

  return (
    <Box sx={{ ...gridStyles, ...sx }} {...props}>
      {children}
    </Box>
  );
};

export default Grid;
