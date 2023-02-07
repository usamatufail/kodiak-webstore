import { Drawer } from './Drawer.client';
import { Link } from '@shopify/hydrogen';
import { startTransition } from 'react';

export function MenuDrawer({ isOpen, onClose, menu }: { isOpen: boolean; onClose: () => void; menu: any }) {
  return (
    <Drawer open={isOpen} onClose={onClose} openFrom="left" heading="Menu">
      <div className="grid">
        <MenuMobileNav menu={menu} onClose={onClose} />
      </div>
    </Drawer>
  );
}

function MenuMobileNav({ menu, onClose }: { menu: any; onClose: () => void }) {
  return (
    <nav className="grid gap-4 p-6 sm:gap-6 sm:px-12 sm:py-8">
      {/* Top level menu items */}
      {menu?.map((item: any) => {
        console.log(item);
        return (
          <Link key={item?.handle} to={item?.handle} onClick={() => startTransition(onClose)}>
            {item?.name}
          </Link>
        );
      })}
    </nav>
  );
}
