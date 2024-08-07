import React from 'react';
import './SimpleBigTextInputWithRequired.css';
import { cdx_config } from '../../../cdx_config.ts';

interface SimpleBigTextInputWithRequiredProps {
  label?: string;
  required?: boolean;
  border?: string;
  borderRadius?: string;
  bgColor?: string;
  textColor?: string;
  labelColor?: string;
  labelFontSize?: string;
  labelFontWeight?: string;
  textFontSize?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
  placeholder?: string;
  placeholderColor?: string;
  disabled?: boolean;
  resizeable?: boolean;
  focusBorder?: string;
  gap?: string;
}

const SimpleBigTextInputWithRequired: React.FC<
  SimpleBigTextInputWithRequiredProps
> = ({
  label = cdx_config.label,
  required = false,
  border = cdx_config.borderPrimary,
  borderRadius = cdx_config.borderRadius,
  bgColor = cdx_config.bgColorPrimary,
  textColor = cdx_config.colorPrimary,
  labelColor = cdx_config.colorSecondary,
  labelFontSize = cdx_config.fontSizeLabel,
  labelFontWeight = '700',
  textFontSize = cdx_config.fontSizeText,
  padding = cdx_config.padding,
  margin = cdx_config.margin,
  width = 'auto',
  height = '100px',
  maxWidth = '300px',
  maxHeight = '300px',
  minWidth = '100px',
  minHeight = '50px',
  placeholder = 'Type here...',
  placeholderColor = cdx_config.colorPlaceholder,
  disabled = false,
  resizeable = false,
  focusBorder = 'none',
  gap = '0.5rem',
}) => {
  return (
    <div
      className="mainDivSimpleBigTextInputWithRequired"
      style={{ gap: gap, margin: margin }}
    >
      <label
        className="labelLabelSimpleBigTextInputWithRequired"
        style={{
          fontSize: labelFontSize,
          fontWeight: labelFontWeight,
          color: labelColor,
        }}
      >
        {required && (
          <span className="requiredSpanSimpleBigTextInputWithRequired">*</span>
        )}
        {label}
      </label>
      <textarea
        className="textareaSimpleBigTextInputWithRequired"
        style={
          {
            border: border,
            borderRadius: borderRadius,
            backgroundColor: bgColor,
            color: textColor,
            fontSize: textFontSize,
            padding: padding,
            width: width,
            height: height,
            maxWidth: maxWidth,
            maxHeight: maxHeight,
            minWidth: minWidth,
            minHeight: minHeight,
            resize: resizeable ? 'both' : 'none',
            '--placeholder-color': placeholderColor,
            '--focus-border': focusBorder,
          } as React.CSSProperties
        }
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export default SimpleBigTextInputWithRequired;
