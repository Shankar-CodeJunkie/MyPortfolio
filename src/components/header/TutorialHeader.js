import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderMenuButton,
    SideNavMenu,
    SideNavMenuItem,
    SideNavItems,
    SideNav,
    HeaderNavigation,
    HeaderMenuItem,
    HeaderMenu
} from 'carbon-components-react'

const Fade16 = () => (
  <svg
    width="16"
    height="16"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    aria-hidden="true">
    <path d="M10 6H28V8H10zM10 24H28V26H10zM10 15H28V17H10zM4 15H6V17H4zM4 6H6V8H4zM4 24H6V26H4z" />
  </svg>
);

const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Carbon Tutorial">
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName href="/" prefix="">
          My Portfolio
        </HeaderName>

        <HeaderNavigation aria-label="IBM [Platform]">
          <HeaderMenuItem isCurrentPage href="/about">
            About
          </HeaderMenuItem>
          <HeaderMenuItem href="/experience">Experience</HeaderMenuItem>
          <HeaderMenuItem href="/skills">Skills</HeaderMenuItem>
          <HeaderMenuItem href="/awards">Awards</HeaderMenuItem>
          
        </HeaderNavigation>
        
  </Header>
    )}
  />
);
export default TutorialHeader;
