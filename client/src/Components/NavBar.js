import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import PostForm from './PostForm';
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react';
import Tooltip from '@mui/material/Tooltip';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';




function NavBar({handleLogged, isLoggedIn, handleAddPost, user}) {

  

  

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
          navigate('/login')
          handleLogged(isLoggedIn)
      }
//      
  return (
    <Stack>
        <AppBar position= "static">
                <Toolbar>

            
                
                {/* <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}> */}
                  <Tooltip title="Create a New Post">
                  <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                >
                  <PostForm 
                  handleAddPost= {handleAddPost} user={user}
                  />
              
                  </IconButton>
                  </Tooltip >
                  <IconButton>
                <Tooltip title="Home">
                <Link to='/'
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
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
                <Tooltip title="Profile">
                <IconButton>
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

              {isLoggedIn === true ? <Tooltip title="Log Out"><LogoutIcon onClick={handleLogOut}/></Tooltip>: null}

              </Toolbar>
        </AppBar>
   </Stack> 
  )
}

export default NavBar