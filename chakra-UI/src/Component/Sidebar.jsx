import { CalendarIcon, EditIcon, AtSignIcon } from '@chakra-ui/icons'
import { List, ListIcon, ListItem  } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <List color='white' fontSize='1.2em' spacing={4}>
        <ListItem>
            <NavLink to="/">
                <ListIcon as={CalendarIcon} color='white' />
                Dashboard
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to="/Create">
                <ListIcon as={EditIcon} color='white' />
                New Task
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to="/Profile">
            <ListIcon as={AtSignIcon} color='white' />
                Profile
            </NavLink>
        </ListItem>

    </List>
  )
}

export default Sidebar