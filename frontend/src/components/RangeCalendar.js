import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const RangeCalendar = ( { range, setRange } ) => {

    // const [state, setState] = useState([
    //     {
    //         startDate: new Date(),
    //         endDate: addDays(new Date(), 7),
    //         key: 'selection'
    //     }
    // ]);

    const handleSelect = (ranges) => {
        setRange(ranges.selection);
    }

    

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
                // onChange={item => setState([item.selection])}
                onChange={handleSelect}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                // ranges={state}
                ranges={[range]}
                direction="horizontal"
                minDate={new Date()}
            />
            
        </div>
    );
}

export default RangeCalendar;