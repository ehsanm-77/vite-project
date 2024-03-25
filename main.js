import './src/style/index.css';
import { Router } from './src/routes/index.js';

if (location.pathname === '/') {
  Router().navigate('/');
} else {
  Router().navigate(location.pathname);
}
