

const TablePageStyles = theme => ({
    header: {
      color: theme.palette.primary.main,
      marginBottom: theme.spacing.unit * 1,
      textTransform: 'uppercase',
    },
    striped: {
      background: theme.grays.g0,
    },
    tHead: {
      fontSize: 16,
      color: theme.palette.primary.main,
      textTransform: 'uppercase',
    },
    tRow: {
      height: 32,
    },
  });

export { TablePageStyles };