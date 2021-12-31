import React,{useState, useEffect} from 'react'
import Header from '../../components/Header';
import Posts from '../../components/Posts/Posts';
import { getPosts } from '../../actions/posts';
import { Container, Paper,   Grow, Grid } from '@material-ui/core';
import Tags from '../../components/TagSearch/Tags';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import Paginations from '../../components/Paginations';
import { useHistory, useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const history = useHistory();
  const dispatch = useDispatch();
 

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [currentId, dispatch]);

    return (
        <>
        <Header />
        <Grow in>
        <Container>
          <Grid container justify="start" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7} lg={8}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Tags />
                <Paper className={classes.pagination} elevation={6}>
                  <Paginations page={page}/>
                </Paper>
            </Grid>
            
          </Grid>
        </Container>
        
      </Grow>
           
             
      </>
    )
}

export default Home;
