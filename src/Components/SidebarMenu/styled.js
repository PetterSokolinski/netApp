import styled, { createGlobalStyle } from 'styled-components'
import backgroundImage from '../../Assets/bg2.jpg'
import { LogOut } from 'styled-icons/boxicons-regular/LogOut'
import { Settings } from 'styled-icons/material/Settings'
import { RemoveRedEye } from 'styled-icons/material/RemoveRedEye'
import { Task } from 'styled-icons/boxicons-regular/Task'
import { Project } from 'styled-icons/octicons/Project'

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background: url(${backgroundImage});
        background-size: cover;
    }
`


export const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px',
  },
  bmBurgerBars: {
    background: '#03a9f4'
  },
  bmBurgerBarsHover: {
    filter: 'brightness(75%)'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#03a9f4',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}
export const LogoutItem = styled.div`
  display: block;
  padding: 0.8em;
  outline: none;
  color: #03a9f4;
  font-size: 22px;
  cursor: pointer;
  position: relative;
  top: 40%;
  &:hover {
    filter: brightness(75%);
  }
`

export const LogOutIcon = styled(LogOut)`
  width: 25px;
  text-align: center;
  color: #03a9f4;
  bottom: 2px;
  left: -10px;
  position: relative;
`

export const RemoveRedEyeIcon = styled(RemoveRedEye)`
  width: 25px;
  text-align: center;
  color: #03a9f4;
  bottom: 2px;
  left: -10px;
  position: relative;
`

export const SettingsIcon = styled(Settings)`
  width: 25px;
  text-align: center;
  color: #03a9f4;
  bottom: 2px;
  left: -10px;
  position: relative;
`
export const TaskIcon = styled(Task)`
  width: 25px;
  text-align: center;
  color: #03a9f4;
  bottom: 2px;
  left: -10px;
  position: relative;
`
export const ProjectIcon = styled(Project)`
  width: 25px;
  text-align: center;
  color: #03a9f4;
  bottom: 2px;
  left: -10px;
  position: relative;
`


export const MenuItem = styled.div`
  display: block;
  padding: 0.8em;
  outline: none;
  color: #03a9f4;
  font-size: 22px;
  cursor: pointer;
  &:hover {
    filter: brightness(75%);
  }
`

export const activeLink = {
  textDecoration: 'underline'
}