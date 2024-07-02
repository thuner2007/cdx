import React, { useEffect, useRef, useState } from 'react';
import './SimpleToggle1.css';
import { cdx_config } from '../../../cdx_config.ts';

interface SimpleToggle1Props {
  bgColor?: string;
  bgColorSecondary?: string;
  bgColorPlaceholder?: string;
  width?: string;
  height?: string;
  isToggled?: boolean;
  transitionTime?: number;
  borderRadius?: string;
  border?: string;
}

const SimpleToggle1: React.FC<SimpleToggle1Props> = ({
  bgColor = cdx_config.bgColorPrimary,
  bgColorSecondary = cdx_config.bgColorSecondary,
  bgColorPlaceholder = cdx_config.colorPlaceholder,
  width = '60px',
  height = '30px',
  isToggled = false,
  transitionTime = cdx_config.transitionTime,
  borderRadius = cdx_config.borderRadius,
  border = 'none',
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState(0);
  const [isOn, setIsOn] = useState(isToggled);

  useEffect(() => {
    if (elementRef.current) {
      setParentWidth(elementRef.current.offsetWidth);
    }
  }, []);

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="mainDivSimpleToggle1">
      <div
        ref={elementRef}
        className={`buttonSimpleToggle1`}
        onClick={handleToggle}
        style={{
          width,
          height,
          transition: `background-color ${transitionTime}`,
          backgroundColor: isOn ? bgColor : bgColorPlaceholder,
          borderRadius,
          border,
        }}
      >
        <div
          className="toggle-circle"
          style={{
            backgroundColor: bgColorSecondary,
            transform: isOn
              ? `translateX(${parentWidth / 2}px)`
              : 'translateX(0px)',
            width: parentWidth / 2 - 2,
            height: parentWidth / 2 - 2,
            transition: `transform ${transitionTime}`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default SimpleToggle1;
