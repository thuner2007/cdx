import React from 'react';
import './App.css';

import SimpleAccordion1 from './components/Accordions/SimpleAccordion1/SimpleAccordion1.tsx';
import SimpleButton1 from './components/Buttons/SimplePrimaryButton1/SimplePrimaryButton1.tsx';
import SimpleChart1 from './components/Charts/SimpleChart1/SimpleChart1.tsx';
import SimpleCheckbox1 from './components/Checkboxes/SimpleCheckbox1/SimpleCheckbox1.tsx';
import SimpleVerticalDropdown from './components/Dropdowns/SimpleVerticalDropdown/SimpleVerticalDropdown.tsx';
import SimpleBigTextInputWithRequired from './components/InputFields/SimpleBigTextInputWithRequired/SimpleBigTextInputWithRequired.tsx';
import SimpleInputWithRequired from './components/InputFields/SimpleInputWithRequired/SimpleInputWithRequired.tsx';
import NavBarNormal1 from './components/NavBars/NavBarNormal1/NavBarNormal1.tsx';
import NavBarWithComponents1 from './components/NavBars/NavBarWithComponents1/NavBarWithComponents1.tsx';
import SimpleSmallPopUp from './components/PopUps/SimpleSmallPopUp/SimpleSmallPopUp.tsx';
import SimpleScrollBar from './components/ScrollBars/SimpleScrollBar.tsx';
import SimpleCard1 from './components/Cards/SimpleCard1/SimpleCard1.tsx';
import SimpleDivider1 from './components/Dividers/SimpleDivider1/SimpleDivider1.tsx';
import SimpleFooter1 from './components/Footers/SimpleFooter1/SimpleFooter1.tsx';
import SimpleLoader1 from './components/Loaders/SimpleLoader1/SimpleLoader1.tsx';
import SimpleSecondaryButton1 from './components/Buttons/SimpleSecondaryButton1/SimpleSecondaryButton1.tsx';
import HtmlSimpleBackground1 from './components/Backgrounds/HtmlSimpleBackground1/HtmlSimpleBackground1.tsx';
import BodySimpleBackground1 from './components/Backgrounds/BodySimpleBackground1/BodySimpleBackground1.tsx';
import SimplePrimaryButton1 from './components/Buttons/SimplePrimaryButton1/SimplePrimaryButton1.tsx';
import { cdx_config } from './cdx_config.ts';
import SimpleTable1 from './components/Tables/SimpleTable1/SimpleTable1.tsx';
import SimpleDividerWithLabel1 from './components/Dividers/SimpleDividerWithLabel1/SimpleDividerWithLabel1.tsx';
import ZoomPrimaryButton1 from './components/Buttons/ZoomPrimaryButton1/ZoomPrimaryButton1.tsx';
import DreiDPrimaryButton1 from './components/Buttons/DreiDPrimaryButton1/DreiDPrimaryButton1.tsx';
import SimpleToggle1 from './components/Toggles/SimpleToggle1/SimpleToggle1.tsx';
import DDDChart1 from './components/Charts/DDDChart1/DDDChart1.tsx';
import HorizontalItemListDiv from './components/Divs/HorizontalItemListDiv/HorizontalItemListDiv.tsx';
import VerticalItemListDiv from './components/Divs/VerticalItemListDiv/VerticalItemListDiv.tsx';
import SimpleConfirmButton1 from './components/Buttons/SimpleConfirmButton1/SimpleConfirmButton1.tsx';
function App() {
  return (
    <div
      className="App"
      style={{ width: `calc(100vw - ${cdx_config.scrollbarWidth})` }}
    >
      <br />
      <br />
      <br />
      <NavBarWithComponents1 height="60px">
        <h1 style={{ color: 'white' }}>Welcome to CDX!</h1>{' '}
      </NavBarWithComponents1>
      <h1>Horizontal Item List Div</h1>
      <HorizontalItemListDiv padding="0">
        <img
          alt="flower"
          src="https://www.republicanent.com/wp-content/uploads/2016/06/4k-ultra-hd-video-sample.jpg"
          width={'30%'}
        ></img>
        <img
          alt="bridge"
          src="https://4kmedia.org/wp-content/uploads/2017/10/lg-new-york-1.jpg"
          width={'30%'}
        ></img>
        <img
          alt="seagull"
          src="https://live.staticflickr.com/3953/14996914924_f9380a07df_b.jpg"
          width={'30%'}
        ></img>
      </HorizontalItemListDiv>
      <h1>Vertical Item List Div</h1>
      <VerticalItemListDiv>
        <img
          alt="flower"
          src="https://www.republicanent.com/wp-content/uploads/2016/06/4k-ultra-hd-video-sample.jpg"
          width={'30%'}
        ></img>
        <img
          alt="bridge"
          src="https://4kmedia.org/wp-content/uploads/2017/10/lg-new-york-1.jpg"
          width={'30%'}
        ></img>
        <img
          alt="seagull"
          src="https://live.staticflickr.com/3953/14996914924_f9380a07df_b.jpg"
          width={'30%'}
        ></img>
      </VerticalItemListDiv>
      <SimplePrimaryButton1 label="Primary" />
      <SimpleConfirmButton1 label="Confirm" />
      <ZoomPrimaryButton1 label="Zoom Primary" />
      <DreiDPrimaryButton1 label="3D Primary" />
      <SimpleSecondaryButton1 label="Secondary" />
      <SimpleAccordion1
        items={[
          {
            label: 'Accordion 1',
            text: 'Text',
          },
          {
            label: 'Accordion 2',
            text: 'This is a long text...',
          },
          {
            label: 'Accordion 3',
            text: 'This is a long text</br>with a line break!',
          },
        ]}
      />
      <SimpleCard1 label="Card" />
      <SimpleChart1 percentage={33} label="Chart" text="This is a text..." />
      <DDDChart1 percentage={33} label="3D Chart" text="This is a text..." />
      <SimpleCheckbox1 label="Checkbox" />
      <SimpleDivider1 />
      <SimpleDividerWithLabel1 label="Divider with Label" />
      <SimpleLoader1 />
      <SimpleVerticalDropdown label="Dropdown" />
      <SimpleBigTextInputWithRequired
        label="Long Textinput"
        resizeable={true}
      />
      <SimpleInputWithRequired label="Textinput" />
      <SimpleTable1 label="Table" />
      <SimpleToggle1 />
      <br />
      <br />
      <br />
      <SimpleFooter1 />
      <SimpleScrollBar />
    </div>
  );
}

export default App;
