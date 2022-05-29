import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    container: {
        backgroundColor: '#0F172A',
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px 0px',
        [theme.breakpoints.up('md')]: {
            height: '100vh',
            padding: '80px 20px',
        }
    },
    areaContent: {
        backgroundColor: '#1E293B',
        overflowY: 'scroll',
        width: '50%',
        padding: '40px',
        // marginBottom: '40px',
        '&::-webkit-scrollbar' :{
            width: '0.4em'
        }
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#CBD5E1',
        textAlign: 'center',
        marginBottom: '20px',
        [theme.breakpoints.up('sm')]: {
            textAlign: 'left',
        }
    },
    title2: {
        fontSize: 28,
        color: '#CBD5E1',
        fontWeight: '600',
        marginBottom: '20px',
    },
    text: {
        color: '#E1E1E1',
        marginBottom: '20px',
    },
    root: {
        maxWidth: '100%'
    },
}))