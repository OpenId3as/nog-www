import React, { ReactNode } from 'react'
import Toolbar from '@material-ui/core/Toolbar'

import useStyles from './Toolbar.style'

interface SimpleToolbarProps {
    children: ReactNode
    divider?: boolean
    justify?: 'center' | 'flex-end' | 'space-between'
}

const SimpleToolbar = (props: SimpleToolbarProps) => {
    const classes = useStyles();
    const dividerClass = !!props.divider ? classes.divider : ''
    const justifyClass = !!props.justify ?
        props.justify === 'center' ? classes.atCenter :
            props.justify === 'space-between' ? classes.atSpaceBetween :
                classes.atFlexend : ''
    return (
        <Toolbar className={`${classes.gutters} ${classes.toolbar} ${dividerClass} ${justifyClass}`}>
            {props.children}
        </Toolbar>
    )
}

export default SimpleToolbar
