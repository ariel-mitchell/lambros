import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const RangeCalendar = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);

    const calculateDays = () => {
        const range = state[0];
        const days = Math.round((range.endDate - range.startDate) / (1000 * 3600 * 24)) + 1;
        localStorage.setItem('days', days)
        return days; // Add 1 to include both start and end dates in the count
    };

    return (
        <div>
            <style>
            {
                `.rdrDefinedRangesWrapper {
                    display: none;
                }`
            }
        </style>
            <DateRangePicker
                onChange={item => setState([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={state}
                direction="horizontal"
                minDate={new Date()}
            />
            <p>Total Days: {calculateDays()}</p>
        </div>
    );
}

export default RangeCalendar;