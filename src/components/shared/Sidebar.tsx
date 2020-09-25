import React from 'react';
import styled from 'styled-components'
import media from '@theme/media'
import Icon from '@components/shared/Icons'
import ThemeToggleButton from '@components/shared/ThemeToggleButton'
import { socials } from '@config';

const MenuWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 1rem;
  height: calc(100vh - 64px);

  display: none;
  flex-direction: column;
  align-items:center;
  justify-content: flex-end;
  color: var(--cl-text-main);
  z-index: 99;
  ${media.tablet`display: flex;`}; 
`
const Line = styled.div<{ height?: string }>`
  height: ${({ height }) => height || '50px'};
  width: 1px;
  background-color: var(--cl-text-main);
`

const LinkWrapper = styled.a`
  text-decoration: none;
  margin: 0.8rem 0.5rem;
`

const Sidebar = () => {
  return (<MenuWrapper>
    <LinkWrapper title="Return to the top" href="#top"><Icon name="ChevronsUp" /></LinkWrapper>
    <Line height="40px" />
    <ThemeToggleButton />
    <Line height="20px" />
    {
      socials.map((social: Record<string, string>, index: number) =>
        <LinkWrapper key={index} title={`${social.name} Link`} href={social.url} target='_blank' rel='noreferrer' >
          <Icon name={social.name} />
        </LinkWrapper>)
    }
    <Line height="64px" />
  </MenuWrapper>)
}
export default Sidebar;