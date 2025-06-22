/**
 * CTAButton 是一個帶箭頭的行動呼籲按鈕元件，預設為 Link。
 *
 * @component
 * @param {React.ReactNode} children - 按鈕內部的內容
 * @param {() => void} [onClick] - 點擊事件處理函式
 * @param {string} [className] - 額外的 CSS class
 * @param {string} [href] - 導向的連結網址
 *
 * @example
 * <CTAButton href="/pricing">了解更多</CTAButton>
 */

'use client';

import React from 'react';
import './cta-button.css';
import Link from 'next/link';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  onClick,
  className = '',
  href = '',
}) => {
  return (
    <Link
      onClick={onClick}
      href={href}
      className={`cta-button pr-6 py-1 relative w-fit ${className}`}
    >
      {children}
      <span className="cta-button__arrow absolute right-0">▶︎</span>
    </Link>
  );
};

export default CTAButton;