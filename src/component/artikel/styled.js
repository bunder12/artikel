import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container: {
        // height: '40vh',
        backgroundColor: '#374151',
        padding: '80px'
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        transform: 'scale(1)',
        transition: '.5s transform ease-in-out',
        "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.2)',
            transition: '.5s transform ease-in-out'
        }
    },
    cardContent: {
        paddingTop: 30,
        backgroundColor: '#6B7A90',
    },
}))