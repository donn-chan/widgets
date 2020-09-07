import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite js library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use react by creating components'
    }
];

const options = [
    {
        label: 'Accordion',
        value: 'accordion'
    },
    {
        label: 'Search',
        value: 'search'
    },
    {
        label: 'Dropdown',
        value: 'dropdown'
    }
];

export default () => {
    return (
        <div>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            <Dropdown options={options} />
        </div>
    )
};