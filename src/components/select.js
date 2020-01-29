import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
export default function Select({ options, multiSelect ,hasCheckbox}) {
    console.log("sfdsf", options, multiSelect)
    const [selectedValue, setValue] = useState(1);
    const onSelect1 = (e) => {
        setValue(e.target.value)
    }
    $(document).ready(function() {
        $('.mdb-select').materialSelect();
        });

    return (
        <div>
           <select onChange={(e) => { onSelect1(e) }}>{options.map(element => {
                return (<option value={element.id}>{element.value}</option>)
            })}</select><br />
            {selectedValue} item is selected
        </div>
    );
}

Select.propTypes = {
    options: PropTypes.array,
    multiSelect: PropTypes.bool,
    itemClassName: PropTypes.string,
    hasCheckbox: PropTypes.bool,
    status: PropTypes.oneOf(['positive', 'negative', 'neutral', 'error', 'warning']),
}

Select.defaultProps = {
    options: [],
    multiSelect: false,
    itemClassName: '',
    hasCheckbox: true,
}
