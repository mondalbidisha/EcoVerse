import React from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { Overlay } from './Overlay';
import { DashboardProvider } from './Provider';
import { TopBar } from './TopBar';

interface LayoutProps {
  children: React.ReactNode;
}

const style = {
  container: 'h-screen overflow-hidden relative',
  mainContainer: 'bg-[#25074D] flex flex-col h-screen w-full lg:w-[calc(100%-4rem)]',
  main: 'h-screen overflow-y-auto lg:rounded-tl-3xl',
};

export function Layout(props: LayoutProps) {
  return (
    <DashboardProvider>
      <div className={style.container}>
        <div className="flex items-start">
          <Overlay />
          <Sidebar mobileOrientation="end" />
          <div className={style.mainContainer}>
            <TopBar />
            <main className={style.main}>{props.children}</main>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}
