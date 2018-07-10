import React from 'react'
import { object, func } from 'prop-types'

class Hoverable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hovered: false
        }
    }

    render() {
        const { render, className, styles } = this.props
        const { hovered } = this.state
        return (
            <div
                onMouseEnter={() => this.setState({ hovered: true })}
                onMouseLeave={() => this.setState({ hovered: false })}
                className={className}
                styles={styles}
            >
                {render(hovered)}
            </div>
        )
    }
}

Hoverable.propTypes = {
    render: func,
    className: object,
    styles: object
}

export default Hoverable
