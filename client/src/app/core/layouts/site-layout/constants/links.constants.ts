import { ROUTE_CONFIGS } from '../../../../shared/constants/route.constants';
import { ILink } from '../models/link.models';

const {
  overview,
  analytics,
  history,
  order,
  categories
} = ROUTE_CONFIGS;

// TODO add i18n
export const LINKS: ILink[] = [
  {url: overview.fullPath, name: 'Overview'},
  {url: analytics.fullPath, name: 'Analytics'},
  {url: history.fullPath, name: 'History'},
  {url: order.fullPath, name: 'Add order'},
  {url: categories.fullPath, name: 'Categories'}
];