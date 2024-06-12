import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { findConfigFile } from 'typescript';
import { action } from '@storybook/addon-actions';
import { Accordion } from './Accordion';

export default {
  component: Accordion,
};


const onChangeHandler = action('onChange')
const onClickCallback = action('some item was clicked')

export const CollapsedAccordion = () => {
  return <Accordion titleValue={"Collapsed Accordion"}
    collapsed={true}
    onChange={onChangeHandler}
    items={[]}
		onClick={onClickCallback}
  />
}

export const OpenedAccordion = () => {
  return <Accordion titleValue={"Opened Accordion"}
    collapsed={false}
    onChange={() => { }}
    items={[{ title: 'Dimych', value: 1 }, { title: 'Valera', value: 2 }, { title: 'Artem', value: 3 }, { title: 'Viktor', value: 4 }]}
		onClick={onClickCallback}
  />
}

export const AccordionDemo = () => {
  const [collapsed, setCollapsed] = useState(false)
  return <Accordion titleValue={"Accordion"}
    collapsed={collapsed}
    onChange={() => { setCollapsed(!collapsed) }}
    items={[{ title: 'Dimych', value: 1 }, { title: 'Valera', value: 2 }, { title: 'Artem', value: 3 }, { title: 'Viktor', value: 4 }]}
		onClick={onClickCallback}
  />
}
