import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import PostForm from './PostForm';
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react';
import Tooltip from '@mui/material/Tooltip';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';







function NavBar({handleAddPost, user, setUser}) {
      const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));

      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));

      const [isHovering, setIsHovering] = useState(false)

      const handleMouseOver = () => {
        setIsHovering(true)
      }

      const handleMouseOut = () => {
        setIsHovering(false)
      }

      const navigate = useNavigate()

      const handleLogOut = () => {
        fetch('/logout', {
          method: "DELETE",
        })
        setUser(null)
          navigate('/')
      }


//      
  return (

          <AppBar position= "static">
                <Stack justifyContent="space-between" direction="row">
                <Stack direction="row" alignItems="center" justifyContent="flex-start">              
                <IconButton
                sx={{margin:"auto" }}
                 disabled={user ? false : true}>
                <Tooltip title="Home">
                <Link to='/homepage'
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                >
                  <img 
                  src="https://cdn-images-1.medium.com/max/1000/1*KPDWqXSt-JYENe5T6tIRdg.png"
                  width={`${100}px`} 
                  height={`auto`} 
                  alt=""
                   />            
                  </Link>
                  </Tooltip>
                  </IconButton>
                  <Tooltip title="Create a New Post">
                  <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ margin:"auto" }}
                  disabled={user ? false : true}
                >
                  <PostForm 
                  handleAddPost= {handleAddPost} user={user}
                  />              
                  </IconButton>
                  </Tooltip >
                </Stack>
                <Stack direction="row" alignItems="center" justifyContent="flex-end">
                <Search disabled={user ? false : true}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
                <Tooltip title="Profile">
                <IconButton 
                // sx={{mr: 3}}
                disabled={user ? false : true}>
                 <Link to='/profile' >
                  <img 
                  src="https://cdn-images-1.medium.com/max/1000/1*ASmjaK0nkjEB3y5s0TgZSg.png"
                  width={`${40}px`} 
                  height={`${40}px`} 
                  alt=""
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                   />
                  </Link>
              </IconButton>
              </Tooltip>
              {user ? <Tooltip title="Log Out"><LogoutIcon onClick={handleLogOut}/></Tooltip>: null}
              </Stack> 
              </Stack> 
        </AppBar>
    
  )
}

export default NavBar