

const TablePageStyles = theme => ({
    header: {
      color: theme.palette.primary.main,
      marginBottom: theme.spacing.unit * 1,
      textTransform: 'uppercase',
    },
    tableTitle: {
      color: theme.palette.primary.main,
      fontWeight: 800,
      minWidth: 120,
      fontSize: 16,

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