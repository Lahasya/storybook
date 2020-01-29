import React from 'react';
import Select from '../src/components/select';
import { action, decorate } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import { text, array, color } from '@storybook/addon-knobs';

export default {
    component: Select,
    title: 'Select',
    decorators: [withKnobs],
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const selectData = [{
    id: '1',
    value: 'option1'
},
{
    id: '2',
    value: 'option2'
},
{
    id: '3',
    value: 'option3'
},
{
    id: '4',
    value: 'option4'
}];

const inputValue = "Lahasya"
const label = 'Input';


export const defaultselect = () => <Select onClick={action('clicked')} options={object('Select', selectData)} multiSelect={false} />;

export const input = () => <input type="text" value={text(label, inputValue)} />

const styles = {
    textAlign: 'center',
    backgroundColor: 'red',
    fontSize: '14px',

};
const actionFun = () => {
    a = 1;
    b = 2;
    return a * b;
}
//action with other arguments
export const Button1 = () => <button onClick=
    {e => {
        action('log2')(e.target, e, 'dfsdf', styles, actionFun);
    }} style={object('styles', styles)}>{text('label', 'hello storybook')}</button>
    
//simple button story
export const Button2 = () => <button onClick={action('clicked')} style={object('styles', styles)}>{text('label', 'hello storybook')}</button>
