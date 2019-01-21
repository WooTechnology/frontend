const styles = theme => ({
    title: {
        fontSize: 16,
        color: theme.palette.common.white,
        marginRight: theme.spacing.unit * 3
    },
    left: {
        flex: 1,
        display: "flex"
    },
    leftLink: {
        fontSize: 16,
        color: theme.palette.common.white,
        marginRight: theme.spacing.unit * 3
    },
    toolbar: {
        justifyContent: "space-between"
    },
    right: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end"
    },
    rightLink: {
        fontSize: 16,
        color: theme.palette.common.white,
        marginLeft: theme.spacing.unit * 3
    }
});

export default styles;