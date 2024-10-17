import { Outlet } from 'react-router-dom';
import { useStore } from '@store';
import { Layout } from '@components';
import { hoc } from '@utils';

/**
 * App
 */
const App = hoc.observer(useStore, () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
});

export { App };
