import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import useStyles from './Progress.style'

export const XPCircleProgress = (props: { color?: string }) => {
    const classes = useStyles()
    return (
        <div className={classes.container}
            data-testid='progress-bar'
        >
            <CircularProgress
                style={{ color: props.color || '#B1B0B1' }}
                size={30}
                variant='indeterminate'
            />
        </div>
    )
}

export default XPCircleProgress
