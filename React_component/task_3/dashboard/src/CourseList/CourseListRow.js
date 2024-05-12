import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({isHeader, textFirstCell, textSecondCell}) => {
    if(isHeader) {
        if(textSecondCell === null) {
            return (
                <tr><th colSpan="2">{textFirstCell}</th></tr>
            )
        } else{
            return (
                <tr>
                <th>{textFirstCell}</th>
                <th>{textSecondCell}</th>
                </tr>
            )
        }
    } else {
        return (
            <tr>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>  
            </tr>
        )
    }
}

CourseListRow.prototype = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}

export default CourseListRow;