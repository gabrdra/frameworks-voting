import React, {useState, useContext} from 'react';
import DataContext from '../Data';

import Form from '../Form';

export default {
  title: 'Voting/Form',
  component: Form,
};
const globaltitle =''
const globalvotes =[{option:'', count:0}, {option:'',count:0}]
function setglobaltitle(){
  return;
}
function setglobalvotes(){
  return;
}
const Template = (args) =>(<DataContext.Provider value={{globaltitle, setglobaltitle, globalvotes, setglobalvotes}}> <Form {...args}/></DataContext.Provider>);
function submit(){
    return;
  }
export const Example = Template.bind();
Example.args = {
  submit: submit
}