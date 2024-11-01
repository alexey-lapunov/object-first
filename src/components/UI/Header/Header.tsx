import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Badge } from '@mui/material';

import LogoSVG from '@/assets/svg/logo.svg';

import {
  StyledHeader,
  StyledList,
  StyledNavLink,
  StyledUserContent,
} from './Header.styles';

const getActiveClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'active' : '';

export const Header = () => (
  <StyledHeader>
    <LogoSVG />
    <StyledList>
      <li>
        <StyledNavLink to="/" className={getActiveClassName}>
          Dashboard
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/events" className={getActiveClassName}>
          Events
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/help" className={getActiveClassName}>
          Help
        </StyledNavLink>
      </li>
    </StyledList>
    <StyledUserContent>
      <Badge color="secondary" variant="dot">
        <NotificationsIcon />
      </Badge>
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
      />
    </StyledUserContent>
  </StyledHeader>
);
